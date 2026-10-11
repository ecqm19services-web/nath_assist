// Les petits mots communs : découper une liste tapée à la main (« 2 œufs, du riz
// et des tomates »), la nettoyer de ses articles, la mettre au singulier pour
// que la comparaison soit sourde aux accents et aux pluriels. Pur et sans réseau.

import { normaliser } from '../etudes/quiz';

// Ce qui n'est pas une chose : articles, liens, quantités vagues.
const MOTS_VIDES = new Set([
  'de', 'du', 'des', 'le', 'la', 'les', 'un', 'une', 'et', 'ou', 'a', 'au', 'aux',
  'en', 'dans', 'pour', 'avec', 'sans', 'sur', 'sous', 'chez', 'plus', 'très',
  'peu', 'beaucoup', 'quelques', 'some', 'the', 'of', 'with', 'je', 'j ai', 'ai',
  'il', 'elle', 'on', 'nous', 'vous', 'ils', 'y', 'est', 'sont', 'faire', 'mettre',
]);

// « 2 œufs » -> « oeuf » ; les mots vides et les chiffres tombent.
// Le NFD ne décompose ni œ ni æ : on les plie à la main pour que la
// comparaison reste sourde aux ligatures comme aux accents.
const plier = (t: string): string => t.replace(/œ/g, 'oe').replace(/æ/g, 'ae');

export function motNet(mot: string): string {
  const mots = plier(normaliser(mot))
    .split(' ')
    .filter((w) => w.length > 1 && !MOTS_VIDES.has(w) && !/^\d+$/.test(w));
  const colle = mots.join(' ');
  return colle.length > 3 && /s$/.test(colle) ? colle.slice(0, -1) : colle;
}

// Une saisie libre devient une liste propre, dans l'ordre, sans doublon.
export function decouperListe(texte: string): string[] {
  const sortie: string[] = [];
  const vus = new Set<string>();
  for (const morceau of texte.split(/[,;/\n]|\s+et\s+/i)) {
    const net = motNet(morceau);
    if (!net || vus.has(net)) continue;
    vus.add(net);
    sortie.push(net);
  }
  return sortie;
}

// La quantité tapée devant un mot (« 3 œufs » -> 3), sinon une portion.
export function quantiteDe(morceau: string): number {
  const m = /(\d+)/.exec(morceau);
  if (!m) return 1;
  const n = Number(m[1]);
  return Number.isFinite(n) && n > 0 && n <= 99 ? Math.floor(n) : 1;
}
