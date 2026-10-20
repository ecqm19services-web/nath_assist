// Trente jours de mémoire d'usage, gardés dans l'appareil : la personne veut
// savoir ce qu'elle a fait, pas être fichée. Une clé, un map dates → outils,
// vieille mémoire écrémée automatiquement. Rien ne sort, jamais.
type MiniStorage = Pick<Storage, 'getItem' | 'setItem'>;

export const CLE_USAGE = 'nath.outils.usage';
const FENETRE_JOURS = 31; // on garde un jour de marge, la fenêtre de compte reste 30

const dateCle = (d: Date): string => {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const j = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${j}`;
};

function lireRegistre(storage: MiniStorage): Record<string, Record<string, number>> {
  try {
    const o = JSON.parse(storage.getItem(CLE_USAGE) ?? '{}') as unknown;
    if (!o || typeof o !== 'object' || Array.isArray(o)) return {};
    const propre: Record<string, Record<string, number>> = {};
    for (const [jour, outils] of Object.entries(o as Record<string, unknown>)) {
      if (typeof outils !== 'object' || outils === null) continue;
      const comptes: Record<string, number> = {};
      for (const [id, n] of Object.entries(outils as Record<string, unknown>)) {
        if (typeof n === 'number' && Number.isFinite(n) && n > 0) comptes[id] = Math.floor(n);
      }
      if (Object.keys(comptes).length) propre[jour] = comptes;
    }
    return propre;
  } catch {
    return {};
  }
}

export function noterVisite(storage: MiniStorage, id: string, date = new Date()): void {
  if (!id) return;
  const registre = lireRegistre(storage);
  const jour = dateCle(date);
  registre[jour] = { ...registre[jour], [id]: (registre[jour]?.[id] ?? 0) + 1 };
  // Écrémage : au-delà de la fenêtre, les vieilles journées s'effacent d'elles-mêmes.
  const seuil = dateCle(new Date(date.getTime() - FENETRE_JOURS * 86_400_000));
  for (const k of Object.keys(registre)) if (k < seuil) delete registre[k];
  storage.setItem(CLE_USAGE, JSON.stringify(registre));
}

export function compter30(storage: MiniStorage, date = new Date()): Record<string, number> {
  const registre = lireRegistre(storage);
  const seuil = dateCle(new Date(date.getTime() - 30 * 86_400_000));
  const aujourdhui = dateCle(date);
  const comptes: Record<string, number> = {};
  for (const [jour, outils] of Object.entries(registre)) {
    if (jour <= aujourdhui && jour > seuil) {
      for (const [id, n] of Object.entries(outils)) comptes[id] = (comptes[id] ?? 0) + n;
    }
  }
  return comptes;
}

// En français simple, le plus fréquent d'abord : « 30 derniers jours : souffle ×2 · métiers ×1 ».
export function decrireUsage(comptes: Record<string, number>): string {
  const lignes = Object.entries(comptes)
    .filter(([, n]) => n > 0)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'fr'))
    .map(([id, n]) => `${id} ×${n}`);
  return lignes.length ? `30 derniers jours : ${lignes.join(' · ')}.` : 'Rien encore sur les 30 derniers jours.';
}
