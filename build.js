#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('🚀 Building RefactorAI for production...');

try {
    // Check if we're in the right directory
    const rootDir = process.cwd();
    const backendDir = path.join(rootDir, 'backend');
    const frontendDir = path.join(rootDir, 'frontend');
    
    if (!fs.existsSync(backendDir) || !fs.existsSync(frontendDir)) {
        throw new Error('Please run this script from the project root directory');
    }

    // Install backend dependencies
    console.log('📦 Installing backend dependencies...');
    execSync('npm install', { cwd: backendDir, stdio: 'inherit' });

    // Install frontend dependencies and build
    console.log('📦 Installing frontend dependencies...');
    execSync('npm install --include=dev', { cwd: frontendDir, stdio: 'inherit' });
    
    console.log('🏗️ Building frontend...');
    execSync('npm run build', { cwd: frontendDir, stdio: 'inherit' });

    // Verify build output
    const distDir = path.join(frontendDir, 'dist');
    if (!fs.existsSync(distDir)) {
        throw new Error('Frontend build failed - dist directory not found');
    }

    console.log('✅ Build completed successfully!');
    console.log('🚀 Ready for deployment!');
    console.log('');
    console.log('To start the server:');
    console.log('  cd backend && npm start');
    
} catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
}
