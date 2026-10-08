// La voix de Nath : choix de la plus belle voix française disponible dans le
// système, et messages de chargement 100 % neutres — comme pour le cerveau,
// aucun nom de moteur, de modèle ou de fournisseur n'apparaît jamais à l'écran.

export interface VoixCandidate {
  name: string;
  lang: string;
}

const NATURELLE = /natural|neural|premium|enhanced|online/i;

// Score implicite : France d'abord, voix naturelle d'abord.
export function choisirVoixFr<T extends VoixCandidate>(voix: T[]): T | null {
  const fr = voix.filter((v) => v.lang.toLowerCase().startsWith('fr'));
  if (!fr.length) return null;
  const enFrance = fr.filter((v) => /^fr[-_]fr$/i.test(v.lang));
  const pool = enFrance.length ? enFrance : fr;
  return pool.find((v) => NATURELLE.test(v.name)) ?? pool[0];
}

// Message d'éveil de la voix — générique par construction, jamais confidentiel.
export function messageEveilVoix(p: number): string {
  const pct = Math.min(99, Math.max(0, Math.round(p * 100)));
  return `Éveil de ma voix en cours... ${pct} %`;
}

// La couture du futur : le jour où Kokoro parlera français (issue amont #223,
// phonémiseur anglais-only à ce jour), cocher kokoroFrPret = true et Nath prendra
// cette voix — sinon celle du système, sinon le silence écrit. Jamais de nom à l'écran.
export type MoteurVoix = 'kokoro' | 'systeme' | 'muet';

export function choisirMoteurVoix(etat: { kokoroFrPret: boolean; ttsDisponible: boolean }): MoteurVoix {
  if (etat.kokoroFrPret) return 'kokoro';
  return etat.ttsDisponible ? 'systeme' : 'muet';
}
