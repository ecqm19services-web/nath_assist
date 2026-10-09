import { describe, expect, it } from 'vitest';
import {
  MARQUE_DEFAUT,
  activerMarque,
  cleEntreprise,
  desactiverMarque,
  idEntreprise,
  lireMarque,
  nomAffiche,
  teinteAffichee,
} from '../src/entreprise/marque';
import { verifierCle } from '../src/monetisation/cle';

// Mini-stockage : le même esprit que les tests d'études, simple et honnête.
function fauxStock() {
  const carte = new Map<string, string>();
  return {
    getItem: (k: string) => carte.get(k) ?? null,
    setItem: (k: string, v: string) => void carte.set(k, v),
  };
}

describe('entreprise : la clé de l’organisation', () => {
  it('une clé d’entreprise se présente comme une clé Nath+ (20 caractères, blocs de 4)', () => {
    const c = cleEntreprise('Lycée Bilingue de Douala');
    expect(c).toMatch(/^[23456789A-HJ-NP-Z]{4}-[23456789A-HJ-NP-Z]{4}-[23456789A-HJ-NP-Z]{4}-[23456789A-HJ-NP-Z]{4}-[23456789A-HJ-NP-Z]{4}$/);
  });

  it('déterministe et juste : le nom compte sans casse ni accents', () => {
    expect(cleEntreprise('LYCÉE BILINGUE DE DOUALA')).toBe(cleEntreprise('lycee bilingue de douala'));
    expect(cleEntreprise('Collège Nku')).not.toBe(cleEntreprise('Collège Bibem'));
  });

  it('la clé fournie valide bien l’organisation via le moteur Nath+ existant', () => {
    const org = 'Groupe Étoile';
    expect(verifierCle(cleEntreprise(org), idEntreprise(org))).toBe(true);
    expect(verifierCle(cleEntreprise('Autre'), idEntreprise(org))).toBe(false);
  });
});

describe('entreprise : la marque enregistrée', () => {
  it('sans rien d’enregistré, la marque par défaut reste Nath', () => {
    const s = fauxStock();
    const m = lireMarque(s);
    expect(m.actif).toBe(false);
    expect(nomAffiche(m)).toBe('Nath');
    expect(teinteAffichee(m)).toBe(MARQUE_DEFAUT.couleur);
  });

  it('pas de marque sans clé valable : la clé protège la personnalisation', () => {
    const s = fauxStock();
    const ok = activerMarque(s, { organisation: 'Lycée de Yaoundé', cle: 'FAUTE-FAUTE-FAUTE-FAUTE-FAUTE', nom: 'Lycee Yde', slogan: '', couleur: '#ff8800' });
    expect(ok).toBe(false);
    expect(lireMarque(s).actif).toBe(false);
  });

  it('activation complète : nom, slogan, teinte — et le visage de l’app change', () => {
    const s = fauxStock();
    const org = 'Lycée Bilingue de Douala';
    const ok = activerMarque(s, { organisation: org, cle: cleEntreprise(org), nom: 'LBD', slogan: 'Apprends ici, brille partout', couleur: '#ff8800' });
    expect(ok).toBe(true);
    const m = lireMarque(s);
    expect(m.actif).toBe(true);
    expect(nomAffiche(m)).toBe('LBD');
    expect(m.slogan).toBe('Apprends ici, brille partout');
    expect(teinteAffichee(m)).toBe('#ff8800');
  });

  it('teinte folle refusée : seulement un hex propre passe, sinon la défaut', () => {
    const s = fauxStock();
    const org = 'Collège Nku';
    expect(activerMarque(s, { organisation: org, cle: cleEntreprise(org), nom: 'Nku', slogan: '', couleur: 'red; body{display:none}' })).toBe(true);
    expect(teinteAffichee(lireMarque(s))).toBe(MARQUE_DEFAUT.couleur);
  });

  it('nom trop long = ramené à sa plus juste taille, jamais vidé', () => {
    const s = fauxStock();
    const org = 'Très Grande Organisation Réunissant Toutes les Écoles';
    expect(activerMarque(s, { organisation: org, cle: cleEntreprise(org), nom: 'x'.repeat(80), slogan: '', couleur: '#123456' })).toBe(true);
    expect(lireMarque(s).nom.length).toBeLessThanOrEqual(40);
    expect(lireMarque(s).nom.length).toBeGreaterThan(0);
  });

  it('retour au personnel : la marque se range, l’app redevient Nath', () => {
    const s = fauxStock();
    const org = 'École Sainte Jeanne';
    activerMarque(s, { organisation: org, cle: cleEntreprise(org), nom: 'ESJ', slogan: '', couleur: '#101010' });
    desactiverMarque(s);
    const m = lireMarque(s);
    expect(m.actif).toBe(false);
    expect(nomAffiche(m)).toBe('Nath');
  });

  it('stockage qui ment : lireMarque répare sans jamais casser', () => {
    const s = fauxStock();
    s.setItem('nath.marque', '{portugais');
    expect(lireMarque(s).actif).toBe(false);
    s.setItem('nath.marque', JSON.stringify({ actif: true, nom: 42, slogan: null, couleur: '#zzz', organisation: 'x', cle: 'y' }));
    const m = lireMarque(s);
    expect(m.nom).toBe('');
    expect(m.actif).toBe(false); // une marque « active » mais bancale retombe sur la défaut
    expect(nomAffiche(m)).toBe('Nath');
  });

  it('changement de marque : la nouvelle organisation remplace l’ancienne, proprement', () => {
    const s = fauxStock();
    const une = 'École A';
    const deux = 'École B';
    activerMarque(s, { organisation: une, cle: cleEntreprise(une), nom: 'A', slogan: '', couleur: '#aaaaaa' });
    expect(activerMarque(s, { organisation: deux, cle: cleEntreprise(deux), nom: 'B', slogan: 'slogan B', couleur: '#bbbbbb' })).toBe(true);
    const m = lireMarque(s);
    expect(m.organisation).toBe('École B'); // ou sa forme normalisée — en tout cas plus « A »
    expect(nomAffiche(m)).toBe('B');
    expect(teinteAffichee(m)).toBe('#bbbbbb');
  });
});
