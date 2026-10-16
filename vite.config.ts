import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
// For now we just use the default Vite config
export default defineConfig({
  plugins: [],
  server: {
    port: 5173,
  },
})