// « Indispensables de métier » — des packs hors-ligne qui apprennent le geste,
// le vocabulaire exact, et les pièges du premier jour d'un métier.
//
// Ce fichier porte le contenu. Il est volontairement en français simple, sans
// jargon technique ni nom de moteur (doctrine), et structuré pour un affichage
// « un jour, une tâche, un mot, un piège » — pas une encyclopédie écrasante.
//
// Progression : un compteur par pack sous `nath.metiers.progression`, donc le
// coffre l'emporte sans qu'on ait à y toucher.

export interface Tache {
  titre: string;
  gestes: string[];
}

export interface MotCle {
  mot: string;
  sens: string;
}

export interface Piege {
  enoncé: string;
  eviter: string;
}

export interface PackMetier {
  id: string;
  nom: string;
  emoji: string;
  resume: string;
  taches: Tache[];
  glossaire: MotCle[];
  pieges: Piege[];
}

export const PACKS: PackMetier[] = [
  {
    id: 'couture',
    nom: 'Couture',
    emoji: '🧵',
    resume: 'Coudre un vêtement qui tombe bien, du premier essayage à la dernière boutonnière.',
    taches: [
      { titre: 'Prendre les mesures justes', gestes: [
        'Tour de poitrine au niveau le plus fort, sans serrer',
        'Tour de taille au creux naturel',
        'Tour de hanches au plus large',
        'Hauteur d’épaule jusqu’à l’ourlet voulu',
      ]},
      { titre: 'Décatir et couper le tissu', gestes: [
        'Laver ou vaporiser selon la fibre pour que le tissu ne bouge plus après couture',
        'Épingler le patron en suivant la lisière et le droit-fil',
        'Couper d’un seul geste, ciseaux bien à plat contre le tissu',
      ]},
      { titre: 'Assembler les grandes coutures', gestes: [
        'Faire un bâti (points larges à la main) pour un premier essayage',
        'Piquer à la machine en laissant 1,5 cm de marge autour du patron',
        'Cranter les courbes (petits traits en V) pour qu’elles posent plat',
      ]},
      { titre: 'Ourler et finitions', gestes: [
        'Surfiler le bord (zigzag ou overlock) pour empêcher l’effilochage',
        'Ourlet replié deux fois, repassé avant d’être cousu',
        'Coudre boutons et boutonnières à la main pour un rendu net',
      ]},
      { titre: 'Repasser et vérifier la tombe', gestes: [
        'Repasser à l’envers sur une surface plate',
        'Vérifier que les coutures ne tirent pas en portant le vêtement',
        'Couper les fils qui dépassent, un dernier coup de vapeur',
      ]},
    ],
    glossaire: [
      { mot: 'lisière', sens: 'bord du rouleau, la ligne droite du tissu' },
      { mot: 'droit-fil', sens: 'direction parallèle à la lisière — couper de travers fait tourner le vêtement' },
      { mot: 'bâti', sens: 'couture provisoire à grands points, défaite après essayage' },
      { mot: 'ourlet', sens: 'bord replié et cousu, en bas d’une manche ou d’une jupe' },
      { mot: 'surfil', sens: 'petit point qui empêche le tissu de s’effilocher' },
      { mot: 'crantés', sens: 'petits traits en V dans une courbe pour qu’elle pose à plat' },
      { mot: 'pince', sens: 'petit pli cousu pour cintrer la taille' },
      { mot: 'empiècement', sens: 'pièce de tissu rapportée, à l’épaule ou à la poitrine' },
    ],
    pieges: [
      { enoncé: 'Le bazin et le wax ne décatissent pas comme le coton', eviter: 'Vaporiser et laisser sécher à plat AVANT de couper ; sinon le vêtement tourne au premier lavage.' },
      { enoncé: 'Oublier la marge de couture autour du patron', eviter: 'Toujours 1,5 cm autour, 3 cm pour un ourlet long ; tracer la marge sur le tissu AVANT de couper.' },
      { enoncé: 'Piquer à la machine sans essayage préalable', eviter: 'Faire un bâti et essayer d’abord ; on défait une couture provisoire, on ne défait pas un vêtement coupé trop court.' },
      { enoncé: 'Couper en diagonale sans vérifier le droit-fil', eviter: 'Poser le tissu sur une table plate, aligner la lisière avec un bord de table, contrôler à chaque pièce.' },
    ],
  },
  {
    id: 'boulangerie',
    nom: 'Boulangerie',
    emoji: '🥖',
    resume: 'Faire un pain qui lève bien et croustille, du pétrissage à la sortie du four.',
    taches: [
      { titre: 'Peser et pétrir', gestes: [
        'Farine, eau, sel, levure — au gramme près, pas au verre',
        'Pétrir environ 10 minutes jusqu’à une pâte lisse et élastique',
        'La pâte doit se décoller des doigts en fin de pétrissage',
      ]},
      { titre: 'Pointage (première pousse)', gestes: [
        'Boule dans un récipient légèrement huilé',
        'Couver d’un linge humide ou d’un film',
        'Une à deux heures à température ambiante, jusqu’à doubler de volume',
      ]},
      { titre: 'Façonnage', gestes: [
        'Chasser l’air du centre vers les bords (dégazer)',
        'Former une boule ou un bâtard à surface bien tendue',
        'Entailler le dessus avec une lame, geste franc et rapide',
      ]},
      { titre: 'Apprêt (seconde pousse)', gestes: [
        'Sur plaque farinée ou dans un banneton côté fariné en l’air',
        '30 minutes à 1 heure : la pâte rebondit lentement sous le doigt',
        'Ne pas attendre qu’elle s’affaisse — c’est trop tard',
      ]},
      { titre: 'Cuisson', gestes: [
        'Four à 240 °C, lèchefrite d’eau bouillante en bas pour la buée',
        'Enfourner puis verser un verre d’eau pour créer le choc de vapeur',
        '20 à 25 minutes : croûte dorée, fond qui sonne creux',
      ]},
    ],
    glossaire: [
      { mot: 'pointage', sens: 'première pousse, après le pétrissage' },
      { mot: 'apprêt', sens: 'seconde pousse, après le façonnage' },
      { mot: 'levain', sens: 'pâte-mère naturelle (farine et eau fermentées), remplace la levure' },
      { mot: 'banneton', sens: 'osier qui porte la pâte pendant l’apprêt et marque ses rainures' },
      { mot: 'lame', sens: 'petit rasoir incliné pour entailler le pain' },
      { mot: 'grigne', sens: 'belle entaille ouverte à la cuisson, signe d’un bon pétri' },
      { mot: 'dégazer', sens: 'chasser l’air de la pâte entre les deux pousses' },
      { mot: 'coup de buff', sens: 'entaille unique d’un bâtard pour guider l’ouverture' },
    ],
    pieges: [
      { enoncé: 'Sel et levure en contact direct', eviter: 'Doser le sel d’un côté, la levure de l’autre, les mélanger via la farine — le sel tue la levure au contact.' },
      { enoncé: 'Eau trop chaude au pétrissage', eviter: 'L’eau doit être fraîche à tiède (jamais au-dessus de 40 °C) ; vérifier au poignet avant de verser.' },
      { enoncé: 'Ouvrir le four dans les quinze premières minutes', eviter: 'La buée et le choc thermique font la grigne — attendre au moins 15 minutes avant d’entrouvrir.' },
      { enoncé: 'Pâte qui retombe en fin d’apprêt', eviter: 'C’est que la pousse a été trop longue ; enfourner immédiatement, et raccourcir la prochaine fois.' },
    ],
  },
  {
    id: 'electricite',
    nom: 'Électricité',
    emoji: '🔌',
    resume: 'Câbler et sécuriser une installation domestique — disjoncteurs, prises, éclairage — sans se mettre en danger.',
    taches: [
      { titre: 'Lire le plan et compter les circuits', gestes: [
        'Séparer éclairage, prises et gros appareils (chauffe-eau, four, clim)',
        'Noter la section des fils et le calibre du disjoncteur pour chaque circuit',
        'Repérer où passe la terre avant de percer un mur',
      ]},
      { titre: 'Couper et vérifier avant de toucher', gestes: [
        'Disjoncteur général sur « Off » — pas seulement le circuit concerné',
        'Vérifier avec un testeur sans contact sur chaque conducteur',
        'Travailler à deux quand c’est possible : l’un veille, l’autre agit',
      ]},
      { titre: 'Poser le tableau et les différentiels', gestes: [
        'Un disjoncteur par circuit : 10 A lumière, 16 A prises, 20-32 A gros appareils',
        'Un interrupteur différentiel 30 mA en tête de groupe — c’est ce qui coupe au contact humain',
        'Terre reliée à un piquet enterré, section au moins 6 mm²',
      ]},
      { titre: 'Câbler une prise ou un point lumineux', gestes: [
        'Rouge/marron/noir = phase ; bleu = neutre ; vert-jaune = terre',
        'Serrer chaque fiche au couple indiqué, avec un tournevis isolé',
        'Tester au multimètre : 220-240 V entre phase et neutre',
      ]},
      { titre: 'Mettre sous tension et tester', gestes: [
        'Un circuit à la fois en remontant les disjoncteurs',
        'Contrôler chaque prise : phase, neutre, terre dans le bon ordre',
        'Faire vérifier par un électricien certifié avant livraison',
      ]},
    ],
    glossaire: [
      { mot: 'disjoncteur', sens: 'protège le circuit contre surcharge et court-circuit ; se rearme après déclenchement' },
      { mot: 'différentiel 30 mA', sens: 'coupe dès qu’une fuite part vers la terre — c’est le dispositif qui sauve' },
      { mot: 'phase', sens: 'le conducteur « qui tue », apporte le courant' },
      { mot: 'neutre', sens: 'le conducteur de retour, bleu' },
      { mot: 'terre', sens: 'vert-jaune qui évacue une fuite vers le sol, et protège la personne' },
      { mot: 'section', sens: 'aire du cuivre en mm² ; plus le circuit est long ou chargé, plus elle monte' },
      { mot: 'testeur sans contact', sens: 'crayon qui sonne près d’un conducteur sous tension' },
      { mot: 'liaison équipotentielle', sens: 'relier toutes les masses métalliques d’une même pièce à la terre' },
    ],
    pieges: [
      { enoncé: 'Travailler « juste vite » sans couper', eviter: 'Couper le général ET vérifier au testeur sur chaque conducteur avant de toucher. Les accidents n’attendent pas.' },
      { enoncé: 'Oublier la terre dans une pièce d’eau', eviter: 'Salle de bain, cuisine, extérieur : terre obligatoire à chaque prise + liaison équipotentielle des masses métalliques.' },
      { enoncé: 'Section du fil mal assortie au disjoncteur', eviter: '1,5 mm² ↔ 10-16 A ; 2,5 mm² ↔ 16-20 A ; 4 mm² ↔ 25 A ; 6 mm² ↔ 32 A. Le disjoncteur protège le fil, pas l’inverse.' },
      { enoncé: 'Fiche serrée « à l’œil »', eviter: 'Un desserrage fait un arc, un point chaud, un départ de feu. Serrer au couple du fabricant avec un tournevis isolé.' },
    ],
  },
];

export function trouverPack(id: string): PackMetier | null {
  return PACKS.find((p) => p.id === id) ?? null;
}

// Cycle honnête : tout index, même négatif ou fou, retombe sur une élément réel.
function cycle<T>(tab: readonly T[], index: number): T {
  const n = tab.length;
  if (n === 0) throw new Error('cycle: tableau vide');
  const i = Number.isFinite(index) ? Math.floor(index) : 0;
  return tab[((i % n) + n) % n];
}

export function tacheDuJour(pack: PackMetier, index: number): Tache {
  return cycle(pack.taches, index);
}
export function motDuJour(pack: PackMetier, index: number): MotCle {
  return cycle(pack.glossaire, index);
}
export function piegeDuJour(pack: PackMetier, index: number): Piege {
  return cycle(pack.pieges, index);
}

// Progression : un jour par visite, un compteur par pack, sous « nath. » pour que
// le coffre l'emporte sans rien ajouter.
export const CLE_PROGRESSION = 'nath.metiers.progression';
type Stockage = Pick<Storage, 'getItem' | 'setItem'>;

function lireProgression(stock: Stockage): Record<string, number> {
  const brut = stock.getItem(CLE_PROGRESSION);
  if (!brut) return {};
  try {
    const o = JSON.parse(brut) as unknown;
    if (!o || typeof o !== 'object') return {};
    const out: Record<string, number> = {};
    for (const [k, v] of Object.entries(o as Record<string, unknown>)) {
      if (typeof v === 'number' && Number.isFinite(v) && v >= 0) out[k] = Math.floor(v);
    }
    return out;
  } catch {
    return {}; // donnée menteur → on repart de zéro, jamais on ne casse l'affichage
  }
}

export function progressionDe(id: string, stock: Stockage): number {
  return lireProgression(stock)[id] ?? 0;
}

export function avancerJour(id: string, stock: Stockage): number {
  const p = lireProgression(stock);
  const suivant = (p[id] ?? 0) + 1;
  p[id] = suivant;
  stock.setItem(CLE_PROGRESSION, JSON.stringify(p));
  return suivant;
}
