// SP4 — garde-fou « prêt pour le Play Store » : on verrouille dans la SOURCE les
// champs que Bubblewrap/TWA exigent du manifeste, et les repères critiques du
// script d'outillage. Un manifeste qui perd un de ces champs casse l'empaquetage
// natif en silence — d'où le test.
import { describe, expect, it } from 'vitest';

const sources = import.meta.glob(['../vite.config.ts', '../scripts/prepare-play-store.ps1'], {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

const config = sources['../vite.config.ts'] ?? '';
const script = sources['../scripts/prepare-play-store.ps1'] ?? '';

describe('manifeste PWA — les champs qu’un TWA exige', () => {
  it('présent et non vide', () => {
    expect(config.length).toBeGreaterThan(0);
  });
  it('nom, nom court et description', () => {
    expect(config).toMatch(/name:\s*['"]/);
    expect(config).toMatch(/short_name:\s*'Nath Assist'/);
    expect(config).toMatch(/description:\s*['"]/);
  });
  it('identifiant stable + portée + sens d’écran + familles', () => {
    expect(config).toMatch(/id:\s*'nath-assist'/);
    expect(config).toMatch(/start_url:/);
    expect(config).toMatch(/scope:/);
    expect(config).toMatch(/display:\s*'standalone'/);
    expect(config).toMatch(/orientation:\s*'portrait'/);
    expect(config).toMatch(/categories:/);
  });
  it('couleurs cohérentes (thème + fond)', () => {
    expect(config).toMatch(/theme_color:\s*'#05070f'/);
    expect(config).toMatch(/background_color:\s*'#05070f'/);
  });
  it('deux tailles d’icônes (192 + 512) et une variante maskable déclarée', () => {
    expect(config).toMatch(/192x192/);
    expect(config).toMatch(/512x512/);
    expect(config).toMatch(/purpose:\s*'any'/);
    expect(config).toMatch(/purpose:\s*'maskable'/);
  });
});

describe('script d’outillage Play Store — repères critiques', () => {
  it('existe', () => {
    expect(script.length).toBeGreaterThan(0);
  });
  it('nomme Bubblewrap/TWA et l’URL du manifeste', () => {
    expect(/bubblewrap/i.test(script)).toBe(true);
    expect(script).toMatch(/manifest\.webmanifest/);
  });
  it('rappelle la cible Android 16 (targetSdk 36) obligatoire', () => {
    expect(script).toMatch(/targetSdkVersion 36/);
    expect(script).toMatch(/Android 16/);
  });
  it('parle du Digital Asset Links (/.well-known/assetlinks.json)', () => {
    expect(script).toMatch(/assetlinks\.json/);
    expect(/\.well-known/.test(script)).toBe(true);
  });
  it('reste honnête : il s’arrête si JDK/Android SDK manquent (ne simule pas un build natif)', () => {
    expect(script).toMatch(/ANDROID_HOME/);
    expect(/PR[ÉE]REQUIS/.test(script)).toBe(true);
  });
});
