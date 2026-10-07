import { describe, expect, it } from 'vitest';
import { entendReveil } from '../src/compagne/reveil';

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
