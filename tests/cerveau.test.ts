import { describe, expect, it } from 'vitest';
import { sondeGPU, creerCerveau } from '../src/compagne/cerveau';

// Stub du navigateur : on simule les trois états de machine possibles.
const stubGPU = (adapter: unknown): void => {
  Object.defineProperty(globalThis, 'navigator', {
    value: { gpu: { requestAdapter: async () => adapter } },
    configurable: true,
    writable: true,
  });
};

const adapterAvec = (f16: boolean): unknown => ({
  features: { has: (f: string) => (f === 'shader-f16' ? f16 : false) },
});

describe('sonde GPU du cerveau', () => {
  it('sans navigator.gpu → sans-gpu', async () => {
    Object.defineProperty(globalThis, 'navigator', { value: {}, configurable: true, writable: true });
    expect(await sondeGPU()).toBe('sans-gpu');
  });

  it('adapter inexistant → sans-gpu', async () => {
    stubGPU(null);
    expect(await sondeGPU()).toBe('sans-gpu');
  });

  it('adapter sans shader-f16 → sans-f16 (le grand cerveau ne compilera pas ici)', async () => {
    stubGPU(adapterAvec(false));
    expect(await sondeGPU()).toBe('sans-f16');
  });

  it('adapter avec shader-f16 → ok', async () => {
    stubGPU(adapterAvec(true));
    expect(await sondeGPU()).toBe('ok');
  });

  it('creerCerveau raccourcit sans-f16 en machine SANS rien télécharger', async () => {
    stubGPU(adapterAvec(false));
    const res = await creerCerveau();
    expect(res.cerveau).toBeNull();
    expect(res.raison).toBe('machine');
  });

  it('creerCerveau raccourcit sans-gpu immédiatement', async () => {
    Object.defineProperty(globalThis, 'navigator', { value: {}, configurable: true, writable: true });
    const res = await creerCerveau();
    expect(res.cerveau).toBeNull();
    expect(res.raison).toBe('sans-gpu');
  });
});
