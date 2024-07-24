import { defineConfig } from 'vite'
import { VineVitePlugin } from 'vue-vine/vite'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VineVitePlugin(),
    tailwindcss()
  ],
  build: {
    outDir: 'docs'
  }
})
