import { describe, it, expect } from 'vitest';
import { consigneLecture, separerLecture, humeurVoix, HUMEURS } from '../src/compagne/comprehension';

// Le grand cerveau comprend déjà le wolof, l'anglais, une phrase bancale. Mais il
// ne rendait que du texte : le prénom dit dans une autre langue restait aux
// orties, l'humeur ne remontait jamais au ciel. La queue lisible par la machine
// ferme cette boucle — et ne doit jamais, jamais, apparaître à l'écran.

describe('la lecture d une réponse du cerveau', () => {
  it('récupère le prénom, la langue et l humeur rendus', () => {
    const l = separerLecture('Nanga def ! @@|prenom=Awa|langue=wo|humeur=joie');
    expect(l.prenom).toBe('Awa');
    expect(l.langue).toBe('wo');
    expect(l.humeur).toBe('joie');
  });

  it('la queue ne fuit jamais dans le texte montré', () => {
    const l = separerLecture('Bonjour à toi. @@|prenom=Awa|langue=fr|humeur=calme');
    expect(l.texte).toBe('Bonjour à toi.');
    expect(l.texte).not.toContain('@@');
    expect(l.texte).not.toContain('prenom');
  });

  it('une réponse sans queue reste entière', () => {
    const l = separerLecture('Le ciel est calme ce soir.');
    expect(l.texte).toBe('Le ciel est calme ce soir.');
    expect(l.prenom).toBe(null);
    expect(l.langue).toBe(null);
    expect(l.humeur).toBe(null);
  });

  it('une queue sur sa propre ligne est retirée avec son saut de ligne', () => {
    const l = separerLecture('Je ta porte.\n@@|prenom=Kofi|langue=ee|humeur=neutre');
    expect(l.texte).toBe('Je ta porte.');
    expect(l.prenom).toBe('Kofi');
  });

  it('un valeur invraisemblable est jetée, pas inventée', () => {
    // Humeur hors liste, prénom démesuré ou qui n en est pas un, langue bidon.
    const l = separerLecture('Ok. @@|prenom=UnPrenomBeaucoupTropLongPourEtreVrai|langue=xxx|humeur=rage');
    expect(l.prenom).toBe(null);
    expect(l.langue).toBe(null);
    expect(l.humeur).toBe(null);
    expect(l.texte).toBe('Ok.');
  });

  it('les deux mots vides ne deviennent ni prénom ni humeur', () => {
    for (const vide of ['', 'non', 'null', 'inconnu', '?']) {
      const l = separerLecture(`Salut. @@|prenom=${vide}|langue=fr|humeur=${vide}`);
      expect(l.prenom, vide).toBe(null);
      expect(l.humeur, vide).toBe(null);
    }
  });

  it('une langue à deux ou trois lettres, sinon rien', () => {
    expect(separerLecture('x @@|langue=fr').langue).toBe('fr');
    expect(separerLecture('x @@|langue=wolof').langue).toBe(null);
    expect(separerLecture('x @@|langue=').langue).toBe(null);
  });

  it('la consigne demande les trois champs et une langue rendue', () => {
    const c = consigneLecture();
    expect(c).toContain('@@');
    for (const h of HUMEURS) expect(c).toContain(h);
    // Jamais un nom de technologie dans ce qui est soufflé au modèle.
    expect(c.toLowerCase()).not.toContain('json');
  });

  it('l humeur comprise ne touche que la voix, jamais le ciel', () => {
    // Le ciel garde les capteurs : une humeur devinée dans le texte ne doit pas
    // faire mentir le nuage. Elle règle seulement la façon de dire.
    expect(humeurVoix('joie')).toBe('lumineuse');
    expect(humeurVoix('tristesse')).toBe('douce');
    expect(humeurVoix('tension')).toBe('stabilisee');
    expect(humeurVoix('calme')).toBe('posee');
    expect(humeurVoix('neutre')).toBe('posee');
    expect(humeurVoix(null)).toBe('posee');
  });
});
