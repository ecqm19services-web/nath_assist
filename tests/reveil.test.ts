import { describe, expect, it } from 'vitest';
import { entendReveil, nomReveilValide } from '../src/compagne/reveil';

describe('mot de réveil « Hey Nath » (mode écoute permanente)', () => {
  it('réveille sur un appel clair et garde la requête', () => {
    const r = entendReveil('hey nath raconte moi une histoire');
    expect(r.eveille).toBe(true);
    expect(r.requete).toBe('raconte moi une histoire');
  });
  it('réveille sans le « hey », ponctué ou non', () => {
    expect(entendReveil('Nath, quel heure il est ?').eveille).toBe(true);
    expect(entendReveil('nath dors avec moi').requete).toBe('dors avec moi');
    expect(entendReveil('HE NATH fais un poème').eveille).toBe(true);
  });
  it('tolère les variantes de transcription (nath/natt/nat)', () => {
    expect(entendReveil('hey nat que peux tu faire').eveille).toBe(true);
    expect(entendReveil('hey natt donne moi l heure').eveille).toBe(true);
  });
  it('ne réveille JAMAIS sur des mots ordinaires qui ressemblent à Nath', () => {
    expect(entendReveil('les mathématiques c est beau').eveille).toBe(false);
    expect(entendReveil('la chatte ronronne').eveille).toBe(false);
    expect(entendReveil('un style naturel svp').eveille).toBe(false);
    expect(entendReveil('je regarde la mer').eveille).toBe(false);
  });
  it('un simple « nath » sans requête éveille avec requête vide', () => {
    const r = entendReveil('nath');
    expect(r.eveille).toBe(true);
    expect(r.requete).toBe('');
  });
});

describe('nom d\'éveil personnalisé (réservé Nath+)', () => {
  it('réveille sur le nouveau nom, avec ou sans interjection', () => {
    const r = entendReveil('hey luna ouvre le ciel', 'Luna');
    expect(r.eveille).toBe(true);
    expect(r.requete).toBe('ouvre le ciel');
    expect(entendReveil('Luna, il pleut demain ?', 'Luna').eveille).toBe(true);
  });
  it('les accents et les noms à deux mots fonctionnent', () => {
    // ordre inversé → pas de réveil (le nom complet doit être prononcé dans l'ordre)
    expect(entendReveil('mon étoile, une histoire', 'Étoile Mon').eveille).toBe(false);
    const r = entendReveil('étoile mon, raconte', 'Étoile Mon');
    expect(r.eveille).toBe(true);
    expect(r.requete).toBe('raconte');
  });
  it('reste joignable via « Hey Nath » même après personnalisation (filet de sécurité)', () => {
    expect(entendReveil('hey nath tu dors ?', 'Luna').eveille).toBe(true);
  });
  it('pas de faux réveil : le nom perso doit être un mot entier', () => {
    expect(entendReveil('une lune dans le ciel', 'Luna').eveille).toBe(false);
    expect(entendReveil('lunaire est un mot', 'Luna').eveille).toBe(false);
  });
  it('refuse les noms invalides (retour au réglage gratuit)', () => {
    expect(nomReveilValide('')).toBe(false);
    expect(nomReveilValide('a')).toBe(false);
    expect(nomReveilValide('2nath')).toBe(false);
    expect(nomReveilValide('nath!')).toBe(false);
    expect(nomReveilValide('Luna')).toBe(true);
    expect(nomReveilValide('Étoile')).toBe(true);
  });
});
