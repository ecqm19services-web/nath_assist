// Le journal des découvertes et le résumé express : ce que l on apprend reste
// dans l appareil, se retrouve, et se transforme en cartes de révision.
import { describe, expect, it } from 'vitest';

import {
  cartesDepuisJournal,
  CLE_JOURNAL,
  effacerEntree,
  filtrerJournal,
  LIMITE_JOURNAL,
  lireJournal,
  noterEntree,
} from '../src/assist/journal';
import { pucesDepuisTexte, pucesVersFiches, resumerParCerveau } from '../src/assist/resume';

const stockage = () => {
  const m = new Map<string, string>();
  return {
    getItem: (k: string) => m.get(k) ?? null,
    setItem: (k: string, v: string) => void m.set(k, v),
  };
};

const Texte =
  "La foudre chauffe l'air \u00e0 trente mille degr\u00e9s. " +
  'Cette chaleur fait vibrer l azote et produit le tonnerre. '
  + 'Le tonnerre et la foudre arrivent au même instant \u00e0 la source. '
  + 'La lumière voyage plus vite que le son. '
  + "C'est pourquoi l'\u00e9clair pr\u00e9c\u00e8de le bruit. "
  + 'Compter les secondes donne la distance.';

describe('journal : garder ses découvertes', () => {
  it('une entrée trouve sa place, la plus récente en tête', () => {
    const s = stockage();
    noterEntree(s, { titre: 'La photosynthèse', texte: 'La feuille fabrique du sucre.', origine: 'encyclo' }, { now: 1000 });
    noterEntree(s, { titre: 'Les volcans', texte: 'La lave vient du manteau.', origine: 'cuisine' }, { now: 2000 });
    const l = lireJournal(s);
    expect(l.length).toBe(2);
    expect(l[0].titre).toBe('Les volcans');
    expect(l[1].origine).toBe('encyclo');
  });
  it('rien à dire : rien n est écrit', () => {
    const s = stockage();
    expect(noterEntree(s, { titre: '   ', texte: '' })).toBeNull();
    expect(lireJournal(s)).toEqual([]);
  });
  it('le journal ne grossit pas sans limite : les plus anciens partent', () => {
    const s = stockage();
    for (let i = 0; i < LIMITE_JOURNAL + 5; i++) {
      noterEntree(s, { titre: `Sujet ${i}`, texte: `Note ${i}`, origine: 'test' }, { now: 1000 + i });
    }
    const l = lireJournal(s);
    expect(l.length).toBe(LIMITE_JOURNAL);
    expect(l[0].titre).toBe(`Sujet ${LIMITE_JOURNAL + 4}`);
  });
  it('un registre abîmé se remet à vide au lieu de casser', () => {
    const s = stockage();
    s.setItem(CLE_JOURNAL, 'pas du json[[');
    expect(lireJournal(s)).toEqual([]);
    s.setItem(CLE_JOURNAL, JSON.stringify([{ titre: 'sans date ni texte', at: 'x' }, null, { id: 'a', titre: 'gardé', texte: 't', at: 5 }]));
    const l = lireJournal(s);
    expect(l.length).toBe(2);
    expect(l.every((e) => typeof e.at === 'number')).toBe(true);
  });
  it('la recherche ignore les accents et fouille le texte aussi', () => {
    const s = stockage();
    noterEntree(s, { titre: 'Écriture cunéiforme', texte: 'Née pour compter les greniers.', origine: 'encyclo' }, { now: 1 });
    noterEntree(s, { titre: 'Le son', texte: 'Des vibrations dans l air.', origine: 'encyclo' }, { now: 2 });
    expect(filtrerJournal(lireJournal(s), 'grenier').length).toBe(1);
    expect(filtrerJournal(lireJournal(s), 'ECRITURE')[0].titre).toContain('cunéiforme');
    expect(filtrerJournal(lireJournal(s), '')).toHaveLength(2);
  });
  it('effacer une entrée la retire vraiment', () => {
    const s = stockage();
    const e = noterEntree(s, { titre: 'À jeter', texte: 'poussière', origine: 'test' });
    expect(e).not.toBeNull();
    expect(effacerEntree(s, e!.id)).toBe(true);
    expect(lireJournal(s)).toEqual([]);
    expect(effacerEntree(s, 'inconnu')).toBe(false);
  });
  it('le journal devient cartes de révision, titre au verso', () => {
    const s = stockage();
    noterEntree(s, { titre: 'La mitose', texte: 'Deux cellules identiques.', origine: 'encyclo' }, { now: 1 });
    const c = cartesDepuisJournal(lireJournal(s));
    expect(c[0].verso).toBe('La mitose');
    expect(c[0].recto).toBe('Deux cellules identiques.');
  });
});

describe('résumé express : dégager l essentiel hors-ligne', () => {
  it('sort quelques puces, propres et sans doublon', () => {
    const p = pucesDepuisTexte(Texte, 4);
    expect(p.length).toBeGreaterThan(1);
    expect(p.length).toBeLessThanOrEqual(4);
    expect(new Set(p).size).toBe(p.length);
    for (const x of p) expect(x.length).toBeGreaterThan(10);
  });
  it('la première phrase guide : elle ouvre la première puce', () => {
    const p = pucesDepuisTexte(Texte, 3);
    expect(p[0]).toContain('foudre');
  });
  it('un texte vide ou monotone ne fabrique rien', () => {
    expect(pucesDepuisTexte('')).toEqual([]);
    expect(pucesDepuisTexte('   ')).toEqual([]);
    expect(pucesDepuisTexte('Une seule phrase.')?.[0]).toContain('phrase');
  });
  it('les puces deviennent des cartes', () => {
    const c = pucesVersFiches(pucesDepuisTexte(Texte, 3));
    expect(c.length).toBeGreaterThan(0);
    expect(c[0].verso.length).toBeLessThanOrEqual(60);
    expect(c[0].recto.length).toBeGreaterThan(0);
  });
});

describe('résumé : la main du grand cerveau', () => {
  const appel = (corps: any, ok = true) => {
    const vus: { u: string; o: any }[] = [];
    const f = async (u: any, o: any) => {
      vus.push({ u: String(u), o });
      return { ok, json: async () => corps };
    };
    return { vus, f: f as unknown as typeof fetch };
  };

  it('envoie le texte et rend les puces', async () => {
    const { vus, f } = appel({ result: { response: '- La foudre chauffe l air\n- Le son vient après' } });
    const r = await resumerParCerveau('https://cercefictif', Texte, f, 'pose');
    expect(r).toContain('foudre');
    expect(vus[0].u).toBe('https://cercefictif/dire');
    expect(JSON.parse(String(vus[0].o.body)).modele).toBe('pose');
  });
  it('trop court, vide ou muet : rien', async () => {
    expect(await resumerParCerveau('https://x', '', appel({ result: { response: 'ok' } }).f)).toBeNull();
    expect(await resumerParCerveau('https://x', 'Salut', appel({}).f)).toBeNull();
    expect(await resumerParCerveau('https://x', Texte, appel({ result: { response: 'ab' } }, false).f)).toBeNull();
  });
});
