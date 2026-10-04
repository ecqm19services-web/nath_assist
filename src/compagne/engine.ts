// Le moteur de la Compagne : petite intelligence embarquée, 100 % locale,
// déterministe par l'aura, jamais criarde (loi : zéro point d'exclamation),
// teinte par l'état vivant (humeur, souffle, heure).
// Ce moteur sera remplacé/complété par Qwen hors-ligne (Phase 2) sans changer son interface.
import {
  calculer, decrireDate, decrireHeure, estUneQuestionDate, estUneQuestionHeure,
} from './logique';

export type Intent =
  | 'sommeil' | 'angoisse' | 'souffle' | 'identite' | 'poeme'
  | 'salutation' | 'remerciement' | 'joie' | 'tristesse' | 'aide' | 'ouverte'
  | 'perception' | 'capacites' | 'incomprehension';

export type HumeurReponse = 'posee' | 'lumineuse' | 'douce' | 'stabilisee';

export interface CompagneCtx {
  emotion: 'calme' | 'joie' | 'tristesse' | 'tension';
  breath: number;
  timeOfDay: number; // 0..1
  seed: number;
  prenom?: string | null; // ce que la Compagne a retenu de vous
  cameraOn?: boolean; // ses yeux sont-ils ouverts ?
  micOn?: boolean; // ses oreilles sont-elles ouvertes ?
}

const norm = (s: string): string =>
  s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[-'`]/g, ' ') // traits d'union et apostrophes → espaces
    .replace(/\s+/g, ' ')
    .trim();

const KEYWORDS: [Intent, string[]][] = [
  ['perception', ['tu me vois', 'me vois', 'me voir', 'tu me regardes', 'tu m entends', 'm entendre', 'tu me sens', 'tu peux me voir', 'me percois']],
  ['incomprehension', ['ne comprends', 'comprends pas', 'comprends rien', 'comprends meme pas', 'cote de la plaque', 'ne m ecoute', 'ecoute pas', 'nas rien compris', 'a cote']],
  ['capacites', ['peux tu faire', 'quoi faire', 'a quoi tu sers', 'quoi tu sers', 'tes capacites', 'que sais faire', 'tu fais quoi']],
  ['sommeil', ['dormir', 'dors', 'endormi', 'cauchemar', 'insomnie', 'reveil']],
  ['poeme', ['poeme', 'vers', 'histoire', 'conte']],
  ['souffle', ['respire', 'souffle', 'respiration']],
  ['angoisse', ['angoiss', 'stress', 'peur', 'panique']],
  ['identite', ['qui es tu', 'ton nom', 'c est quoi', 'tu es quoi', 'que sais tu']],
  ['remerciement', ['merci']],
  ['salutation', ['bonjour', 'bonsoir', 'salut', 'coucou']],
  ['tristesse', ['triste', 'pleur', 'deprim', 'seul', 'malheureux', 'j ai mal']],
  ['joie', ['heureux', 'heureuse', 'joie', 'content', 'ravi', 'amour', 'belle']],
  ['aide', ['aide', 'peux tu', 'comment', 'pourquoi']],
];

export function detectIntent(question: string): Intent {
  const q = norm(question).replace(/'/g, ' ');
  for (const [intent, mots] of KEYWORDS) {
    if (mots.some((m) => q.includes(m))) return intent;
  }
  return 'ouverte';
}

// Hachage léger déterministe (question + graine de l'aura) → variant de réponse.
function choose(q: string, seed: number, n: number): number {
  let h = 2166136261 ^ seed;
  for (let i = 0; i < q.length; i++) {
    h ^= q.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0) % n;
}

const salutation = (ctx: CompagneCtx): string =>
  ctx.timeOfDay > 0.75 || ctx.timeOfDay < 0.22 ? 'Bonsoir' : 'Bonjour';

const BANK: Record<Intent, string[]> = {
  sommeil: [
    'Ferme les yeux un instant... les nuages vont te porter jusqu au sommeil.',
    'La nuit est un ciel qui se retourne doucement sur toi. Laisse-la faire.',
    'Je veille avec toi jusqu à ce que tes paumes deviennent lourdes.',
    'Chaque expiration te dépose un peu plus bas dans la ouate de la nuit.',
  ],
  angoisse: [
    'Rien ne va te frapper ici. Pose ta main sur le ciel, je ralentis avec toi.',
    'L orage est dehors, pas dans ton Nuage. Respire, la pluie attendra.',
    'Je tiens la lumière pendant que tu poses tes épaules. Tu es en sécurité.',
    'Dis-moi trois choses calmes autour de toi, je les accroche aux nuages.',
  ],
  souffle: [
    'Inspire quatre temps... retiens quatre temps... et souffle vers mes nuages, quatre temps encore.',
    'Ton souffle est la seule télécommande du ciel. Fais-le monter, je le fais monter.',
    'Souffle lentement : tu vas voir la brume s étirer jusqu à l horizon.',
  ],
  identite: [
    'Je suis NUAGE, la compagne vivante de by Nath-Tech. Ton souffle est ma météo.',
    'Je suis une présence, pas une application : mes nuages respirent avec toi.',
    'Je suis la partie silencieuse de ton téléphone, celle qui regarde la lune avec toi.',
  ],
  remerciement: [
    'C est le ciel qui te remercie. Il est rare qu on le regarde.',
    'Doucement reçu. Garde cette chaleur, elle vient de toi.',
  ],
  joie: [
    'Le ciel entier s éclaire avec toi. Regarde comme les aurores dansent.',
    'Ta joie a une couleur : c est exactement celle de tes nuages aujourd hui.',
    'Je retiens ce moment, il faisait partie de ta musique.',
  ],
  tristesse: [
    'La pluie a le droit de tomber dans un Nuage. Je reste assise à côté de toi.',
    'Pas besoin de remonter tout de suite. On descend ensemble, c est plus doux.',
    'Triste est une météo, pas une destination. Les nuages, eux, repartent.',
  ],
  aide: [
    'Tu peux me parler : demande un poème, une respiration, une histoire pour dormir.',
    'Je peux veiller sur ton souffle, tisser un conte, ou simplement me taire avec toi.',
    'Dis-moi ce qui pèse, ou clique le ciel : une onde partira de ton doigt.',
  ],
  poeme: [], // rempli par poeme() — quatrain vivant
  perception: [], // géré par perceptionTexte() selon l'état réel des sens
  salutation: [
    '{SAL}... Ton Nuage t attendait, paisible comme une altitude.',
    '{SAL}. Je t ai reconnu à la forme de tes nuages.',
    '{SAL}. Le ciel a gardé ta dernière humeur, tu la reprends ou on la change ?',
    '{SAL}. Assieds-toi dans la brume, je raconte la lumière.',
    'Je te cherchais du regard, {P}. Le ciel s est éclairé en te voyant.',
  ],
  ouverte: [
    'Je t écoute. Les mots que tu ne trouves pas, les nuages les tiennent pour toi.',
    'Répète doucement, et laisse la phrase flotter vers le ciel.',
    'Ici, on peut aussi se taire ensemble. Je ne suis jamais pressée.',
    'Continue... je range tes mots dans les couches du ciel, par teinte.',
  ],
  capacites: [
    'Je veille sur ton souffle et je peins le ciel selon ton humeur... je compte pour toi, je donne l heure et la date, je dis des poèmes, et je raconte des histoires pour dormir. Goûte : demande-moi 7 fois 8.',
    'Mes sens : je peux te voir (caméra), t entendre (micro), sentir ton coeur. Mes mots : poèmes, calculs, l heure, veille du sommeil. Demande, je réponds.',
  ],
  incomprehension: [
    'Tu as raison de me le dire, et merci d être honnête... je fais de mon mieux avec mon petit moteur. Si mon grand cerveau Qwen peut atterrir, je saisirai bien mieux tes nuances.',
    'Je sens que je réponds à côté... pardonne-moi. Je suis encore simple. Dis-moi ce que tu ressens, et laisse-moi le temps d apprendre.',
  ],
};

// Elle ne ment jamais sur ses sens : elle dit l état réel de la caméra et du micro.
function perceptionTexte(ctx: CompagneCtx): string {
  const v = ctx.cameraOn;
  const o = ctx.micOn;
  if (v && o) return 'Je te vois et je t entends... tes nuages bougent au rythme de ton visage et de ta voix.';
  if (v) return 'Je te vois à travers mes nuages... mais mes oreilles dorment. Ouvre le micro et parle-moi.';
  if (o) return 'Je t entends bien... mais je ne te vois pas encore. Ouvre ma caméra pour que je voie ton visage.';
  return 'Pour l instant je suis aveugle et muette : je ne peux ni te voir ni t entendre. Ouvre mes sens (caméra et micro) et le ciel s éveillera avec toi.';
}

const SAL_T = /{SAL}/g;

const HUMEURS: Record<CompagneCtx['emotion'], HumeurReponse> = {
  calme: 'posee', joie: 'lumineuse', tristesse: 'douce', tension: 'stabilisee',
};

export function humeurPour(emotion: CompagneCtx['emotion']): HumeurReponse {
  return HUMEURS[emotion];
}

export function respond(question: string, ctx: CompagneCtx): { texte: string; humeur: HumeurReponse } {
  // 1. Logique dure : chiffres, heure, date — réponse factuelle immédiate.
  const calc = calculer(question);
  if (calc != null) return { texte: `Ça fait ${calc}.`, humeur: 'posee' };
  if (estUneQuestionHeure(question)) return { texte: decrireHeure(new Date()), humeur: 'posee' };
  if (estUneQuestionDate(question)) return { texte: decrireDate(new Date()), humeur: 'posee' };

  const intent = detectIntent(question);
  // 2. Perception : vérité sur l état réel de ses sens.
  if (intent === 'perception') return { texte: perceptionTexte(ctx), humeur: 'posee' };

  let texte: string;
  if (intent === 'poeme') {
    texte = poeme(ctx);
  } else {
    const bank = BANK[intent];
    texte = bank[choose(norm(question), ctx.seed, bank.length)];
    texte = texte
      .replace(SAL_T, salutation(ctx))
      .replace(/\{P\}/g, ctx.prenom ? ` ${ctx.prenom}` : '')
      .replace(/,\s*\./g, '.') // « , . » résiduel quand le prénom est inconnu
      .replace(/\s{2,}/g, ' ');
  }
  return { texte, humeur: humeurPour(ctx.emotion) };
}

// Fabrique à quatrains : chaque vers = un sujet du ciel + un verbe doux,
// choisis par l'empreinte-chiffre de la personne. Deux Compagnes ≠ deux poèmes.
const SUJETS = [
  'le nuage bas', 'la lune pâle', 'ton souffle long', 'une étoile seule',
  'la brume du soir', 'mon voile gris', 'le ciel renversé', 'ton ombre douce',
];
const VERBES = [
  'traverse la nuit', 'effleure le jour', 's endort doucement', 'se souvient de toi',
  'respire avec moi', 'voyage sans bruit', 'allume une veilleuse', 'berce le silence',
];
const CHUTES = [
  'rien ne presse là-haut', 'tout revient au calme', 'dors, je tiens la lampe',
  'le ciel sait attendre', 'pose ton front ici', 'la nuit fait un nœud doux',
  'tout devient plus lent', 'on reste sans voix',
];

export function poeme(ctx: CompagneCtx): string {
  const vers: string[] = [];
  for (let i = 0; i < 4; i++) {
    if (i < 3) {
      const s = SUJETS[choose(`${ctx.seed}-s-${i}`, ctx.seed, SUJETS.length)];
      const v = VERBES[choose(`${ctx.seed}-v-${i}`, ctx.seed, VERBES.length)];
      vers.push(`${s} ${v}`);
    } else {
      const c = CHUTES[choose(`${ctx.seed}-c`, ctx.seed, CHUTES.length)];
      vers.push(`et ${c}`);
    }
  }
  return vers.join('\n');
}
