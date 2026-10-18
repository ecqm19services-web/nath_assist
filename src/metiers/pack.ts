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
  // Liste des codes ISO où le pack s'applique. Absent = universel.
  pays?: string[];
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
  {
    id: 'cuisine-senegalaise',
    nom: 'Cuisine sénégalaise',
    emoji: '🍲',
    pays: ['SN'],
    resume: 'Réussir le thiéboudienne, le yassa et le mafé — riz qui tient, sauce qui a du goût.',
    taches: [
      { titre: 'Préparer le thiéboudienne (ceeb u jën)', gestes: [
        'Tremper et rincer le riz (bruku) pour ôter l’amidon : il tiendra à la cuisson.',
        'Piler piment, oignon, ail et persil pour la base de sauce (majeun).',
        'Faire saisir brièvement le poisson (thiof, capitaine) pour le tenir ferme.',
        'Laisser mijoter la sauce avec les légumes : carotte, chou, aubergine, manioc.',
      ] },
      { titre: 'Mariner le yassa', gestes: [
        'Presser généreusement le citron ; mélanger oignon émincé, moutarde, un peu d’arachide.',
        'Laisser reposer poulet ou poisson au moins 2 h ; une nuit, c’est mieux.',
        'Faire fondre les oignons doucement, sans les brûler.',
      ] },
      { titre: 'Conduire le mafé', gestes: [
        'Cuire la pâte d’arachide à petit feu, en remuant sans arrêt (ça attache vite).',
        'Ajouter le bouillon progressivement jusqu’à la « rosée » qui remonte en surface.',
        'Mettre la viande (bœuf, mouton) tôt pour qu’elle fonde à la cuisson.',
      ] },
      { titre: 'Cuire le riz sans le coller', gestes: [
        'Goûter et rectifier l’assaisonnement avant d’ajouter le riz.',
        'Riz en pluie, bouillon à hauteur, cuisson à couvert, sans remuer.',
        'Finir à feu doux pour que les grains restent entiers.',
      ] },
      { titre: 'Servir et accompagner', gestes: [
        'Verser la sauce sur le riz, ne pas la mélanger dans le chaudron.',
        'Servir avec ataya (thé à la menthe) et fruits coupés.',
      ] },
    ],
    glossaire: [
      { mot: 'ceeb u jën', sens: 'thiéboudienne : riz cuit dans la sauce au poisson, plat national' },
      { mot: 'majeun', sens: 'base pilée de piment, oignon, ail qui donne le goût à la sauce' },
      { mot: 'bruku', sens: 'riz brisé parfumé, trempé et rincé avant cuisson' },
      { mot: 'niébé', sens: 'haricots à œil noir, base du thiéboudienne « niebé-pé »' },
      { mot: 'thiof', sens: 'poisson noble (épigone), pièce de choix du ceeb u jën' },
      { mot: 'yassa', sens: 'plat mariné citron-oignon, poulet (yassa poulets) ou poisson' },
      { mot: 'mafé', sens: 'sauce à la pâte d’arachide avec viande ou poisson' },
      { mot: 'ataya', sens: 'thé à la menthe, servi en trois verres de plus en plus sucré' },
    ],
    pieges: [
      { enoncé: 'Riz collant au thiéboudienne', eviter: 'Rincer et tremper le riz pour ôter l’amidon, puis ne plus remuer après l’ébullition.' },
      { enoncé: 'Pâte d’arachide brûlée dans le mafé', eviter: 'Ne jamais laisser la pâte sans remuer : feu doux, cuillère en bois, bouillon dès que ça épaissit.' },
      { enoncé: 'Yassa trop acide', eviter: 'Ne pas noyer le citron : l’équilibrer avec oignon fondu, moutarde et une pincée de sucre.' },
      { enoncé: 'Manioc encore dur dans la sauce', eviter: 'Le manioc cuit plus longtemps que la carotte : le mettre en premier, la carotte en dernier.' },
    ],
  },
  {
    id: 'premiers-soins',
    nom: 'Premiers soins',
    emoji: '🚑',
    resume: 'Protéger, alerter, secourir — les gestes qui sauvent en attendant les urgences.',
    taches: [
      { titre: 'Protéger la zone', gestes: [
        'Couper le courant si accident électrique, écarter la source si feu.',
        'Mettre des gants si disponibles ; ne jamais toucher du sang sans protection.',
        'Ne déplacer la victime que s’il y a un surdanger immédiat (feu, effondrement).',
      ] },
      { titre: 'Alerter les secours', gestes: [
        'Appeler le 15 (médecine d’urgence), le 18 (pompiers), le 112 (numéro unique).',
        'Donner : lieu précis, nature du problème, nombre de victimes, conscient ou non.',
        'Ne pas raccrocher avant que le régulateur vous le dise.',
      ] },
      { titre: 'Réanimation cardio-pulmonaire (adulte)', gestes: [
        'Victime qui ne répond pas et ne respire pas normalement.',
        '30 compressions au milieu du sternum, 5 à 6 cm de profondeur, 100 à 120 par minute.',
        'Puis 2 insufflations (front-menton, pincer le nez) ; si non formé, compressions seules en continu.',
      ] },
      { titre: 'Position latérale de sécurité (inconscient qui respire)', gestes: [
        'Bras du côté à l’équerre, plier la jambe opposée.',
        'Basculer sur le côté en tirant sur le genou.',
        'Tête légèrement penchée en arrière pour laisser passer l’air.',
      ] },
      { titre: 'Étouffement (adulte conscient)', gestes: [
        '5 claques dans le dos, entre les omoplates.',
        '5 compressions abdominales (Heimlich) : poing sous le sternum, serré vers le haut.',
        'Alterner jusqu’à expulsion, ou perte de conscience → alors RCP.',
      ] },
    ],
    glossaire: [
      { mot: 'PSE', sens: 'Protéger, Secourir, Expliquer : le schéma officiel des premiers secours' },
      { mot: 'RCP', sens: 'réanimation cardio-pulmonaire : compressions pour faire circuler le sang' },
      { mot: 'PLS', sens: 'position latérale de sécurité : pour une personne inconsciente qui respire' },
      { mot: 'DSA', sens: 'défibrillateur automatisé ; les instructions se lisent seules, ne pas avoir peur' },
      { mot: 'hémorragie', sens: 'saignement abondant : compresser fort, ne pas poser de garrot sauf cas extrême' },
      { mot: 'brûlure grave', sens: 'plus grande qu’une paume, ou sur visage/mains/parties génitales → urgences' },
      { mot: 'convulsion', sens: 'secousses involontaires : ne rien mettre dans la bouche, protéger la tête' },
      { mot: 'malaise', sens: 'toute victime qui change de comportement : allonger, parler, appeler le 15' },
    ],
    pieges: [
      { enoncé: 'Mettre les doigts dans la bouche d’un convulsant', eviter: 'Ne jamais introduire d’objet ni de doigt : protéger la tête et attendre la fin de la crise.' },
      { enoncé: 'Donner à boire à une victime inconsciente', eviter: 'Ne jamais donner à boire (ni à manger) : risque de fausse route vers les poumons.' },
      { enoncé: 'Tirer sur un membre cassé', eviter: 'Ne jamais réduire une fracture : immobiliser en l’état et alerter les secours.' },
      { enoncé: 'Retirer un objet planté', eviter: 'Ne pas l’extraire : le stabiliser autour avec des bandages et laisser faire les secours.' },
    ],
  },
  {
    id: 'cuisine-afrique-ouest',
    nom: 'Cuisine d’Afrique de l’Ouest',
    emoji: '🍛',
    pays: ['CI', 'ML', 'BF', 'GN', 'BJ', 'TG', 'GH', 'NG', 'CM', 'MR'],
    resume: 'Banku, attiéké, foutou, jollof — la cuisine de tous les jours, du Golfe de Guinée au Sahel.',
    taches: [
      { titre: 'Réussir le banku (Ghana, Togo, Bénin, CI)', gestes: [
        'Fermer la pâte maïs + manioc la veille pour qu’elle lève légèrement.',
        'Cuire dans l’eau bouillante en remuant sans arrêt jusqu’à ce que ça se détache de la casserole.',
        'Former des boules à la main mouillée, servir aussitôt.',
      ] },
      { titre: 'Préparer l’attiéké (Côte d’Ivoire)', gestes: [
        'Essorer soigneusement la semoule de manioc fermentée avant la cuisson vapeur.',
        'Cuire à la vapeur 15 à 20 min, remuer une fois à mi-parcours.',
        'Servir avec poisson grillé, oignon, tomate, piment et citron.',
      ] },
      { titre: 'Piler le foutou / foufou', gestes: [
        'Cuire igname ou plantain très tendre : trop ferme, ça ne pile pas.',
        'Piler au mortier jusqu’à obtenir une pâte lisse, en tournant.',
        'Former une boule compacte, saucer abondamment.',
      ] },
      { titre: 'Conduire le jollof rice', gestes: [
        'Faire revenir oignon, gingembre, piment dans l’huile, puis verser la tomate/poivron mixés.',
        'Laisser réduire la sauce avant d’ajouter le riz ; bouillon à hauteur.',
        'Feu doux, couvercle, et ne pas remuer : le goût vient du fond légèrement accroché.',
      ] },
      { titre: 'Assaisonner sans masquer', gestes: [
        'Bouillon en poudre avec parcimonie ; goûter avant d’en rajouter.',
        'Piment entier dans la sauce plutôt que moulu — on peut le retirer.',
        'Terminer avec un filet de citron ou une pâte de piment frais.',
      ] },
    ],
    glossaire: [
      { mot: 'banku', sens: 'pâte fermentée maïs + manioc, plat de Ghana, Togo, Bénin et du sud ivoirien' },
      { mot: 'attiéké', sens: 'semoule de manioc fermentée, typique de la Côte d’Ivoire' },
      { mot: 'foutou / foufou', sens: 'igname ou plantain pilé, avec sauce arachide ou gombo' },
      { mot: 'jollof rice', sens: 'riz tomate-piment mijoté, cousin ouest-africain du thiéboudienne' },
      { mot: 'ndolé', sens: 'sauce arachide et feuilles amères, plat camerounais' },
      { mot: 'saka-saka / pondu', sens: 'feuilles de manioc cuites en sauce épaisse' },
      { mot: 'garba', sens: 'attiéké + thon frit + oignon/piment, snack ivoirien' },
      { mot: 'alloco', sens: 'banane plantain frite, accompagnement universel' },
    ],
    pieges: [
      { enoncé: 'Banku granuleux', eviter: 'Ne pas verser la pâte dans l’eau froide : eau bouillante et remuer sans arrêt jusqu’à ce que la pâte se détache des parois.' },
      { enoncé: 'Attiéké collant', eviter: 'Ne pas noyer de vapeur : essorer assez avant la cuisson et ne tasser la semoule dans le panier.' },
      { enoncé: 'Foutou qui ne pile pas', eviter: 'Ne pas piler de l’igname à demi cuite : prolonger la cuisson jusqu’à tendreté complète.' },
      { enoncé: 'Jollof remué en continu', eviter: 'Ne jamais remuer pendant la cuisson : le goût vient du riz qui attache légèrement au fond.' },
    ],
  },
  {
    id: 'crise-survie',
    nom: 'Crise & survie',
    emoji: '🆘',
    resume: 'Quand l’hôpital, l’eau courante ou le frigo ne sont plus là : les gestes de base.',
    taches: [
      { titre: 'Rendre l’eau potable', gestes: [
        'Filtrer si l’eau est trouble (tissu propre), puis laisser décanter 30 min.',
        'Faire bouillir 1 minute à gros bouillons (3 minutes en altitude), refroidir à couvert.',
        'Sans feu : diluer quelques gouttes d’eau de javel sans additif, attendre 30 minutes.',
      ] },
      { titre: 'Soigner une plaie sans plateau technique', gestes: [
        'Se laver les mains, mettre des gants si disponibles.',
        'Rincer abondamment à l’eau potable ou au sérum, sans frotter.',
        'Couvrir d’un linge propre changé chaque jour ; surveiller rougeur, pus, fièvre.',
      ] },
      { titre: 'Hygiène de fortune', gestes: [
        'Creuser une latrine à plus de 30 m de la source d’eau, en aval.',
        'Lavage des mains au savon ou à la cendre avant de manger et après les toilettes.',
        'Trier les ordures ; brûler ou enterrer ce qui pourrit.',
      ] },
      { titre: 'Conserver sans réfrigérateur', gestes: [
        'Salaison, séchage au soleil ou enfumage pour viandes et poissons.',
        'Fermentation lacto en bocal propre pour les légumes, sous eau salée.',
        'Consommer sous 24 h tout ce qui est cuit à l’eau.',
      ] },
      { titre: 'Organiser le rationnement', gestes: [
        'Calculer l’eau : 3 L par personne et par jour (boisson + cuisine).',
        'Stocker sec sur 3 à 7 jours : céréale, légumineuse, huile, sel, sucre.',
        'Prioriser femmes enceintes, enfants, blessés et personnes âgées dans la distribution.',
      ] },
    ],
    glossaire: [
      { mot: 'SRO', sens: 'sels de réhydratation orale : poudre + eau potable, contre la déshydratation' },
      { mot: 'ébullition', sens: 'faire bouillir à gros bouillons au moins 1 minute pour tuer les microbes' },
      { mot: 'chloration', sens: 'désinfecter l’eau avec de l’eau de javel sans additif, à dose précise' },
      { mot: 'chaîne du froid', sens: 'température maîtrisée du producteur au consommateur ; sans frigo, ne pas stocker' },
      { mot: 'latrine', sens: 'toilette de fortune, loin des sources d’eau, en aval' },
      { mot: 'denrée non périssable', sens: 'céréale, légumineuse sèche, miel, sel : longue conservation sans froid' },
      { mot: 'ration de survie', sens: 'quantité minimale pour tenir : eau + calories + sel' },
      { mot: 'triage', sens: 'classer les blessés par gravité pour traiter d’abord ceux qui peuvent être sauvés' },
    ],
    pieges: [
      { enoncé: 'Eau de javel concentrée directement', eviter: 'Ne jamais boire de javel pure : toujours diluer, attendre 30 minutes, viser un léger chlore résiduel.' },
      { enoncé: 'Poudre, café ou terre sur une plaie', eviter: 'Ne rien mettre dans une plaie ouverte : uniquement eau propre et pansement.' },
      { enoncé: 'SRO forcé chez une victime inconsciente', eviter: 'Ne jamais forcer à boire un inconscient ; si les vomissements continuent, chercher un secours.' },
      { enoncé: 'Mélanger javel et ammoniaque', eviter: 'Ne pas mélanger les produits ménagers entre eux : dégagement de gaz toxique.' },
    ],
  },
  {
    id: 'approvisionnement',
    nom: 'Approvisionnement',
    emoji: '📦',
    resume: 'Anticiper les tensions : stock, fournisseurs, prix. Une méthode, pas une panique.',
    taches: [
      { titre: 'Cartographier ses sources', gestes: [
        'Lister par famille de produit : marché, grossiste, producteur, voisin.',
        'Noter les délais de livraison et les jours de fermeture.',
        'Identifier un fournisseur de repli pour chaque famille.',
      ] },
      { titre: 'Construire un stock tampon', gestes: [
        'Eau potable : 3 L par personne et par jour, dans un récipient alimentaire propre.',
        'Sec : céréale, légumineuse, huile, sel, sucre, pour 3 à 7 jours.',
        'Médicaments et hygiène essentielle : renouvellement sans rupture.',
      ] },
      { titre: 'Diversifier les fournisseurs', gestes: [
        'Au moins deux sources pour chaque denrée critique.',
        'Alterner circuit court (producteur) et grossiste.',
        'Étaler les achats dans le temps, éviter un seul jour « tout-ou-rien ».',
      ] },
      { titre: 'Suivre les prix', gestes: [
        'Cahier ou tableur : date, produit, prix d’achat, lieu.',
        'Fixer un seuil d’alerte par produit (+30 % sur 30 jours).',
        'Comparer le prix de revient réel, pas seulement le prix affiché.',
      ] },
      { titre: 'Préserver la chaîne du froid', gestes: [
        'Charger du plus solide au plus fragile, produits sensibles en haut.',
        'Sac isotherme + glace pour le trajet ; ouvrir le moins souvent.',
        'À la maison, consommer d’abord ce qui a le plus chaud.',
      ] },
    ],
    glossaire: [
      { mot: 'stock tampon', sens: 'quantité gardée en réserve pour absorber une tension ou une rupture' },
      { mot: 'denrée non périssable', sens: 'se conserve des mois sans froid : céréales, légumineuses sèches, sel' },
      { mot: 'circuit court', sens: 'achat direct au producteur ou avec un seul intermédiaire' },
      { mot: 'fournisseur de repli', sens: 'celui qu’on appelle quand le principal n’a plus' },
      { mot: 'prix de revient', sens: 'tout ce que le produit coûte vraiment : achat + transport + stockage + perte' },
      { mot: 'seuil d’alerte', sens: 'niveau de stock ou de prix qui déclenche un réapprovisionnement' },
      { mot: 'résilience', sens: 'capacité à continuer à fonctionner malgré une tension' },
    ],
    pieges: [
      { enoncé: 'Tout acheter d’un coup pour six mois', eviter: 'Ne pas sur-stocker d’un seul coup : trésorerie bloquée, qualité dégradée, cible pour les cambrioleurs.' },
      { enoncé: 'Stocker de l’eau dans un bidon à carburant', eviter: 'Ne jamais réutiliser un récipient ayant contenu du carburant ou un produit chimique.' },
      { enoncé: 'Dépendre d’un seul fournisseur', eviter: 'Ne pas se mettre en otage d’une seule source : toujours avoir un repli prêt.' },
      { enoncé: 'Produits fragiles au fond du sac', eviter: 'Ne pas écraser les sensibles : lourd en bas, fragile en haut.' },
    ],
  },
  {
    id: 'coiffure',
    nom: 'Coiffure & tressage',
    emoji: '💇‍♀️',
    resume: 'Coiffer et tresser proprement, sans abîmer le cheveu ni la cliente.',
    taches: [
      { titre: 'Consulter avant de toucher', gestes: [
        'Regarder le cuir chevelu : pellicules, irritations, plaies, poux.',
        'Demander les produits déjà utilisés et les allergies connues.',
        'Annoncer le prix et la durée avant de commencer.',
      ] },
      { titre: 'Laver et préparer', gestes: [
        'Eau tiède, pas brûlante : le cuir sensible gonfle avec la chaleur.',
        'Shampoing adapté au type de cheveu, masquer des longueurs.',
        'Rincer abondamment, puis appliquer une crème sans rinçage.',
      ] },
      { titre: 'Démêler sans casser', gestes: [
        'Peigne à dents larges, mèche par mèche.',
        'Commencer par les pointes, puis remonter vers les racines.',
        'Tenir la mèche serrée à la base pour ne pas tirer le cuir.',
      ] },
      { titre: 'Tresser une natte ou une vanille', gestes: [
        'Trois brins égaux, tension régulière du début à la fin.',
        'Pour une vanille, ajouter à chaque passage une mèche prise dessous.',
        'Finir proprement : élastique doux, pas de traction excessive sur le front.',
      ] },
      { titre: 'Finir et conseiller', gestes: [
        'Une huile légère sur les pointes uniquement.',
        'Conseiller un foulard ou une taie satinée la nuit pour tenir la forme.',
        'Fixer le prochain rendez-vous d’entretien (4 à 6 semaines).',
      ] },
    ],
    glossaire: [
      { mot: 'mèche', sens: 'portion de cheveux séparée pour travailler proprement' },
      { mot: 'raie', sens: 'ligne tracée sur le crâne pour séparer les zones' },
      { mot: 'vanille', sens: 'natte collée longue et fine, appelée aussi tresse africaine' },
      { mot: 'nappy', sens: 'texture crépue naturelle, non défrisée ni texturée' },
      { mot: 'défrisage', sens: 'lissage chimique, à espacer de trois mois minimum' },
      { mot: 'démêlant', sens: 'crème qui facilite le peignage sans casser' },
      { mot: 'soin du cuir', sens: 'gommage, huile ou lotions appliqués sur la peau, pas sur les longueurs' },
      { mot: 'coiffure protectrice', sens: 'style qui met les pointes à l’abri des frottements (vanilles, twists, chignon)' },
    ],
    pieges: [
      { enoncé: 'Défriser sur un cuir irrité', eviter: 'Ne jamais appliquer un défrisant sur un cuir irrité, qui pèle ou qui gratte : faire d’abord un test mèche et attendre la guérison.' },
      { enoncé: 'Tresser trop serré', eviter: 'Ne pas tirer jusqu’à la douleur : si la cliente sent une traction vive, c’est mal posé. Le front et la nuque sont les zones les plus fragiles.' },
      { enoncé: 'Peigner un nœud depuis la racine', eviter: 'Ne jamais commencer un démêlage par la racine : on casse le cheveu. Toujours des pointes vers le haut.' },
      { enoncé: 'Passer la tondeuse à sec sur une peau sèche', eviter: 'Ne pas tondre une peau sèche ou irritée sans préparation : nettoyer, huiler ou gel, et lames propres et désinfectées.' },
    ],
  },
  {
    id: 'reparation-telephones',
    nom: 'Réparation téléphones',
    emoji: '📱',
    resume: 'Dépanner un smartphone sans le casser, et sans se mettre en danger.',
    taches: [
      { titre: 'Diagnostiquer avant d’ouvrir', gestes: [
        'Tester écran, tactile, haut-parleur, micro, caméras, boutons, charge, Wi-Fi, réseau.',
        'Noter les symptômes exacts avec le client ; une panne « écran noir » a cinq causes possibles.',
        'Proposer un devis ouvert et chiffré seulement après ce test complet.',
      ] },
      { titre: 'Ouvrir proprement', gestes: [
        'Sauvegarder les données du client avant toute manipulation.',
        'Chauffer le pourtour (tapis chauffant ou décapeur thermique doux) ou injecter de l’alcool isopropylique au niveau de la colle.',
        'Utiliser une ventouse puis un médiator, vis triées et notées par position.',
      ] },
      { titre: 'Remplacer un écran ou une batterie', gestes: [
        'Déclipser d’abord la batterie, puis les nappes écran/tactile.',
        'Poser un joint adhésif neuf ; ne pas réutiliser la colle d’origine.',
        'Tester avant de refermer, pour éviter de rouvrir.',
      ] },
      { titre: 'Micro-souder en sécurité', gestes: [
        'Bracelet et tapis ESD obligatoires, fer à 320 ou 350 degrés, avec flux.',
        'Travailler sous loupe, jamais à l’œil nu sur un composant de moins de 2 mm.',
        'Ne jamais laisser un fer sous tension sans surveillance.',
      ] },
      { titre: 'Refermer et restituer', gestes: [
        'Remettre les joints, clipser sans forcer, revisser dans l’ordre inverse.',
        'Faire un test complet devant le client : appels, charge, photo, audio.',
        'Garantir la pièce et le geste : durée et conditions écrites.',
      ] },
    ],
    glossaire: [
      { mot: 'ESD', sens: 'décharge électrostatique : invisible mais destructrice, bracelet et tapis obligatoires' },
      { mot: 'nappe', sens: 'connecteur plat qui relie l’écran ou les boutons à la carte mère' },
      { mot: 'flex', sens: 'cable interne très fin, se plie mais ne se casse pas (théoriquement)' },
      { mot: 'PMOS', sens: 'circuits de protection de la batterie lithium-ion' },
      { mot: 'courant de fuite', sens: 'consommation anormale mesurée sur alimentation de laboratoire, signe d’un court-jus' },
      { mot: 'reconditionné', sens: 'pièce de récupération testée et certifiée, moins chère que la pièce neuve' },
      { mot: 'tapis chauffant', sens: 'plaque qui chauffe une zone précise pour ramollir la colle d’un écran' },
      { mot: 'sauvegarde', sens: 'copie des données avant toute intervention, même mineure' },
    ],
    pieges: [
      { enoncé: 'Manipuler une batterie gonflée ou chaude', eviter: 'Ne jamais percer, plier ni faire chauffer une batterie Li-ion gonflée : risque d’emballement thermique. L’évacuer en extérieur, la remplacer AVANT tout autre geste.' },
      { enoncé: 'Souder sans bracelet ESD', eviter: 'Ne pas toucher une carte sans bracelet ou tapis antistatique : une décharge invisible tue un composant sans laisser de trace.' },
      { enoncé: 'Remonter avec la colle d’origine', eviter: 'Ne jamais recoller sans joint neuf : étanchéité perdue, poussière, écran qui se décolle à la première chaleur.' },
      { enoncé: 'Chiffrer sans diagnostiquer', eviter: 'Ne pas annoncer un prix avant d’avoir testé : une panne « écran noir » peut venir de la batterie, de la nappe, du connecteur, de la carte ou du logiciel.' },
    ],
  },
  {
    id: 'marchage',
    nom: 'Marchage',
    emoji: '🌾',
    resume: 'Faire pousser des légumes qui se vendent : sol, eau, saison, marché.',
    taches: [
      { titre: 'Préparer le sol', gestes: [
        'Observer la terre : couleur, structure, vie (vers, racines). Une terre meuble est une bonne terre.',
        'Apporter fumier mûr ou compost, jamais frais sur les racines.',
        'Faire des planches larges de 80 à 120 cm, allées étroites : on marche sans tasser.',
      ] },
      { titre: 'Semis et pépinière', gestes: [
        'Semer en fonction de la saison et du cycle, pas de l’envie.',
        'Profondeur : deux à trois fois la taille de la graine.',
        'Arroser en pulvérisation fine jusqu’à la levée.',
      ] },
      { titre: 'Repiquer au bon stade', gestes: [
        'Attendre quatre à six feuilles vraies, tige ferme.',
        'Piquer le soir ou quand le ciel est couvert.',
        'Arroser au pied, sans noyer.',
      ] },
      { titre: 'Irriguer et entretenir', gestes: [
        'Pailler pour garder l’humidité et freiner les herbes.',
        'Biner en surface plutôt que d’arroser plus.',
        'Privilégier le goutte-à-goutte ou l’arrosage au pied, jamais sur les feuilles en plein soleil.',
      ] },
      { titre: 'Récolter et vendre', gestes: [
        'Cueillir tôt le matin, encore dans la fraîcheur.',
        'Trier, retirer l’abîmé, présenter proprement.',
        'Afficher le prix et l’origine : un client revient sur une réputation, pas sur un rabais.',
      ] },
    ],
    glossaire: [
      { mot: 'fumure organique', sens: 'apport de compost ou fumier mûr, qui nourrit le sol sans brûler les racines' },
      { mot: 'paillage', sens: 'couche protectrice au pied : paille, feuilles, carton ; garde l’eau, freine les herbes' },
      { mot: 'binage', sens: 'griffer la surface pour aérer et retirer les jeunes herbes' },
      { mot: 'rotation', sens: 'changer la famille de culture chaque saison sur la même planche' },
      { mot: 'repiquage', sens: 'déplacer la jeune plante de la pépinière vers la planche définitive' },
      { mot: 'stade quatre feuilles', sens: 'moment idéal pour repiquer la plupart des solanacées et cucurbitacées' },
      { mot: 'goutte-à-goutte', sens: 'irrigation localisée au pied, économe en eau et en maladies foliaires' },
      { mot: 'culture sous abri', sens: 'serre ou tunnel pour forcer hors saison ou protéger des pluies battantes' },
    ],
    pieges: [
      { enoncé: 'Repiquer en plein soleil', eviter: 'Ne jamais repiquer en plein soleil ni en journée chaude : piquer le soir ou quand le ciel est couvert.' },
      { enoncé: 'Arroser une pépinière en jet direct', eviter: 'Ne pas utiliser un jet fort sur une pépinière : on casse les tiges et on déplace les graines. Pulvérisation fine, toujours.' },
      { enoncé: 'La même famille au même endroit chaque année', eviter: 'Ne pas cultiver chaque année tomates, aubergines ou piments au même endroit : le sol s’épuise et les maladies s’installent.' },
      { enoncé: 'Récolter sous le soleil haut', eviter: 'Ne pas cueillir après dix heures : feuilles et fruits flétrissent avant le marché. Le matin, c’est tout.' },
    ],
  },
  {
    id: 'maconnerie',
    nom: 'Maçonnerie & bâtiment',
    emoji: '🧱',
    resume: 'Monter un mur droit, d’aplomb et qui ne fissure pas.',
    taches: [
      { titre: 'Implanter et tracer', gestes: [
        'Cordeaux tendus, niveau à bulle, fils à plomb.',
        'Contrôler l’équerrage avec la règle du triangle 3-4-5.',
        'Reporter les cotes sur des repères fixes, pas sur la terre molle.',
      ] },
      { titre: 'Fouiller et fonder', gestes: [
        'Fouiller jusqu’au bon sol : hors terre végétale, hors remblai récent.',
        'Béton de propreté, puis semelle armée dimensionnée au mur qu’elle porte.',
        'Arase au niveau, contrôlée au cordeau sur toute la longueur.',
      ] },
      { titre: 'Monter un mur', gestes: [
        'Mortier dosé et gâché pour une heure maximum, pas plus.',
        'Joints horizontaux d’environ un centimètre, vérifiés au cordeau tous les trois rangs.',
        'Décaler systématiquement d’un demi-module entre deux rangs : c’est ce qui empêche la fissure verticale.',
      ] },
      { titre: 'Ceinturer et daller', gestes: [
        'Rien ne monte sans chaînage en haut : il reprend les efforts et évite les fissures de toiture.',
        'Poteaux et poutres ferraillés selon le plan, pas au jugé.',
        'Vibrer le béton de la dalle pour chasser l’air et éviter les nids de granulats.',
      ] },
      { titre: 'Enduire et protéger', gestes: [
        'Trois couches : gobetis d’accroche, corps de dressage, finition lissée.',
        'Cure humide pendant au moins sept jours, surtout en saison sèche et venteuse.',
        'Gouttières, débords et soubassements : l’eau non évacuée est la première cause des fissures.',
      ] },
    ],
    glossaire: [
      { mot: 'semelle', sens: 'fondation filante en béton armé sous les murs porteurs' },
      { mot: 'arase', sens: 'surface supérieure parfaitement nivelée d’une fondation, avant de monter' },
      { mot: 'chaînage', sens: 'poutre béton armé qui ceinture un mur ou un bâtiment' },
      { mot: 'hourdis', sens: 'blocs (terracotta, béton) posés entre les poutrelles d’une dalle' },
      { mot: 'gobetis', sens: 'première couche d’enduit, riche en ciment, qui accroche le mortier' },
      { mot: 'mortier bâtard', sens: 'mélange chaux + ciment, plus souple et moins fissible que le ciment seul' },
      { mot: 'demi-module', sens: 'décalage d’une moitié de parpaing entre deux rangs successifs' },
      { mot: 'équerrage 3-4-5', sens: 'corde tendue en triangle 3/4/5 pour obtenir un angle droit parfait' },
    ],
    pieges: [
      { enoncé: 'Fonder dans la terre végétale', eviter: 'Ne jamais asseoir une fondation sur terre végétale ou remblai récent : elle travaillera et le mur fissurera. Fouiller jusqu’au bon sol.' },
      { enoncé: 'Empiler des parpaings sans décalage', eviter: 'Ne pas aligner les joints verticaux d’un rang à l’autre : le mur se fend en deux sous la charge. Toujours décaler d’un demi-module.' },
      { enoncé: 'Enduire d’un seul coup', eviter: 'Ne pas appliquer trois centimètres de mortier en une passe : ça gondole et ça se décolle. Toujours trois couches fines, chaque couche prise.' },
      { enoncé: 'Couler une dalle sans vibrer', eviter: 'Ne pas couler sans vibrer : les bulles créent des nids de granulats, points faibles sous la charge. Vibreur ponctuel, passe à passe.' },
    ],
  },
  {
    id: 'peche-artisanale',
    nom: 'Pêche artisanale',
    emoji: '🎣',
    resume: 'Ramener du poisson frais, le conserver, et laisser l’eau repeupler.',
    taches: [
      { titre: 'Préparer et vérifier le matériel', gestes: [
        'Inspecter la seine avant de sortir : un trou perdu, c’est le poisson de la journée qui part.',
        'Affûter les hameçons, vérifier les lignes et les flotteurs.',
        'Lester les casiers et contrôler les entonnoirs d’entrée.',
      ] },
      {
        titre: 'Lancer et poser', gestes: [
          'Poser la seine parallèlement au bord, ramener depuis les eaux peu profondes.',
          'Mouiller les casiers au crépuscule, baliser chaque pose avec un repère fixe.',
          'Éviter les chenaux de passage des pirogues : on y déchire tout.',
        ],
      },
      { titre: 'Prélever et trier', gestes: [
        'Vider la seine rapidement, trier sans déchirer les mailles.',
        'Remettre à l’eau les juvéniles et les femelles pleines d’œufs : c’est le poisson de l’année prochaine.',
        'Évider et rincer la capture aussitôt à l’eau claire.',
      ] },
      { titre: 'Conserver sans glace', gestes: [
        'Saler en saumure ou enfumer le jour même : un poisson non traité est invendable le lendemain.',
        'Étaler le poisson en couche fine, jamais entassé au soleil.',
        'Protéger du moucheron avec un filet ou un toit de paille.',
      ] },
      { titre: 'Réparer et ranger', gestes: [
        'Faire sécher les filets étalés à l’ombre, jamais en boule humide.',
        'Raperler les mailles cassées avec une aiguille et du fil identique.',
        'Ranger les lignes enroulées sur du carton sec, loin du sel.',
      ] },
    ],
    glossaire: [
      { mot: 'seine', sens: 'filet encirclant qu’on ramène à pied depuis le bord' },
      { mot: 'maillage', sens: 'grandeur des mailles du filet — elle décide ce qui passe ou reste pris' },
      { mot: 'casier', sens: 'piège rigide en forme de panier, posé au fond avec un appât' },
      { mot: 'épervier', sens: 'filet à lests qu’on lance en parachute depuis une pirogue' },
      { mot: 'appât', sens: 'aliment mis au piège ou à l’hameçon pour attirer le poisson' },
      { mot: 'saumurage', sens: 'conservation dans l’eau chargée de sel, en couche ou en fût' },
      { mot: 'fumage', sens: 'conservation par la fumée lente, sur claies au-dessus du feu' },
      { mot: 'raperler', sens: 'refaire une maille cassée au moyen d’une aiguille à filet' },
      { mot: 'juvénile', sens: 'jeune poisson pas encore arrivé à taille — il doit repartir à l’eau' },
    ],
    pieges: [
      { enoncé: 'Pêcher avec un maillage trop fin', eviter: 'Ne jamais utiliser de mailles plus petites que la taille réglementaire : tu vides l’eau des juvéniles et la saison suivante il n’y a plus rien.' },
      { enoncé: 'Laisser la capture sous le soleil', eviter: 'Ne pas traîner à vider et refroidir le poisson : l’altération commence en une heure et le prix de vente fond avec.' },
      { enoncé: 'Ranger le filet encore trempé', eviter: 'Ne jamais remiser un filet humide : il pourrit, tache et casse au premier effort. Séchage à l’ombre avant rangement.' },
      { enoncé: 'Sortir seul sur l’eau', eviter: 'Ne jamais partir pêcher seul sans gilet ou bouée : une embarcation chavirée sans témoin, c’est l’accident qu’on ne raconte pas.' },
    ],
  },
  {
    id: 'elevage',
    nom: 'Élevage (volaille & petits animaux)',
    emoji: '🐔',
    resume: 'Faire grandir des bêtes saines jusqu’au poids de vente, sans hécatombe.',
    taches: [
      { titre: 'Démarrer la bande', gestes: [
        'Source de chaleur allumée avant l’arrivée des poussins : ils se regroupent sous la lampe s’il fait trop froid.',
        'Litière sèche au sol, changée dès qu’elle est humide.',
        'Eau fraîche et abreuvoirs bas à portée du bec dès la première heure.',
      ] },
      { titre: 'Nourrir et abreuver', gestes: [
        'Ration adaptée à l’âge : démarrage, croissance, finition.',
        'Laver les abreuvoirs chaque jour, jamais de ration moisie.',
        'Nourir à heure fixe pour repérer les appétits qui chutent.',
      ] },
      { titre: 'Entretenir le bâtiment', gestes: [
        'Vidange et désinfection complètes entre deux bandes.',
        'Enclos ou cage de quarantaine dès le premier animal malade.',
        'Ventiler : l’ammoniac des fientes brûle les poumons ; une fente d’air vaut mieux qu’un courant d’air.',
      ] },
      { titre: 'Vacciner', gestes: [
        'Suivre le calendrier local (Newcastle, Gumboro) noté dans un cahier.',
        'Vaccin vivant dans de l’eau propre et non chlorée, donné le matin.',
        'Ne vacciner que des animaux en bonne santé : un vaccin sur un malade aggrave.',
      ] },
      { titre: 'Engraisser et vendre', gestes: [
        'Ration de finition les deux dernières semaines pour le poids et l’aspect.',
        'Peser avant de fixer le prix : on ne vend pas au jugé.',
        'Écouler au moment des fêtes et des marchés, jamais en urgence après une mortalité.',
      ] },
    ],
    glossaire: [
      { mot: 'bande', sens: 'lot d’animaux élevés ensemble, du démarrage à la vente' },
      { mot: 'litière', sens: 'couche absorbante au sol — copeaux, paille hachée — qu’on garde sèche' },
      { mot: 'abreuvoir', sens: 'récipient qui donne de l’eau propre en continu' },
      { mot: 'Newcastle', sens: 'maladie virale respiratoire de la volaille, très mortelle, évitée par la vaccination' },
      { mot: 'Gumboro', sens: 'maladie virale des jeunes poussins qui casse leurs défenses, évitée par la vaccination' },
      { mot: 'quarantaine', sens: 'isolement des nouveaux ou malades loin du groupe' },
      { mot: 'ration de finition', sens: 'aliment plus riche donné avant la vente pour le poids et l’aspect' },
      { mot: 'mortalité', sens: 'nombre de bêtes mortes sur une période — le premier indicateur à noter' },
    ],
    pieges: [
      { enoncé: 'Entasser les animaux', eviter: 'Ne jamais dépasser les densités conseillées : la chaleur et l’ammoniac montent, les maladies circulent, la mortalité explose.' },
      { enoncé: 'Vacciner dans de l’eau sale ou chlorée', eviter: 'Ne jamais passer un vaccin vivant dans de l’eau de javel ou croupie : le produit est détruit, la bande reste protégée en apparence seulement.' },
      { enoncé: 'Mélanger sans isoler', eviter: 'Ne jamais mettre de nouveaux animaux dans le groupe sans quelques jours de quarantaine : ils importent la maladie sans le montrer.' },
      { enoncé: 'Vendre des bêtes malades', eviter: 'Ne jamais vendre une bête malade ou morte : tu perds le client, et la maladie repart avec le panier.' },
    ],
  },
  {
    id: 'sante-communautaire',
    nom: 'Santé communautaire',
    emoji: '🩺',
    resume: 'Empêcher la maladie au village et repérer vite les signes qui conduisent au centre.',
    taches: [
      { titre: 'Boire sans danger', gestes: [
        'Faire bouillir l’eau à gros bouillons dix minutes avant de la boire.',
        'Stocker l’eau propre dans un fût couvert, la puiser avec un bol propre — jamais les mains ni le jerrycan dedans.',
        'En cas de doute sur une eau de puits, la traiter puis la laisser reposer.',
      ] },
      { titre: 'Latrines et eaux usées', gestes: [
        'Latrine à plus de dix mètres de tout puits ou point d’eau, en amont.',
        'Évacuer les eaux de vaisselle vers un puisard ou un jardin, jamais vers le creux où jouent les enfants.',
        'Entretenir : propre le matin, on y retourne le soir.',
      ] },
      { titre: 'Combattre les moustiques', gestes: [
        'Dormir sous une moustiquaire imprégnée, rentrée sous le matelas.',
        'Vider une fois par semaine tout ce qui retient l’eau : vieux pots, pneus, gouttières.',
        'Couvrir bras et jambes à la tombée du jour.',
      ] },
      { titre: 'Hygiène des mains et des aliments', gestes: [
        'Laver les mains au savon ou à la cendre avant de manger, après la latrine, avant de cuisiner.',
        'Couvrir la nourriture, protéger de la poussière et des mouches.',
        'Laver fruits et légumes à l’eau potable avant de les manger crus.',
      ] },
      { titre: 'Reconnaître et référer', gestes: [
        'Signes qui imposent le centre de santé : incapacité à boire, vomissements qui ne s’arrêtent pas, convulsions, respiration difficile, sang, somnolence anormale.',
        'Référer sans attendre le lendemain : un transport préparé (caisse, entente avec le conducteur) fait gagner des heures.',
        'Noter les dates des symptômes pour les raconter au personnel de santé.',
      ] },
      { titre: 'Soins courants sans danger', gestes: [
        'Donner du SRO (soluté de réhydratation orale) dès la première diarrhée, par petites gorgées, en continu.',
        'Continuer à nourrir et à allaiter pendant la maladie : un corps affaibli se rétablit moins vite.',
        'Laver une plaie à l’eau propre courante, couvrir d’un linge propre — sans rien poser dessus qui ne soit pas sûr.',
      ] },
    ],
    glossaire: [
      { mot: 'SRO', sens: 'soluté de réhydratation orale — le sachet dosé à diluer dans une bouteille d’eau propre' },
      { mot: 'réhydrater', sens: 'faire remonter l’eau perdue par la diarrhée ou la fièvre, par petites gorgées fréquentes' },
      { mot: 'vecteur', sens: 'animal qui transporte la maladie d’un corps à l’autre — moustique, mouche, rat' },
      { mot: 'référer', sens: 'conduire une personne malade au centre de santé quand le village ne suffit plus' },
      { mot: 'poste de santé', sens: 'structure de soin la plus proche, premier maillon avant l’hôpital' },
      { mot: 'puisard', sens: 'trou rempli de graviers où les eaux usées s’infiltrent sans croupir' },
      { mot: 'moustiquaire imprégnée', sens: 'filet traité anti-moustique, efficace à condition de ne pas le laver au détergent' },
    ],
    pieges: [
      { enoncé: 'Soigner par les antibiotiques achetés au hasard', eviter: 'Ne jamais donner d’antibiotique sans prescription : on ne guérit rien, et on fabrique des germes que plus aucun médicament ne combat.' },
      { enoncé: 'Mal préparer le SRO', eviter: 'Ne jamais ajouter sucre ou sel au mélange dosé : trop concentré, il aggrave la déshydratation. Un sachet, une bouteille d’eau propre, rien de plus.' },
      { enoncé: 'Attendre le dernier jour pour référer', eviter: 'Ne pas attendre que l’enfant ne boive plus pour partir au centre : l’heure perdue transforme une guérison en deuil.' },
      { enoncé: 'Laisser l’eau croupir autour de la case', eviter: 'Ne jamais laisser d’eau stagnante près des maisons : un vieux pot rempli, c’est un élevage de moustiques assuré.' },
    ],
  },
  {
    id: 'cordonnerie',
    nom: 'Cordonnerie',
    emoji: '👞',
    resume: 'Réparer chaussures et sacs pour qu’ils tiennent encore deux ans.',
    taches: [
      { titre: 'Diagnostiquer et chiffrer', gestes: [
        'Regarder semelle, tige, doublure et fermetures avant de promettre quoi que ce soit.',
        'Distinguer ce qui se reprend de ce qui est fini, et le dire franchement.',
        'Convenir du prix et du délai avant de commencer : le client qui sait revient.',
      ] },
      { titre: 'Déposer et préparer', gestes: [
        'Retirer ancienne semelle et talon, dégrader le fond.',
        'Nettoyer et sécher la tige : rien ne colle sur du cuir mouillé ou croûteux de boue.',
        'Choisir la matière de reprise selon l’usage : marche, école, travail de chantier.',
      ] },
      { titre: 'Coudre le cuir', gestes: [
        'Perforer à l’alêne, passer le fil ciré aux deux aiguilles en couture croisée.',
        'Garder un point régulier : la beauté du travail se compte aux points par centimètre.',
        'Dégraisser et dégrossir les surfaces avant tout encollage.',
      ] },
      { titre: 'Semelles et talons', gestes: [
        'Encoller fin, laisser prendre, puis assembler sous pression — pas à la main nue.',
        'Clouer ou presser la semelle, rogner le bord au tranchet.',
        'Reconstituer le talon : garnissage, semelle de talon clouée, patinage du bord.',
      ] },
      { titre: 'Finir et rendre', gestes: [
        'Crémer, lustrer, passer un coup de patine sur les bords.',
        'Faire essayer vite : un point qui gêne se reprend en boutique, pas une semaine après.',
        'Expliquer l’entretien au client : le métier se juge à la durée de vie de la réparation.',
      ] },
    ],
    glossaire: [
      { mot: 'alêne', sens: 'outil pointu en fer pour percer le cuir avant d’y passer le fil' },
      { mot: 'trépointe', sens: 'bande de cuir cousue au fond de la chaussure, sur laquelle on fixe la semelle' },
      { mot: 'forme', sens: 'moule en bois ou en plastique qui tient la chaussure pendant la réparation' },
      { mot: 'encollage', sens: 'application de la colle en couche fine sur les deux surfaces à assembler' },
      { mot: 'tranchet', sens: 'couteau de cordonnier pour rogner et parer le cuir' },
      { mot: 'talonnette', sens: 'petit rapport de caoutchouc collé sous le talon pour le protéger ou le rehausser' },
      { mot: 'patine', sens: 'produit qui colore et fait briller le bord d’une semelle' },
      { mot: 'surpiqûre', sens: 'couture visible qui renforce ou décore un bord' },
    ],
    pieges: [
      { enoncé: 'Coller du lisse sur du lisse', eviter: 'Ne jamais coller deux surfaces lisses : rien ne tient. Dégrader les deux faces, dépoussiérer, encoller fin, laisser prendre avant d’assembler.' },
      { enoncé: 'Pointer l’alêne vers sa main', eviter: 'Ne jamais percer en direction de la main qui tient le cuir : l’alêne part dans la paume. On perce sur l’établi, la main en arrière.' },
      { enoncé: 'Remonter une tige craquelée', eviter: 'Ne pas poser une semelle neuve sur une tige foutue : le client la reprendra la semaine suivante et perdra la mémoire de ton travail. Le dire avant.' },
      { enoncé: 'Travailler la colle forte enfermé', eviter: 'Ne jamais encoller dans une pièce fermée sans air : les vapes de colle montent à la tête et abîment les poumons. Une fente d’air, toujours.' },
    ],
  },
  {
    id: 'plomberie',
    nom: 'Plomberie',
    emoji: '🔧',
    resume: 'Arrêter une fuite pour de bon, déboucher sans abîmer, poser un joint qui tient.',
    taches: [
      { titre: 'Couper et vider', gestes: [
        'Fermer le robinet d’arrêt général avant toute intervention.',
        'Ouvrir le point bas pour vider la canalisation, seau et chiffon sous l’ouvrage.',
        'Prévoir une lampe : on répare ce qu’on voit.',
      ] },
      { titre: 'Faire un joint qui tient', gestes: [
        'Brosser le filetage mâle, enlever rouille et vieux filasse.',
        'Enrouler le téflon dans le sens du serrage, trois tours serrés sur un filetage propre.',
        'Visser à la main, puis un quart de tour à la clé — pas plus.',
      ] },
      { titre: 'Déboucher sans détruire', gestes: [
        'Ventouse d’abord, simple et propre.',
        'Démonter le siphon au-dessus d’un seau, le nettoyer, vérifier le joint avant de remonter.',
        'Furet si ça résiste ; jamais de produits successifs qui attaquent les tuyaux.',
      ] },
      { titre: 'Remplacer au bon calibre', gestes: [
        'Clapet, joint de robinet, flotteur de chasse : démonter proprement.',
        'Emporter la pièce ôtée au magasin pour trouver le calibre exact.',
        'Remonter propre, clé en main, sans forcer sur le plastique.',
      ] },
      { titre: 'Tester et facturer', gestes: [
        'Rouvrir l’eau lentement, chasse d’air comprise.',
        'Passer un papier jetable sur chaque joint : une trace trahit la micro-fuite.',
        'Détailler les pièces sur la facture : la confiance du client vaut plus que la réparation.',
      ] },
    ],
    glossaire: [
      { mot: 'filetage', sens: 'pas hélicoïdal taillé au bout du tuyau, mâle dehors ou femelle dedans' },
      { mot: 'téflon', sens: 'ruban plastique blanc qu’on enroule sur un filetage pour le rendre étanche' },
      { mot: 'siphon', sens: 'coude rempli d’eau qui bloque les remontées d’odeur' },
      { mot: 'robinet d’arrêt', sens: 'vanne générale qui coupe l’eau de toute l’installation' },
      { mot: 'clapet', sens: 'petite pièce qui ferme le passage de l’eau sous la pression du doigt du robinet' },
      { mot: 'flotteur', sens: 'pièce qui monte avec l’eau dans la chasse et coupe l’arrivée au bon niveau' },
      { mot: 'furet', sens: 'long ressort flexible qui gratte le bouchon de l’intérieur du tuyau' },
      { mot: 'PER', sens: 'tube plastique souple des installations modernes, sensible à la chaleur et aux produits forts' },
    ],
    pieges: [
      { enoncé: 'Serrer comme un forgeron', eviter: 'Ne jamais serrer à outrance : on éclate l’écrou ou on écrase le joint, et ça fuira le jour même. Un quart de tour après le serrage à la main suffit.' },
      { enoncé: 'Verser de l’acide dans du plastique', eviter: 'Ne jamais débourrer au produit agressif un tube PER ou un flexible usé : il attaque les joints et provoque une fuite dans le mur. Le furet fait le travail.' },
      { enoncé: 'Laisser goutter « pour l’instant »', eviter: 'Ne pas laisser un robinet qui goutte : trois litres perdus par jour, la porcelaine tachée, et le joint qui se met à fuir de partout.' },
      { enoncé: 'Ouvrir sans avoir coupé', eviter: 'Ne jamais démonter un raccord avant d’avoir vérifié que l’eau est coupée : l’inondation arrive plus vite qu’on ne court au compteur.' },
    ],
  },
  {
    id: 'peinture',
    nom: 'Peinture en bâtiment',
    emoji: '🎨',
    resume: 'Peindre un mur net qui reste net des années : la préparation fait le travail.',
    taches: [
      { titre: 'Préparer le support', gestes: [
        'Gratter ce qui s’écaille, lessiver, laisser sécher à fond.',
        'Dépoussiérer, puis reboucher fissures et trous à l’enduit, araser à la lame.',
        'Un mur bien préparé garde deux fois plus longtemps qu’une couche de plus.',
      ] },
      { titre: 'Protéger les abords', gestes: [
        'Ruban de masquage sur huisseries et prises, bâche au sol sanglée.',
        'Déposer les plaques d’interrupteurs plutôt que de peindre autour.',
        'Délimiter avant de commencer : les reprises se voient toujours.',
      ] },
      { titre: 'Sous-coucher', gestes: [
        'Choisir la sous-couche adaptée : plâtre, ancien, extérieur.',
        'Faire les contours au pinceau avant le rouleau.',
        'La sous-couche fixe le fond et économise la peinture de finition.',
      ] },
      { titre: 'Poser la finition', gestes: [
        'Peindre en croisé — aller-retour vertical puis horizontal — puis lisser dans un seul sens.',
        'Charger le rouleau, étaler sans appuyer, ne pas repasser sur une amorce sèche.',
        'Deux couches fines valent mieux qu’une épaisse qui fait des coulures.',
      ] },
      { titre: 'Ranger et reprendre', gestes: [
        'Nettoyer pinceaux et rouleaux avant que ça ne sèche.',
        'Étiqueter les pots avec la pièce et la date : la reprise de six mois après retrouve la teinte exacte.',
        'Reprendre les masques après séchage, à la lame fine.',
      ] },
    ],
    glossaire: [
      { mot: 'sous-couche', sens: 'première couche qui fixe le support et régularise l’absorption' },
      { mot: 'enduit', sens: 'pâte qui rebouche trous et fissures avant de peindre' },
      { mot: 'croisé', sens: 'pose en deux directions perpendiculaires pour couvrir sans épaisseur' },
      { mot: 'coulure', sens: 'bourrelet de peinture qui a glissé sur un mur trop chargé' },
      { mot: 'reprise', sens: 'retouche localisée — elle se voit si la teinte ou le brillant diffèrent' },
      { mot: 'diluant', sens: 'produit qui fluidifie la peinture — toujours celui indiqué par le pot' },
      { mot: 'mat', sens: 'finition sans brillance, qui cache les défauts mais se nettoie moins bien' },
      { mot: 'lessivage', sens: 'lavage du mur pour retirer graisse et poussière avant peinture' },
    ],
    pieges: [
      { enoncé: 'Peindre sur un mur humide', eviter: 'Ne jamais peindre un mur qui suinte ou qui vient d’être lavé à grande eau : la finition cloque et s’écaille en quelques semaines. Sécher d’abord, trouver la cause de l’humidité.' },
      { enoncé: 'Sauter la sous-couche', eviter: 'Ne pas poser la finition directement sur un plâtre neuf ou un ancien farinant : l’accroche se fait mal et la teinte boit par taches. Sous-couche toujours.' },
      { enoncé: 'Diluer trop pour économiser', eviter: 'Ne jamais dépasser la dilution indiquée sur le pot : trop liquide, la peinture coule et ne couvre pas — on en remet trois couches au lieu de deux.' },
      { enoncé: 'Travailler en plein soleil', eviter: 'Ne jamais peindre une façade brûlante : la couche sèche trop vite, marque le rouleau et cloque. Travailler le matin ou le soir, à l’ombre.' },
    ],
  },
  {
    id: 'menuiserie',
    nom: 'Menuiserie bois',
    emoji: '🪚',
    resume: 'Assembler le bois droit : l’équerre, le traçage et l’essence juste font la moitié du travail.',
    taches: [
      { titre: 'Choisir et acheter le bois', gestes: [
        'Prendre une planche selon son usage futur : dur pour les pieds de table, sec pour l’ameublement intérieur.',
        'Regarder le fil du bois et refuser les planches gauches ou gercées — elles bougeront quand même chez toi.',
        'Compter 15 % de largeur en plus pour le rabotage et les coupes.',
      ] },
      { titre: 'Tracer juste', gestes: [
        'Équerre et crayon plat : tracer la coupe, pas la scie — l’épaisseur de la scie se paie en millimètres perdus.',
        'Reporter la même mesure sur les deux pièces jumelles avant de couper, jamais pièce par pièce.',
        'Vérifier l’équerre elle-même contre un angle connu avant de lui faire confiance.',
      ] },
      { titre: 'Scier et raboter', gestes: [
        'Scier hors du trait, côté chute : on approche le trait en rabotant, jamais en sciant large.',
        'Raboter dans le sens du fil ; si ça arrache, retourner la pièce ou pousser plus doucement.',
        'Un coup de ponce entre deux rabotages : la main sent la planche devenue droite avant l’œil.',
      ] },
      { titre: 'Assembler', gestes: [
        'Assemblage tenon-mortaise ou à fausse languette pour les cadres : la colle seule ne tient pas un meuble qui bouge.',
        'Pré-percer avant de visser près du bout : le bois fend là où on n’a pas percé.',
        'Serrer à blanc avant de coller — l’assemblage doit fermer sans colle ; la colle ne fait que figer un ajustement déjà bon.',
      ] },
      { titre: 'Finition qui dure', gestes: [
        'Poncer en montée : grain grossier puis moyen puis fin, sans brûler les étapes.',
        'Dépoussiérer avant l’huile ou le vernis ; deux couches fines passées dans le fil valent mieux que trois épaisses.',
        'Laisser sécher à l’abri de la poussière — une finition collante attrape tout ce qui vole.',
      ] },
    ],
    glossaire: [
      { mot: 'équerre', sens: 'outil à angle droit qui vérifie et trace les coupes à 90°' },
      { mot: 'raboter', sens: 'aplanir la surface d’une planche au rabot ou à la machine' },
      { mot: 'tenon', sens: 'langue de bois taillée en bout de pièce, qui entre dans la mortaise' },
      { mot: 'mortaise', sens: 'creux taillé dans une pièce pour recevoir le tenon' },
      { mot: 'fil du bois', sens: 'direction des fibres ; on scie et rabote en le respectant' },
      { mot: 'gerce', sens: 'fente dans une planche séchée trop vite — elle travaille avec l’humidité' },
      { mot: 'chant', sens: 'tranche étroite d’une planche, souvent plus fragile que la face' },
      { mot: 'ponce', sens: 'user la surface au papier de verre pour l’aplanir et l’ouvrir à la finition' },
    ],
    pieges: [
      { enoncé: 'Visser dans le bois brut sans pré-percer', eviter: 'Ne jamais visser près du bout d’une planche sans avant-trou : le bois fend, la pièce est perdue. Pré-percer diamètre de la tige.' },
      { enoncé: 'Coller un assemblage qui force mal', eviter: 'Ne pas serrer un tenon qui entre de travers en espérant que la reprise arrangerait : il casserait à l’usage. Ajuster à blanc avant toute colle.' },
      { enoncé: 'Stocker le bois à même le sol', eviter: 'Ne jamais laisser des planches posées sur la terre ou le béton nu : elles boivent l’humidité et gauchissent. Les caler sur tasseaux, à l’abri des pluies.' },
      { enoncé: 'Poncer à contre-fil', eviter: 'Ne pas poncer ou finir en travers des fibres : les rayures ressortent à la première couche d’huile. Toujours dans le fil.' },
    ],
  },
  {
    id: 'transformation-alimentaire',
    nom: 'Transformation alimentaire',
    emoji: '🫙',
    resume: 'Transformer la saison en produits qui se gardent et se vendent : jus, confitures, poudres, bocaux propres.',
    taches: [
      { titre: 'Trier avant de transformer', gestes: [
        'Écarter les fruits abîmés ou mols : la chaleur ne répare pas un défaut d’avant — la pourriture passe dans le pot.',
        'Laver à l’eau propre en deux bassines : la première décolle, la seconde rince.',
        'Travailler par petites fournées : la qualité d’un gros chaudron baisse toujours.',
      ] },
      { titre: 'Cuire et réduire', gestes: [
        'Confiture : cuire en ébullition franche en écumant, jusqu’à la nappe — la goutte sur l’assiette froide dit stop.',
        'Réduire le feu dès l’ébullition : ce qui attache au fond donne le goût de brûlé à toute la marmite.',
        'Peser le sucre ou le sel selon la recette du départ, jamais « à l’œil » au milieu de la cuisson.',
      ] },
      { titre: 'Conditionner propre', gestes: [
        'Bocaux et couvercles ébouillantés, séchés à l’envers sur torchon propre — le microbe entre par le bord.',
        'Remplir chaud, fermer tout de suite, retourner : le vide se forme et le couvercle claque en refroidissant.',
        'Essuyer chaque pot avant l’étiquette : une étiquette sur gras se décolle et fait tâche chez la cliente.',
      ] },
      { titre: 'Étiqueter honnêtement', gestes: [
        'Date de fabrication et durée raisonnable de garde sur chaque pot : la péremption d’un produit maison se décide, pas se devine.',
        'Lister les ingrédients dans l’ordre de poids — l’acheteur allergique a le droit de savoir.',
        'Numéro de lot sur tout : un jour où un pot pose problème, on retire le lot, pas la réputation entière.',
      ] },
      { titre: 'Stocker et vendre', gestes: [
        'Local sec, sombre et frais ; la lumière et la chaleur fanent couleur et goût avant la date écrite.',
        'Sortir le plus ancien en premier — la rotation est la moitié du commerce.',
        'Goûter un pot de chaque lot avant la vente : on ne vend pas sa propre production sans l’avoir goûtée.',
      ] },
    ],
    glossaire: [
      { mot: 'bocal', sens: 'pot de verre à fermeture hermétique pour conserver' },
      { mot: 'ébullition', sens: 'frémissement bouillant de la masse — le moment où l’on surveille le plus' },
      { mot: 'écumer', sens: 'retirer l’écume qui monte en cuisant, impuretés qui gâtent le goût' },
      { mot: 'péremption', sens: 'date jusqu’où le produit se vend et se consomme sans risque' },
      { mot: 'étiquette', sens: 'carte du produit : ingrédients, date, lot — elle engage le vendeur' },
      { mot: 'vide (mise en)', sens: 'aspiration formée en refroidissant qui claque le couvercle et protège le pot' },
      { mot: 'lot', sens: 'quantité fabriquée ensemble, repérable par un numéro pour retirer seulement ce qui coince' },
      { mot: 'sèche', sens: 'état d’un produit réduit en poudre ou lamelle, gardé à l’abri de l’humidité' },
    ],
    pieges: [
      { enoncé: 'Vendre des bocaux au couvercle bombé', eviter: 'Ne jamais vendre un pot dont le couvercle claque ou gonfle : signe de fermentation partie dans le bocal. Le jeter, comprendre pourquoi, corriger la cuisson ou le remplissage.' },
      { enoncé: 'Réutiliser un couvercle de jus du marché', eviter: 'Ne pas se fier à un couvercle déjà serti : le joint a vécu, le vide ne se refera pas. Le couvercle est à usage unique, le pot se garde.' },
      { enoncé: 'Étiqueter « environ 6 mois » sans date', eviter: 'Ne jamais écrire une durée sans dater la fabrication : chez l’acheteur, le doute finit à la poubelle — et la confiance aussi.' },
      { enoncé: 'Travailler sale « parce que ça bout »', eviter: 'Ne pas croire tout réglé parce que la cuisson tue les microbes : la contamination se fait après, au remplissage et aux mains. Cheveux couverts, torchons propres, ongles nets.' },
    ],
  },
  {
    id: 'apiculture',
    nom: 'Apiculture',
    emoji: '🐝',
    resume: 'Des colonies solides et un miel propre : on visite avec de la fumée, on récolte sans casser la ruche.',
    taches: [
      { titre: 'Installer la ruche', gestes: [
        'Emplacement au lever du soleil, à l’abri du vent fort, loin des poules et des bassins d’eau stagnante.',
        'Ruche posée sur des cales à vingt centimètres du sol, entrée orientée au sud : l’humidité du sol est le premier ennemi.',
        'Deux colonies plutôt qu’une : ce qui arrive à l’une ne tue pas l’année.',
      ] },
      { titre: 'Visiter sans casser', gestes: [
        'Fumée douce à l’enfumoir avant d’ouvrir — deux pulsations, attendre, ouvrir. La colonie énervée se punit elle-même.',
        'Soulever les cadres par les deux extrémités, après les avoir décollés au couteau, jamais arrachés du centre.',
        'Visite courte : cinq minutes le matin chaud ; on cherche la reine, le couvain, les réserves — pas à tout retourner.',
      ] },
      { titre: 'Surveiller la santé', gestes: [
        'Compter les cadres de couvain à chaque visite : qui diminue deux fois de suite a un problème à trouver.',
        'Regarder le plancher : tas de petites feuilles = varroa, miel collant aux pieds = loque ou dysenterie — noter et en parler au technicien apicole.',
        'Nourrir si les réserves finissent avant la grande floraison : sirop ou pâte, jamais de miel récolté d’une autre ruche malade.',
      ] },
      { titre: 'Gérer l’essaim', gestes: [
        'Repérer les cellules royales au bord des cadres avant la sortie : une ruche qui essaime perd la moitié de sa force de miel.',
        'Essaim parti : le récupérer à la fumée dans une caisse, le loger dans une ruche visitée — il vaut de l’or, la colonie toute faite.',
        'Repérer la fièvre d’essaimage avant les récoltes : une caisse-piège à trois mètres de la ruche mère retient l’essaim.',
      ] },
      { titre: 'Récolter propre', gestes: [
        'Récolter quand les opercules de cire sont bouchés aux deux tiers : en dessous, le miel fermente dans le pot.',
        'Chasser les abeilles doucement à la fumée, jamais au feu ni au carburant.',
        'Extraire dans un local fermé et propre, filtrer, laisser reposer la mousse avant de mettre en pots.',
      ] },
    ],
    glossaire: [
      { mot: 'ruche', sens: 'maison de la colonie — corps pour le couvain, hausses pour le miel' },
      { mot: 'enfumoir', sens: 'pot à fumée douce qui calme la colonie avant la visite' },
      { mot: 'cadre', sens: 'baguette de bois portant la cire, mobile dans la ruche — ce qu’on visite' },
      { mot: 'couvain', sens: 'zone d’œufs et larves, le cœur de la colonie' },
      { mot: 'essaim', sens: 'départ d’une vieille reine avec la moitié des ouvrières — la ruche se duplique' },
      { mot: 'opercule', sens: 'opercule de cire qui ferme l’alvéole de miel mûr — le signal de récolte' },
      { mot: 'varroa', sens: 'acarien parasite affaiblissant la colonie ; se voit au plancher et aux ailes' },
      { mot: 'hausse', sens: 'étage du dessus réservé au miel de récolte' },
    ],
    pieges: [
      { enoncé: 'Récolter un miel pas operculé', eviter: 'Ne jamais extraire tant que les alvéoles ne sont pas bouchées des deux tiers : l’eau restante fait fermenter le pot chez le client. Un miel qui mousse après vente est un miel récolté trop tôt.' },
      { enoncé: 'Fumer à brûler pour « faire sortir les abeilles »', eviter: 'Ne pas noyer la ruche de fumée épaisse et brûlante : elle salit le miel, affole la colonie et peut la faire abandonner. Deux pulsations douces suffisent.' },
      { enoncé: 'Prendre du miel d’une ruche malade pour nourrir une autre', eviter: 'Ne rien transférer d’une colonie suspecte à une saine : loque et spores voyagent dans le miel. Nourrir au sirop, jamais au miel d’emprunt.' },
      { enoncé: 'Visiter en pleine pluie ou grand froid', eviter: 'Ne jamais ouvrir une ruche quand il pleut ou quand il fait froid : le couvain se refroidit et les butineuses mouillées ne rentrent pas. On attend le matin chaud et sec.' },
    ],
  },
  {
    id: 'gestion-boutique',
    nom: 'Gestion de boutique',
    emoji: '🏪',
    resume: 'Une petite boutique qui gagne : stock qui tourne, caisse qui ferme, marge calculée avant l’achat.',
    taches: [
      { titre: 'Acheter en calculant', gestes: [
        'Décider l’achat selon la rotation : ce qui dort six semaines ne se rachète pas, même solde.',
        'Calculer la marge avant de fixer le prix de vente — prix d’achat + transport + casse + bénéfice voulu.',
        'Payer cash ce qui tourne vite, ne jamais dormir à crédit sur du stock lent.',
      ] },
      { titre: 'Ranger le stock', gestes: [
        'Tout article a une place connue d’un employé même absent du jour : étiquette de zone sur l’étagère.',
        'Le plus ancien devant — premier entré, premier sorti —, les dates de péremption en rang et contrôlées chaque semaine.',
        'Sécher le sol, surélever les cartons, chasser les rats avant qu’ils choisissent tes sacs.',
      ] },
      { titre: 'Tenir la caisse', gestes: [
        'Fond de caisse compté et noté à chaque ouverture, fermé et compté à chaque fermeture — l’écart du jour s’explique le soir, jamais le mois d’après.',
        'Ticket ou registre pour toute sortie d’argent, même la « petite dette » du voisin.',
        'Séparer la caisse de la poche : l’argent de la boutique ne paie pas le déjeuner du vendeur.',
      ] },
      { titre: 'Faire l’inventaire sans pleurer', gestes: [
        'Inventaire tournant : une famille de produits par semaine vaut mieux qu’un comptage total annuel qui fait peur.',
        'Compter à deux — l’un dicte, l’autre écrit — et comparer avec le carnet d’entrées-sorties.',
        'Le manquant se note avec la date et la zone : ce qui se répète trois fois n’est pas une erreur, c’est une fuite.',
      ] },
      { titre: 'Fidéliser et encaisser vite', gestes: [
        'Files courtes : la cliente qui attend dix minutes revient moins que celle qui repart avec son achat.',
        'Le carnet de dettes des bons payeurs seulement, avec plafond noté et relance à échéance.',
        'Propreté, prix visibles, sourires : trois fois rien, et la boutique gagne sur la concurrence du coin.',
      ] },
    ],
    glossaire: [
      { mot: 'stock', sens: 'marchandise possédée — de l’argent qui dort tant qu’il ne tourne pas' },
      { mot: 'caisse', sens: 'lieu et registre de l’argent encaissé ; se compte à l’ouverture et à la fermeture' },
      { mot: 'inventaire', sens: 'comptage physique du stock, comparé au carnet' },
      { mot: 'marge', sens: 'différence entre prix de vente et coût complet — c’est elle qui paie le loyer et le vendeur' },
      { mot: 'rotation', sens: 'vitesse à laquelle un article se vend et se remplace' },
      { mot: 'fond de caisse', sens: 'réserve de monnaie rendue, comptée chaque jour, jamais dépensée' },
      { mot: 'casse', sens: 'produit abîmé ou périmé — un coût réel à payer dans la marge' },
      { mot: 'crédit-client', sens: 'vente à tempérament écrite, plafonnée et relancée — pas une habitude silencieuse' },
    ],
    pieges: [
      { enoncé: 'Payer ses courses dans la caisse', eviter: 'Ne jamais confondre l’argent de la boutique avec sa poche : le trou se creuse sans bruit et la fermeture comptable devient un mensonge. Se verser un salaire noté, même modeste.' },
      { enoncé: 'Dormir à crédit fournisseur', eviter: 'Ne pas accumuler les impayés chez les grossistes pour remplir les rayons : le crédit coupé du jour au lendemain vide la boutique. Un paiement d’avance qui tourne vaut mieux que deux dettes qui dorment.' },
      { enoncé: 'Vendre à perte pour « faire le prix »', eviter: 'Ne jamais descendre sous le coût complet en espérant le rattraper sur la quantité : la marge ne se rattrape pas toute seule, la trésorerie meurt poliment.' },
      { enoncé: 'Reporter l’inventaire à plus tard chaque semaine', eviter: 'Ne rien attendre de l’année prochaine : les écarts découverts tard ne se corrigent plus. Une famille comptée par semaine, tout de suite.' },
    ],
  },
  {
    id: 'soudure',
    nom: 'Soudure et métal',
    emoji: '⚡',
    resume: 'Souder solide et sûr : masque, masse, métal propre — la beauté de l’arc est dans la préparation.',
    taches: [
      { titre: 'Préparer la place', gestes: [
        'Local ventilé, sol sans rien qui prend feu — copeaux, carton et essence sont les trois incendies de l’atelier.',
        'Gants et manches longues, masque teinté avant d’allumer : l’œil abîmé par l’arc se paie des années.',
        'Vieux pneus et bidons fermés ne se soudent jamais — ils explosent à la chaleur, remplis de gaz invisibles.',
      ] },
      { titre: 'Préparer le métal', gestes: [
        'Brosser ou meuler la zone à souder jusqu’au brillant : rouille et peinture font une soudure poreuse qui casse sans bruit.',
        'Ajuster les pièces serrées au pointage avant de passer l’arc complet — la dilatation change tout entre deux points distants.',
        'Choisir le diamètre de baguette selon l’épaisseur : sur une tôle fine, une baguette trop forte la perce.',
      ] },
      { titre: 'Tenir l’arc', gestes: [
        'Allumer en frottant ou en tapant, arc court et régulier : la distance de l’électrode tient dans le son — un grésillement posé, pas un crépitement nerveux.',
        'Avancer lentement, laisser le bain de fusion remplir ; le cordon doit avoir des écailles régulières.',
        'S’arrêter net, laisser figer avant de gratter le laitier : un cordon tapé trop tôt se fissure.',
      ] },
      { titre: 'Souder la tôle mince', gestes: [
        'Points rapprochés et pauses : la tôle fine chauffe et se perce en trois secondes de trop.',
        'Caler un cuivre ou une baguette froide derrière la zone comme dissipateur quand c’est possible.',
        'Sur tôles de carrosserie, gouttes successives et marteau à planer battront toujours l’arc continu d’un débutant.',
      ] },
      { titre: 'Finir et contrôler', gestes: [
        'Gratter le laitier, brosser, regarder le cordon : trous, morsures sur les bords ou soufflures = reprise, pas de camouflage.',
        'Frapper au marteau une soudure ratée ne la sauve pas — meuler et refaire à froid.',
        'Marquer les pièces de sécurité (châssis, supports de charge) avec la date et la reprise : un jour un humain montera dessus.',
      ] },
    ],
    glossaire: [
      { mot: 'arc', sens: 'décharge électrique qui fond le métal entre l’électrode et la pièce' },
      { mot: 'baguette', sens: 'électrode enrobée qui amène le métal d’apport — le choix du diamètre se paie' },
      { mot: 'laitier', sens: 'croûte de flux sur le cordon, à gratter pour contrôler' },
      { mot: 'cordon', sens: 'trace de métal fondu — ses écailles disent le geste' },
      { mot: 'masque', sens: 'écran teinté protégeant yeux et visage des rayons et des étincelles' },
      { mot: 'étincelle', sens: 'projection en fusion — elle part loin et allume ce qu’elle touche' },
      { mot: 'tôle', sens: 'feuille de métal fine, la plus délicate à souder sans percer' },
      { mot: 'pointage', sens: 'petits points d’arc qui figent les pièces en place avant la soudure complète' },
    ],
    pieges: [
      { enoncé: 'Souder sans masque ou avec un verre clair', eviter: 'Ne jamais regarder l’arc à l’œil nu, même « deux secondes » : la brûlure de rétine met des heures à se déclarer et des jours à passer. Le masque se met avant l’allumage.' },
      { enoncé: 'Souder un bidon ou pneu fermé', eviter: 'Ne rien souder d’un récipient ayant contenu essence, gaz ou huile sans l’avoir rempli d’eau et ouvert des deux côtés : la vapeur explose à l’arc, couvercle compris.' },
      { enoncé: 'Souder sur peinture ou rouille « pour aller vite »', eviter: 'Ne pas poser l’arc sur métal sale : les gaz de peinture et l’oxyde rendent le cordon poreux et le masque protège mal des fumées. Meuler d’abord.' },
      { enoncé: 'Travailler dans une pièce fermée sans air', eviter: 'Ne jamais souder porte et fenêtre closes : les fumées métalliques montent et donnent la fièvre des fondeurs le soir même. Ventiler, ou travailler dehors sous abri.' },
    ],
  },
  {
    id: 'produits-entretien',
    nom: 'Savons et produits d’entretien',
    emoji: '🧼',
    resume: 'Fabriquer propre et vendre honnête : savon, lessive et désinfectants dosés, gantés, étiquetés.',
    taches: [
      { titre: 'Savon solide', gestes: [
        'Huile + soude, dosage pesé à la balance : en dessous le savon ne lave pas, au-dessus il brûle la peau.',
        'Soude toujours versée dans l’eau, jamais l’inverse — la réaction chauffe et projette.',
        'Travail gants et lunettes, hors de portée des enfants et des animaux, dans un air qu’on ne respire pas.',
      ] },
      { titre: 'Lessive liquide', gestes: [
        'Cendre tamisée ou cristaux, eau chaude, dose mesurée en bouteilles marquées, pas en poignées.',
        'Savon râpé finement dissous d’abord, le reste ajouté ensuite — les grumeaux bouchent le flacon et dégoûtent l’acheteur.',
        'Laisser maturer et séparer avant d’embouteiller : ce qui sort tiède du chaudron n’a pas encore sa force.',
      ] },
      { titre: 'Désinfectants et javellisés', gestes: [
        'Un seul produit de désinfection à la fois, jamais de mélange maison hasardeux — eau de Javel + acide ou ammoniaque dégage des gaz qui prennent à la gorge.',
        'Dilution notée sur le bidon et date de préparation : la Javel affaiblie désinfecte mal et trompe tout le monde.',
        'Flacons d’origine étiquetés ou bouteilles alimentaires jamais réutilisées pour du produit ménager.',
      ] },
      { titre: 'Étiqueter et vendre', gestes: [
        'Nom, usage, précautions (gant, ne pas boire, tenir des enfants) et date sur chaque flacon — un produit du marché a les mêmes devoirs qu’un industriel.',
        'Vendre à l’essai petite quantité d’abord : un savon qui gratte la peau se corrige avant d’inonder le quartier.',
        'Garder un pot témoin de chaque lot, noté : un client mécontent repart avec une preuve, pas avec une dispute.',
      ] },
      { titre: 'Stocker et durer', gestes: [
        'Local sec et sombre, soude et acides séparés, jamais au soleil ni près du feu.',
        'Le savon maison se garde sec et sur grille — un savon dans du plastique suant se couvre de taches et se vend mal.',
        'Premier fabriqué, premier vendu : la rotation s’applique aux bidons comme aux pots.',
      ] },
    ],
    glossaire: [
      { mot: 'soude', sens: 'base qui transforme l’huile en savon — corrosive, pesée et gantée' },
      { mot: 'savon', sens: 'produit de lavage obtenu huile + base, durci et maturé' },
      { mot: 'lessive', sens: 'eau de nettoyage alcaline, maison à partir de cendre ou cristaux' },
      { mot: 'cendre', sens: 'résidu de combustion tamisé, source d’alcali pour lessiver' },
      { mot: 'javel', sens: 'désinfectant à base de chlore, dilué et daté — jamais mélangé' },
      { mot: 'dosage', sens: 'quantité pesée, écrite et répétée — le cœur de la qualité maison' },
      { mot: 'gant', sens: 'protection des mains, obligatoire à la manipulation et conseillée à l’usage vendu' },
      { mot: 'maturer', sens: 'laisser reposer jusqu’à ce que le produit prenne sa force' },
    ],
    pieges: [
      { enoncé: 'Mélanger javel et autre produit « pour plus fort »', eviter: 'Ne jamais mélanger la Javel avec un acide (détartrant, vinaigre) ou de l’ammoniaque : le gaz dégagé brûle les yeux et la gorge en quelques secondes. Un produit, un moment, aéré.' },
      { enoncé: 'Verser l’eau sur la soude', eviter: 'Ne jamais verser l’eau dans la soude : toujours la soude dans l’eau, lentement — l’inverse fait bouillir et projette une base qui marque la peau.' },
      { enoncé: 'Vendre un savon qui vient de couler', eviter: 'Ne pas sortir du moule avant la fin de la cure : un savon de quelques jours irrite la peau et coule à l’eau. Le client jugera mauvais ce qui est seulement trop jeune.' },
      { enoncé: 'Réemployer des bouteilles alimentaires pour produits ménagers', eviter: 'Ne jamais laisser un ménage sans étiquette sur un contenant qui a contenu à boire : les intoxications par confusion existent. Bouteilles marquées ou flacons de produit.' },
    ],
  },
];

export function trouverPack(id: string): PackMetier | null {
  return PACKS.find((p) => p.id === id) ?? null;
}

// Filtre honnête : un pack sans « pays » est universel (il reste). Un pack
// avec « pays: ['CI','ML'] » ne sort que si le pays choisi est dedans.
export function packsPourPays(
  packs: readonly PackMetier[],
  codePays: string,
): PackMetier[] {
  if (!codePays) return packs.slice();
  const c = codePays.toUpperCase();
  return packs.filter((p) => !p.pays || p.pays.includes(c));
}

// Mode crise : les packs « survie » et « approvisionnement » passent devant,
// sans rien supprimer — doctrine « gratuit jamais bridé ».
const EN_TETE_CRISE = ['crise-survie', 'approvisionnement'];
export function ordonnerPourCrise(packs: readonly PackMetier[]): PackMetier[] {
  const tete: PackMetier[] = [];
  const reste: PackMetier[] = [];
  for (const id of EN_TETE_CRISE) {
    const p = packs.find((x) => x.id === id);
    if (p) tete.push(p);
  }
  for (const p of packs) if (!EN_TETE_CRISE.includes(p.id)) reste.push(p);
  return [...tete, ...reste];
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
