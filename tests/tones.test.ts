import { describe, expect, it } from 'vitest';
import { midiToFreq, nextNote, scaleForEmotion } from '../src/audio/tones';

describe('tones', () => {
  it('chaque humeur a sa gamme', () => {
    expect(scaleForEmotion('calme')).toHaveLength(5);
    expect(scaleForEmotion('joie')).not.toEqual(scaleForEmotion('tristesse'));
  });
  it('nextNote est déterministe', () => {
    expect(nextNote(12345, 7, 'calme')).toEqual(nextNote(12345, 7, 'calme'));
    expect(nextNote(12345, 8, 'calme').midi).not.toBe(nextNote(999, 8, 'calme').midi + 0.0001);
  });
  it('les notes restent dans le registre doux (C3..B4)', () => {
    for (let s = 0; s < 200; s++) {
      const n = nextNote(42, s, s % 2 ? 'joie' : 'tension');
      expect(n.midi).toBeGreaterThanOrEqual(48);
      expect(n.midi).toBeLessThanOrEqual(71);
      expect(n.duree).toBeGreaterThanOrEqual(1.5);
      expect(n.duree).toBeLessThanOrEqual(3.4);
    }
  });
  it('La4 = 440 Hz', () => {
    expect(midiToFreq(69)).toBeCloseTo(440);
    expect(midiToFreq(57)).toBeCloseTo(220);
  });
});
