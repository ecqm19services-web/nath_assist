// Le cœur des études : des fiches question/réponse qui vivent dans l'appareil.
// L'espacement des revues suit une idée simple — on revoit tôt ce qui résiste,
// tard ce qui coule — sans jamais rien envoyer nulle part. Zéro cloud, zéro
// compte, zéro euro : la science de la mémoire, gratuite et locale.

export type Note = 'difficile' | 'bien' | 'facile';

export interface Fiche {
  id: string;
  verso: string; // la question
  recto: string; // la réponse
  facilite: number; // 1.3 (coriace) … 3.2 (évidente)
  intervalle: number; // jours avant la prochaine revue
  due: number; // instant (ms) de la prochaine revue
  revisions: number;
  oublis: number;
}

export interface Paquet {
  id: string;
  nom: string;
  fiches: Fiche[];
}

export const JOUR = 86_400_000;

const borne = (x: number, min: number, max: number) => Math.min(max, Math.max(min, x));
const piece = () => Math.random().toString(36).slice(2, 8);

export function creerFiche(
  verso: string,
  recto: string,
  opts?: { id?: string; now?: number },
): Fiche | null {
  const v = verso.trim();
  const r = recto.trim();
  if (!v || !r) return null;
  const now = opts?.now ?? Date.now();
  return {
    id: opts?.id ?? `f-${now.toString(36)}-${piece()}`,
    verso: v,
    recto: r,
    facilite: 2.5,
    intervalle: 0,
    due: now, // une carte neuve se présente tout de suite
    revisions: 0,
    oublis: 0,
  };
}

export function creerPaquet(nom: string, opts?: { id?: string; now?: number }): Paquet | null {
  const n = nom.trim();
  if (!n) return null;
  const now = opts?.now ?? Date.now();
  return { id: opts?.id ?? `p-${now.toString(36)}-${piece()}`, nom: n, fiches: [] };
}

// Réviser ne mutile jamais la carte d'origine : on rend une carte neuve.
export function reviser(f: Fiche, note: Note, now = Date.now()): Fiche {
  if (note === 'difficile') {
    return {
      ...f,
      facilite: borne(f.facilite - 0.2, 1.3, 3.2),
      intervalle: 0,
      due: now + 10 * 60_000, // on se revoit dans dix minutes
      revisions: f.revisions + 1,
      oublis: f.oublis + 1,
    };
  }
  const neuveOuPerdue = f.revisions === 0 || f.intervalle === 0;
  if (note === 'bien') {
    const intervalle = neuveOuPerdue ? 1 : Math.max(1, Math.round(f.intervalle * f.facilite));
    return { ...f, intervalle, due: now + intervalle * JOUR, revisions: f.revisions + 1 };
  }
  const intervalle = neuveOuPerdue
    ? 2
    : Math.max(2, Math.round(f.intervalle * (f.facilite + 0.6)));
  return {
    ...f,
    facilite: borne(f.facilite + 0.15, 1.3, 3.2),
    intervalle,
    due: now + intervalle * JOUR,
    revisions: f.revisions + 1,
  };
}

// La file du jour : les cartes dont la date est passée, de la plus ancienne.
export function fileDeRevue(paquets: Paquet[], now: number): Fiche[] {
  return paquets
    .flatMap((p) => p.fiches)
    .filter((f) => f.due <= now)
    .sort((a, b) => a.due - b.due);
}

// Import façon carnet : « question :: réponse » par ligne, « # » pour un commentaire.
export function parseFichesTexte(texte: string): {
  entrees: { verso: string; recto: string }[];
  ignorees: number;
} {
  const entrees: { verso: string; recto: string }[] = [];
  let ignorees = 0;
  for (const ligne of texte.split(/\r?\n/)) {
    const l = ligne.trim();
    if (!l || l.startsWith('#')) continue;
    const i = l.indexOf('::');
    if (i <= 0) {
      ignorees++;
      continue;
    }
    const verso = l.slice(0, i).trim();
    const recto = l.slice(i + 2).trim();
    if (!verso || !recto) {
      ignorees++;
      continue;
    }
    entrees.push({ verso, recto });
  }
  return { entrees, ignorees };
}

export function serialiserPaquet(p: Paquet): string {
  return JSON.stringify({ v: 1, id: p.id, nom: p.nom, fiches: p.fiches });
}

// Tout ce qui vient d'un stockage peut être menteur : on répare ou on jette.
export function deserialiserFiche(brut: unknown): Fiche | null {
  if (!brut || typeof brut !== 'object') return null;
  const b = brut as Record<string, unknown>;
  const verso = typeof b.verso === 'string' ? b.verso.trim() : '';
  const recto = typeof b.recto === 'string' ? b.recto.trim() : '';
  if (!verso || !recto) return null;
  const nombre = (x: unknown, def = 0) => (typeof x === 'number' && Number.isFinite(x) ? x : def);
  return {
    id: typeof b.id === 'string' && b.id ? b.id : `f-${piece()}`,
    verso,
    recto,
    facilite: borne(nombre(b.facilite, 2.5), 1.3, 3.2),
    intervalle: Math.max(0, Math.round(nombre(b.intervalle))),
    due: nombre(b.due, Date.now()),
    revisions: Math.max(0, Math.round(nombre(b.revisions))),
    oublis: Math.max(0, Math.round(nombre(b.oublis))),
  };
}

// Un objet déjà découpé peut être menteur : même réparation que ci-dessous.
export function validerPaquet(brut: unknown): Paquet | null {
  if (!brut || typeof brut !== 'object') return null;
  const o = brut as Record<string, unknown>;
  if (typeof o.nom !== 'string' || !Array.isArray(o.fiches)) return null;
  return {
    id: typeof o.id === 'string' && o.id ? o.id : `p-${piece()}`,
    nom: o.nom.trim() || 'Sans nom',
    fiches: o.fiches.map(deserialiserFiche).filter((f): f is Fiche => f !== null),
  };
}

export function deserialiserPaquet(brut: string | null | undefined): Paquet | null {
  if (!brut) return null;
  try {
    return validerPaquet(JSON.parse(brut) as unknown);
  } catch {
    return null;
  }
}
