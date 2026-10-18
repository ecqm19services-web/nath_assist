# Journal des versions — Nath Assist

Ce journal suit les livraisons réellement publiées en production
(https://ecqm19services-web.github.io/nath_assist/). Les dates sont celles
de la publication ; tout ce qui est listé ici est vert sous tests.

## 0.2.0 — 18 octobre 2026

Le grand train « terrain » : le hors-ligne devient un droit, le métier
devient un catalogue, et la mesure devient un outil.

- **Mode hors-ligne complet** : cerveau, voix, météo, ciel réel, études —
  tout revient sans réseau (stratégie cache-first : sans connexion, rien
  ne demande, tout répond).
- **Packs Métiers, vagues 4 à 6** : le catalogue passe de 12 à **24 métiers**
  (coiffure, réparation de téléphones, marché, maçonnerie, pêche, élevage,
  santé communautaire, cordonnerie, plomberie, peinture, menuiserie,
  transformation alimentaire, apiculture, gestion de boutique, soudure,
  produits d’entretien…), chaque fiche avec son pays quand il faut.
- **Page de mesure `?sonde=cerveau`** : un outil discret pour jauger le gros
  cerveau sur n’importe quel appareil — en mots simples, jamais un nom de
  technologie à l’écran ; pensé pour le protocole téléphone (Wi-Fi, puis
  mode avion, puis photo des lignes).
- **Choix de pays enfin fidèle** : « Tous » reste vraiment « Tous » ; la
  langue du navigateur ne pré-sélectionne que tant que rien n’est choisi.
- **Voix qui ne meurt jamais** : le gros moteur vocal local est posé une
  fois puis lu hors-ligne ; si absent, le texte part chez le worker
  « dire » ; en dernier recours, la voix du navigateur.
- **Encyclopédie refaite** : 50 notices illustrées, recherche insensible aux
  accents, favoris, découverte du jour ; mode Études avec répétition espacée
  (MémoRise).
- **Mode Entreprise** : clé d’organisation, marque white-label, générateur de
  devis avec empreinte de prix (QR + code lisible).
- **Dictée vocale** : l’écoute dicte, la correction reste locale.
- **Installable** : iPhone (chaîne d’appui PWA) et Android (bulle d’aide).
- 668 tests, 60 fichiers ; pré-cache 894 KiB ; moteur local éprouvé sur
  desktop (au repos, une réponse en ~2,5 s).

## 0.1.0 — 2 octobre 2026

Premier train : **NUAGE v1-alpha, le cloud sensoriel**.

- Scène WebGL : le nuage, le ciel réel (jour/nuit/météo), les Ondeurs.
- La Compagne : une présence qui salue, se souvient, relance — hors-ligne.
- Les premiers assistants : souffle, flamme, frigo, assiette, journal,
  mots, tuteur, cuisine.
- L’aide d’urgence (premiers secours) sans promesses médicales ;
  la discrétion comme règle d’or : rien ne sort de l’appareil.
