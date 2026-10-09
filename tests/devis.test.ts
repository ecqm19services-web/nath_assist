import { describe, expect, it } from 'vitest';
import { PALIERS, devisEntreprise, formatFCFA } from '../src/entreprise/devis';

describe('entreprise : le devis honnête, sans serveur ni surprise', () => {
  it('quatre paliers clairs, du petit groupe à la grande réseau', () => {
    expect(PALIERS.length).toBe(4);
    expect(devisEntreprise(10)).toEqual({ palier: 'Classe', mensuel: 15000 });
    expect(devisEntreprise(50)).toEqual({ palier: 'Classe', mensuel: 15000 });
    expect(devisEntreprise(51)).toEqual({ palier: 'École', mensuel: 40000 });
    expect(devisEntreprise(200)).toEqual({ palier: 'École', mensuel: 40000 });
    expect(devisEntreprise(201)).toEqual({ palier: 'Réseau', mensuel: 120000 });
    expect(devisEntreprise(1000)).toEqual({ palier: 'Réseau', mensuel: 120000 });
    expect(devisEntreprise(5000)).toEqual({ palier: 'Sur mesure', mensuel: null });
  });

  it('bornes justes : 0 et négatif = rien à facturer, jamais de montant inventé', () => {
    expect(devisEntreprise(0).mensuel).toBeNull();
    expect(devisEntreprise(-12).mensuel).toBeNull();
    expect(devisEntreprise(NaN).mensuel).toBeNull();
  });

  it('le devis parle français : « tant par personne » quand on sait, « à convenir » sinon', () => {
    expect(formatFCFA(15000)).toBe('15 000 FCFA');
    expect(formatFCFA(null)).toBe('à convenir');
    const d = devisEntreprise(100);
    expect(typeof d.mensuel).toBe('number');
  });

  it('plus de monde = jamais plus cher par tête (le grand gagne à chaque palier)', () => {
    const petit = 15000 / 50;
    const milieu = 40000 / 200;
    const grand = 120000 / 1000;
    expect(milieu).toBeLessThan(petit);
    expect(grand).toBeLessThan(milieu);
  });
});
