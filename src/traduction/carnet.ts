// Le carnet de langues : au-dessus du socle (mots sûrs, hors-ligne), chacun
// ajoute ses mots. Tout est range sous une seule cle de la maison (nath.), donc
// le coffre l'emporte et le repose sans qu'on ait a rien brancher de special.
// On ne traduit jamais un mot inconnu : il reste « manque », en attente que
// quelqu'un le donne.

import {
  ajouterEntree,
  langueCanonique,
  lexiqueDepart,
  traduireExpression,
  validerEntrees,
  type Entree,
} from './lexique';

const CLE = 'nath.trad.carnet';
type Stockage = Pick<Storage, 'getItem' | 'setItem'>;

export function lireCarnet(stock: Stockage): Entree[] {
  return validerEntrees(stock.getItem(CLE));
}

// Donner un mot : la derniere parole gagne, la forme de la langue se range a la
// maison, et rien n'est ecrit si la donnee est vide (ajouterEntree s'en charge).
export function teacher(stock: Stockage, de: string, a: string, langue: string): Entree[] {
  const l = langueCanonique(langue);
  const suivant = ajouterEntree(lireCarnet(stock), de, a, l);
  if (suivant.length === 0) return suivant;
  stock.setItem(CLE, JSON.stringify(suivant));
  return suivant;
}

// Traduire = socle + carnet du jour, dans la langue ramenee a sa forme maison.
export function traduire(
  texte: string,
  langue: string,
  stock: Stockage,
): { resultat: string | null; manques: string[] } {
  const l = langueCanonique(langue);
  const carnet = lireCarnet(stock).filter((e) => langueCanonique(e.langue) === l);
  const base = [...lexiqueDepart(l), ...carnet];
  return traduireExpression(texte, l, base);
}
