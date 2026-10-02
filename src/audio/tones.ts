// Thèmes musicaux de l'aura : gammes par humeur + séquenceur déterministe pur.
export type ToneEmotion = 'calme' | 'joie' | 'tristesse' | 'tension';

// Gammes (écarts en demi-tons) choisies pour l'ambiance : jamais dissonantes,
// toutes dans le registre grave et doux (C3..B4).
export const SCALES: Record<ToneEmotion, number[]> = {
  calme: [0, 2, 4, 7, 9],      // pentatonique majeur — la respiration
  joie: [0, 4, 7, 11],          // majeur avec septième — la lumière
  tristesse: [0, 3, 5, 8, 10],  // mineur septième — la pluie lente
  tension: [0, 1, 6, 8, 11],    // modes ambigus — l'orage au loin
};

export function scaleForEmotion(e: ToneEmotion): number[] {
  return SCALES[e] ?? SCALES.calme;
}

// Petite fonction de hachage déterministe (seed, pas, humeur) → note.
export function nextNote(
  seed: number,
  step: number,
  emotion: ToneEmotion,
): { midi: number; duree: number } {
  const x = Math.imul(seed ^ Math.imul(step + 1, 0x9e3779b1), 0x85ebca6b) >>> 0;
  const scale = scaleForEmotion(emotion);
  const degree = scale[x % scale.length];
  const base = 48 + 12 * ((x >>> 8) % 2); // octave 3 ou 4
  return {
    midi: base + degree, // borne naturelle : 48..71 (tous les degrés < 12)
    duree: 1.5 + ((x >>> 16) % 20) / 10, // 1,5 à 3,4 secondes
  };
}

export function midiToFreq(m: number): number {
  return 440 * Math.pow(2, (m - 69) / 12);
}
