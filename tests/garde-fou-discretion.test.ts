import { describe, it, expect } from 'vitest';

// « Aucun nom de moteur à l'écran. » La règle ne tenait que par ma vigilance.
// Ce garde-fou sépare deux mondes : d'un côté ce qui parle à la personne — là,
// une technologie ne se nomme pas, elle se décrit (« mon gros cerveau », « mon
// petit moteur ») ; de l'autre les données techniques, où un nom de modèle est
// légitime dès lors qu'il ne quitte jamais l'écran.

const sources = import.meta.glob(
  ['../src/**/*.ts', '../index.html', '../public/*.html'],
  { query: '?raw', import: 'default', eager: true },
) as Record<string, string>;

// Vocabulaire interdit au discours : noms de moteurs, de fournisseurs, de
// modèles. Les mots d'usage courant (« intelligence », « assistant ») restent
// libres — ils ne vendent pas une marque.
const TECHOS = [
  'webllm', 'qwen', 'llama', 'gemma', 'mistral', 'deepseek', 'phi-3',
  'mediapipe', 'kokoro', 'transformers', 'huggingface', 'onnx',
  'tensorflow', 'pytorch', 'chatgpt', 'gpt-4', 'gpt-3', 'openai', 'gemini',
  'claude', 'grok', 'cloudflare', 'workers.dev', 'vercel', 'supabase',
];

// Une littéral de ce genre est une donnée (adresse, référence de module,
// identifiant d'API), pas une phrase. Il ne peut donc pas « s'afficher ».
const DONNEE = /^(?:https?:|data:|blob:|chrome-extension:|@|\.\/|\.\.\/|file:)/i;

// Les fichiers où un nom de technique survit quand même dans du texte ordinaire,
// et pourquoi. Liste blanche courte et nommée : chaque ajout doit se justifier.
const BLANCHE = [
  'src/compagne/cerveau.ts', // consigne au modèle : « ne prétends jamais être ChatGPT… »
  'src/compagne/voix.ts', // 'kokoro' | 'systeme' | 'muet' : valeurs d'état interne
];

const retirerCommentaires = (code: string): string =>
  code
    .replace(/\/\*[\s\S]*?\*\//g, ' ')
    .replace(/^[ \t]*\/\/.*$/gm, ' ');

const litterauxDe = (code: string): string[] =>
  code.match(/'(?:[^'\\\n]|\\.)*'|"(?:[^"\\\n]|\\.)*"|`(?:[^`\\]|\\.)*`/g) ?? [];

function techOsDans(chemin: string, texte: string): string[] {
  if (BLANCHE.some((b) => chemin.endsWith(b))) return [];
  const corps = retirerCommentaires(texte);
  const trouvés: string[] = [];
  for (const l of litterauxDe(corps)) {
    if (DONNEE.test(l.slice(1))) continue; // « 'https://…' » : une adresse
    const petit = l.toLowerCase();
    for (const t of TECHOS) {
      if (petit.includes(t)) trouvés.push(`${chemin} :: ${t} — ${l.slice(0, 60)}`);
    }
  }
  return trouvés;
}

describe('discrétion technique (aucun nom de moteur dans le discours)', () => {
  it('le détecteur mord, sinon le garde-fou ne protège rien', () => {
    const quiSaffiche = "const t = 'Réponse de Qwen via Cloudflare';";
    expect(techOsDans('src/compagne/fake.ts', quiSaffiche)).toEqual([
      expect.stringContaining('qwen'),
      expect.stringContaining('cloudflare'),
    ]);
    // Une phrase neutre ne lève pas l'alerte.
    expect(techOsDans('src/compagne/fake.ts', "const t = 'Je réfléchis.';")).toEqual([]);
    // Une adresse et une référence de module sont des données, pas du discours.
    expect(
      techOsDans('src/compagne/fake.ts', "const u = 'https://cdn.jsdelivr.net/@mediapipe/wasm';"),
    ).toEqual([]);
    expect(techOsDans('src/compagne/fake.ts', "import x from '@kokoro/mai';")).toEqual([]);
  });

  it('seuls les fichiers de données nomment une technologie', () => {
    const fautes: string[] = [];
    for (const [chemin, texte] of Object.entries(sources)) {
      fautes.push(...techOsDans(chemin, texte));
    }
    expect(fautes).toEqual([]);
  });

  it('la liste blanche reste courte et désigne des fichiers réels', () => {
    expect(BLANCHE.length).toBeLessThanOrEqual(4);
    for (const b of BLANCHE) {
      expect(Object.keys(sources).some((k) => k.endsWith(b))).toBe(true);
    }
  });
});
