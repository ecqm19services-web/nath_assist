// SP5 — mécanisme de paliers, prêt à l'emploi mais OPEN PAR DÉFAUT.
//
// Ce module n'active aucun paywall : il décrit juste « cette capacité est-elle
// libre ou réservée, et si réservée, la personne a-t-elle une clé valable ? ».
// Tant que personne n'écrit un réglage qui marque une capacité 'reserve', TOUT
// reste ouvert — la doctrine (le gratuit n'est jamais bridé) est tenue ici même.
//
// La porte d'entrée d'une éventuelle offre repose sur la même clé Nath+ locale
// (déjà éprouvée) : rien de nouveau à payer, rien de central à pirater.
import { genererCle, idProfil, verifierCle } from './cle';

export { genererCle, idProfil };

export type Palier = 'libre' | 'reserve';

// Le réglage des paliers : capacité → palier. Vide = tout le monde entre partout.
export type Reglage = Record<string, Palier>;

export const RIEN_N_EST_RESERVE: Reglage = {};

export function palierDe(capacite: string, reglage: Reglage = RIEN_N_EST_RESERVE): Palier {
  return reglage[capacite] ?? 'libre';
}

export interface Portefeuille {
  seed: string;
  cle: string | null | undefined;
}

// La capacité est-elle ouverte ? Libre → toujours oui. Réservée → oui seulement
// avec une clé qui valide l'identifiant de CET appareil (comparaison locale).
export function estOuvert(capacite: string, Porte: Portefeuille, reglage: Reglage = RIEN_N_EST_RESERVE): boolean {
  if (palierDe(capacite, reglage) === 'libre') return true;
  const cle = Porte.cle ?? '';
  if (!cle) return false;
  return verifierCle(cle, idProfil(Porte.seed));
}
