// Le socle de l'encyclopédie, en module à part : les notices sont des données,
// pas de la logique. Séparées, elles peuvent grossir par lots et voyager dans
// leur propre morceau de fichier — le moteur de recherche, lui, reste dans
// « encyclo.ts » et ne change pas d'un octet. Court, vrai, donne envie
// d'approfondir.
export interface Notice {
  id: string;
  titre: string;
  domaine: string;
  resume: string;
  tags: string[];
  image?: string;
  url?: string;
}

export const SOCLE: Notice[] = [
  { id: 'soe', titre: 'Système solaire', domaine: 'Sciences', resume: 'Le Soleil et huit planètes liées par la gravité ; la Terre est la seule connue à abriter la vie.', tags: ['espace', 'planètes', 'gravité'] },
  { id: 'gal', titre: 'Voie lactée', domaine: 'Sciences', resume: 'Notre galaxie, un disque de plus de cent milliards d’étoiles dont le Soleil n’est qu’un point lumineux.', tags: ['espace', 'galaxie', 'astronomie'] },
  { id: 'mit', titre: 'Mitose', domaine: 'Sciences', resume: 'La division cellulaire qui duplique chaque chromosome et fabrique deux cellules identiques, base de la croissance.', tags: ['cellule', 'biologie', 'vie'] },
  { id: 'pho', titre: 'Photosynthèse', domaine: 'Sciences', resume: 'Les feuilles transforment la lumière, l’eau et le dioxyde de carbone en sucre et en oxygène : presque tout respire grâce à elle.', tags: ['plante', 'énergie', 'biologie'] },
  { id: 'eau', titre: 'Cycle de l’eau', domaine: 'Sciences', resume: 'Évaporation, nuages, pluie, rivières : la même eau tourne depuis des milliards d’années sans jamais se consumer.', tags: ['eau', 'terre', 'climat'] },
  { id: 'vol', titre: 'Volcans', domaine: 'Sciences', resume: 'Des failles de la croûte terrestre où la lave remontée du manteau façonne îles et montagnes, parfois avec violence.', tags: ['terre', 'roche', 'danger'] },
  { id: 'sek', titre: 'Séismes', domaine: 'Sciences', resume: 'Les plaques tectiques frottent, la croûte casse et libère des ondes : c’est le tremblement de terre, mesuré en magnitude.', tags: ['terre', 'ondes', 'danger'] },
  { id: 'mno', titre: 'Magnétisme', domaine: 'Sciences', resume: 'Aimants et courants électriques créent un champ invisible ; la Terre elle-même est un aimant géant qui guide les boussoles.', tags: ['aimant', 'énergie', 'physique'] },
  { id: 'lum', titre: 'Lumière', domaine: 'Sciences', resume: 'Onde électromagnétique à 300 000 km/s ; sa diffusion dans l’air rend le ciel bleu et son arc-en-ciel cache toutes les couleurs.', tags: ['ondes', 'couleur', 'physique'] },
  { id: 'son', titre: 'Son', domaine: 'Sciences', resume: 'Des vibrations qui voyagent dans l’air, l’eau ou les solides ; sans support matériel, le son n’existe pas : le silence de l’espace est total.', tags: ['ondes', 'vibration', 'physique'] },
  { id: 'mat', titre: 'États de la matière', domaine: 'Sciences', resume: 'Solide, liquide, gaz : la même eau change d’humeur selon la température, et la chaleur cachée du changement d’état règle nos pluies.', tags: ['eau', 'énergie', 'physique'] },
  { id: 'atm', titre: 'Atmosphère', domaine: 'Sciences', resume: 'Une coquille de gaz de cent kilomètres, la première moitié pesée au ras du sol : elle respire, protège et tient la planète au chaud.', tags: ['air', 'terre', 'climat'] },
  { id: 'ele', titre: 'Électricité', domaine: 'Technique', resume: 'Le déplacement organisé des électrons dans un conducteur ; tout notre monde numérique n’est que de l’électricité mise en scène.', tags: ['énergie', 'courant', 'technique'] },
  { id: 'inf', titre: 'Informatique', domaine: 'Technique', resume: 'Des portes logiques faites de transistors, des millions de zéros et des uns, et naissent textes, images et intelligences.', tags: ['calcul', 'données', 'technique'] },
  { id: 'ia', titre: 'Intelligence artificielle', domaine: 'Technique', resume: 'Des réseaux de neurones entraînés sur d’énormes quantités de texte ou d’images savent reconnaître, traduire et converser.', tags: ['calcul', 'données', 'cerveau'] },
  { id: 'rob', titre: 'Robotique', domaine: 'Technique', resume: 'Capteurs pour sentir, moteurs pour agir, programmes pour décider : le robot est un outil qui commence à choisir lui-même.', tags: ['machine', 'capteur', 'technique'] },
  { id: 'geo', titre: 'Géométrie', domaine: 'Maths', resume: "L'étude des formes, des distances et de l'espace, d'Euclide aux géométries courbes qui ont inspiré Einstein.", tags: ['formes', 'espace', 'nombre'] },
  { id: 'alg', titre: 'Algèbre', domaine: 'Maths', resume: 'L’art de manipuler l’inconnue : une lettre devient une boîte de calcul et les équations ouvrent la solution pas à pas.', tags: ['nombre', 'équation', 'méthode'] },
  { id: 'pro', titre: 'Probabilités', domaine: 'Maths', resume: 'Mesurer le hasard avec rigueur : dès qu’un jeu, une météo ou un risque est chiffré, ce sont les probabilités qui parlent.', tags: ['hasard', 'nombre', 'décision'] },
  { id: 'fib', titre: 'Suite de Fibonacci', domaine: 'Maths', resume: 'Chaque terme est la somme des deux précédents ; on retrouve cette suite dans les tournesols, les pins et certaines coquilles.', tags: ['nombre', 'nature', 'motif'] },
  { id: 'nom', titre: 'Nombres premiers', domaine: 'Maths', resume: 'Des nombres que rien ne divise à part 1 et eux-mêmes ; les briques invisibles de l’arithmétique et du code secret moderne.', tags: ['nombre', 'arithmétique', 'secret'] },
  { id: 'pyt', titre: 'Pythagore', domaine: 'Maths', resume: 'Dans un triangle rectangle, le carré de l’hypoténuse égale la somme des carrés des deux autres côtés : l’outil des mesures depuis 2500 ans.', tags: ['formes', 'triangle', 'mesure'] },
  { id: 'evh', titre: 'Évolution', domaine: 'Histoire', resume: 'Par sélection naturelle, les êtres vivants se transforment sur des millions d’années : la diversité du vivant en est la trace.', tags: ['darwin', 'biologie', 'science'] },
  { id: 'ren', titre: 'Renaissance', domaine: 'Histoire', resume: 'Entre XIVe et XVIe siècle, arts, sciences et explorations éclatent en Europe : Léonard de Vinci en est l’esprit le plus curieux.', tags: ['art', 'science', 'europe'] },
  { id: 'imp', titre: 'Empires d’Afrique', domaine: 'Histoire', resume: 'Ghana, Mali, Songhaï, Grande-Zimbabwe : de grands empires ont prospéré sur l’or, le sel, le commerce et l’urbanisme bien avant la colonisation.', tags: ['afrique', 'commerce', 'or'] },
  { id: 'mer', titre: 'Mer et océans', domaine: 'Géographie', resume: 'L’eau salée couvre plus de 70 % de la planète, régule le climat et abrite une vie que nous cartographions moins bien que la Lune.', tags: ['eau', 'terre', 'climat'] },
  { id: 'clm', titre: 'Climat', domaine: 'Géographie', resume: 'Le climat est une moyenne de la météo sur trente ans ; le golfe du Mexique, le Sahara et nos saisons en dépendent comme d’une horloge.', tags: ['terre', 'air', 'sciences'] },
  { id: 'cor', titre: 'Cœur', domaine: 'Corps humain', resume: 'Une pompe-muscle de 300 grammes qui bat cent mille fois par jour et irrigue chaque cellule de sang oxygéné.', tags: ['sang', 'vie', 'organe'] },
  { id: 'cer', titre: 'Cerveau', domaine: 'Corps humain', resume: 'Quatre-vingt-six milliards de neurones en réseau : penser, sentir et bouger ne sont que des courants et des chimies orchestrées.', tags: ['neurone', 'vie', 'sens'] },
  { id: 'som', titre: 'Sommeil', domaine: 'Corps humain', resume: 'Chaque nuit le cerveau range la journée, consolide la mémoire et répare le corps ; dormir peu, c’est apprendre moins.', tags: ['cerveau', 'mémoire', 'vie'] },
  { id: 'mus', titre: 'Musique', domaine: 'Arts', resume: 'Des fréquences organisées dans le temps : rythmes et gammes varient selon les cultures mais le plaisir d’écouter est universel.', tags: ['son', 'art', 'culture'] },
  { id: 'cin', titre: 'Cinéma', domaine: 'Arts', resume: 'Vingt-quatre images par seconde suffisent à l’œil pour croire au mouvement : le cinéma est une illusion partagée devenue art majeur.', tags: ['image', 'art', 'technique'] },
  { id: 'lng', titre: 'Langues du monde', domaine: 'Langue', resume: 'Plus de sept mille langues parlées ; chacune découpe le réel à sa façon et en perdre une, c’est perdre une manière de penser.', tags: ['parole', 'culture', 'mémoire'] },
  { id: 'ecr', titre: 'Écriture', domaine: 'Langue', resume: 'Née à Sumer pour compter les greniers, l’écriture a étendu la mémoire humaine au-delà des individus et des siècles.', tags: ['symbole', 'histoire', 'mémoire'] },
  { id: 'bio', titre: 'Biodiversité', domaine: 'Environnement', resume: 'Des millions d’espèces liées dans un réseau vivant ; chaque disparité retire un maillon que rien ne remplace.', tags: ['vie', 'nature', 'équilibre'] },
  { id: 'for', titre: 'Forêts', domaine: 'Environnement', resume: 'Elles respirent pour la planète, abritent la plupart des espèces terrestres et régulent la pluie des continents.', tags: ['arbres', 'climat', 'nature'] },
  { id: 'rlf', titre: 'Récifs coralliens', domaine: 'Environnement', resume: 'Des villes vivantes bâties par de petits animaux : moins de un pour cent de l’océan, un quart de la vie marine.', tags: ['mer', 'vie', 'équilibre'] },
  { id: 'dch', titre: 'Déchets et recyclage', domaine: 'Environnement', resume: 'Rien dans la nature ne jette : nos déchets sont des matières qui attendent le bon geste, ou polluent longtemps.', tags: ['matière', 'équilibre', 'société'] },
  { id: 'slt', titre: 'Solaire photovoltaïque', domaine: 'Énergie', resume: 'La lumière du soleil devient électricité dans une galette de silicium : la Terre reçoit en une heure de soleil de quoi alimenter un an.', tags: ['énergie', 'soleil', 'technique'] },
  { id: 'eol', titre: 'Éolien', domaine: 'Énergie', resume: 'Le vent est une énergie solaire corrigée par la rotation de la Terre ; ses pales captent ce mouvement devenu courant.', tags: ['énergie', 'vent', 'technique'] },
  { id: 'nucl', titre: 'Nucléaire', domaine: 'Énergie', resume: 'Fissionner l’uranium libère une énergie immense sans fumée ; la question reste la gestion des déchets et le risque.', tags: ['énergie', 'atome', 'débat'] },
  { id: 'bat', titre: 'Batteries', domaine: 'Énergie', resume: 'Stockées chimiquement, les électrons attendent leur heure : sans batterie, le solaire et l’éolien ne pourraient suivre la nuit.', tags: ['énergie', 'stockage', 'technique'] },
  { id: 'urb', titre: 'Villes', domaine: 'Société', resume: 'Nées de greniers et de carrefours, elles logent aujourd’hui plus de la moitié de l’humanité et dessinent son avenir.', tags: ['habiter', 'société', 'histoire'] },
  { id: 'mon', titre: 'Monnaie', domaine: 'Société', resume: 'Du coquillage au chiffre : la monnaie n’a de valeur que celle de la confiance partagée, et l’économie tout entière s’appuie dessus.', tags: ['échange', 'confiance', 'société'] },
  { id: 'trv', titre: 'Travail', domaine: 'Société', resume: 'Chaque métier est une réponse à un besoin des autres ; l’automatisation déplace le travail plus qu’il ne le fait disparaître.', tags: ['métier', 'société', 'technique'] },
  { id: 'edu', titre: 'Éducation', domaine: 'Société', resume: 'Transmettre sans remplacer : apprendre, c’est ajouter à l’élève ce qu’il découvrira seul avec de l’aide.', tags: ['école', 'apprendre', 'société'] },
  { id: 'ntn', titre: 'Internet', domaine: 'Société', resume: 'Des câbles sous-marins et des routeurs d’abord : le nuage numérique est en réalité un réseau très physique autour de la Terre.', tags: ['réseau', 'données', 'société'] },
  { id: 'vac', titre: 'Vaccins', domaine: 'Médecine', resume: 'Montrer au corps l’ennemi sans le danger : il en garde la mémoire et répond plus vite la fois suivante.', tags: ['corps', 'médecine', 'mémoire'] },
  { id: 'ant', titre: 'Antibiotiques', domaine: 'Médecine', resume: 'Des moisissures devenues médicaments : elles tuent les bactéries, et leur usage excessif fabrique des bactéries devenues résistantes.', tags: ['médecine', 'bactérie', 'équilibre'] },
  { id: 'dgst', titre: 'Digestion', domaine: 'Corps humain', resume: 'Du bol alimentaire à l’énergie, un voyage de trente mètres où chaque organe joue son rôle à l’heure.', tags: ['corps', 'énergie', 'vie'] },
];
