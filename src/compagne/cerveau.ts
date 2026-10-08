// Le cerveau de Nath Assist : Qwen2.5 — le grand modèle chinois open source d'Alibaba —
// qui tourne DIRECTEMENT dans le navigateur (WebGPU), gratuitement, sans compte,
// sans cloud : une fois téléchargé, il reste dans le cache et fonctionne hors-ligne.
// Pas de WebGPU / échec de téléchargement → null : le moteur embarqué prend le relais
// (loi du jamais-bloquant).
export interface Message {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface Cerveau {
  ask: (messages: Message[]) => Promise<string>;
}

export type CerveauRaison = 'ok' | 'sans-gpu' | 'reseau' | 'machine' | 'inconnue';
export interface ResultatCerveau {
  cerveau: Cerveau | null;
  raison: CerveauRaison;
  modele?: string;
}

// Du plus fiable au plus costaud : on commence par le léger (500 Mo, réussit
// sur plus de machines et télécharge vite), puis on tente le grand si besoin.
// Deux familles selon ce que la carte sait compiler : fp16 (requiert l'extension
// 'shader-f16') ou fp32 — un peu plus lourde, mais compatible avec TOUS les WebGPU.
const MODELES_F16 = ['Qwen2.5-0.5B-Instruct-q4f16_1-MLC', 'Qwen2.5-1.5B-Instruct-q4f16_1-MLC'];
const MODELES_F32 = ['Qwen2.5-0.5B-Instruct-q4f32_1-MLC', 'Qwen2.5-1.5B-Instruct-q4f32_1-MLC'];

export function gpuDisponible(): boolean {
  return typeof navigator !== 'undefined' && 'gpu' in navigator;
}

// Vraie sonde WebGPU : 'gpu' dans navigator ne suffit pas — encore faut-il
// qu'une carte adaptable existe (les machines sans GPU échouent ici, pas au téléchargement).
// Et il faut l'extension 'shader-f16' : sans elle, les cerveaux q4f16 ne compilent
// pas — on le sait AVANT de télécharger des centaines de méga-octets.
export type EtatSonde = 'ok' | 'sans-gpu' | 'sans-f16';

export async function sondeGPU(): Promise<EtatSonde> {
  if (!gpuDisponible()) return 'sans-gpu';
  try {
    const gpu = (navigator as unknown as {
      gpu?: {
        requestAdapter(init?: unknown): Promise<{ features: { has(name: string): boolean } } | null>;
      };
    }).gpu;
    const adapter = await gpu?.requestAdapter({ powerPreference: 'high-performance' });
    if (!adapter) return 'sans-gpu';
    return adapter.features.has('shader-f16') ? 'ok' : 'sans-f16';
  } catch {
    return 'sans-gpu';
  }
}

// Classer l'échec pour ne jamais mentir et mieux retenter : le réseau mérite
// une seconde chance, la machine trop modeste passe au modèle suivant.
function classerErreur(err: unknown): CerveauRaison {
  const m = String(err instanceof Error ? err.message : err).toLowerCase();
  if (/fetch|network|loadc|config|artifacts|failed to fetch/.test(m)) return 'reseau';
  if (/memory|gpu|device|adapter|webgpu|vulkan|out of/.test(m)) return 'machine';
  return 'inconnue';
}

const attendre = (ms: number): Promise<void> => new Promise((r) => setTimeout(r, ms));

export async function creerCerveau(
  onProgress: (p: number, texte: string) => void = () => {},
): Promise<ResultatCerveau> {
  const sonde = await sondeGPU();
  if (sonde === 'sans-gpu') return { cerveau: null, raison: 'sans-gpu' };
  // Sans 'shader-f16', pas d'échec : on prend la variante fp32, que tout WebGPU compile.
  const MODELES = sonde === 'ok' ? MODELES_F16 : MODELES_F32;
  let CreateMLCEngine: typeof import('@mlc-ai/web-llm')['CreateMLCEngine'];
  try {
    ({ CreateMLCEngine } = await import('@mlc-ai/web-llm'));
  } catch {
    return { cerveau: null, raison: 'reseau' }; // la librairie elle-même n'a pas pu charger
  }
  let derniereRaison: CerveauRaison = 'inconnue';
  for (const modele of MODELES) {
    for (let essai = 1; essai <= 2; essai++) {
      try {
        const engine = await CreateMLCEngine(modele, {
          initProgressCallback: (e: { text: string; progress: number }) =>
            onProgress(e.progress ?? 0, e.text ?? ''),
        });
        return {
          raison: 'ok',
          modele,
          cerveau: {
            async ask(messages) {
              const r = await engine.chat.completions.create({
                messages,
                temperature: 0.7,
                max_tokens: 220,
              });
              return (r.choices[0]?.message?.content ?? '').trim();
            },
          },
        };
      } catch (err) {
        derniereRaison = classerErreur(err);
        if (derniereRaison === 'machine') break; // trop lourd ici → modèle plus petit
        if (essai === 1) await attendre(4000); // réseau → une seconde chance après pause
      }
    }
  }
  return { cerveau: null, raison: derniereRaison };
}

// L'âme injectée à chaque conversation : la Compagne, pas une autre.
export function persona(ctx: {
  prenom: string | null;
  emotion: string;
  bpm: number | null;
  breath: number;
  night: number;
}): string {
  return [
    'Tu es Nath, l’assistant vivant de Nath Assist — ICF·Future, par Nath-Tech : une présence bienveillante dans un ciel interactif. On t’appelle par « Hey Nath ».',
    'Tu parles français, en 1 à 3 phrases courtes et douces. Jamais de point d\'exclamation, jamais d\'emoji, jamais de listes.',
    'Tu comprends la logique et l\'émotion derrière les mots ; si on te taquine, tu réponds avec un humour tendre et une pointe d\'auto-dérision.',
    'Tu ne cites JAMAIS ce qui te fait fonctionner en interne (modèle, marque, bibliothèque, téléchargement) : tu es Nath, point. Si on te demande comment tu marches, réponds avec poésie et discrétion.',
    `Tu sens la personne : humeur ${ctx.emotion}, souffle ${Math.round(ctx.breath * 100)} %, pouls ${ctx.bpm ?? 'inconnu'}, ${ctx.night > 0.5 ? 'nuit tombée' : 'grand jour'}.`,
    ctx.prenom
      ? `Son prénom est ${ctx.prenom} — ne l'utilise qu'une fois par conversation, jamais au début.`
      : 'Tu ne connais pas encore son prénom ; si elle te le donne, retiens-le.',
    'Ne prétends jamais être ChatGPT, Claude ou un autre assistant. Tu es Nath (Nath Assist).',
  ].join(' ');
}
