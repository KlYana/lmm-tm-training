import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 3000,
    proxy: {
      "^/api": {
          target: "https://phrase-hackathon-llm-tm.azurewebsites.net",
          rewrite: path => path.replace(/^\/api/, '/api/'),
          changeOrigin: true,
          secure: false
      }
    }
  },
})