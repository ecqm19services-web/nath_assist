// Machine à états du Nuage : capteurs bruts → paramètres de scène.
import type { CielReel } from './cielReel';

export type Emotion = 'calme' | 'joie' | 'tristesse' | 'tension';

export interface NuageState {
  breath: number;          // 0..1 niveau de souffle
  bpm: number | null;      // pouls rPPG estimé
  emotion: Emotion;
  timeOfDay: number;       // 0..1 cycle jour/nuit
  seed: string;            // graine d'aura de l'utilisateur
  cielReel?: CielReel | null; // le temps vrai, une fois que la personne l'a demandé
}

export interface SceneParams {
  altitude: number;    // 0..1 : hauteur des nuages
  luminosite: number;  // 0..1 : clarté de l'atmosphère
  turbulence: number;  // 0..1 : agitation du ciel
  night: number;       // 0..1 : nuit tombée (étoiles, lune, aurores)
  aurora: number;      // 0..1 : intensité des rubans d'aurore (humeur)
  pluie: number;       // 0..1 : pluie — la tristesse a le droit de tomber
  palette: [string, string, string];
}

export function createInitialState(): NuageState {
  return { breath: 0, bpm: null, emotion: 'calme', timeOfDay: 0.5, seed: 'anonyme' };
}

export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

const PALETTES: Record<Emotion, [string, string, string]> = {
  calme: ['#1b2a4a', '#7fa8d9', '#dfefff'],
  joie: ['#2b4a1b', '#d9c47f', '#fff6df'],
  tristesse: ['#101018', '#3a4a6a', '#8a9ab0'],
  tension: ['#2a0a0a', '#6a2a2a', '#c07a5a'],
};

export function computeSceneParams(s: NuageState): SceneParams {
  const emBase = {
    calme: { alt: 0.45, lum: 0.7, turb: 0.2, aur: 0.55, pluie: 0.12 },
    joie: { alt: 0.7, lum: 0.9, turb: 0.35, aur: 0.95, pluie: 0 },
    tristesse: { alt: 0.2, lum: 0.35, turb: 0.1, aur: 0.25, pluie: 0.7 },
    tension: { alt: 0.6, lum: 0.45, turb: 0.85, aur: 0.4, pluie: 0.45 },
  }[s.emotion];
  // Nuit dérivée de l'heure locale : plein jour à midi (t=0.5), nuit pleine dès minuit,
  // crépuscule franc à partir de ~19 h (seuil 0,25 → 0,2 pour que le ciel "bascule" le soir).
  const night = Math.min(1, Math.max(0, (Math.abs(s.timeOfDay - 0.5) - 0.2) * 5));
  const reel = s.cielReel ?? null;
  return {
    altitude: Math.min(1, emBase.alt + s.breath * 0.35),
    luminosite: reel
      ? Math.min(1, reel.luminosite + s.breath * 0.2)
      : Math.min(1, emBase.lum + s.breath * 0.2),
    turbulence: reel
      ? Math.min(1, Math.max(emBase.turb, reel.turbulence) + s.breath * 0.1)
      : Math.min(1, emBase.turb + s.breath * 0.1),
    night,
    aurora: emBase.aur,
    pluie: reel ? Math.max(emBase.pluie, reel.pluie) : emBase.pluie,
    palette: PALETTES[s.emotion],
  };
}
