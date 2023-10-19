// @ts-nocheck
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import { plugins } from './build/index.js'

export default defineConfig({
  plugins,
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~': fileURLToPath(new URL('./', import.meta.url))
    }
  },
  build: {
    target: 'es2015',
    outDir: 'dist'
  }
})
