#!/usr/bin/env node

/**
 * CLEAN.JS - Limpar diretório dist/
 */

const fs = require('fs-extra');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist');

async function clean() {
  try {
    if (await fs.pathExists(distDir)) {
      await fs.remove(distDir);
      console.log('✓ Diretório dist/ removido');
    } else {
      console.log('⚠ Diretório dist/ não existe');
    }
  } catch (error) {
    console.error('✗ Erro ao limpar:', error.message);
    process.exit(1);
  }
}

clean();
