// Traduire tout le monde, avec ce qu'on a sous la main — et rien de plus.
// Aujourd'hui : un lexique local que chacun peut enrichir (le français vers la
// langue de ton choix, partagé entrée par entrée). Demain : un moteur de
// traduction local s'il existe ; la couture choisirMoteurTraduction est prête,
// personne ne devra rien réécrire. On n'invente jamais une traduction inconnue.

import { normaliser } from '../etudes/quiz';

export interface Entree {
  de: string; // le mot ou l'expression, côté français
  a: string; // la traduction, dans la langue cible
  langue: string; // le nom que la personne donne à sa langue
}

export type MoteurTrad = 'moteur' | 'lexique';

// Couture d'avenir : dès qu'un moteur local est prêt, il passe avant le lexique.
export function choisirMoteurTraduction(etat: { moteurLocalPret: boolean }): MoteurTrad {
  return etat.moteurLocalPret ? 'moteur' : 'lexique';
}

const cle = (de: string, langue: string) => `${normaliser(de)}|${normaliser(langue)}`;

// Ajouter une entrée : on refuse le vide, on remplace le doublon plutôt que
// de le dupliquer (la dernière parole donnée gagne).
export function ajouterEntree(
  entrees: readonly Entree[],
  de: string,
  a: string,
  langue: string,
): Entree[] {
  const d = de.trim();
  const r = a.trim();
  const l = langue.trim();
  if (!d || !r || !l) return [...entrees];
  const k = cle(d, l);
  const propres = entrees.filter((e) => cle(e.de, e.langue) !== k);
  return [...propres, { de: d, a: r, langue: l }];
}

export function traduireExpression(
  texte: string,
  langue: string,
  entrees: readonly Entree[],
): { resultat: string | null; manques: string[] } {
  const l = normaliser(langue);
  const dispo = entrees.filter((e) => normaliser(e.langue) === l);
  const mots = normaliser(texte) ? normaliser(texte).split(' ') : [];
  if (mots.length === 0) return { resultat: null, manques: [] };

  // L'expression entière est connue telle quelle → on la donne tout de suite.
  const exacte = dispo.find((e) => normaliser(e.de) === normaliser(texte));
  if (exacte) return { resultat: exacte.a, manques: [] };

  const motsSens = new Map<string, string>();
  for (const e of dispo) {
    const n = normaliser(e.de);
    if (n && !n.includes(' ')) motsSens.set(n, e.a);
  }
  const sortie: string[] = [];
  const manques: string[] = [];
  for (const m of mots) {
    const t = motsSens.get(m);
    if (t) sortie.push(t);
    else {
      sortie.push(m);
      manques.push(m);
    }
  }
  if (manques.length === mots.length) return { resultat: null, manques };
  return { resultat: sortie.join(' '), manques };
}

// Le stockage peut mentir : on ne garde que les entrées honnêtes.
export function validerEntrees(brut: string | null | undefined): Entree[] {
  if (!brut) return [];
  try {
    const o = JSON.parse(brut) as unknown;
    if (!Array.isArray(o)) return [];
    return o
      .map((e) => {
        if (!e || typeof e !== 'object') return null;
        const b = e as Record<string, unknown>;
        const de = typeof b.de === 'string' ? b.de.trim() : '';
        const a = typeof b.a === 'string' ? b.a.trim() : '';
        const langue = typeof b.langue === 'string' ? b.langue.trim() : '';
        return de && a && langue ? { de, a, langue } : null;
      })
      .filter((e): e is Entree => e !== null);
  } catch {
    return [];
  }
}
