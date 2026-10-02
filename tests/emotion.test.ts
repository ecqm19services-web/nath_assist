import { describe, expect, it } from 'vitest';
import { mapEmotion, type Shapes } from '../src/input/emotion';

const neutre: Shapes = { smile: 0, browDown: 0, eyeBlink: 0, jawOpen: 0 };

describe('mapEmotion', () => {
  it('neutre → calme', () => expect(mapEmotion(neutre)).toBe('calme'));
  it('sourire large → joie', () => expect(mapEmotion({ ...neutre, smile: 0.8 })).toBe('joie'));
  it('sourcils baissés → tension', () => expect(mapEmotion({ ...neutre, browDown: 0.9 })).toBe('tension'));
  it('yeux clos/mâchoire relâchée → tristesse si pas de sourire',
    () => expect(mapEmotion({ ...neutre, eyeBlink: 0.9, jawOpen: 0.1 })).toBe('tristesse'));
});
