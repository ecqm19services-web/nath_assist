// Le fil du dialogue : mesurer ce que le grand cerveau a vraiment rendu.
// La consigne de langue, nommée et soufflée au pied du message, tient quand la
// conversation est propre — elle déraille quand l'historique d'avant parle une
// autre langue (mesuré en production : une question wolof rendue en français).
// Ici, rien n'est deviné : on compare la langue de la question à celle de la
// réponse, et on ne reprend le travail qu'une seule fois. Deux appels pour rien
// coûtent, chez une personne qui paie ses données, exactement deux réponses ratées.

import { detecterLangue, type LangueCertaine } from './comprehension';

export interface Brouillon {
  /** Ce que la personne a écrit. */
  question: string;
  /** Ce que le cerveau a rendu, queue pour la machine retirée. */
  texte: string;
  /** La langue certaine de la question — null quand elle ne penche pas. */
  langueQuestion: LangueCertaine | null;
  /** La langue certaine de la réponse — null quand elle ne penche pas. */
  langueRendue: LangueCertaine | null;
  /** Le second brouillon ne repart jamais en chasse. */
  dejaRetisse?: boolean;
}

// Dans quelle langue la réponse est-elle rendue ? La question ne compte pas ici :
// ses mots-outils ont parfois glissé dans la réponse du modèle, et une réponse
// qui répète un « cloud » anglais ne redevient pas anglaise pour autant. On lit
// la réponse, point — c'est elle qui s'affiche.
export function langueDeReponse(texte: string): LangueCertaine | null {
  return detecterLangue(texte);
}

export function brouillonDe(question: string, texte: string, dejaRetisse = false): Brouillon {
  return { question, texte, langueQuestion: detecterLangue(question), langueRendue: langueDeReponse(texte), dejaRetisse };
}

// Faut-il retisser ? Seulement quand les deux langues sont certaines et
// différentes. Incertain = on ne dérange personne : la relance silencieuse est
// le chemin le plus court vers une facture et une attente pour rien.
export function fautIlRetisser(b: Brouillon): boolean {
  if (b.dejaRetisse) return false;
  if (!b.langueQuestion || !b.langueRendue) return false;
  return b.langueQuestion !== b.langueRendue;
}
