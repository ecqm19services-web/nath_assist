// SP5 — le mécanisme des paliers, prêt sans être fermé. Doctrine non négociable :
// le gratuit n'est JAMAIS bridé. Par défaut toute capacité est « libre » ; on ne
// réserve quelque chose que si on l'assume explicitement, et alors une clé valable
// (Nath+) seule l'ouvre. Aucune UI ne force un paywall ici — c'est une porte, pas
// un mur.
import { describe, expect, it } from 'vitest';
import { estOuvert, genererCle, idProfil, palierDe, type Palier } from '../src/monetisation/paliers';

describe('palierDe — ouvert par défaut', () => {
  it('une capacité inconnue ou non réglée est libre', () => {
    expect(palierDe('examens')).toBe('libre');
    expect(palierDe('nimporte-quoi', {})).toBe('libre');
  });
  it('un réglage explicite peut réserver une capacité', () => {
    const reglage: Record<string, Palier> = { 'packs-certifies': 'reserve' };
    expect(palierDe('packs-certifies', reglage)).toBe('reserve');
    expect(palierDe('langues', reglage)).toBe('libre'); // les autres restent libres
  });
});

describe('estOuvert — la gratuité ne se ferme jamais toute seule', () => {
  const seed = 'seed-test';
  const id = idProfil(seed);

  it('sans aucun réglage, tout est ouvert même sans clé', () => {
    expect(estOuvert('langues', { seed, cle: null })).toBe(true);
    expect(estOuvert('nimportequoi', { seed, cle: '' })).toBe(true);
  });
  it('une capacité réservée reste fermée sans clé', () => {
    const reglage: Record<string, Palier> = { 'packs-certifies': 'reserve' };
    expect(estOuvert('packs-certifies', { seed, cle: null }, reglage)).toBe(false);
  });
  it('une capacité réservée s’ouvre avec une clé valable pour cet appareil', () => {
    const reglage: Record<string, Palier> = { 'packs-certifies': 'reserve' };
    const cle = genererCle(id);
    expect(estOuvert('packs-certifies', { seed, cle }, reglage)).toBe(true);
  });
  it('une clé inventée ne force pas la porte ; une capacité libre reste ouverte', () => {
    const reglage: Record<string, Palier> = { 'packs-certifies': 'reserve' };
    expect(estOuvert('packs-certifies', { seed, cle: 'AAAA-BBBB-CCCC-DDDD' }, reglage)).toBe(false);
    expect(estOuvert('langues', { seed, cle: 'AAAA-BBBB-CCCC-DDDD' }, reglage)).toBe(true);
  });
});
