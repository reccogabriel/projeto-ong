#!/usr/bin/env node

/**
 * MINIFY-JS.JS - Minificação de arquivos JavaScript
 * 
 * Usa Terser para otimizar JavaScript:
 * - Remove espaços em branco e comentários
 * - Renomeia variáveis locais
 * - Remove código morto
 * - Otimiza expressões
 * - Compacta código
 */

const fs = require('fs-extra');
const path = require('path');
const { minify } = require('terser');

// Configuração
const srcDir = path.join(__dirname, '..');
const distDir = path.join(__dirname, '..', 'dist');

// Opções de minificação
const terserOptions = {
  compress: {
    arrows: true,
    booleans: true,
    collapse_vars: true,
    comparisons: true,
    conditionals: true,
    dead_code: true,
    drop_console: false, // Manter console.log para debug
    drop_debugger: true,
    evaluate: true,
    if_return: true,
    join_vars: true,
    loops: true,
    negate_iife: true,
    properties: true,
    reduce_funcs: true,
    reduce_vars: true,
    sequences: true,
    side_effects: true,
    switches: true,
    toplevel: false,
    typeofs: true,
    unused: true,
    warnings: false
  },
  mangle: {
    toplevel: false,
    eval: false,
    keep_classnames: false,
    keep_fnames: false,
    safari10: false
  },
  format: {
    comments: false,
    beautify: false,
    ascii_only: false
  },
  sourceMap: false,
  ecma: 2020,
  keep_classnames: false,
  keep_fnames: false,
  ie8: false,
  safari10: false,
  toplevel: false
};

/**
 * Minificar arquivo JavaScript
 */
async function minifyJsFile(filePath) {
  try {
    const relativePath = path.relative(srcDir, filePath);
    const content = await fs.readFile(filePath, 'utf8');
    
    // Minificar
    const result = await minify(content, terserOptions);
    
    if (result.error) {
      throw result.error;
    }
    
    if (result.warnings) {
      console.warn(`  ⚠ Avisos em ${relativePath}:`);
      result.warnings.forEach(warn => console.warn(`    - ${warn}`));
    }
    
    // Salvar
    const outputPath = path.join(distDir, relativePath);
    await fs.ensureDir(path.dirname(outputPath));
    await fs.writeFile(outputPath, result.code, 'utf8');
    
    // Estatísticas
    const originalSize = Buffer.byteLength(content, 'utf8');
    const minifiedSize = Buffer.byteLength(result.code, 'utf8');
    const reduction = ((originalSize - minifiedSize) / originalSize * 100).toFixed(1);
    
    console.log(`  ✓ ${relativePath} (${reduction}% menor)`);
    
    return { originalSize, minifiedSize };
  } catch (error) {
    console.error(`  ✗ Erro ao minificar ${filePath}:`, error.message);
    throw error;
  }
}

/**
 * Buscar arquivos JavaScript
 */
async function findJsFiles(dir) {
  const files = [];
  const items = await fs.readdir(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = await fs.stat(fullPath);
    
    if (stat.isDirectory()) {
      // Ignorar certas pastas
      if (!['node_modules', 'build', 'dist', '.git', '.github'].includes(item)) {
        const subFiles = await findJsFiles(fullPath);
        files.push(...subFiles);
      }
    } else if (path.extname(item) === '.js') {
      files.push(fullPath);
    }
  }
  
  return files;
}

/**
 * Main
 */
async function main() {
  try {
    console.log('\n⚡ Minificando JavaScript...\n');
    
    // Encontrar arquivos JavaScript
    const jsFiles = await findJsFiles(srcDir);
    
    if (jsFiles.length === 0) {
      console.log('  ⚠ Nenhum arquivo JavaScript encontrado\n');
      return;
    }
    
    console.log(`  Encontrados ${jsFiles.length} arquivo(s) JavaScript\n`);
    
    // Minificar cada arquivo
    let totalOriginal = 0;
    let totalMinified = 0;
    
    for (const file of jsFiles) {
      const { originalSize, minifiedSize } = await minifyJsFile(file);
      totalOriginal += originalSize;
      totalMinified += minifiedSize;
    }
    
    // Resumo
    const totalReduction = ((totalOriginal - totalMinified) / totalOriginal * 100).toFixed(1);
    console.log(`\n  Total: ${totalReduction}% de redução\n`);
    
  } catch (error) {
    console.error('\n✗ Erro na minificação de JavaScript:', error.message);
    process.exit(1);
  }
}

// Executar apenas se chamado diretamente
if (require.main === module) {
  main();
}

module.exports = { minifyJsFile, findJsFiles };
