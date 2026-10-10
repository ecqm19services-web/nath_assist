// Le Worker ne prête sa voix qu'aux modèles OUVERTS du catalogue gratuit des
// géants (Meta, Google, DeepSeek, Qwen, Mistral) — jamais à une fantaisie
// venue du client. La liste est tenue ici, validée ici, silencieuse ailleurs.
import { describe, expect, it } from 'vitest';
import worker, { modeleAutorise, MODELES_DIRE, nettoyerPensee } from '../cloudflare/nath-cerveau.worker';

describe('tempéraments du grand cerveau — la liste tenue côté Worker', () => {
  it('les grands modèles ouverts du catalogue sont admis', () => {
    expect(modeleAutorise('@cf/meta/llama-3.3-70b-instruct-fp8-fast'))
      .toBe('@cf/meta/llama-3.3-70b-instruct-fp8-fast');
    expect(modeleAutorise('@cf/deepseek-ai/deepseek-r1-distill-qwen-32b'))
      .toBe('@cf/deepseek-ai/deepseek-r1-distill-qwen-32b');
    expect(modeleAutorise('@cf/google/gemma-7b-it-lora')).toBeNull();
    expect(modeleAutorise('@cf/aisingapore/gemma-sea-lion-v4-27b-it')).toBeNull();
    expect(modeleAutorise('@cf/meta/llama-4-scout-17b-16e-instruct'))
      .toBe('@cf/meta/llama-4-scout-17b-16e-instruct');
    expect(modeleAutorise('@cf/qwen/qwen3-30b-a3b-fp8'))
      .toBe('@cf/qwen/qwen3-30b-a3b-fp8');
    expect(modeleAutorise('@cf/mistralai/mistral-small-3.1-24b-instruct'))
      .toBe('@cf/mistralai/mistral-small-3.1-24b-instruct');
  });
  it('vide, inconnu ou fantaisiste → null : le défaut veille, rien ne s\'infiltre', () => {
    expect(modeleAutorise('')).toBeNull();
    expect(modeleAutorise(undefined)).toBeNull();
    expect(modeleAutorise(null)).toBeNull();
    expect(modeleAutorise('@cf/echappe/du-controle')).toBeNull();
    expect(modeleAutorise('https://mechant.test/model')).toBeNull();
    expect(modeleAutorise(42)).toBeNull();
  });
  it('la liste est faite des modèles ouverts des géants qui répondent vraiment', () => {
    const ids = MODELES_DIRE.join(' ');
    expect(ids).toContain('@cf/meta/');
    expect(ids).toContain('@cf/deepseek-ai/');
    expect(ids).toContain('@cf/qwen/');
    expect(ids).toContain('@cf/mistralai/');
    // Vérifié en direct : les portes-voix Google du plan gratuit sont muettes
    // (Gemma 4, SEA-LION) ou divaguent (variantes lora) — pas de promesse menteuse.
    expect(ids).not.toContain('gemma');
  });
});

describe('nettoyerPensee — le raisonneur garde sa pensée pour lui', () => {
  // La balise de réflexion est reconstruite pour que rien ne l'écrive en toutes lettres.
  const OUVR = '<' + 'think>';
  const FERM = '<' + '/think>';
  it('le bloc de réflexion est retiré, la réponse finale reste', () => {
    expect(nettoyerPensee(`${OUVR}je réflexion...${FERM}\nLa réponse visible.`)).toBe('La réponse visible.');
  });
  it('une balise orpheline ne laisse que la réponse', () => {
    expect(nettoyerPensee(`${FERM} Ici la réponse.`)).toBe('Ici la réponse.');
  });
  it('une phrase ordinaire passe intacte', () => {
    expect(nettoyerPensee('Le ciel est bleu par diffusion.')).toBe('Le ciel est bleu par diffusion.');
  });
});

describe('levier de test caché — le témoin de modèle (jamais actionné par l’app)', () => {
  it('temoin: true révèle le modèle réellement parlé, à côté de la réponse', async () => {
    const env = { AI: { run: async (modele: string) => ({ response: 'Bonjour' }) } } as never;
    const req = new Request('https://worker.test/dire', {
      method: 'POST',
      body: JSON.stringify({
        messages: [{ role: 'user', content: 'salut' }],
        temoin: true,
        modele: '@cf/qwen/qwen3-30b-a3b-fp8',
      }),
    });
    const o = (await (await worker.fetch(req, env)).json()) as any;
    expect(o.result.response).toBe('Bonjour');
    expect(o.modele_utilise).toBe('@cf/qwen/qwen3-30b-a3b-fp8');
  });
  it('sans temoin, rien de technique ne dépasse', async () => {
    const env = { AI: { run: async () => ({ response: 'Bonjour' }) } } as never;
    const req = new Request('https://worker.test/dire', {
      method: 'POST',
      body: JSON.stringify({ messages: [{ role: 'user', content: 'salut' }] }),
    });
    const o = (await (await worker.fetch(req, env)).json()) as any;
    expect(o.modele_utilise).toBeUndefined();
  });
});
