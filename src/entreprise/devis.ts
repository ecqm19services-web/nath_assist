// Le devis Entreprise, en trois chiffres qu'un parent d'école comprend.
// Paliers affichés d'avance, jamais plus cher par tête quand on grandit :
// c'est l'invitation, pas le piège. Le sur-mesure se discute de gré à gré
// (Mobile Money, comme pour Nath+) — aucun paiement dans l'app, aucun serveur.

export interface Devis {
  palier: string;
  mensuel: number | null; // FCFA par mois ; null = à convenir ensemble
}

export const PALIERS: { max: number; palier: string; mensuel: number | null }[] = [
  { max: 50, palier: 'Classe', mensuel: 15000 },
  { max: 200, palier: 'École', mensuel: 40000 },
  { max: 1000, palier: 'Réseau', mensuel: 120000 },
  { max: Infinity, palier: 'Sur mesure', mensuel: null },
];

export function devisEntreprise(nbPersonnes: number): Devis {
  if (!Number.isFinite(nbPersonnes) || nbPersonnes <= 0) {
    return { palier: 'Sur mesure', mensuel: null };
  }
  const p = PALIERS.find((x) => nbPersonnes <= x.max) ?? PALIERS[PALIERS.length - 1];
  return { palier: p.palier, mensuel: p.mensuel };
}

// 15 000 FCFA — la monnaie du terrain, écrite comme on la lit.
export function formatFCFA(n: number | null): string {
  if (n === null) return 'à convenir';
  return n.toLocaleString('fr-FR').replace(/[\u202f\u00a0]/g, ' ') + ' FCFA';
}
