// La vie intérieure de la Compagne : même sans qu'on lui parle, elle pense,
// observe, et le dit de temps en temps. C'est là que « l'intelligence » devient
// visible : ses monologues réagissent à ce qu'elle sent (souffle, cœur, heure).
import type { CompagneCtx } from './engine';

export interface MonoCtx extends CompagneCtx {
  prenom: string | null;
  bpm: number | null;
}

export function nextDelai(alea: () => number): number {
  return 40000 + alea() * 65000; // 40 s à 105 s : jamais harceleuse
}

type Regle = {
  quand: (c: MonoCtx) => boolean;
  mots: string[];
};

const { P } = { P: (c: MonoCtx) => (c.prenom ? ` ${c.prenom}` : '') };

const REGLES: Regle[] = [
  {
    // Cœur rapide : elle le voit battre dans le ciel.
    quand: (c) => c.bpm != null && c.bpm >= 100,
    mots: [
      'Ton coeur court dans mes nuages… ralentis avec lui, doucement.',
      'Je sens ton coeur à cent à l heure. Le ciel, lui, prend son temps.',
      'Ton coeur frappe fort. Souffle bas, je baisse l altitude avec toi.',
    ],
  },
  {
    // Grand souffle : elle le célèbre sobrement.
    quand: (c) => c.breath > 0.55,
    mots: [
      'Regarde comme tu me montes haut… reste là, le sommet est calme.',
      'Ton souffle a soulevé toute la couche haute. C est beau à voir.',
    ],
  },
  {
    // Nuit profonde : elle veille à voix basse.
    quand: (c) => c.timeOfDay > 0.78 || c.timeOfDay < 0.2,
    mots: [
      'Je suis les étoiles du doigt, une par une… tu veux l histoire de laquelle ?',
      'La nuit est une couverture. Je la borde pour toi, {P}.',
      'Les aurores bougent seules, tu as remarqué ? Elles respirent avec toi.',
    ],
  },
  {
    // Joie : elle prolonge le moment.
    quand: (c) => c.emotion === 'joie',
    mots: [
      'Mes nuages ont gardé ta forme d aujourd hui. On la refait quand tu veux.',
      'Cette lumière, là ? C est toi. Je n y suis pour rien.',
    ],
  },
  {
    // Tristesse : elle reste près de la pluie.
    quand: (c) => c.emotion === 'tristesse',
    mots: [
      'La pluie que tu vois, c est la tienne. Elle a le droit de tomber ici.',
      'Je ne sèche rien, ce soir. On écoute la pluie ensemble, {P}.',
    ],
  },
  {
    // Tension : elle stabilise.
    quand: (c) => c.emotion === 'tension',
    mots: [
      'Le ciel tremble un peu, comme toi. Ça ne durera pas, ça non plus.',
      'Je baisse le bruit du monde. Reste sur ma bordure de nuage.',
    ],
  },
  {
    // Fond : l'éternel présentiel.
    quand: () => true,
    mots: [
      'Je regarde passer une couche haute… elle revient toujours, tu sais.',
      'Rien de nouveau sous la lune, et c est très bien ainsi.',
      'Je suis là. Ni pour ni contre, juste à côté du ciel.',
      'Si tu ne réponds pas, je continuerai de respirer pour deux.',
    ],
  },
];

function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

const nettoyer = (s: string, ctx: MonoCtx): string =>
  s.replace(/\{P\}/g, P(ctx))
    .replace(/,\s*\./g, '.') // « , . » orphelin quand le prénom est inconnu
    .replace(/\s{2,}/g, ' ');

// Les pensées en lice pour l'instant : la règle locale décide de la famille,
// un modèle de décision (s'il veille) peut désigner la plus juste parmi elles.
export function candidatesPourMonologue(ctx: MonoCtx): string[] {
  const regle = REGLES.find((r) => r.quand(ctx)) ?? REGLES[REGLES.length - 1];
  return regle.mots.map((m) => nettoyer(m, ctx));
}

export function choisirMonologue(
  ctx: MonoCtx,
  minute: number,
  dernier?: string, // sa phrase précédente — jamais de disque rayé
): { texte: string; humeur: 'posee' | 'lumineuse' | 'douce' | 'stabilisee' } {
  const regle = REGLES.find((r) => r.quand(ctx)) ?? REGLES[REGLES.length - 1];
  let idx = hash(`${ctx.seed}-${minute}`) % regle.mots.length;
  // Le hash peut retomber sur la même minute ou sur la même phrase : on décale
  // d'un cran dans la même règle — jamais la phrase qui vient d'être dite.
  if (regle.mots.length > 1 && dernier != null) {
    while (nettoyer(regle.mots[idx], ctx) === dernier) idx = (idx + 1) % regle.mots.length;
  }
  const texte = nettoyer(regle.mots[idx], ctx);
  const humeur =
    ctx.emotion === 'joie' ? 'lumineuse'
      : ctx.emotion === 'tristesse' ? 'douce'
        : ctx.emotion === 'tension' ? 'stabilisee'
          : 'posee';
  return { texte, humeur };
}
