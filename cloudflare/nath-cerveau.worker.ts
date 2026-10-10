// Le cerveau prêté — Worker Nath-Tech pour Nath Assist.
// Un petit proxy qui garde la clé Cloudflare AU PRESSING (côté serveur, jamais
// dans l'application) et ouvre deux portes, gratuites au-delà du seuil quotidien
// compris dans l'offre sans carte bancaire :
//   POST /dire     → un grand modèle de langage répond comme Nath (Qwen, maison)
//   POST /decider  → Clef (Cloudflare) transforme un état + questions typées en décisions chiffrées
//
// Déploiement (une seule fois, ~2 minutes) :
//   npm i -g wrangler ; wrangler login
//   wrangler secret put CLOUDFLARE_API_TOKEN   (token Workers AI Read)
//   wrangler deploy
// Puis donner l'adresse https://…workers.dev à l'équipe : onglet 🎓 → Savoir →
// « Grand cerveau en ligne », coller l'adresse, Régler. C'est tout.

const ORIGINES = /^https:\/\/([a-z0-9-]+\.github\.io|localhost(:\d+)?)$/i;

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

export interface Env {
  AI: Ai;
  MODELE_DIRE?: string;
  MODELE_DECIDER?: string;
}

export default {
  async fetch(req, env): Promise<Response> {
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
        const r = await env.AI.run(env.MODELE_DIRE ?? '@cf/qwen/qwen3-32b', {
          messages,
          max_tokens: 400,
          temperature: 0.7,
        });
        return reponse({ result: { response: texteBrut(r).trim() } }, req);
      }

      if (url.pathname === '/decider') {
        const state = corps?.state;
        const questions = corps?.questions;
        if (typeof state !== 'string' || !questions || typeof questions !== 'object') {
          return reponse({ error: 'state et questions requis' }, req, 400);
        }
        const r = await env.AI.run(env.MODELE_DECIDER ?? '@cf/cloudflare/clef-flash', {
          model: 'clef-flash',
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
} satisfies ExportedHandler<Env>;
