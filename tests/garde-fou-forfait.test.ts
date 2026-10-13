import { describe, it, expect } from 'vitest';
import { consentementLocal, demanderLocal } from '../src/compagne/cerveau';

// Le gros cerveau local pèse des centaines de mégaoctets. Sur un forfait payé à
// la mesure (marché FCFA), un téléchargement lancé sans que la personne ait dit
// oui n'est pas une attention, c'est une facture. Le oui se note une fois, il se
// relit ensuite — et rien de lourd ne part tant qu'il n'est pas là.

const fauxStock = (init: Record<string, string> = {}): Storage => {
  const données = new Map(Object.entries(init));
  return {
    getItem: (k: string) => données.get(k) ?? null,
    setItem: (k: string, v: string) => void données.set(k, v),
    removeItem: (k: string) => void données.delete(k),
    clear: () => données.clear(),
    length: données.size,
    key: (i: number) => [...données.keys()][i] ?? null,
  };
};

describe('le consentement au gros cerveau local', () => {
  it('sans oui consigné, il n y a pas de consentement', () => {
    expect(consentementLocal(fauxStock())).toBe(false);
  });

  it('un oui se note et se relit', () => {
    const s = fauxStock();
    demanderLocal(s);
    expect(consentementLocal(s)).toBe(true);
  });

  it('une valeur qui n est pas un oui ne vaut pas oui', () => {
    // On ne laisse pas un résidu d'un autre réglage ouvrir le robinet des données.
    for (const bruit of ['1', 'true', 'oui mais non', '', ' ']) {
      expect(consentementLocal(fauxStock({ 'nath.cerveau.local': bruit })), bruit).toBe(false);
    }
  });
});

describe('garde-fou: rien de lourd ne se lance tout seul', () => {
  const sources = import.meta.glob('../src/compagne/ui.ts', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
  const ui = Object.values(sources)[0];

  it('le fichier de la compagnie est bien lu', () => {
    // Un garde-fou qui ne lit rien ne protège rien.
    expect(ui).toContain('function monterCerveauLocal');
  });

  it('le cerveau local est consenti avant le moindre octet', () => {
    // Le verrou doit être au pied de la montée en charge, pas seulement sur le
    // bouton : un appel oublié ailleurs dans le fichier ne doit pas repasser.
    const entete = ui.slice(ui.indexOf('function monterCerveauLocal'), ui.indexOf('creerCerveau('));
    expect(entete).toContain('consentementLocal(');
  });

  it('aucun demarrage automatique du gros telechargement', () => {
    expect(ui).not.toMatch(/gpuDisponible\(\)\)\s*monterCerveauLocal\(/);
  });
});
