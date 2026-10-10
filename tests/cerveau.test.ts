import { describe, expect, it, vi } from 'vitest';

// Fausse librairie : on espionne quel modèle est demandé, sans rien télécharger.
const { etat } = vi.hoisted(() => ({
  etat: { appelee: null as string | null, echoue: false },
}));
vi.mock('@mlc-ai/web-llm', () => ({
  CreateMLCEngine: vi.fn(async (modele: string, opts?: { initProgressCallback?: (e: { text: string; progress: number }) => void }) => {
    etat.appelee = modele;
    if (etat.echoue) throw new Error('Out of memory on GPU device');
    opts?.initProgressCallback?.({ text: 'x', progress: 1 });
    return {
      chat: {
        completions: {
          create: async () => ({ choices: [{ message: { content: 'Bonjour' } }] }),
        },
      },
    };
  }),
}));

import { sondeGPU, creerCerveau, persona } from '../src/compagne/cerveau';

describe('âme : Nath est un guide, pas une réponse toute faite', () => {
  const ctx = { prenom: null, emotion: 'calme', bpm: 70, breath: 0.5, night: 0 };
  it('le persona ordonne le guidage pas à pas', () => {
    expect(persona(ctx)).toContain('pas à pas');
  });
  it('le persona interdit la réponse nue', () => {
    expect(persona(ctx)).toMatch(/jamais la réponse (nue|seule|directe)/i);
  });
  it('le persona autorise les étapes (la règle des listes est assouplie)', () => {
    expect(persona(ctx)).toContain('listes à puces');
  });
});

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

  it('adapter sans shader-f16 → sans-f16', async () => {
    stubGPU(adapterAvec(false));
    expect(await sondeGPU()).toBe('sans-f16');
  });

  it('adapter avec shader-f16 → ok', async () => {
    stubGPU(adapterAvec(true));
    expect(await sondeGPU()).toBe('ok');
  });
});

describe('cervelle du cerveau : choix du modèle selon la machine', () => {
  it('machine sans f16 → repli sur la variante fp32, pas sur l\'échec', async () => {
    stubGPU(adapterAvec(false));
    etat.appelee = null;
    etat.echoue = false;
    const res = await creerCerveau();
    expect(res.cerveau).not.toBeNull();
    expect(etat.appelee).toBe('Qwen2.5-0.5B-Instruct-q4f32_1-MLC');
    expect(res.modele).toContain('q4f32_1');
  });

  it('machine avec f16 → variante fp16 (plus légère)', async () => {
    stubGPU(adapterAvec(true));
    etat.appelee = null;
    etat.echoue = false;
    const res = await creerCerveau();
    expect(res.cerveau).not.toBeNull();
    expect(etat.appelee).toBe('Qwen2.5-0.5B-Instruct-q4f16_1-MLC');
  });

  it('sans-gpu → refus immédiat, la librairie n\'est jamais appelée', async () => {
    Object.defineProperty(globalThis, 'navigator', { value: {}, configurable: true, writable: true });
    etat.appelee = null;
    const res = await creerCerveau();
    expect(res.cerveau).toBeNull();
    expect(res.raison).toBe('sans-gpu');
    expect(etat.appelee).toBeNull();
  });

  it('trop modeste même en fp32 → raison machine, avec bouton de reprise logique', async () => {
    stubGPU(adapterAvec(false));
    etat.echoue = true;
    const res = await creerCerveau();
    expect(res.cerveau).toBeNull();
    expect(res.raison).toBe('machine');
    etat.echoue = false;
  });

  it('le cerveau mocké répond réellement via ask()', async () => {
    stubGPU(adapterAvec(true));
    etat.echoue = false;
    const { cerveau } = await creerCerveau();
    expect(cerveau).not.toBeNull();
    const r = await cerveau!.ask([{ role: 'user', content: 'bonjour' }]);
    expect(r).toBe('Bonjour');
  });
});
