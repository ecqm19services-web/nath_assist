import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: './',
  plugins: [VitePWA({
    registerType: 'autoUpdate',
    manifest: {
      name: 'NUAGE — by Nath-Tech',
      short_name: 'NUAGE',
      description: 'La compagne vivante qui vous voit, vous entend, vous accompagne.',
      theme_color: '#05070f',
      background_color: '#05070f',
      display: 'standalone',
      icons: [
        { src: 'icon-192.png', sizes: '192x192', type: 'image/png' },
        { src: 'icon-512.png', sizes: '512x512', type: 'image/png' },
      ],
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,webmanifest,png}'],
      // Le cerveau Qwen (chunk WebLLM ~6 Mo) doit être pré-cache pour fonctionner hors-ligne.
      maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
    },
  })],
});
