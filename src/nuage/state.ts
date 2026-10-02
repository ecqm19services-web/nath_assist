// Machine à états du Nuage : capteurs bruts → paramètres de scène.
export type Emotion = 'calme' | 'joie' | 'tristesse' | 'tension';

export interface NuageState {
  breath: number;          // 0..1 niveau de souffle
  bpm: number | null;      // pouls rPPG estimé
  emotion: Emotion;
  timeOfDay: number;       // 0..1 cycle jour/nuit
  seed: string;            // graine d'aura de l'utilisateur
}

export interface SceneParams {
  altitude: number;    // 0..1 : hauteur des nuages
  luminosite: number;  // 0..1 : clarté de l'atmosphère
  turbulence: number;  // 0..1 : agitation du ciel
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
    calme: { alt: 0.45, lum: 0.7, turb: 0.2 },
    joie: { alt: 0.7, lum: 0.9, turb: 0.35 },
    tristesse: { alt: 0.2, lum: 0.35, turb: 0.1 },
    tension: { alt: 0.6, lum: 0.45, turb: 0.85 },
  }[s.emotion];
  return {
    altitude: Math.min(1, emBase.alt + s.breath * 0.35),
    luminosite: Math.min(1, emBase.lum + s.breath * 0.2),
    turbulence: Math.min(1, emBase.turb + s.breath * 0.1),
    palette: PALETTES[s.emotion],
  };
}
