// La météo autonome : le ciel décide seul, sans input.
// pluie = teinte de l'humeur (déjà portée par computeSceneParams) ;
// ici vivent les événements rares — éclairs d'orage intérieur, étoiles filantes.
import type { Emotion } from './state';

export interface ProbaEvenements {
  eclair: number; // probabilité d'un éclair au prochain battement (~15 s)
  filer: number;  // probabilité d'une étoile filante
}

export function probaEvenements(emotion: Emotion, night: number): ProbaEvenements {
  const orage = emotion === 'tension' ? 0.45 : emotion === 'tristesse' ? 0.12 : 0;
  return {
    eclair: orage * (0.3 + 0.7 * night), // la nuit, l'éclair se voit mieux
    filer: night * 0.4, // jamais le plein jour
  };
}
