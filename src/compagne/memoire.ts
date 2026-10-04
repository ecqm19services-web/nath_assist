// La mémoire de la Compagne : le prénom donné une fois est gardé pour toujours,
// localement (localStorage chiffré plus tard en Phase 2) — jamais envoyé nulle part.
export interface Memoire {
  prenom: string | null;
  dejaVu: boolean;
}

type Stockage = Pick<Storage, 'getItem' | 'setItem'>;

const CLE = 'nuage.memoire';

export function lireMemoire(storage: Stockage): Memoire {
  try {
    const brut = storage.getItem(CLE);
    if (!brut) return { prenom: null, dejaVu: false };
    const j = JSON.parse(brut);
    return {
      prenom: typeof j.prenom === 'string' && j.prenom ? j.prenom : null,
      dejaVu: !!j.dejaVu,
    };
  } catch {
    return { prenom: null, dejaVu: false };
  }
}

export function ecrireMemoire(storage: Stockage, m: Memoire): void {
  storage.setItem(CLE, JSON.stringify(m));
}

// « Je m'appelle Awa », « mon nom est Ibrahim », « moi c'est Fatou », « je mapselle… »
// — insensible aux accents, casse et apostrophes ; ne capture jamais un état (« je suis triste »).
export function extrairePrenom(question: string): string | null {
  const q = question
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[’']/g, '')
    .replace(/\s+/g, ' ');
  const m = q.match(/(?:je\s*m\s*appell\w*|je\s*mapsell\w*|mon\s+(?:nom|prenom)\s+(?:est|s)|moi\s*c\s*est|je\s*me\s*nomme)\s+([\p{L}][\p{L}-]{1,19})/u);
  if (!m) return null;
  const brut = m[1];
  return brut.charAt(0).toUpperCase() + brut.slice(1);
}
