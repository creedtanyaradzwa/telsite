import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  base: '/telsite/',
  plugins: [
    react(), 
    tailwindcss(),
    ViteImageOptimizer({
      jpeg: {
        quality: 75,
      },
      jpg: {
        quality: 75,
      },
      png: {
        optimizationLevel: 5,
      },
      webp: {
        quality: 75,
      },
      svg: {
        plugins: [
          {
            name: 'removeViewBox',
            active: false,
          },
          {
            name: 'sortAttrs',
            active: true,
          },
        ],
      },
    }),
  ],
})