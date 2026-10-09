// Nath Entreprise : une organisation (école, ONG, entreprise) peut donner son
// visage à l'assistant — nom, slogan, teinte — pour toute son équipe, sans
// serveur et sans coût. Le verrou est une clé dérivée du nom de l'organisation,
// fabriquée par Nath-Tech au moment de l'accord (même moteur honnête que Nath+).
// Le personnel ne perd jamais rien : sans clé valable, l'app reste Nath, intacte.

import { normaliser } from '../etudes/quiz';
import { genererCle, idProfil, verifierCle } from '../monetisation/cle';

type Stockage = Pick<Storage, 'getItem' | 'setItem'>;

export interface Marque {
  actif: boolean;
  nom: string;
  slogan: string;
  couleur: string; // seulement « #rrggbb » ; toute autre valeur retombe sur la défaut
  organisation: string;
  cle: string;
}

export const MARQUE_DEFAUT: Marque = {
  actif: false,
  nom: '',
  slogan: '',
  couleur: '#9fd8ff',
  organisation: '',
  cle: '',
};

const CLE = 'nath.marque';
const HEX = /^#[0-9a-fA-F]{6}$/;

// Identifiant d'entreprise : même famille que Nath+, mais le nom de l'équipe
// compte — pas l'appareil — afin qu'une seule clé habille tout un groupe.
export function idEntreprise(organisation: string): string {
  return idProfil('entreprise:' + normaliser(organisation));
}

export function cleEntreprise(organisation: string): string {
  return genererCle(idEntreprise(organisation));
}

function propre(couleur: unknown): string {
  return typeof couleur === 'string' && HEX.test(couleur.trim()) ? couleur.trim().toLowerCase() : MARQUE_DEFAUT.couleur;
}

// On ne fait jamais confiance au stockage : on répare, et l'activité se
// re-vérifie à chaque lecture — une marque échangée pour une autre organisation
// ne survit pas au rechargement.
export function lireMarque(storage: Stockage): Marque {
  try {
    const j = JSON.parse(storage.getItem(CLE) || '{}') as Record<string, unknown>;
    const nom = typeof j.nom === 'string' ? j.nom.trim().slice(0, 40) : '';
    const slogan = typeof j.slogan === 'string' ? j.slogan.trim().slice(0, 90) : '';
    const organisation = typeof j.organisation === 'string' ? j.organisation.trim() : '';
    const cle = typeof j.cle === 'string' ? j.cle : '';
    const actif = j.actif === true && !!nom && !!organisation && verifierCle(cle, idEntreprise(organisation));
    return { actif, nom, slogan, couleur: propre(j.couleur), organisation, cle };
  } catch {
    return { ...MARQUE_DEFAUT };
  }
}

export interface VoeuMarque {
  organisation: string;
  cle: string;
  nom: string;
  slogan: string;
  couleur: string;
}

// Activer : la clé doit correspondre à l'organisation, sinon rien ne bouge.
export function activerMarque(storage: Stockage, voeu: VoeuMarque): boolean {
  const organisation = voeu.organisation.trim();
  if (!organisation || !verifierCle(voeu.cle, idEntreprise(organisation))) return false;
  const nom = voeu.nom.trim().slice(0, 40);
  if (!nom) return false;
  const m: Marque = {
    actif: true,
    nom,
    slogan: voeu.slogan.trim().slice(0, 90),
    couleur: propre(voeu.couleur),
    organisation,
    cle: voeu.cle,
  };
  storage.setItem(CLE, JSON.stringify(m));
  return true;
}

export function desactiverMarque(storage: Stockage): void {
  storage.setItem(CLE, JSON.stringify({ ...MARQUE_DEFAUT }));
}

// Le visage que l'app montre : la marque seulement si elle est honnête.
export function nomAffiche(m: Marque): string {
  return m.actif && m.nom ? m.nom : 'Nath';
}

export function teinteAffichee(m: Marque): string {
  return m.actif ? m.couleur : MARQUE_DEFAUT.couleur;
}
