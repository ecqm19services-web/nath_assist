import { describe, expect, it } from 'vitest';
import { computeSceneParams, createInitialState, lerp } from '../src/nuage/state';

describe('NuageState', () => {
  it('état initial calme, souffle nul', () => {
    const s = createInitialState();
    expect(s.emotion).toBe('calme');
    expect(s.breath).toBe(0);
    expect(s.bpm).toBeNull();
  });
  it('la joie ouvre la luminosité, la tension la ferme', () => {
    const base = createInitialState();
    const joy = computeSceneParams({ ...base, emotion: 'joie' });
    const tension = computeSceneParams({ ...base, emotion: 'tension' });
    expect(joy.luminosite).toBeGreaterThan(tension.luminosite);
  });
  it('le souffle monte les nuages', () => {
    const p0 = computeSceneParams({ ...createInitialState(), breath: 0 });
    const p1 = computeSceneParams({ ...createInitialState(), breath: 1 });
    expect(p1.altitude).toBeGreaterThan(p0.altitude);
  });
  it('lerp interpole', () => {
    expect(lerp(0, 10, 0.5)).toBe(5);
  });
  it('nuit pleine à minuit, jour plein à midi', () => {
    expect(computeSceneParams({ ...createInitialState(), timeOfDay: 0 }).night).toBe(1);
    expect(computeSceneParams({ ...createInitialState(), timeOfDay: 0.5 }).night).toBe(0);
  });
  it('la joie embrase les aurores plus que la tristesse', () => {
    const j = computeSceneParams({ ...createInitialState(), emotion: 'joie' });
    const t = computeSceneParams({ ...createInitialState(), emotion: 'tristesse' });
    expect(j.aurora).toBeGreaterThan(t.aurora);
  });
});
