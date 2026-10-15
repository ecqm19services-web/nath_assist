import { describe, it, expect } from 'vitest';
import {
  CLE_CONTEXTE,
  lireContexte,
  ecrireContexte,
  devinerPaysDepuisLangue,
} from '../src/metiers/contexte';

function memo(départ: Record<string, string> = {}): Pick<Storage, 'getItem' | 'setItem'> {
  const map = new Map<string, string>(Object.entries(départ));
  return {
    getItem: (k) => map.get(k) ?? null,
    setItem: (k, v) => { map.set(k, v); },
  };
}

describe('contexte — le pays choisi et le mode crise', () => {
  it('par défaut : pas de pays choisi, crise éteinte', () => {
    const ctx = lireContexte(memo());
    expect(ctx.pays).toBe('');
    expect(ctx.crise).toBe(false);
  });
  it('la clé de stockage est sous « nath. » pour voyager avec le coffre', () => {
    expect(CLE_CONTEXTE.startsWith('nath.')).toBe(true);
  });
  it('écrire puis lire rend la même valeur', () => {
    const s = memo();
    ecrireContexte(s, { pays: 'CI', crise: true });
    expect(lireContexte(s)).toEqual({ pays: 'CI', crise: true });
  });
  it('une donnée menteur retombe sur le contexte par défaut, sans jeter', () => {
    const s = memo({ [CLE_CONTEXTE]: 'pas-du-json' });
    expect(lireContexte(s)).toEqual({ pays: '', crise: false });
  });
  it('un pays inconnu dans le JSON est ignoré (retour à « pas de pays »)', () => {
    const s = memo({ [CLE_CONTEXTE]: JSON.stringify({ pays: 'XX', crise: false }) });
    expect(lireContexte(s).pays).toBe('');
  });
  it('devinerPaysDepuisLangue mappe les BCP-47 connus', () => {
    expect(devinerPaysDepuisLangue(['fr-SN'])).toBe('SN');
    expect(devinerPaysDepuisLangue(['en-GH', 'fr'])).toBe('GH');
    expect(devinerPaysDepuisLangue(['fr-ML'])).toBe('ML');
    expect(devinerPaysDepuisLangue(['unknown-XYZ'])).toBe('');
    expect(devinerPaysDepuisLangue([])).toBe('');
  });
});
