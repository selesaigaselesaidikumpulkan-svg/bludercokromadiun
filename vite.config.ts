import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Untuk asset & routing lebih stabil saat deploy
  base: '/',

  plugins: [react()],

  build: {
    // Membantu optimasi ukuran chunk
    chunkSizeWarningLimit: 1000,

    rollupOptions: {
      output: {
        manualChunks: {
          reactVendor: ['react', 'react-dom'],
          motion: ['framer-motion'],
        },
      },
    },

    // Optimasi CSS
    cssCodeSplit: true,

    // Compress asset
    assetsInlineLimit: 4096,
  },

  server: {
    host: true,
  },
});