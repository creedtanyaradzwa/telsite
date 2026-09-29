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
      jpeg: { quality: 75 },
      jpg:  { quality: 75 },
      png:  { optimizationLevel: 5 },
      webp: { quality: 75 },
      // SVG optimization disabled — svgo causes permission errors on Windows
      svg: false,
    }),
  ],
  build: {
    // Use oxc (built-in to Vite 8, zero extra deps) for fast minification
    minify: 'oxc',
    // Raise the chunk-size warning ceiling slightly (large assets are images, not JS)
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        // Split vendor code into a separate, long-lived cached chunk
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // React core — tiny chunk, almost never changes
            if (id.includes('react-dom') || id.includes('react/')) {
              return 'react-vendor';
            }
            // Everything else in node_modules goes into a shared vendor chunk
            return 'vendor';
          }
        },
        // Content-hash filenames → browsers cache chunks across deploys
        entryFileNames:  'assets/[name]-[hash].js',
        chunkFileNames:  'assets/[name]-[hash].js',
        assetFileNames:  'assets/[name]-[hash][extname]',
      },
    },
    // Inline tiny assets as base64 to save round-trips (≤4 KB)
    assetsInlineLimit: 4096,
  },
})
