import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import FullReload from 'vite-plugin-full-reload'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react(), FullReload(['src/components/Document.tsx'])],
  base: 'cafe-pdf-iframe',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
