import { describe, expect, it } from 'vitest';
import { genererCle, idProfil } from '../src/monetisation/cle';
import {
  activer,
  changerNom,
  desactiver,
  estActif,
  nomEffectif,
} from '../src/monetisation/pro';

const mkStorage = (): Storage => {
  const m = new Map<string, string>();
  return {
    getItem: (k: string) => (m.has(k) ? m.get(k)! : null),
    setItem: (k: string, v: string) => void m.set(k, String(v)),
    removeItem: (k: string) => void m.delete(k),
    clear: () => m.clear(),
    key: (i: number) => [...m.keys()][i] ?? null,
    length: m.size,
  } as unknown as Storage;
};

describe("Nath+ : état local lié à l'appareil", () => {
  const seed = 'seed-appareil-1';
  const id = idProfil(seed);

  it('inactif par défaut, le nom reste « Hey Nath » (null)', () => {
    const s = mkStorage();
    expect(estActif(s, seed)).toBe(false);
    expect(nomEffectif(s, seed)).toBeNull();
  });

  it('une bonne clé active Nath+ pour cet appareil', () => {
    const s = mkStorage();
    expect(activer(s, seed, genererCle(id))).toBe(true);
    expect(estActif(s, seed)).toBe(true);
  });

  it('une clé pour un autre appareil est refusée', () => {
    const s = mkStorage();
    expect(activer(s, seed, genererCle(idProfil('autre-appareil')))).toBe(false);
    expect(estActif(s, seed)).toBe(false);
  });

  it('le nom personnalisé n\'est employé que si Nath+ est actif', () => {
    const s = mkStorage();
    // Avant activation : le nom est ignoré, gratuité respectée.
    expect(changerNom(s, seed, 'Luna')).toBe(false);
    expect(nomEffectif(s, seed)).toBeNull();
    // Après activation : le nom personnalisé s\'applique.
    activer(s, seed, genererCle(id));
    expect(changerNom(s, seed, 'Luna')).toBe(true);
    expect(nomEffectif(s, seed)).toBe('Luna');
  });

  it('un nom vide ramène à « Hey Nath »', () => {
    const s = mkStorage();
    activer(s, seed, genererCle(id));
    changerNom(s, seed, 'Luna');
    changerNom(s, seed, '   ');
    expect(nomEffectif(s, seed)).toBeNull();
  });

  it('un nom invalide est refusé même pour un abonné', () => {
    const s = mkStorage();
    activer(s, seed, genererCle(id));
    expect(changerNom(s, seed, '2na')).toBe(false);
  });

  it('la désactivation efface tout et rend le nom inopérant', () => {
    const s = mkStorage();
    activer(s, seed, genererCle(id));
    changerNom(s, seed, 'Luna');
    desactiver(s);
    expect(estActif(s, seed)).toBe(false);
    expect(nomEffectif(s, seed)).toBeNull();
  });

  it('lier à l\'appareil : même état, seed différent → plus actif', () => {
    const s = mkStorage();
    activer(s, seed, genererCle(id));
    expect(estActif(s, 'seed-tout-autre')).toBe(false);
    expect(nomEffectif(s, 'seed-tout-autre')).toBeNull();
  });
});
