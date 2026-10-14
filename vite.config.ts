import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      // Le moteur local (WebLLM) pèse des mégaoctets : il garde un nom explicite
      // pour rester hors du pré-cache. Il se charge quand on le veut, pas quand
      // on ouvre la page.
      output: { manualChunks: { 'cerveau-local': ['@mlc-ai/web-llm'] } },
    },
  },
  plugins: [VitePWA({
    registerType: 'autoUpdate',
    // La couleur d'ambiance est déjà dite dans index.html (aux côtés des balises
    // Apple que iOS exige) : on évite que le plugin en injecte une seconde.
    injectPageThemeColor: false,
    manifest: {
      name: "Nath Assist — l’assistant vivant",
      short_name: 'Nath Assist',
      description: 'L assistant vivant qui vous voit, vous entend, vous comprend. Dites « Hey Nath ».',
      theme_color: '#05070f',
      background_color: '#05070f',
      display: 'standalone',
      icons: [
        { src: 'icon-192.png', sizes: '192x192', type: 'image/png' },
        { src: 'icon-512.png', sizes: '512x512', type: 'image/png' },
      ],
    },
    workbox: {
      // Le nouveau Service Worker prend la main immédiatement : un bundle périmé
      // n'existe plus sur la branche publiée, laisser l'ancien servir son cache
      // reviendrait à offrir un écran blanc sur un 404.
      skipWaiting: true,
      clientsClaim: true,
      globPatterns: ['**/*.{js,css,html,webmanifest,png}'],
      // Le hors-ligne ne doit rien facturer à la personne qui n'a rien demandé :
      // le gros cerveau local reste dehors, au même titre que les cartes du ciel.
      globIgnores: ['**/cerveau-local*', '**/three*', '**/*.map'],
      // Le pré-cache tient dans une pochette : rien d'aussi lourd que le moteur
      // local n'a le droit d'y entrer.
      maximumFileSizeToCacheInBytes: 3 * 1024 * 1024,
      // Pas de repli de navigation : sous un chemin (Pages, Worker), le motif
      // qui écartait la vitrine écartait aussi l'app elle-même — et le hors-ligne
      // tombait sur un refus du serveur. Les deux pages sont pré-cachées, chacune
      // répond pour son adresse : rien n'écrase rien. Il faut le dire par null :
      // omis, le repli revient de lui-même et écrase la vitrine en silence.
      navigateFallback: null,
    },
  })],
});
