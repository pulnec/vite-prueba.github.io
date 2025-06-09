import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/vite-prueba.github.io/', // 👈 importante para GitHub Pages
  plugins: [react()],
})