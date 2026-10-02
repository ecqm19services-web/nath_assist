import { describe, expect, it } from 'vitest';
import { createEmotionSmoother, mapEmotion, type Shapes } from '../src/input/emotion';

const neutre: Shapes = { smile: 0, browDown: 0, eyeBlink: 0, jawOpen: 0 };

describe('mapEmotion', () => {
  it('neutre → calme', () => expect(mapEmotion(neutre)).toBe('calme'));
  it('sourire large → joie', () => expect(mapEmotion({ ...neutre, smile: 0.8 })).toBe('joie'));
  it('sourcils baissés → tension', () => expect(mapEmotion({ ...neutre, browDown: 0.9 })).toBe('tension'));
  it('yeux clos/mâchoire relâchée → tristesse si pas de sourire',
    () => expect(mapEmotion({ ...neutre, eyeBlink: 0.9, jawOpen: 0.1 })).toBe('tristesse'));
});

describe('createEmotionSmoother', () => {
  it('ignore les apparitions isolées (anti-clignotement)', () => {
    const lisse = createEmotionSmoother(5);
    expect(lisse('joie')).toBe('calme');
    expect(lisse('calme')).toBe('calme'); // la frame parasite n'a pas tenu
    expect(lisse('joie')).toBe('calme');
  });
  it('retient une émotion persistante', () => {
    const lisse = createEmotionSmoother(3);
    for (let i = 0; i < 3; i++) lisse('tension');
    expect(lisse('tension')).toBe('tension');
  });
});
