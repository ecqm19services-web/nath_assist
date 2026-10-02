import { describe, expect, it } from 'vitest';
import { breathLevel, rms } from '../src/input/breath';

describe('souffle', () => {
  it('rms calcule l\'énergie d\'une trame', () => {
    expect(rms(new Float32Array([0, 0, 0]))).toBe(0);
    expect(rms(new Float32Array([1, -1, 1, -1]))).toBeCloseTo(1);
  });
  it('le niveau reste dans 0..1 et croît avec le signal', () => {
    const a = breathLevel(0.001, 0.0005);
    const b = breathLevel(0.05, 0.0005);
    expect(a).toBeGreaterThanOrEqual(0);
    expect(b).toBeLessThanOrEqual(1);
    expect(b).toBeGreaterThan(a);
  });
  it('sous le plancher de bruit, niveau nul', () => {
    expect(breathLevel(0.0001, 0.001)).toBe(0);
  });
});
