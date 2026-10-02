import { describe, expect, it } from 'vitest';
import { detrend, estimateBpm } from '../src/nuage/rppg';

function sine(bpm: number, fps: number, seconds: number): number[] {
  const n = Math.floor(fps * seconds);
  return Array.from({ length: n }, (_, i) =>
    Math.sin((2 * Math.PI * bpm / 60) * (i / fps)) * 10 + 128);
}

describe('rPPG', () => {
  it('detrend centre le signal', () => {
    const d = detrend(sine(60, 20, 4));
    const mean = d.reduce((a, b) => a + b, 0) / d.length;
    expect(Math.abs(mean)).toBeLessThan(1);
  });
  it('60 bpm détecté sur signal synthétique', () => {
    expect(estimateBpm(sine(60, 20, 6), 20)).toBeCloseTo(60, -1);
  });
  it('75 bpm détecté', () => {
    expect(estimateBpm(sine(75, 20, 8), 20)).toBeCloseTo(75, -1);
  });
  it('signal trop court → null', () => {
    expect(estimateBpm(sine(60, 20, 1), 20)).toBeNull();
  });
});
