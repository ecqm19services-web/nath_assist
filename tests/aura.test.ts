import { describe, expect, it } from 'vitest';
import { generateAura } from '../src/aura/aura';

describe('aura', () => {
  it('déterministe pour une même graine', () => {
    expect(generateAura('graine-1')).toEqual(generateAura('graine-1'));
  });
  it('unique pour deux graines', () => {
    expect(generateAura('a').palette).not.toEqual(generateAura('b').palette);
  });
  it('palette de 3 couleurs hex valides + nom', () => {
    const a = generateAura('test');
    expect(a.palette).toHaveLength(3);
    a.palette.forEach((c) => expect(c).toMatch(/^#[0-9a-f]{6}$/));
    expect(a.nom.length).toBeGreaterThan(2);
  });
});
