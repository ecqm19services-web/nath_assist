// Interprétation des blendshapes MediaPipe → émotion dominante.
export interface Shapes { smile: number; browDown: number; eyeBlink: number; jawOpen: number }
export type Emotion = 'calme' | 'joie' | 'tristesse' | 'tension';

export function mapEmotion(s: Shapes): Emotion {
  const scores: Record<Emotion, number> = {
    joie: s.smile * 1.2,
    tension: s.browDown * 1.0 + (s.eyeBlink < 0.2 ? 0.1 : 0),
    tristesse: s.eyeBlink * 0.8 + s.jawOpen * 0.2 - s.smile,
    calme: 0.15, // le calme est le choix par défaut
  };
  return (Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0]) as Emotion;
}

// Lissage temporel : une émotion n'est retenue que si elle persiste `threshold` frames
// (anti-clignotement ; le calme ambiant ne peut plus être ponctuellement volé par un artefact).
export function createEmotionSmoother(threshold = 20): (next: Emotion) => Emotion {
  let current: Emotion = 'calme';
  let candidate: Emotion | null = null;
  let count = 0;
  return (next: Emotion): Emotion => {
    if (next === current) { candidate = null; count = 0; return current; }
    if (next === candidate) count++;
    else { candidate = next; count = 1; }
    if (count >= threshold) { current = next; candidate = null; count = 0; }
    return current;
  };
}
