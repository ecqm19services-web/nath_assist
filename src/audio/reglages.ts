// Le réglage de la musique, en deux fonctions pures : savoir si l'utilisateur
// l'a éteinte, basculer. La clef vit dans localStorage ; toute valeur autre que
// « eteinte » (y compris une valeur douteuse) laisse la musique couler —
// on ne punit jamais ce qu'on ne comprend pas, et le défaut reste la puissance.

const CLE = 'nath.musique';

type MiniStorage = Pick<Storage, 'getItem' | 'setItem'>;

export function musiqueEteintee(storage: MiniStorage): boolean {
  return storage.getItem(CLE) === 'eteinte';
}

// Retourne le nouvel état : true = musique éteinte.
export function basculerMusique(storage: MiniStorage): boolean {
  const eteinte = !musiqueEteintee(storage);
  storage.setItem(CLE, eteinte ? 'eteinte' : 'active');
  return eteinte;
}
