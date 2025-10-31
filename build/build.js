#!/usr/bin/env node

/**
 * BUILD.JS - Script Principal de Build para Produção
 * 
 * Este script orquestra todo o processo de otimização:
 * 1. Limpa a pasta dist/
 * 2. Minifica HTML
 * 3. Minifica CSS
 * 4. Minifica JavaScript
 * 5. Comprime imagens
 * 6. Copia assets estáticos
 * 7. Gera relatório
 */

const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

// Cores para console (sem dependência externa)
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  red: '\x1b[31m'
};

const log = {
  info: (msg) => console.log(`${colors.blue}ℹ${colors.reset} ${msg}`),
  success: (msg) => console.log(`${colors.green}✓${colors.reset} ${msg}`),
  warning: (msg) => console.log(`${colors.yellow}⚠${colors.reset} ${msg}`),
  error: (msg) => console.log(`${colors.red}✗${colors.reset} ${msg}`),
  step: (msg) => console.log(`\n${colors.cyan}${colors.bright}${msg}${colors.reset}`)
};

// Configuração
const config = {
  srcDir: path.join(__dirname, '..'),
  distDir: path.join(__dirname, '..', 'dist'),
  buildDir: __dirname
};

// Estatísticas
const stats = {
  startTime: Date.now(),
  files: {
    html: { before: 0, after: 0, count: 0 },
    css: { before: 0, after: 0, count: 0 },
    js: { before: 0, after: 0, count: 0 },
    images: { before: 0, after: 0, count: 0 }
  }
};

/**
 * Limpar diretório dist/
 */
async function clean() {
  log.step('🧹 Limpando diretório dist/...');
  
  try {
    if (await fs.pathExists(config.distDir)) {
      await fs.remove(config.distDir);
      log.success('Diretório dist/ removido');
    }
    
    await fs.ensureDir(config.distDir);
    log.success('Diretório dist/ criado');
  } catch (error) {
    log.error(`Erro ao limpar: ${error.message}`);
    throw error;
  }
}

/**
 * Executar script de minificação
 */
function runScript(scriptName, description) {
  log.step(`${description}...`);
  
  try {
    const scriptPath = path.join(config.buildDir, scriptName);
    execSync(`node "${scriptPath}"`, { 
      stdio: 'inherit',
      cwd: config.srcDir 
    });
    log.success(`${description} concluído`);
  } catch (error) {
    log.error(`Erro em ${scriptName}: ${error.message}`);
    throw error;
  }
}

/**
 * Copiar assets estáticos
 */
async function copyAssets() {
  log.step('📦 Copiando assets estáticos...');
  
  const assetsToCopy = [
    { src: 'validatorw3', dest: 'validatorw3' },
    { src: 'videos', dest: 'videos' },
    { src: 'audios', dest: 'audios' },
    { src: 'README.md', dest: 'README.md' },
    { src: 'LICENSE', dest: 'LICENSE' }
  ];
  
  for (const asset of assetsToCopy) {
    const srcPath = path.join(config.srcDir, asset.src);
    const destPath = path.join(config.distDir, asset.dest);
    
    try {
      if (await fs.pathExists(srcPath)) {
        await fs.copy(srcPath, destPath);
        log.success(`Copiado: ${asset.src}`);
      } else {
        log.warning(`Não encontrado: ${asset.src}`);
      }
    } catch (error) {
      log.warning(`Erro ao copiar ${asset.src}: ${error.message}`);
    }
  }
}

/**
 * Calcular estatísticas de compressão
 */
async function calculateStats() {
  log.step('📊 Calculando estatísticas...');
  
  const types = [
    { ext: ['.html'], key: 'html' },
    { ext: ['.css'], key: 'css' },
    { ext: ['.js'], key: 'js' },
    { ext: ['.jpg', '.jpeg', '.png', '.gif', '.webp'], key: 'images' }
  ];
  
  for (const type of types) {
    const srcFiles = await getFilesByExtension(config.srcDir, type.ext);
    const distFiles = await getFilesByExtension(config.distDir, type.ext);
    
    stats.files[type.key].count = distFiles.length;
    
    for (const file of srcFiles) {
      try {
        const stat = await fs.stat(file);
        stats.files[type.key].before += stat.size;
      } catch (error) {
        // Ignorar arquivos que não existem
      }
    }
    
    for (const file of distFiles) {
      try {
        const stat = await fs.stat(file);
        stats.files[type.key].after += stat.size;
      } catch (error) {
        // Ignorar arquivos que não existem
      }
    }
  }
}

/**
 * Buscar arquivos por extensão
 */
async function getFilesByExtension(dir, extensions, fileList = []) {
  const files = await fs.readdir(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = await fs.stat(filePath);
    
    // Ignorar pastas de build, node_modules, etc
    if (stat.isDirectory()) {
      if (!['node_modules', 'build', 'dist', '.git', '.github'].includes(file)) {
        await getFilesByExtension(filePath, extensions, fileList);
      }
    } else {
      const ext = path.extname(file).toLowerCase();
      if (extensions.includes(ext)) {
        fileList.push(filePath);
      }
    }
  }
  
  return fileList;
}

/**
 * Formatar bytes
 */
function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

/**
 * Calcular redução percentual
 */
function calculateReduction(before, after) {
  if (before === 0) return 0;
  return ((before - after) / before * 100).toFixed(1);
}

/**
 * Gerar relatório
 */
function generateReport() {
  log.step('📋 Relatório de Build');
  
  const endTime = Date.now();
  const duration = ((endTime - stats.startTime) / 1000).toFixed(2);
  
  console.log('\n╔════════════════════════════════════════════════════════════╗');
  console.log('║            RELATÓRIO DE OTIMIZAÇÃO PARA PRODUÇÃO          ║');
  console.log('╚════════════════════════════════════════════════════════════╝\n');
  
  // HTML
  if (stats.files.html.count > 0) {
    console.log(`📄 HTML (${stats.files.html.count} arquivos):`);
    console.log(`   Antes:    ${formatBytes(stats.files.html.before)}`);
    console.log(`   Depois:   ${formatBytes(stats.files.html.after)}`);
    console.log(`   Redução:  ${calculateReduction(stats.files.html.before, stats.files.html.after)}%`);
    console.log(`   Economia: ${formatBytes(stats.files.html.before - stats.files.html.after)}\n`);
  }
  
  // CSS
  if (stats.files.css.count > 0) {
    console.log(`🎨 CSS (${stats.files.css.count} arquivos):`);
    console.log(`   Antes:    ${formatBytes(stats.files.css.before)}`);
    console.log(`   Depois:   ${formatBytes(stats.files.css.after)}`);
    console.log(`   Redução:  ${calculateReduction(stats.files.css.before, stats.files.css.after)}%`);
    console.log(`   Economia: ${formatBytes(stats.files.css.before - stats.files.css.after)}\n`);
  }
  
  // JavaScript
  if (stats.files.js.count > 0) {
    console.log(`⚡ JavaScript (${stats.files.js.count} arquivos):`);
    console.log(`   Antes:    ${formatBytes(stats.files.js.before)}`);
    console.log(`   Depois:   ${formatBytes(stats.files.js.after)}`);
    console.log(`   Redução:  ${calculateReduction(stats.files.js.before, stats.files.js.after)}%`);
    console.log(`   Economia: ${formatBytes(stats.files.js.before - stats.files.js.after)}\n`);
  }
  
  // Imagens
  if (stats.files.images.count > 0) {
    console.log(`🖼️  Imagens (${stats.files.images.count} arquivos):`);
    console.log(`   Antes:    ${formatBytes(stats.files.images.before)}`);
    console.log(`   Depois:   ${formatBytes(stats.files.images.after)}`);
    console.log(`   Redução:  ${calculateReduction(stats.files.images.before, stats.files.images.after)}%`);
    console.log(`   Economia: ${formatBytes(stats.files.images.before - stats.files.images.after)}\n`);
  }
  
  // Total
  const totalBefore = Object.values(stats.files).reduce((sum, file) => sum + file.before, 0);
  const totalAfter = Object.values(stats.files).reduce((sum, file) => sum + file.after, 0);
  const totalFiles = Object.values(stats.files).reduce((sum, file) => sum + file.count, 0);
  
  console.log('═'.repeat(60));
  console.log(`\n📊 TOTAL (${totalFiles} arquivos):`);
  console.log(`   Antes:    ${formatBytes(totalBefore)}`);
  console.log(`   Depois:   ${formatBytes(totalAfter)}`);
  console.log(`   ${colors.green}${colors.bright}Redução:  ${calculateReduction(totalBefore, totalAfter)}%${colors.reset}`);
  console.log(`   ${colors.green}${colors.bright}Economia: ${formatBytes(totalBefore - totalAfter)}${colors.reset}\n`);
  
  console.log(`⏱️  Tempo de build: ${duration}s`);
  console.log(`📂 Arquivos de produção em: ${colors.cyan}dist/${colors.reset}\n`);
  
  // Salvar relatório em JSON
  const reportPath = path.join(config.distDir, 'build-report.json');
  const report = {
    timestamp: new Date().toISOString(),
    duration: parseFloat(duration),
    stats: stats.files,
    total: {
      before: totalBefore,
      after: totalAfter,
      reduction: parseFloat(calculateReduction(totalBefore, totalAfter)),
      saved: totalBefore - totalAfter,
      files: totalFiles
    }
  };
  
  fs.writeJsonSync(reportPath, report, { spaces: 2 });
  log.success(`Relatório JSON salvo em: build-report.json`);
}

/**
 * Main
 */
async function main() {
  console.log('\n');
  console.log('╔════════════════════════════════════════════════════════════╗');
  console.log('║        BUILD PARA PRODUÇÃO - ONG ESPERANÇA SOLIDÁRIA      ║');
  console.log('╚════════════════════════════════════════════════════════════╝');
  console.log('\n');
  
  try {
    // 1. Limpar
    await clean();
    
    // 2. Minificar HTML
    runScript('minify-html.js', '📄 Minificando HTML');
    
    // 3. Minificar CSS
    runScript('minify-css.js', '🎨 Minificando CSS');
    
    // 4. Minificar JavaScript
    runScript('minify-js.js', '⚡ Minificando JavaScript');
    
    // 5. Comprimir imagens
    runScript('compress-images.js', '🖼️  Comprimindo imagens');
    
    // 6. Copiar assets
    await copyAssets();
    
    // 7. Calcular estatísticas
    await calculateStats();
    
    // 8. Gerar relatório
    generateReport();
    
    console.log(`\n${colors.green}${colors.bright}✓ Build concluído com sucesso!${colors.reset}\n`);
    console.log(`Execute: ${colors.cyan}npm run serve:prod${colors.reset} para testar\n`);
    
  } catch (error) {
    console.log(`\n${colors.red}${colors.bright}✗ Build falhou!${colors.reset}\n`);
    console.error(error);
    process.exit(1);
  }
}

// Executar
main();
