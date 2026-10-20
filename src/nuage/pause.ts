// Le ciel prend son repos : pendant qu'un panneau plein écran est ouvert,
// le rendu 3D est sauté — la batterie travaille pour ce que la personne
// regarde, pas pour ce qu'elle ne voit pas. Rien n'est éteint ni bridé :
// à la fermeture du panneau, la scène reprend d'elle-même, aussi vivante.
const ouverts = new Set<string>();

export function ouvrirPanneau(id: string): void {
  ouverts.add(id);
}

export function fermerPanneau(id: string): void {
  ouverts.delete(id);
}

export function panneauOuvert(): boolean {
  return ouverts.size > 0;
}
