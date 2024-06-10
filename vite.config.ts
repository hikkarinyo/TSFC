import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

const buildPath = 'build'

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/fonts',
          dest: 'assets'
        },
      ]
    })
  ],
  build: {
    target: 'esnext',
    outDir: resolve(__dirname, buildPath),
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@common': resolve(__dirname, 'src/common'),
      '@pages': resolve(__dirname, 'src/pages'),
    },
  },
  publicDir: 'public'
})