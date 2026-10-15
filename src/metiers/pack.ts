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
