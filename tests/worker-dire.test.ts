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

describe('/lieu — la position sue sans permission et sans clé', () => {
  const envMuet = { AI: { run: async () => { throw new Error('le lieu ne doit jamais réveiller le cerveau'); } } } as never;

  it('rend la position du point d’entrée réseau quand elle existe', async () => {
    const req = new Request('https://worker.test/lieu', { method: 'POST', body: '{}' });
    Object.assign(req as never, { cf: { latitude: '14.71667', longitude: '-17.46769', city: 'Dakar', country: 'SN' } });
    const o = (await (await worker.fetch(req, envMuet)).json()) as any;
    expect(o.lieu).toEqual({ latitude: 14.71667, longitude: -17.46769 });
    // Deux nombres et rien d’autre : la ville, le pays, l’opérateur restent du
    // côté du réseau — ils ne repartent pas vers l’écran.
    expect(JSON.stringify(o)).not.toMatch(/Dakar|"SN"|city|country/i);
  });

  it('sans position connue répond null au lieu d’inventer', async () => {
    const req = new Request('https://worker.test/lieu', { method: 'POST', body: '{}' });
    const o = (await (await worker.fetch(req, envMuet)).json()) as any;
    expect(o.lieu).toBeNull();
  });

  it('un nombre fou n’est pas une position', async () => {
    const req = new Request('https://worker.test/lieu', { method: 'POST', body: '{}' });
    Object.assign(req as never, { cf: { latitude: 'paris', longitude: '' } });
    const o = (await (await worker.fetch(req, envMuet)).json()) as any;
    expect(o.lieu).toBeNull();
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
  it('le raisonneur reçoit en plus la consigne de parler la langue de la question', async () => {
    let vues: any;
    const env = {
      AI: { run: async (_m: string, e: any) => { vues = e; return { response: 'ok' }; } },
    } as never;
    const req = new Request('https://worker.test/dire', {
      method: 'POST',
      body: JSON.stringify({
        messages: [{ role: 'user', content: 'why does the sky look blue' }],
        modele: '@cf/deepseek-ai/deepseek-r1-distill-qwen-32b',
      }),
    });
    await worker.fetch(req, env);
    expect(vues.messages[0].role).toBe('system');
    expect(vues.messages[0].content).toContain('langue de la question');
    // Le wolof et l'anglais sont des marchés, pas des accidents : plus de verrou
    // français, seulement la langue où la personne écrit.
    expect(vues.messages[0].content).not.toMatch(/en français/);
    // Prouvé en live : la consigne en tête seule ne tient pas le raisonneur.
    // Elle doit aussi être rappelée au pied de la dernière question.
    const dern = vues.messages[vues.messages.length - 1];
    expect(dern.content).toContain('why does the sky look blue');
    expect(dern.content).toContain('Réponds impérativement dans la langue de ce message');
    expect(dern.role).toBe('user');
  });
  it('le rappel est ajouté à la dernière question, original préservé', async () => {
    let vues: any;
    const env = {
      AI: { run: async (_m: string, e: any) => { vues = e; return { response: 'ok' }; } },
    } as never;
    const req = new Request('https://worker.test/dire', {
      method: 'POST',
      body: JSON.stringify({
        messages: [
          { role: 'user', content: 'première question' },
          { role: 'assistant', content: 'réponse' },
          { role: 'user', content: 'pourquoi le ciel est bleu' },
        ],
        modele: '@cf/deepseek-ai/deepseek-r1-distill-qwen-32b',
      }),
    });
    await worker.fetch(req, env);
    // Tête + deux messages intacts + dernière question enrichie = 4 messages.
    expect(vues.messages.length).toBe(4);
    expect(vues.messages[1].content).toBe('première question');
    expect(vues.messages[2].content).toBe('réponse');
    expect(vues.messages[3].content).toContain('pourquoi le ciel est bleu');
    expect(vues.messages[3].content).toContain('Réponds impérativement dans la langue de ce message');
  });
  it('les autres tempéraments gardent la conversation telle quelle', async () => {
    let vues: any;
    const env = {
      AI: { run: async (_m: string, e: any) => { vues = e; return { response: 'ok' }; } },
    } as never;
    const req = new Request('https://worker.test/dire', {
      method: 'POST',
      body: JSON.stringify({ messages: [{ role: 'user', content: 'salut' }], modele: '@cf/qwen/qwen3-30b-a3b-fp8' }),
    });
    await worker.fetch(req, env);
    expect(vues.messages.length).toBe(1);
  });
});
