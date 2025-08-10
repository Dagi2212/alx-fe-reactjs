// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // ✅ Import Tailwind plugin

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // ✅ Enable Tailwind plugin
  ],
})
