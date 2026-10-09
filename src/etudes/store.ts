// La mémoire des études : les paquets de fiches vivent dans l'appareil
// (localStorage), jamais ailleurs. Chaque lecture répare ou jette ce qui serait
// menteur ; chaque écriture reste locale.

import {
  creerFiche,
  creerPaquet,
  parseFichesTexte,
  reviser,
  validerPaquet,
  type Fiche,
  type Note,
  type Paquet,
} from './fiches';

const CLE = 'nath.etudes';

type MiniStorage = Pick<Storage, 'getItem' | 'setItem'>;

export function lirePaquets(storage: MiniStorage): Paquet[] {
  try {
    const brut = storage.getItem(CLE);
    if (!brut) return [];
    const o = JSON.parse(brut) as unknown;
    if (!Array.isArray(o)) return [];
    return o.map(validerPaquet).filter((p): p is Paquet => p !== null);
  } catch {
    return [];
  }
}

function ecrirePaquets(storage: MiniStorage, paquets: Paquet[]): void {
  storage.setItem(CLE, JSON.stringify(paquets));
}

export function ajouterPaquet(
  storage: MiniStorage,
  nom: string,
  opts?: { id?: string; now?: number },
): Paquet | null {
  const p = creerPaquet(nom, opts);
  if (!p) return null;
  ecrirePaquets(storage, [...lirePaquets(storage), p]);
  return p;
}

export function ajouterFiche(
  storage: MiniStorage,
  paquetId: string,
  verso: string,
  recto: string,
  opts?: { id?: string; now?: number },
): Fiche | null {
  const f = creerFiche(verso, recto, opts);
  if (!f) return null;
  const paquets = lirePaquets(storage);
  const p = paquets.find((x) => x.id === paquetId);
  if (!p) return null;
  p.fiches.push(f);
  ecrirePaquets(storage, paquets);
  return f;
}

// Import en rafale : « question :: réponse » ligne à ligne.
export function ajouterFichesDepuisTexte(
  storage: MiniStorage,
  paquetId: string,
  texte: string,
  opts?: { now?: number },
): { ajoutees: number; ignorees: number } {
  const { entrees, ignorees } = parseFichesTexte(texte);
  let ajoutees = 0;
  for (const e of entrees) {
    if (ajouterFiche(storage, paquetId, e.verso, e.recto, opts)) ajoutees++;
  }
  return { ajoutees, ignorees };
}

export function revoirFiche(
  storage: MiniStorage,
  paquetId: string,
  ficheId: string,
  note: Note,
  now = Date.now(),
): Fiche | null {
  const paquets = lirePaquets(storage);
  const p = paquets.find((x) => x.id === paquetId);
  const i = p?.fiches.findIndex((f) => f.id === ficheId) ?? -1;
  if (!p || i < 0) return null;
  const f = reviser(p.fiches[i], note, now);
  p.fiches[i] = f;
  ecrirePaquets(storage, paquets);
  return f;
}

export function statsPaquet(p: Paquet, now: number): { total: number; aRevoir: number; revisees: number } {
  return {
    total: p.fiches.length,
    aRevoir: p.fiches.filter((f) => f.due <= now).length,
    revisees: p.fiches.filter((f) => f.revisions > 0).length,
  };
}
