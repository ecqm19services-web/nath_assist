// Le cerveau prêté — Worker Nath-Tech pour Nath Assist.
// Un petit proxy qui garde la clé Cloudflare AU PRESSING (côté serveur, jamais
// dans l'application) et ouvre deux portes, gratuites au-delà du seuil quotidien
// compris dans l'offre sans carte bancaire :
//   POST /dire     → un grand modèle de langage répond comme Nath (défaut : Llama 3.3 70B)
//   POST /decider  → un modèle de décision (Clef ou Jev — même famille, même
//                   API System One : état + questions typées → probabilités)
//
// Jev de TypeSafe, s'il est publié sur Workers AI, se branche d'un seul
// réglage, sans toucher au code (variable d'environnement) :
//   MODELE_DECIDER = @cf/typesafe/jev   (défaut : @cf/cloudflare/clef-flash)
//
// Déploiement (une seule fois, ~2 minutes) :
//   npm i -g wrangler ; wrangler login
//   wrangler secret put CLOUDFLARE_API_TOKEN   (token Workers AI Read)
//   wrangler deploy
// Puis donner l'adresse https://…workers.dev à l'équipe : onglet 🎓 → Savoir →
// « Grand cerveau en ligne », coller l'adresse, Régler. C'est tout.

// Pages en ligne (https) et banc d'essai local (http://localhost:port) — rien d'autre.
const ORIGINES = /^(https:\/\/[a-z0-9-]+\.github\.io|https?:\/\/localhost(:\d+)?)$/i;

function cors(req: Request): Record<string, string> {
  const origine = req.headers.get('origin') ?? '';
  return {
    'Access-Control-Allow-Origin': ORIGINES.test(origine) ? origine : 'null',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
}

function reponse(corps: unknown, req: Request, statut = 200): Response {
  return new Response(JSON.stringify(corps), {
    status: statut,
    headers: { 'Content-Type': 'application/json', ...cors(req) },
  });
}

// Le texte de réponse, quelle que soit la forme du modèle (chaîne ou parts).
function texteBrut(r: any): string {
  const t = r?.response ?? r?.content ?? '';
  if (typeof t === 'string') return t;
  if (Array.isArray(t)) return t.map((p: any) => (typeof p === 'string' ? p : p?.text ?? '')).join('');
  return '';
}

// Le raisonneur (DeepSeek R1) écrit sa réflexion dans une balise de pensée
// avant de répondre : cette réflexion reste dans le tuyau — l'élève ne voit
// que la réponse finie. Le nom de la balise est recomposé pour que le filtre
// de l'éditeur n'avale jamais le code lui-même.
export function nettoyerPensee(t: string): string {
  const blocs = new RegExp('<\\s*thin' + 'k[^>]*>[\\s\\S]*?<\\s*/\\s*thin' + 'k\\s*>', 'gi');
  const orphelines = new RegExp('<\\s*/?\\s*thin' + 'k[^>]*>', 'gi');
  return t.replace(blocs, '').replace(orphelines, '').trim();
}

// Les cerveaux OUVERTS des géants, gratuits sur le quota sans carte bancaire :
// Meta (Llama), DeepSeek (R1 raisonneur), Qwen (Alibaba), Mistral (France).
// Google est à l'essai en direct : muet (Gemma 4, SEA-LION) ou divaguant
// (variantes lora) par cette porte — aucune voix fantaisiste n'entre ici.
// Le client choisit un tempérament, jamais n'importe quoi : hors de cette
// liste, le défaut veille.
export const MODELES_DIRE = [
  '@cf/meta/llama-3.3-70b-instruct-fp8-fast',
  '@cf/meta/llama-4-scout-17b-16e-instruct',
  '@cf/deepseek-ai/deepseek-r1-distill-qwen-32b',
  '@cf/qwen/qwen3-30b-a3b-fp8',
  '@cf/mistralai/mistral-small-3.1-24b-instruct',
] as const;

export function modeleAutorise(m: unknown): string | null {
  return typeof m === 'string' && (MODELES_DIRE as readonly string[]).includes(m) ? m : null;
}

// Les types du runtime Workers, au strict minimum : rien à publier pour
// vérifier ce fichier dans le TypeScript de l'app (wrangler compile sans eux).
export interface Env {
  AI: { run(modele: string, entree: Record<string, unknown>): Promise<unknown> };
  MODELE_DIRE?: string;
  MODELE_DECIDER?: string;
}

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors(req) });
    if (req.method !== 'POST') return reponse({ error: 'POST seulement' }, req, 405);

    const url = new URL(req.url);
    let corps: any;
    try {
      corps = await req.json();
    } catch {
      return reponse({ error: 'corps illisible' }, req, 400);
    }

    try {
      if (url.pathname === '/dire') {
        const messages = Array.isArray(corps?.messages) ? corps.messages : [];
        if (!messages.length) return reponse({ error: 'messages requis' }, req, 400);
        const modele = modeleAutorise(corps?.modele) ?? env.MODELE_DIRE ?? '@cf/meta/llama-3.3-70b-instruct-fp8-fast';
        // Le raisonneur pense avant de répondre : il lui faut de la place.
        const r = await env.AI.run(modele, {
          messages,
          max_tokens: modele.includes('deepseek') ? 1200 : 400,
          temperature: 0.7,
        });
        // Levier de test caché : « temoin: true » révèle le modèle réellement
        // parlé — jamais actionné par l'app, qui ignore ce champ.
        const corpsReponse: Record<string, unknown> = { result: { response: nettoyerPensee(texteBrut(r)) } };
        if (corps?.temoin === true) corpsReponse.modele_utilise = modele;
        return reponse(corpsReponse, req);
      }

      if (url.pathname === '/decider') {
        const state = corps?.state;
        const questions = corps?.questions;
        if (typeof state !== 'string' || !questions || typeof questions !== 'object') {
          return reponse({ error: 'state et questions requis' }, req, 400);
        }
        // La famille des modèles de décision (Clef, Jev) parle la même API
        // System One — le nom dans le corps suit le modèle réglé côté serveur.
        const modele = env.MODELE_DECIDER ?? '@cf/cloudflare/clef-flash';
        const r = await env.AI.run(modele, {
          model: modele.split('/').pop(),
          state,
          questions,
        });
        return reponse({ answers: (r as any)?.answers ?? {} }, req);
      }

      return reponse({ error: 'porte inconnue' }, req, 404);
    } catch {
      // Jamais de détail technique dehors : un simple « pas répondu ».
      return reponse({ error: 'pas répondu' }, req, 502);
    }
  },
} satisfies { fetch(req: Request, env: Env): Promise<Response> };
