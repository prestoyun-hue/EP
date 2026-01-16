import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 'base' config is crucial for GitHub Pages. 
  // './' ensures assets are loaded relatively, so it works on https://<user>.github.io/<repo>/
  base: './', 
})