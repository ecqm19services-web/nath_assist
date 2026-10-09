import { describe, expect, it } from 'vitest';
import { JOUR } from '../src/etudes/fiches';
import {
  ajouterFiche,
  ajouterFichesDepuisTexte,
  ajouterPaquet,
  lirePaquets,
  revoirFiche,
  statsPaquet,
} from '../src/etudes/store';

const NOW = 1_800_000_000_000;
const CLE = 'nath.etudes';

const mkStorage = () => {
  const m = new Map<string, string>();
  return {
    getItem: (k: string) => (m.has(k) ? m.get(k)! : null),
    setItem: (k: string, v: string) => void m.set(k, v),
  };
};

describe('store : lire sans jamais crasher', () => {
  it('vide ou menteur = tableau propre', () => {
    const s = mkStorage();
    expect(lirePaquets(s)).toEqual([]);
    s.setItem(CLE, '{ pas du json');
    expect(lirePaquets(s)).toEqual([]);
    s.setItem(CLE, JSON.stringify([{ nom: 'x', fiches: 'pas un tableau' }]));
    expect(lirePaquets(s)).toEqual([]);
  });
});

describe('store : paquets et fiches persistent', () => {
  it('ajouterPaquet range un nom propre et le retrouve après relecture', () => {
    const s = mkStorage();
    const p = ajouterPaquet(s, ' Biologie ', { id: 'p1', now: NOW })!;
    expect(p.nom).toBe('Biologie');
    const lus = lirePaquets(s);
    expect(lus.length).toBe(1);
    expect(lus[0].id).toBe('p1');
  });

  it('ajouterPaquet refuse le nom vide sans rien écrire', () => {
    const s = mkStorage();
    expect(ajouterPaquet(s, '   ')).toBeNull();
    expect(s.getItem(CLE)).toBeNull();
  });

  it('deux paquets homonymes coexistent avec des identifiants distincts', () => {
    const s = mkStorage();
    const a = ajouterPaquet(s, 'Maths')!;
    const b = ajouterPaquet(s, 'Maths')!;
    expect(a.id).not.toBe(b.id);
  });

  it('ajouterFiche range dans le bon paquet ; paquet inconnu = refus', () => {
    const s = mkStorage();
    const p = ajouterPaquet(s, 'SVT', { id: 'p1', now: NOW })!;
    const f = ajouterFiche(s, 'p1', 'La photosynthèse produit ?', 'oxygène', { id: 'f1', now: NOW })!;
    expect(f).not.toBeNull();
    expect(lirePaquets(s)[0].fiches.map((x) => x.id)).toEqual(['f1']);
    expect(ajouterFiche(s, 'inconnu', 'q', 'r')).toBeNull();
    expect(ajouterFiche(s, 'p1', '', 'r')).toBeNull();
  });

  it('ajouterFichesDepuisTexte compte ce qui est rentré et ce qui a été ignoré', () => {
    const s = mkStorage();
    ajouterPaquet(s, 'Hist', { id: 'p1', now: NOW });
    const r = ajouterFichesDepuisTexte(s, 'p1', 'Qui ? :: Napoléon\n# commentaire\noubliée sans séparateur\n');
    expect(r).toEqual({ ajoutees: 1, ignorees: 1 });
    expect(lirePaquets(s)[0].fiches.length).toBe(1);
  });

  it('revoirFiche applique l’espacement et le garde en mémoire', () => {
    const s = mkStorage();
    ajouterPaquet(s, 'SVT', { id: 'p1', now: NOW });
    ajouterFiche(s, 'p1', 'q', 'r', { id: 'f1', now: NOW });
    const apres = revoirFiche(s, 'p1', 'f1', 'bien', NOW)!;
    expect(apres.intervalle).toBe(1);
    const relu = lirePaquets(s)[0].fiches[0];
    expect(relu.due).toBe(NOW + JOUR);
    expect(revoirFiche(s, 'p1', 'fantôme', 'bien', NOW)).toBeNull();
  });
});

describe('store : statistiques douces', () => {
  it('total, à revoir maintenant, déjà travaillées', () => {
    const s = mkStorage();
    const p = ajouterPaquet(s, 'Géo', { id: 'p1', now: NOW })!;
    ajouterFiche(s, 'p1', 'q1', 'r1', { id: 'f1', now: NOW }); // due = NOW → à revoir
    ajouterFiche(s, 'p1', 'q2', 'r2', { id: 'f2', now: NOW + JOUR }); // future
    revoirFiche(s, 'p1', 'f2', 'facile', NOW); // révisée mais plus due
    const relu = lirePaquets(s)[0];
    expect(statsPaquet(relu, NOW)).toEqual({ total: 2, aRevoir: 1, revisees: 1 });
  });
});
