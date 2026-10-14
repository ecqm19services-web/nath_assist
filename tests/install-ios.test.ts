// « Ajouter à l'écran d'accueil » sur iPhone/iPad (Safari) ne se branche PAS sur
// le manifest comme sur Android : iOS lit des balises meta Apple dans le HTML.
// Sans elles, l'app s'installe dans un carcan du navigateur (barre d'URL, icône
// blanche, bandeau clair sur fond sombre) et la promesse « une appli vivante »
// tombe à l'eau sur le marché où l'écran d'accueil est le seul lancement.
// Le hors-ligne, lui, ne tient que si la coquille est pré-cachée et le Service
// Worker réveillé — rien de technique à l'écran, tout dans la construction.
import { describe, it, expect } from 'vitest';

const bruts = import.meta.glob('../index.html', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
const html = Object.values(bruts)[0] ?? '';

describe("l'installation sur iOS (Safari) — les balises qu'Apple exige", () => {
  it("le fichier de la coquille est bien lu", () => {
    // Un garde-fou qui ne lit rien ne protège rien.
    expect(html).toContain('<canvas id="scene">');
  });

  it('la page passe en plein écran façon appli, pas façon site', () => {
    // iOS lit apple-mobile-web-app-capable ; les autres moteurs lisent
    // mobile-web-app-capable. Les deux doivent être là, contenus « yes ».
    expect(html).toMatch(/<meta[^>]+name=["']apple-mobile-web-app-capable["'][^>]+content=["']yes["']/);
    expect(html).toMatch(/<meta[^>]+name=["']mobile-web-app-capable["'][^>]+content=["']yes["']/);
  });

  it('le bandeau d’état se fond dans le ciel sombre', () => {
    // background-translucent/black-translucent : sinon une barre blanche coupe
    // la nuit au-dessus d'un fond #05070f.
    expect(html).toMatch(/<meta[^>]+name=["']apple-mobile-web-app-status-bar-style["'][^>]+content=["'](black-translucent|translucent|black)["']/);
  });

  it("l'app porte son nom sous l'icône", () => {
    expect(html).toMatch(/<meta[^>]+name=["']apple-mobile-web-app-title["'][^>]+content=["']Nath/);
  });

  it("une icône tactiles Apple est déclarée — pas une page blanche sur l'écran d'accueil", () => {
    expect(html).toMatch(/<link[^>]+rel=["']apple-touch-icon["'][^>]+href=["'][^"']*icon/);
  });

  it('la couleur d’ambiance est dite au navigateur', () => {
    expect(html).toMatch(/<meta[^>]+name=["']theme-color["'][^>]+content=["']#?/i);
  });
});

describe("le hors-ligne iOS reste vrai dans la construction", () => {
  const configs = import.meta.glob('../vite.config.ts', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
  const config = Object.values(configs)[0] ?? '';

  it('le Service Worker prend la main dès l’ouverture (iOS ne redemande pas)', () => {
    // iOS installe le SW au premier lancement en standalone : sans clientsClaim,
    // la personne reste sur du réseau tant qu'elle n'a pas rechargé.
    expect(config).toMatch(/clientsClaim:\s*true/);
    expect(config).toMatch(/skipWaiting:\s*true/);
  });

  it('la coquille entière est pré-cachée, html compris', () => {
    expect(config).toMatch(/globPatterns:\s*\[[^\]]*html[^\]]*\]/);
  });

  it('le nom de moteur ne filtre jamais dans la coquille', () => {
    // L'écran d'accueil et l'en-tête installés restent muets sur la technologie.
    expect(html.toLowerCase()).not.toMatch(/llama|gpt|deepseek|qwen|mistral|webgpu|webllm|api\b/);
  });
});
