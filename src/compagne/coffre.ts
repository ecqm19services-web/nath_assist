// Le coffre : un sac à dos pour la mémoire. Sur iPhone (réinstallation, vidage de
// Safari, mode privé) localStorage s'efface sans que la personne ait rien demandé —
// le prénom gardé, les fiches d'études, les réglages, la graine du ciel partent avec.
// Une seule chaîne emporte les affaires de la maison (nath. / nuage.), une autre les
// repose. Rien d'étranger n'entre ni ne sort ; une chaîne cassée ne fait aucun dégât.
// C'est du texte : on le copie, on l'envoie à soi-même, on le recolle. Aucun serveur,
// aucun compte — la mémoire reste à la personne, jamais prêtée ailleurs.

const SIGNATURE = 'nath';
const VERSION = 1;
// Seules ces familles de clés sont « de la maison ». Le reste du stockage
// (d'un autre site, d'un traqueur) n'a rien à faire dans le sac.
const PREFIXES = ['nath.', 'nuage.'] as const;

// Le strict nécessaire du stockage : lire, écrire, et parcourir ce qui est là.
type Stockage = Pick<Storage, 'getItem' | 'setItem' | 'key' | 'length'>;

export interface Coffre {
  coffre: string;
  version: number;
  donnees: Record<string, string>;
}

function estMaison(cle: string): boolean {
  return PREFIXES.some((p) => cle.startsWith(p));
}

// Emporter : on parcourt le stockage, on ne garde que la maison, rien d'inventé.
export function exporterCoffre(stock: Stockage): string {
  const donnees: Record<string, string> = {};
  for (let i = 0; i < stock.length; i++) {
    const cle = stock.key(i);
    if (cle && estMaison(cle)) {
      const valeur = stock.getItem(cle);
      if (valeur !== null) donnees[cle] = valeur;
    }
  }
  return JSON.stringify({ coffre: SIGNATURE, version: VERSION, donnees });
}

// Lire un coffre sans jamais lui faire confiance : forme, signature, version.
// Tout ce qui ne ressemble pas à un coffre rendu par exporterCoffre devient null.
export function coffreDe(chaine: string): Coffre | null {
  try {
    const j = JSON.parse(chaine);
    if (!j || typeof j !== 'object') return null;
    if (j.coffre !== SIGNATURE) return null;
    if (typeof j.version !== 'number' || j.version > VERSION) return null;
    if (!j.donnees || typeof j.donnees !== 'object') return null;
    return { coffre: SIGNATURE, version: j.version, donnees: j.donnees as Record<string, string> };
  } catch {
    return null;
  }
}

// Reposer : on écrit uniquement les clés de la maison, une valeur par une chaîne.
// Renvoie le nombre de choses remises en place — 0 quand rien n'est digne d'être lu.
export function importerCoffre(stock: Stockage, chaine: string): number {
  const coffre = coffreDe(chaine);
  if (!coffre) return 0;
  let reposees = 0;
  for (const [cle, valeur] of Object.entries(coffre.donnees)) {
    if (!estMaison(cle)) continue;
    if (typeof valeur !== 'string') continue;
    stock.setItem(cle, valeur);
    reposees++;
  }
  return reposees;
}
