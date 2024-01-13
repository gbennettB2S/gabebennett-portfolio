import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { compression } from 'vite-plugin-compression2'
import sass from 'sass'
import path from 'path'

export default defineConfig({
    plugins: [
        react(),
        compression({ algorithm: 'gzip' })
    ],
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
    build: {
        sourcemap: true,
        treeshake: true,
        codeSplitting: true,
        lazy: true,
    }
})
