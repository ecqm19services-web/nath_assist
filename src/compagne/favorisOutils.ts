// Les outils favoris : la personne choisit ses deux ou trois habituels,
// ils remontent en tête de la rangée. Rien n'est jamais retiré — seulement
// ordonné. Garde local, sous préfixe « nath. », comme tout le reste.
type MiniStorage = Pick<Storage, 'getItem' | 'setItem'>;

export const CLE_FAVORIS = 'nath.outils.favoris';

export function lireFavoris(storage: MiniStorage, connus: readonly string[]): string[] {
  try {
    const o = JSON.parse(storage.getItem(CLE_FAVORIS) ?? '[]') as unknown;
    if (!Array.isArray(o)) return [];
    return o.filter((x): x is string => typeof x === 'string' && connus.includes(x));
  } catch {
    return [];
  }
}

export function basculerFavori(storage: MiniStorage, id: string): string[] {
  const bruts = lireFavorisBruts(storage);
  const actuels = bruts.includes(id) ? bruts.filter((x) => x !== id) : [...bruts, id];
  storage.setItem(CLE_FAVORIS, JSON.stringify(actuels));
  return actuels;
}

function lireFavorisBruts(storage: MiniStorage): string[] {
  try {
    const o = JSON.parse(storage.getItem(CLE_FAVORIS) ?? '[]') as unknown;
    return Array.isArray(o) ? o.filter((x): x is string => typeof x === 'string') : [];
  } catch {
    return [];
  }
}

// Favoris en tête (dans l'ordre où la personne les a ajoutés), le reste
// dans l'ordre de la liste d'origine — rien ne disparaît.
export function ordonnerOnglets(
  ids: readonly string[],
  favoris: readonly string[],
): { tete: string[]; reste: string[] } {
  const utiles = favoris.filter((f) => ids.includes(f));
  return {
    tete: utiles,
    reste: ids.filter((i) => !utiles.includes(i)),
  };
}
