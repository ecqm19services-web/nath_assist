// SP1 — la couture du cerveau : qui parle, et surtout « ne repayer deux fois ».
//
// Deux pièces pures, sans effet de bord, testables partout :
//   1) choisirCerveau : la précédence honnête local > réseau > repli. On ne
//      télécharge jamais un gros modèle en secret (consentement requis), on ne
//      facture jamais un hors-ligne (repli).
//   2) avecCache + cleeDeReponse : le cache-first. Une réponse obtenue une fois
//      ne doit plus repartir vers l'API. Un échec (réponse vide) n'est PAS mis
//      en cache — il a le droit d'être retenté (loi du jamais-bloquant).

import type { Message } from './cerveau';

export type CanalCerveau = 'local' | 'reseau' | 'repli';

export interface EtatCerveau {
  /** Le cerveau local est déjà téléchargé et prêt à répondre. */
  localPret: boolean;
  /** La personne a donné son oui pour le gros modèle local (coûteux en données). */
  consentementLocal: boolean;
  /** La machine sait compiler du WebGPU. */
  gpuCompatible: boolean;
  /** Une connexion existe. */
  enLigne: boolean;
  /** Un endpoint réseau est réglé (le grand cerveau d'ailleurs). */
  endpointRegle: boolean;
}

// La précédence : le local prêt prime (gratuit, instantané, hors-ligne) ; sinon
// le local qu'on a le droit de charger une fois ; sinon le réseau s'il est réglé
// et atteignable ; sinon le repli — jamais un blocage, jamais une facture.
export function choisirCerveau(e: EtatCerveau): CanalCerveau {
  if (e.localPret) return 'local';
  if (e.consentementLocal && e.gpuCompatible && e.enLigne) return 'local';
  if (e.enLigne && e.endpointRegle) return 'reseau';
  return 'repli';
}

// FNV-1a 32 bits → base36 : empreinte courte et stable d'une conversation.
function hachage(s: string): string {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return (h >>> 0).toString(36);
}

// La clé d'une réponse : rôles + contenus dans l'ordre, plus un indice optionnel
// (le modèle choisi) pour que deux cerveaux ne partagent jamais leurs réponses.
export function cleeDeReponse(messages: readonly Message[], indice = ''): string {
  const corps = messages.map((m) => `${m.role}\u0000${m.content}`).join('\u0001');
  return hachage(`${indice}\u0002${corps}`);
}

export interface CacheReponses<T> {
  chargerOu(cle: string, fabriquer: () => Promise<T>): Promise<T>;
  taille(): number;
}

// Un cache qui ne mémorise que les réussites « non vides » et déduplique les
// appels simultanés. T est la plupart du temps string (la réponse).
export function avecCache<T>(estVide: (v: T) => boolean = (v) => v === ('' as unknown)): CacheReponses<T> {
  const memo = new Map<string, T>();
  const enCours = new Map<string, Promise<T>>();
  return {
    chargerOu(cle, fabriquer) {
      const vu = memo.get(cle);
      if (vu !== undefined) return Promise.resolve(vu);
      const pf = enCours.get(cle);
      if (pf) return pf;
      const p = fabriquer()
        .then((r) => {
          enCours.delete(cle);
          if (!estVide(r)) memo.set(cle, r); // l'échec ne se fige pas : on retentera
          return r;
        })
        .catch((err) => {
          enCours.delete(cle);
          throw err;
        });
      enCours.set(cle, p);
      return p;
    },
    taille() {
      return memo.size;
    },
  };
}
