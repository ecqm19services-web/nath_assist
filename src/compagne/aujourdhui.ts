// La carte du jour : une synthèse, pas un bouton de plus. Le métier du jour,
// les révisions qui attendent, la découverte du jour, la mémoire des trente
// derniers jours — assemblée avec ce que l'appareil sait déjà. Module pur :
// l'UI ne fait que préparer les ingrédients et montrer.

import { decrireUsage } from './usage';

export interface MatiereDuJour {
  metier?: { pack: string; tache: string } | null;
  revisions: number;
  decouverte?: { titre: string; resume: string } | null;
  usage?: Record<string, number> | null;
}

export function construireCarteJour(m: MatiereDuJour): string[] {
  const lignes: string[] = ['Aujourd’hui'];
  if (m.metier) lignes.push(`Métier : ${m.metier.pack} — ${m.metier.tache}`);
  if (m.revisions > 0) {
    lignes.push(`Révisions qui t’attendent : ${m.revisions} carte${m.revisions > 1 ? 's' : ''}.`);
  }
  if (m.decouverte) lignes.push(`Découverte : ${m.decouverte.titre} — ${m.decouverte.resume}`);
  if (m.usage && Object.keys(m.usage).length) lignes.push(decrireUsage(m.usage));
  if (lignes.length === 1) lignes.push('Rien de pressé — choisis un outil, ou repose-toi.');
  return lignes;
}

// Le point de rappel : un seul • sur l'onglet quand quelque chose attend —
// jamais de chiffre qui compte sur la personne, jamais de clignotement.
export function pointRappel(dus: number): string {
  return dus > 0 ? ' •' : '';
}
