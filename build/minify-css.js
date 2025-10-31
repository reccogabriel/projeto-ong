#!/usr/bin/env node

/**
 * MINIFY-CSS.JS - Minificação de arquivos CSS
 * 
 * Usa clean-css para otimizar CSS:
 * - Remove espaços em branco
 * - Remove comentários
 * - Otimiza propriedades
 * - Combina seletores duplicados
 * - Otimiza valores de cores
 * - Remove regras não utilizadas (quando possível)
 */

const fs = require('fs-extra');
const path = require('path');
const CleanCSS = require('clean-css');

// Configuração
const srcDir = path.join(__dirname, '..');
const distDir = path.join(__dirname, '..', 'dist');

// Instância do CleanCSS
const cleanCSS = new CleanCSS({
  level: {
    1: {
      all: true,
      normalizeUrls: true
    },
    2: {
      mergeAdjacentRules: true,
      mergeIntoShorthands: true,
      mergeMedia: true,
      mergeNonAdjacentRules: true,
      mergeSemantically: false,
      overrideProperties: true,
      removeEmpty: true,
      reduceNonAdjacentRules: true,
      removeDuplicateFontRules: true,
      removeDuplicateMediaBlocks: true,
      removeDuplicateRules: true,
      removeUnusedAtRules: false,
      restructureRules: true,
      skipProperties: []
    }
  },
  format: false,
  inline: ['local'],
  sourceMap: false
});

/**
 * Minificar arquivo CSS
 */
async function minifyCssFile(filePath) {
  try {
    const relativePath = path.relative(srcDir, filePath);
    const content = await fs.readFile(filePath, 'utf8');
    
    // Minificar
    const result = cleanCSS.minify(content);
    
    if (result.errors.length > 0) {
      console.error(`  ⚠ Avisos em ${relativePath}:`);
      result.errors.forEach(err => console.error(`    - ${err}`));
    }
    
    // Salvar
    const outputPath = path.join(distDir, relativePath);
    await fs.ensureDir(path.dirname(outputPath));
    await fs.writeFile(outputPath, result.styles, 'utf8');
    
    // Estatísticas
    const originalSize = Buffer.byteLength(content, 'utf8');
    const minifiedSize = Buffer.byteLength(result.styles, 'utf8');
    const reduction = ((originalSize - minifiedSize) / originalSize * 100).toFixed(1);
    
    console.log(`  ✓ ${relativePath} (${reduction}% menor)`);
    
    return { originalSize, minifiedSize };
  } catch (error) {
    console.error(`  ✗ Erro ao minificar ${filePath}:`, error.message);
    throw error;
  }
}

/**
 * Buscar arquivos CSS
 */
async function findCssFiles(dir) {
  const files = [];
  const items = await fs.readdir(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = await fs.stat(fullPath);
    
    if (stat.isDirectory()) {
      // Ignorar certas pastas
      if (!['node_modules', 'build', 'dist', '.git', '.github'].includes(item)) {
        const subFiles = await findCssFiles(fullPath);
        files.push(...subFiles);
      }
    } else if (path.extname(item) === '.css') {
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
    console.log('\n🎨 Minificando CSS...\n');
    
    // Encontrar arquivos CSS
    const cssFiles = await findCssFiles(srcDir);
    
    if (cssFiles.length === 0) {
      console.log('  ⚠ Nenhum arquivo CSS encontrado\n');
      return;
    }
    
    console.log(`  Encontrados ${cssFiles.length} arquivo(s) CSS\n`);
    
    // Minificar cada arquivo
    let totalOriginal = 0;
    let totalMinified = 0;
    
    for (const file of cssFiles) {
      const { originalSize, minifiedSize } = await minifyCssFile(file);
      totalOriginal += originalSize;
      totalMinified += minifiedSize;
    }
    
    // Resumo
    const totalReduction = ((totalOriginal - totalMinified) / totalOriginal * 100).toFixed(1);
    console.log(`\n  Total: ${totalReduction}% de redução\n`);
    
  } catch (error) {
    console.error('\n✗ Erro na minificação de CSS:', error.message);
    process.exit(1);
  }
}

// Executar apenas se chamado diretamente
if (require.main === module) {
  main();
}

module.exports = { minifyCssFile, findCssFiles };
