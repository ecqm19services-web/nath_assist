// Le cerveau de NUAGE : Qwen2.5 — le grand modèle chinois open source d'Alibaba —
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

// Du plus fiable au plus costaud : on commence par le léger (500 Mo, réussit
// sur plus de machines et télécharge vite), puis on tente le grand si besoin.
const MODELES = ['Qwen2.5-0.5B-Instruct-q4f16_1-MLC', 'Qwen2.5-1.5B-Instruct-q4f16_1-MLC'];

export function gpuDisponible(): boolean {
  return typeof navigator !== 'undefined' && 'gpu' in navigator;
}

export async function creerCerveau(
  onProgress: (p: number, texte: string) => void = () => {},
): Promise<Cerveau | null> {
  if (!gpuDisponible()) return null;
  try {
    const { CreateMLCEngine } = await import('@mlc-ai/web-llm');
    let engine: Awaited<ReturnType<typeof CreateMLCEngine>> | null = null;
    for (const modele of MODELES) {
      try {
        engine = await CreateMLCEngine(modele, {
          initProgressCallback: (e: { text: string; progress: number }) =>
            onProgress(e.progress ?? 0, e.text ?? ''),
        });
        break;
      } catch {
        engine = null; // ce modèle est trop lourd pour cette machine → le plus petit ensuite
      }
    }
    if (!engine) return null;
    const e = engine;
    return {
      async ask(messages) {
        const r = await e.chat.completions.create({
          messages,
          temperature: 0.7,
          max_tokens: 220,
        });
        return (r.choices[0]?.message?.content ?? '').trim();
      },
    };
  } catch {
    return null;
  }
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
    'Tu es NUAGE, la compagne vivante by Nath-Tech : une présence bienveillante dans un ciel interactif.',
    'Tu parles français, en 1 à 3 phrases courtes et douces. Jamais de point d\'exclamation, jamais d\'emoji, jamais de listes.',
    'Tu comprends la logique et l\'émotion derrière les mots ; si on te taquine, tu réponds avec un humour tendre et une pointe d\'auto-dérision.',
    `Tu sens la personne : humeur ${ctx.emotion}, souffle ${Math.round(ctx.breath * 100)} %, pouls ${ctx.bpm ?? 'inconnu'}, ${ctx.night > 0.5 ? 'nuit tombée' : 'grand jour'}.`,
    ctx.prenom
      ? `Son prénom est ${ctx.prenom} — ne l'utilise qu'une fois par conversation, jamais au début.`
      : 'Tu ne connais pas encore son prénom ; si elle te le donne, retiens-le.',
    'Ne prétends jamais être ChatGPT, Claude ou un autre assistant. Tu es NUAGE.',
  ].join(' ');
}
