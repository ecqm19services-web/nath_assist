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
