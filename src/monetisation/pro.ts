// État Nath+ persistant, local et lié à l'appareil : la clé saisie n'ouvre la
// personnalisation que si elle correspond à l'identifiant du seed courant.
// Sans clé valable, le nom personnalisé est ignoré et « Hey Nath » reprend ses
// droits — le gratuit reste donc intégralement fonctionnel, toujours.
import { idProfil, verifierCle } from './cle';
import { nomReveilValide } from '../compagne/reveil';

type Stockage = Pick<Storage, 'getItem' | 'setItem'>;

export interface ProEtat {
  cle: string | null;
  nom: string | null;
}

const CLE = 'nath.pro';

export function lirePro(storage: Stockage): ProEtat {
  try {
    const j = JSON.parse(storage.getItem(CLE) || '{}');
    return {
      cle: typeof j.cle === 'string' && j.cle ? j.cle : null,
      nom: typeof j.nom === 'string' && j.nom ? j.nom : null,
    };
  } catch {
    return { cle: null, nom: null };
  }
}

export function ecrirePro(storage: Stockage, e: ProEtat): void {
  storage.setItem(CLE, JSON.stringify(e));
}

// Nath+ actif = une clé enregistrée qui valide l'identifiant de cet appareil.
export function estActif(storage: Stockage, seed: string): boolean {
  const { cle } = lirePro(storage);
  return !!cle && verifierCle(cle, idProfil(seed));
}

// Active Nath+ avec une clé ; renvoie false si la clé ne convient pas à cet appareil.
export function activer(storage: Stockage, seed: string, cle: string): boolean {
  if (!verifierCle(cle, idProfil(seed))) return false;
  const p = lirePro(storage);
  ecrirePro(storage, { cle, nom: p.nom });
  return true;
}

// Nom d'éveil réellement employé : le personnalisé uniquement si Nath+ est actif,
// sinon null (= « Hey Nath » gratuit).
export function nomEffectif(storage: Stockage, seed: string): string | null {
  const p = lirePro(storage);
  if (!p.nom || !estActif(storage, seed)) return null;
  return nomReveilValide(p.nom) ? p.nom : null;
}

// Change (ou efface, si vide) le nom d'éveil. Refusé tant que Nath+ n'est pas actif.
export function changerNom(storage: Stockage, seed: string, nom: string): boolean {
  const p = lirePro(storage);
  const n = nom.trim();
  if (n === '') {
    ecrirePro(storage, { cle: p.cle, nom: null });
    return true;
  }
  if (!estActif(storage, seed) || !nomReveilValide(n)) return false;
  ecrirePro(storage, { cle: p.cle, nom: n });
  return true;
}

export function desactiver(storage: Stockage): void {
  ecrirePro(storage, { cle: null, nom: null });
}
