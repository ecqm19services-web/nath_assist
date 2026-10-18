import { describe, it, expect } from 'vitest';
import {
  CLE_CONTEXTE,
  lireContexte,
  ecrireContexte,
  devinerPaysDepuisLangue,
  paysEffectif,
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
  it('écrire puis lire rend la même valeur (choix explicite compris)', () => {
    const s = memo();
    ecrireContexte(s, { pays: 'CI', crise: true, choixExplicite: true });
    expect(lireContexte(s)).toEqual({ pays: 'CI', crise: true, choixExplicite: true });
  });
  it('un écriture sans choix explicite se relit non explicite (l’ancien réglage reste valide)', () => {
    const s = memo();
    ecrireContexte(s, { pays: 'CI', crise: true });
    expect(lireContexte(s)).toEqual({ pays: 'CI', crise: true, choixExplicite: false });
  });
  it('une donnée menteur retombe sur le contexte par défaut, sans jeter', () => {
    const s = memo({ [CLE_CONTEXTE]: 'pas-du-json' });
    expect(lireContexte(s)).toEqual({ pays: '', crise: false, choixExplicite: false });
  });
  it('un pays inconnu dans le JSON est ignoré (retour à « pas de pays »)', () => {
    const s = memo({ [CLE_CONTEXTE]: JSON.stringify({ pays: 'XX', crise: false }) });
    expect(lireContexte(s).pays).toBe('');
  });
  it('devinerPaysDepuisLangue mappe les BCP-47 connus', () => {
    expect(devinerPaysDepuisLangue(['fr-SN'])).toBe('SN');
    expect(devinerPaysDepuisLangue(['en-GH', 'fr'])).toBe('GH');
    expect(devinerPaysDepuisLangue(['fr-ML'])).toBe('ML');
    expect(devinerPaysDepuisLangue(['unknown-XY'])).toBe('');
    expect(devinerPaysDepuisLangue(['unknown-XYZ'])).toBe('');
    expect(devinerPaysDepuisLangue([])).toBe('');
  });
});

// Le « Tous » vraiment neutre : si la personne a cliqué explicitement,
// la devinette de la langue ne reprend JAMAIS la main (limite consignée au
// §12 du bilan, fermée ici).
describe('paysEffectif — choisi > choix explicite neutre > devinette de la langue', () => {
  it('pays choisi : il gagne, la langue n’a plus voix', () => {
    expect(paysEffectif({ pays: 'ML', crise: false }, ['fr-SN'])).toBe('ML');
  });
  it('aucun choix : la langue devine (comportement d’avant, préservé)', () => {
    expect(paysEffectif({ pays: '', crise: false }, ['fr-SN'])).toBe('SN');
    expect(paysEffectif({ pays: '', crise: false, choixExplicite: false }, ['wo'])).toBe('');
  });
  it('« Tous » choisi explicitement : neutre, même avec une langue régionée', () => {
    expect(paysEffectif({ pays: '', crise: false, choixExplicite: true }, ['fr-SN'])).toBe('');
  });
});
