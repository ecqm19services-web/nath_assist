// Dictée douce : la bouche plutôt que le clavier. Deux gestes purs, testés
// loin du navigateur — comprendre « bonjour veut dire naka nga def » pour le
// lexique, et enlever les petits tics (« euh », « hem ») d'un cours dicté
// avant d'en tirer des fiches. Rien n'est inventé : sans pont clair, rien.

export interface PaireDictee {
  de: string;
  a: string;
}

// Les mots-ponts que les gens disent vraiment. Le plus long d'abord pour que
// « se traduit par » ne se fasse pas découper en deux morceaux.
const PONTS = ['est traduit par', 'se traduit par', 'traduit par', 'veut dire', 'signifie', 'se dit'];

export function analyserDictee(texte: string): PaireDictee | null {
  const t = texte.trim();
  if (!t) return null;
  const bas = t.toLowerCase();
  for (const pont of PONTS) {
    const i = bas.indexOf(pont);
    if (i < 0) continue;
    const de = t.slice(0, i).trim();
    const a = t.slice(i + pont.length).trim().replace(/[.,;:!?…]+$/, '').trim();
    return de && a ? { de, a } : null; // le premier pont gagne ; les deux côtés doivent exister
  }
  return null;
}

// Les tics de la bouche, pas les mots. « ben » saute, « bien » reste.
const TICS = /\b(?:euh+|hem+|hm+|ben|bah)\b[, ]*/gi;

export function epurerDictee(texte: string): string {
  let t = texte.replace(TICS, '');
  t = t.replace(/\s+/g, ' ');
  // Ponctuation doublée par le évidement du tic (« , , ») : un seul signe garde la place.
  t = t.replace(/([,.;:!?])\s*(?:[,.;:!?]\s*)*/g, '$1 ');
  return t.trim();
}
