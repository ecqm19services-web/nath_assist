# « L'indispensable hors-ligne » — note de cadrage produit (V1)

> By Nath-Tech. Document de vision et de décomposition, écrit avant tout code.
> Chaque sous-projet aura son propre spec → plan → implémentation en TDD.

## Vision en une phrase

Un assistant **métier** qui livre des résultats extraordinaires **sans connexion**,
dans la langue de la personne — français, anglais, **wolof**, **nouchi** — et que l'on
installe du Play Store comme un outil dont on ne peut plus se passer.

L'appel n'est pas « une app de plus » mais deux promesses concrètes :
1. « **Avec ça, je peux faire X** » — un gain professionnel net, mesurable.
2. « **Sans réseau, je fais des choses extraordinaires** » — la connexion n'est plus une condition.

Le poids de l'app n'est pas un défaut : elle est **lourde parce qu'elle embarque sa
puissance** (langues, savoirs, modèles, outils métiers), pas parce qu'elle est mal faite.

## Ce que la recherche dit (sourcé, oct. 2026)

### 1. Le hors-ligne est un fossé commercial en Afrique de l'Ouest
- Les apps **offline-first** pour équipes terrain sont un marché avéré : capturer localement,
  valider hors-ligne, synchroniser plus tard ([codeinktechnologies](https://codeinktechnologies.com/companynews/offline-first-mobile-apps-low-connectivity-african-markets),
  [gbox.rw](https://gbox.rw/en/blog/offline-first-mobile-apps-field-teams-africa/)).
- **Bridgefy** : 12,5 M d'utilisateurs pour texting **sans Internet** — la preuve qu'une
  capacité hors-ligne devient une raison d'installation massive ([Google Play](https://play.google.com/store/apps/details?id=me.bridgefy.main)).
- Conclusion : « pas besoin de connexion » est un **avantage vendable**, pas un lot de consolation.

### 2. Ce qui rapporte en 2026 = résultat récurrent + vertical métier
- Les apps qui gagnent sont adossées à un **abonnement sur un résultat récurrent** ou une
  **transaction réelle (take-rate)** ([quantumbyte](https://quantumbyte.ai/articles/apps-that-make-the-most-money)).
- Catégories qui sortent : **utilitaires IA à usage unique, prépa examens, santé/fitness vertical,
  outils finance, compagnons IA/bien-être** ([bigideasdb](https://bigideasdb.com/profitable-mobile-app-ideas-2026),
  [lovable](https://lovable.dev/guides/tech-app-ideas-to-launch-2026) ; GenAI mobile ≈ 3 Md$ fin 2025,
  [businessofapps](https://www.businessofapps.com/insights/will-generative-ai-apps-remain-a-revenue-powerhouse-in-2026/)).
- **CAC 5–20 $/install** → la **rétention** est le vrai moteur ([foresightmobile](https://foresightmobile.com/blog/mobile-app-economy-2026-monetisation-ai-foldables)).
  → D'où : **packs « indispensable de métier »** (abonnement), pas une features-thèque gratuite.

### 3. Le wolof et le nouchi ont une base ouverte réelle
- **Kallaama** : parole transcrite **wolof / pulaar / séeré** ([OpenSLR 151](https://www.openslr.org/151/), financement Lacuna Fund).
- **Galsen.ai / GalsenAILab** : corpus **ASR wolof** agrégeant quatre corpora ([galsen.ai](https://galsen.ai/en/galsenailab/)).
- **Premier modèle de parole wolof** (2025) : +18,4 % d'ASR via pretraining continu sur 860 h
  ([soynade](https://soynade.ai/research/speech-llm-wolof)).
- **Nouchi** : lexique et expressions documentés ([ResearchGate](https://www.researchgate.net/publication/326169098_View_on_the_Updating_of_Nouchi_Lexicon_and_Expressions)).
- Répertoires de données : [africanlp-public-datasets](https://github.com/Andrews2017/africanlp-public-datasets),
  [tonative](https://tonative.org/dataset-tools), [Lacuna Fund](https://lacunafund.org/datasets/language/).
- Conclusion : on peut **semencer un socle légal et hors-ligne** (lexique/phrasebook wolof+nouchi),
  puis viser l'**ASR/TTS on-device** par étapes — sans jamais inventer une traduction inconnue (règle du dépôt).

### 4. Play Store : chemin et contraintes réelles
- La PWA se packagera en **Trusted Web Activity** via **Bubblewrap / PWABuilder**
  ([quick-start](https://developer.chrome.com/docs/android/trusted-web-activity/quick-start)).
- **Contrainte bloquante** : Google Play impose **targetSdk 36 (Android 16)** pour toute nouvelle app
  ou mise à jour à partir du **31 août 2026** — déjà en vigueur
  ([PWABuilder #6160](https://github.com/pwa-builder/PWABuilder/issues/6160)).
- **Nuance honnête** : une TWA fait un **premier chargement en ligne**. Pour du hors-ligne vrai dès
  l'installation, prévoir **Capacitor** (bundle natif) ou embarquer les assets lourds + SW robuste.

## L'app aujourd'hui (socle sur lequel on bâtit)

- **Scène sensorielle** (three.js), **Compagne** (voix, bulles, mémoire, retissage de langue).
- **Boîte à outils hors-ligne** : flamme, frigo, assiette, journal, tuteur, souffle, résumé, carte des savoirs, **coffre** (export/import mémoire).
- **Études** : quiz, fiches, savoir ; **Entreprise** : devis, marque white-label.
- **Traduction** : lexique enrichissable + socle de mots sûrs (couture `choisirMoteurTraduction` prête pour un moteur local).
- **Multilingue** : détection FR/EN/WO + verrou de langue (worker + client).
- **Hors-ligne** déjà prouvé (pré-cache, vitrine), **consentement** caméra/micro, **aucun nom de moteur à l'écran**.

## Décomposition en sous-projets (chacun : spec → plan → TDD → commit)

- **SP1 — Cerveau hors-ligne** : rendre l'IA **vraiment locale** (modèles on-device, WebLLM emballé),
  pour que « extraordinaire sans connexion » soit vrai et pas un slogan. Joue sur le poids assumé de l'app.
- **SP2 — Langues vivantes (wolof + nouchi)** : socle lexique/phrasebook **hors-ligne** semé depuis les
  données ouvertes ci-dessus ; le **nouchi comme registre** (pas une langue séparée) ; feuille de route ASR/TTS.
- **SP3 — Indispensables de métier** : **packs verticaux** (commerçant, chauffeur, agriculture, santé,
  études/prépa, artisan…) — l'« explicateur de domaines d'activité ». C'est le produit qu'on vend.
- **SP4 — Play Store** : packaging TWA **targetSdk 36** + stratégie d'embarquement hors-ligne (Capacitor si besoin).
- **SP5 — Monétisation non intrusive (FCFA)** : déverrouillage à l'achat par **pack métier** ou abonnement,
  **sans espionner**, hors-ligne d'abord.

## Premier chantier recommandé (à valider) : SP2-lite — « Coffre de langues hors-ligne »

**Pourquoi celui-là d'abord** : faible risque, réutilise `lexique.ts` + `coffre.ts` déjà verts, résultat
**visible et vendable** en quelques jours (« ça marche hors-ligne dans ma langue »), aucune dépendance
Play Store/lourde à résoudre tout de suite.

**Portée (V1 de SP2)**
- Étendre le **socle** de `lexique.ts` avec un **phrasebook wolof** (salutations déjà reconnues → les
  traduire/afficher) et un **registre nouchi** (bascule d'expression, pas une langue inventée).
- Source : données ouvertes citées, **licence vérifiée entrée par entrée** ; **jamais** d'invention.
- Le tout **exportable/importable** via le coffre (partage de main en main, hors-ligne, sans compte).
- **Hors-ligne par construction**, aucun nom de moteur à l'écran.

**Critères de succès (mesurables)**
- Une requête wolof obtient une réponse dans **la bonne langue**, **sans réseau**.
- Le nouchi est proposé comme **registre** cohérent, activable, jamais forcé.
- Le socle est **transportable** (coffre) et **enrichible** par la communauté entrée par entrée.

**Hors périmètre de V1** (plus tard) : ASR/TTS wolof on-device, packs métiers complets, packaging Play.

## Prochaine étape

Écrire le **plan d'implémentation TDD** de SP2-lite (tâches 2–5 min, ROUGE d'abord), puis l'exécuter.
Arbitrage demandé : **démarrer par SP2-lite (langues)**, ou privilégier **SP3 (un pack métier précis)**,
ou **SP4 (Play Store d'abord)** si la fenêtre de publication est la priorité absolue.

## Statut d'avancement (15 oct. 2026)

- **SP2-lite Langues vivantes — LIVRÉ & DÉPLOYÉ.** Socle wolof (16 formes attestées) + registre
  nouchi (5 formes citées) + `carnet.ts` (enrichissable, rangé sous `nath.`, transporté par le coffre)
  + onglet **Langues**. 528 tests verts, prouvé en runtime hors-ligne (« merci » → « jërëjëf »).
- **SP3-lite Examen blanc — LIVRÉ & DÉPLOYÉ.** `examen.ts` (composition déterministe par graine,
  notation, durée conseillée, appréciation qui n'est jamais une fin) + onglet **Examen** sur les
  paquets de l'élève. 539 tests verts, prouvé en runtime (5 cartes, réponses cachées puis révélées,
  « 3/5 · 60 % — C'est en bonne voie »).
- **SP1 Cerveau hors-ligne — CÂBLÉ EN PRODUCTION.** Le local (Web-LLM, sonde GPU,
  consentement, fail-open) et le réseau gratuit existent déjà. **`cerveauRouteur.ts`**
  (`choisirCerveau` local>réseau>repli, `cleeDeReponse`, `avecCache`) est maintenant
  **réellement le décideur dans `ui.ts`** (plus de précédence recopiée à la main, verrouillé
  par test d'intégration source) et le **cache-first est câblé dans `creerCerveauNet`** :
  une question posée ne repart jamais deux fois vers l'API (un échec n'est pas figé, il
  se retente). C'est le 1ᵉʳ levier concret « arrêter de payer ». Le téléchargement réel
  des poids (Go) et la fiabilité WebGPU Windows restent un chantier à part.
- **SP4 Play Store — OUTILLÉ (dépôt), PUBLICATION HORS-DÉPÔT.** Manifeste **durci pour TWA**
  (`id`, `scope`, `start_url`, `lang fr`, `orientation`, `categories`, icônes `any`+`maskable`),
  garde-fou `play-store.test.ts`, et **`scripts/prepare-play-store.ps1`** (build, contrôles
  prérequis, Bubblewrap, checklist **targetSdk 36** + `/.well-known/assetlinks.json`). La
  construction/push de l'AAB exige SDK Android + Java + Play Console — hors du pouvoir du dépôt.
- **SP5 Monétisation FCFA — MÉCANISME ARMÉ, NON ACTIVÉ.** `paliers.ts` (`palierDe`, `estOuvert`) :
  toute capacité est **« libre » par défaut** ; une ne se réserve que sur réglage explicite, alors
  la clé Nath+ locale l'ouvre. **Aucun paywall forcé** — la doctrine « le gratuit n'est jamais
  bridé » est tenue. À activer capacité par capacité quand le modèle est fixé (pack à vie vs
  abonnement).
