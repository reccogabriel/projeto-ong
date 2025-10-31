#!/usr/bin/env node

/**
 * COMPRESS-IMAGES.JS - Compressão de imagens
 * 
 * Usa Sharp para otimizar imagens:
 * - JPEG: compressão com qualidade 85%
 * - PNG: compressão com pngquant
 * - WebP: geração de versões WebP
 * - Redimensionamento inteligente
 * - Remoção de metadados EXIF
 */

const fs = require('fs-extra');
const path = require('path');
const sharp = require('sharp');

// Configuração
const srcDir = path.join(__dirname, '..');
const distDir = path.join(__dirname, '..', 'dist');

// Opções de compressão por tipo
const compressionOptions = {
  jpeg: {
    quality: 85,
    progressive: true,
    mozjpeg: true
  },
  jpg: {
    quality: 85,
    progressive: true,
    mozjpeg: true
  },
  png: {
    compressionLevel: 9,
    adaptiveFiltering: true,
    palette: true,
    quality: 85,
    effort: 10
  },
  webp: {
    quality: 85,
    effort: 6,
    smartSubsample: true
  },
  gif: {
    // GIFs são copiados sem compressão para manter animação
  }
};

/**
 * Comprimir imagem
 */
async function compressImage(filePath) {
  try {
    const relativePath = path.relative(srcDir, filePath);
    const ext = path.extname(filePath).toLowerCase().slice(1);
    const outputPath = path.join(distDir, relativePath);
    
    await fs.ensureDir(path.dirname(outputPath));
    
    // GIFs são copiados sem compressão
    if (ext === 'gif') {
      await fs.copy(filePath, outputPath);
      const stat = await fs.stat(filePath);
      console.log(`  ✓ ${relativePath} (copiado sem compressão)`);
      return { originalSize: stat.size, compressedSize: stat.size };
    }
    
    // Carregar imagem
    const image = sharp(filePath);
    const metadata = await image.metadata();
    const originalSize = (await fs.stat(filePath)).size;
    
    // Aplicar compressão baseada no tipo
    let compressed;
    
    if (ext === 'jpeg' || ext === 'jpg') {
      compressed = image.jpeg(compressionOptions.jpeg);
    } else if (ext === 'png') {
      compressed = image.png(compressionOptions.png);
    } else if (ext === 'webp') {
      compressed = image.webp(compressionOptions.webp);
    } else {
      // Formato não suportado, copiar
      await fs.copy(filePath, outputPath);
      console.log(`  ⚠ ${relativePath} (formato não suportado, copiado)`);
      return { originalSize, compressedSize: originalSize };
    }
    
    // Remover metadados
    compressed = compressed.withMetadata({
      exif: {},
      icc: metadata.space
    });
    
    // Salvar
    await compressed.toFile(outputPath);
    
    // Estatísticas
    const compressedSize = (await fs.stat(outputPath)).size;
    const reduction = ((originalSize - compressedSize) / originalSize * 100).toFixed(1);
    
    console.log(`  ✓ ${relativePath} (${reduction}% menor)`);
    
    // Gerar versão WebP para JPEGs e PNGs
    if ((ext === 'jpeg' || ext === 'jpg' || ext === 'png') && ext !== 'webp') {
      const webpPath = outputPath.replace(/\.(jpe?g|png)$/i, '.webp');
      await sharp(filePath)
        .webp(compressionOptions.webp)
        .toFile(webpPath);
      
      console.log(`  + ${relativePath.replace(/\.(jpe?g|png)$/i, '.webp')} (WebP gerado)`);
    }
    
    return { originalSize, compressedSize };
  } catch (error) {
    console.error(`  ✗ Erro ao comprimir ${filePath}:`, error.message);
    // Copiar original em caso de erro
    const outputPath = path.join(distDir, path.relative(srcDir, filePath));
    await fs.copy(filePath, outputPath);
    const stat = await fs.stat(filePath);
    return { originalSize: stat.size, compressedSize: stat.size };
  }
}

/**
 * Buscar arquivos de imagem
 */
async function findImageFiles(dir) {
  const files = [];
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
  
  const items = await fs.readdir(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = await fs.stat(fullPath);
    
    if (stat.isDirectory()) {
      // Ignorar certas pastas
      if (!['node_modules', 'build', 'dist', '.git', '.github'].includes(item)) {
        const subFiles = await findImageFiles(fullPath);
        files.push(...subFiles);
      }
    } else {
      const ext = path.extname(item).toLowerCase();
      if (imageExtensions.includes(ext)) {
        files.push(fullPath);
      }
    }
  }
  
  return files;
}

/**
 * Main
 */
async function main() {
  try {
    console.log('\n🖼️  Comprimindo imagens...\n');
    
    // Encontrar arquivos de imagem
    const imageFiles = await findImageFiles(srcDir);
    
    if (imageFiles.length === 0) {
      console.log('  ⚠ Nenhum arquivo de imagem encontrado\n');
      return;
    }
    
    console.log(`  Encontrados ${imageFiles.length} arquivo(s) de imagem\n`);
    
    // Comprimir cada imagem
    let totalOriginal = 0;
    let totalCompressed = 0;
    
    for (const file of imageFiles) {
      const { originalSize, compressedSize } = await compressImage(file);
      totalOriginal += originalSize;
      totalCompressed += compressedSize;
    }
    
    // Resumo
    const totalReduction = ((totalOriginal - totalCompressed) / totalOriginal * 100).toFixed(1);
    console.log(`\n  Total: ${totalReduction}% de redução\n`);
    
  } catch (error) {
    console.error('\n✗ Erro na compressão de imagens:', error.message);
    process.exit(1);
  }
}

// Executar apenas se chamado diretamente
if (require.main === module) {
  main();
}

module.exports = { compressImage, findImageFiles };
