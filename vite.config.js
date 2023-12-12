import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sass from 'sass'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  css: {
      preprocessorOptions: {
        scss: {
          implementation: sass,
        },
      },
    },
  resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
})
