# BILAN DE TRANSMISSION — NATH ASSIST (nuage by Nath-Tech)

> **Document de transfert entre agents.** Écrit le 18 oct. 2026 pour que la prochaine
> conversation reprenne **exactement** où celle-ci s'arrête, sans re-exploration.
> Si un fait ici contredit le code, **le code gagne** — mais signale l'écart.
>
> **À lire dans cet ordre :** §0 (5 minutes) → §6 (règles) → §11 (état) → §13 (prochain pas).

---

## 0. AGENT ENTRANT — ce que tu dois savoir en 5 minutes

**Le produit.** « NUAGE by Nath-Tech » : une **PWA** d'assistant métier et de compagnie,
pensée pour l'Afrique de l'Ouest, **fonctionnant hors-ligne**, en français simple, sans
jamais afficher le nom d'un moteur d'IA. Dépôt GitHub `ecqm19services-web/nath_assist`,
publiée sur GitHub Pages.

**L'état.** Le socle est **vert, buildé, déployé** : 646 tests (59 fichiers), `tsc` 0 erreur,
prod servie = bundle construit localement (`index-BlbwIZL5.js`, vague 5 + pré-sélection
 comprises), `main` = `gh-pages` = poussés, vérifié au curl après délai CDN.

**La priorité.** Les chantiers 1 et 2 (§13) sont **livrés en prod**. Le cap suivant est
**SP1 — poids local réel** (§13 item 3) ; SP4 reste bloqué à l'installation manuelle
JDK + Android SDK ; SP5 attend la décision de modèle de l'utilisateur.

**Le rituel.** L'utilisateur pilote par mots-clés courts :
`continues` (enchaîner la suite logique), `tout` (lever toutes les restrictions de périmètre),
`fais github` (**seul** ordre qui autorise commit + push + déploiement). Ne jamais pousser
sans `fais github`.

**Le contrat de qualité.** **TDD strict** : écrire le test, **le voir échouer (ROUGE)**, puis
écrire le minimum pour passer. Aucun code de production sans test échoué d'abord.

---

## 1. Identité et contraintes permanentes (non négociables)

| Élément | Valeur |
|---|---|
| Nom produit | **NUAGE** — mention **« by Nath-Tech »** obligatoire |
| Dépôt | `https://github.com/ecqm19services-web/nath_assist.git` |
| URL publique | `https://ecqm19services-web.github.io/nath_assist/` |
| Éspace de travail | `f:\icf` |
| OS / shell | Windows 22H2, **PowerShell 5.1** |
| Stratégie de poids | l'app est **lourde parce qu'elle embarque sa puissance**, pas par malfaçonnage (philosophie assumée, cf. vision) |

---

## 2. Où on en est — instantané vérifié (18 oct. 2026)

| Surface | État vérifié |
|---|---|
| `main` | `ec8a1ae` — feat(metiers): vague 5 + pré-sélection par la langue — **poussé** ; avant : `39646d9` (bilan + `équerrage`) |
| `gh-pages` | dernier deploy = bundle `index-BlbwIZL5.js` — **poussé** |
| Bundle | `index-BlbwIZL5.js` — hash **identique** local (`dist/`) ↔ prod (curl, cache-buster) |
| Tests | **646 passed (59 files)** |
| `tsc --noEmit` | **0** |
| Build Vite | OK — pré-cache 868,39 KiB |
| Worker Cloudflare | `nath-cerveau` — **inchangé** depuis longtemps (module 100 % client) |
| Runtime | **vérifié en navigateur (preview 4173)** : 12 onglets ; `fr-SN` simulé → pastille Sénégal active, encart urgences SN, 17 packs visibles (cuisine-AO filtré, correct), pack `peche-artisanale` se rend sans erreur |
| Working tree | **propre** — tout est commité et poussé |

Historique récente (du plus récent au plus ancien) :

```text
39646d9 docs: bilan de transmission complet + fix orthographe equerrage (pack Maconnerie)
4ed1191 feat(metiers): vague 4 - Coiffure, Reparation telephones, Marchage, Maconnerie
fc50962 feat(metiers): vague 3 - Afrique de l'Ouest entiere, crise, approvisionnement
b0fd20c feat(metiers): SP3-bis packs metier hors-ligne (Couture, Boulangerie, Electricite) + onglet Metiers
57343d2 refactor(sp1): ui.ts delègue à choisirCerveau; docs: SP1 câblé en prod
6775b4a feat: SP1 routeur+cache-first cerveau, SP4 manifest TWA + script Play, SP5 paliers (vert par defaut)
17d1017 docs(vision): statut SP2-lite+SP3-lite livres, contraintes honnetes SP1/SP4/SP5
5462d1e feat(examen): mode Examen blanc hors-ligne (module + onglet) (SP3-lite)
2b9b805 feat(langues): socle wolof+registre nouchi, onglet Langues, coffre, vision (SP2-lite)
```

---

## 3. Accès, comptes, environnement machine

**Ce qui est déjà opérationnel sur cette machine :**

- **GitHub CLI** : session active, compte `ecqm19services-web` (l'autre compte `icfgroup`
  est présent mais **inactif**). Avant toute poussée :
  `gh auth switch --user ecqm19services-web`.
- **Git** : dépôt initialisé, `origin` configuré, branches `main` + `gh-pages`.
- **Node/npm** : `npm.cmd`, `npx.cmd`, `wrangler` via `npx.cmd` — tout fonctionne.
- **PowerShell 5.1** : `npm.cmd` / `npx.cmd` / `curl.exe` (jamais `curl` alias PowerShell) ;
  **jamais `&&`** — utiliser `;` ; pas de heredoc ; écrire les accents en UTF-8.
- **CDN GitHub Pages** : propagation **~60 s** après poussée. Toujours attendre
  `Start-Sleep -Seconds 60` et ajouter un cache-buster `?t=$(Get-Random)` avant de vérifier.

**Comptes à créer / à la main (hors pouvoir de l'agent)** — détail dans `docs/LANCEMENT.md` :
Cloudflare (déjà utilisé pour le worker), Google (AdSense / YouTube API / Gemini),
Mistral, F-Droid, agrégateur Mobile Money, INAPIPI/OMPIC/BOIP pour la marque, domaines.

**Secrets :** aucun dans le dépôt. La grille de clé Nath+ est générée par
`scripts/gen-cle.mjs` (local, déterministe, sans serveur).

---

## 4. Stack technique

| Couche | Choix |
|---|---|
| Build | **Vite** + TypeScript strict, `target` ES2022, **SPA mono-entry** (`index.html` → `src/main.ts`) |
| PWA | `vite-plugin-pwa` : pré-cache `generateSW`, `skipWaiting` + `clientsClaim`, pré-cache ~850 KiB |
| 3D / visuel | **three.js** (scène « nuage sensoriel »), shaders de ciel, aurores, auréole |
| Tests | **Vitest** (`npm test` = `vitest run`) — 59 fichiers, 646 tests |
| Types | `tsconfig.json` strict ; `npm run build` = `tsc --noEmit && vite build` |
| Backend | quasi aucun : **1 Worker Cloudflare** (`cloudflare/nath-cerveau.worker.ts`, `nath-cerveau`) pour l'assistance connectée optionnelle et le verrou de langue |
| Données | **localStorage sous préfixe `nath.`** + coffre export/import (pas de base, pas de compte) |
| IA locale | Web-LLM / WebGPU en routeur (SP1), fail-open, jamais de dépendance réseau obligatoire |

---

## 5. Architecture et cartographie du code (64 fichiers, ~9 200 lignes)

**Flux d'exécution.** `index.html` → `src/main.ts` → monte la scène (`nuage/scene`), les
entrées (`input/*`), l'audio, l'auréole, puis la **Compagne** (`compagne/ui`) qui héberge la
**boîte à outils** (`compagne/outilsUI`) et les onglets. Les savoirs et packs sont des
**modules de données hors-ligne** importés statiquement.

| Répertoire | Rôle | Fichiers |
|---|---|---|
| `src/nuage/` | scène 3D, ciel réel, météo, shader, **rPPG** ( pouls par caméra), état | `scene.ts` `cielReel.ts` `cloudShader.ts` `meteo.ts` `rppg.ts` `state.ts` |
| `src/input/` | souffle (micro), caméra + **consentement**, émotion, toucher/inclinaison | `breath.ts` `breathIO.ts` `camera.ts` `cameraIO.ts` `emotion.ts` `touch.ts` |
| `src/aura/` | auréole réactive | `aura.ts` |
| `src/audio/` | ambiance, réglages, tonalités | `ambient.ts` `reglages.ts` `tones.ts` |
| `src/compagne/` | **cœur produit** | voir ci-dessous |
| `src/assist/` | outils de la boîte à outils | `flamme.ts` (feu/chauffe) `frigo`… via outilsUI, `assiette.ts` `cuisine.ts` `journal.ts` `souffle.ts` `tuteur.ts` `resume.ts` `carte.ts` `mots.ts` `dire.ts` |
| `src/etudes/` | études & savoir | `quiz.ts` `fiches.ts` `savoir.ts` `encyclo.ts` `examen.ts` `store.ts` |
| `src/traduction/` | langues | `lexique.ts` (socle FR/EN/WO) `carnet.ts` (enrichissable) `dictee.ts` `moteurNet.ts` |
| `src/metiers/` | **packs métier hors-ligne** | `pack.ts` (18 packs) `pays.ts` (13 pays) `contexte.ts` (pays + mode crise) |
| `src/entreprise/` | vitrine & white-label | `devis.ts` `marque.ts` |
| `src/monetisation/` | verrous doux | `cle.ts` `paliers.ts` `pro.ts` |

**Détail `src/compagne/` :**

| Fichier | Responsabilité |
|---|---|
| `ui.ts` | UI de la compagne ; **délègue le choix du cerveau à `cerveauRouteur.choisirCerveau`** (verrouillé par test d'intégration) |
| `outilsUI.ts` | **12 onglets** de la boîte à outils + rendu Métiers (sélecteur pays, bascule Mode crise, encart urgences) |
| `cerveau.ts` | gros cerveau local (demande le poids, **ne le télécharge jamais tout seul**) |
| `cerveauNet.ts` | cerveau connecté + **cache-first** (une question n'est jamais redemandée à l'API) |
| `cerveauRouteur.ts` | `choisirCerveau` (local > réseau > repli), `cleeDeReponse`, `avecCache` |
| `coffre.ts` | export/import de la mémoire ; `estMaison()` retient **tout ce qui commence par `nath.`** |
| `memoire.ts` `proactive.ts` `reveil.ts` `dialogue.ts` `comprehension.ts` `juge.ts` `logique.ts` `maths.ts` | compagnie : mémoire, initiative, réveil, dialogue, compréhension, juge, logique, maths |
| `voix.ts` `voice.ts` | TTS / reconnaissance vocale |
| `savoirUI.ts` `miseAJour.ts` | carte des savoirs ; mise à jour SW |

**Les 12 onglets** (`outilsUI.ts` ligne 83) :
`flamme` · `frigo` · `assiette` · `journal` · `tuteur` · `souffle` · `resume` · `carte` · `langues` · `examen` · `metiers` · `coffre`

**Le worker** (`cloudflare/nath-cerveau.worker.ts`) : verrouille la langue de réponse,
annonce `utf-8`, sert l'assistance connectée optionnelle. Déploiement : `npx.cmd wrangler deploy`
**seulement si ce fichier change** — ce n'est plus le cas depuis longtemps.

---

## 6. Doctrine produit — les règles qui survivent au code

Les transgresser est un **bug fonctionnel**, pas un détail de style.

1. **Gratuit jamais bridé.** Aucune capacité n'est verrouillée par défaut. `paliers.ts`
   (`palierDe`, `estOuvert`) : « libre » est l'état initial ; une bascule explicite seule
   réserve, et alors la **clé Nath+ locale** l'ouvre. Les extensions seules connaissent
   l'essai 15 jours.
2. **Jamais le nom d'un moteur à l'écran.** Pas de « ChatGPT », « Gemini », « WebLLM »
   dans l'UI ni dans les textes.
3. **Zéro biométrie sortante.** Nuage, sommeil, méditation, SOS : **jamais de publicité** ;
   la caméra et le micro exigent un consentement explicite et restent locaux.
4. **Hors-ligne d'abord / fail-open.** Chaque fonctionnalité doit rester utilisable sans
   réseau ; un échec réseau n'est jamais figé (on retente), une donnée absente n'est jamais
   une erreur bloquante (repli honnête).
5. **Sécurité médicale.** Dans les packs soins/crise, **chaque** « à éviter » contient une
   négation explicite `ne (jamais|pas|rien)` — verrouillée par test. Aucun faux conseil.
6. **Honnêteté des numéros d'urgence.** Les chiffres par pays sont **indicatifs**, avec
   l'avertissement `AVERTISSEMENT_URGENCE` invitant à confirmer auprès des autorités locales.
7. **Ne jamais inventer une traduction.** Un mot wolof/nouchi entre dans le socle seulement
   s'il est **attesté** (source vérifiée entrée par entrée). Le nouchi est un **registre**,
   pas une langue séparée.
8. **Français simple, propre.** Le **garde-fou langue** (`tests/garde-fou-langue.test.ts`)
   refuse les élisions baissées (`l eau`, `d un`, `qu il`, `j ai`…) dans toute phrase servie.
9. **Local-first, sans compte.** Les données vivent sous `nath.*` ; le coffre permet le
   passage de main en main hors-ligne. Aucune création de compte requise.
10. **Marque.** « by Nath-Tech » visible : titre, pied de page, manifeste, icônes, docs.
    Ne jamais le retirer d'une surface visible.
11. **Poussée explicite.** `git push` / publication uniquement sur **« fais github »**.
12. **TDD strict** (§10). Promesse de revenus : trajectoire M+15→M+24 pour ≥ 2 M FCFA/mois,
    rien avant.

---

## 7. Environnement Windows / PowerShell 5.1 — pièges déjà payés en argent réel

| Piège | Conséquence | Réflexe à avoir |
|---|---|---|
| `npm` / `npx` en PowerShell | le `.ps1` d'npm échoue | toujours **`npm.cmd`** / **`npx.cmd`** |
| `curl` | alias PowerShell `Invoke-WebRequest` | toujours **`curl.exe -s`** |
| `&&` | non supporté par PS 5.1 | séparateur **`;`** |
| **Apostrophe ASCII `'` dans une chaîne `'…'`** du code (ex. `de l'eau`, `l'essentiel`) | **esbuild/parse error** (`Expected '}' but found 'eau'`) | écrire **`’`** (U+2019, typographique) dans les textes français, ou reformuler |
| Même apostrophe dans un **titre de test** `it('…l'essentiel…')` | échec de parse du fichier de test | reformuler le libellé |
| `°C` dans un texte français | le garde-fou langue lit `c` + espace + voyelle comme une **élision baissée** et **fait échouer le test** | écrire **`degrés`** |
| Accents manquants (`equerrage`) | **aucun** test ne le détecte (le garde-fou ne cherche que les élisions) | relire l'orthographe française avant de pousser |
| Écrasement du bundle en prod | visiteur sur l'ancienne version → **écran blanc** | le script de publication **conserve les 5 derniers bundles** dans `assets/` — ne pas le court-circuiter |
| Vérification trop rapide après poussée | CDN pas propagé → fausse alarme | **60 s** d'attente + cache-buster |
| Compte GitHub actif inversé | poussée sur le mauvais dépôt | `gh auth switch --user ecqm19services-web` avant `git push` |

**Autres erreurs historiques déjà corrigées (ne pas les rejouer) :**
`la reponse s annonce en utf-8` (worker), `le gros cerveau local se demande, il ne se
télécharge plus seul`, `le pre-cache ne paie plus le gros cerveau`, `le lieu se lit chez
soi, pas chez un fournisseur` (géoloc), `plus aucune phrase qui sonne comme un deuil` (ton).

---

## 8. Git & déploiement — la séquence exacte

```powershell
# 1. Tout vert
cd f:/icf; npm.cmd test; npx.cmd tsc --noEmit; npm.cmd run build

# 2. Commit (uniquement sur « fais github »)
git add -A; git commit -m "feat(...): ..."   # message en ASCII : ne pas mettre d'accent dans le -m

# 3. Poussée main
gh auth switch --user ecqm19services-web; git push origin main

# 4. Publication gh-pages (reconstruit + préserve les 5 derniers bundles)
powershell -ExecutionPolicy Bypass -File scripts/publier-gh-pages.ps1
git push origin gh-pages

# 5. Worker Cloudflare : UNIQUEMENT si cloudflare/nath-cerveau.worker.ts a changé
npx.cmd wrangler deploy

# 6. Vérification après propagation
Start-Sleep -Seconds 60
curl.exe -s "https://ecqm19services-web.github.io/nath_assist/?t=$(Get-Random)" | Select-String -Pattern 'assets/[^"]+\.js'
#   → le hash doit être IDENTIQUE à dist/index.html
```

Scripts utiles dans `scripts/` : `publier-gh-pages.ps1`, `prepare-play-store.ps1`,
`gen-cle.mjs`, `gen-icons.mjs`, `lance-suite.ps1`, `menage-serveurs.ps1`,
et les sondeurs `sonde-*.mjs` (hors-ligne, juge, langues, sous-chemin, veto).

---

## 9. Modèle de données — la règle des clés `nath.`

**Règle structurelle :** toute donnée persistée **doit** vivre sous un préfixe `nath.` —
c'est ce qui la fait reconnaître par `estMaison()` dans `coffre.ts` et donc la rend
**automatiquement transportable** par export/import, sans rien ajouter.

Inventaire vérifié des clés en vigueur :

```text
nath.camera.face        nath.cerveau            nath.cerveau.local
nath.cerveau.modele     nath.encyclo.favoris    nath.etudes
nath.flamme             nath.journal            nath.lexique
nath.marque             nath.metiers.contexte   nath.metiers.progression
nath.musique            nath.pro                nath.savoir
nath.souffle            nath.trad.carnet        nath.trad.langue
```

(18 clés inventoriées par `Select-String` sur `src/`. La mémoire de la compagne et les
paquets d'études écrivent aussi sous `nath.` — tout ce qui démarre par le préfixe est
reteni par le coffre, même non listé ici.)

**Conventions métier :**

- `PackMetier` : `{ id, nom, emoji, resume, taches[], glossaire[], pieges[], pays? }` —
  5 tâches · 6-8 mots · 3-4 pièges par pack. `pays?` absent = **universel**.
- `Pays` : `{ code, nom, emoji, monnaie, langues[], urgence: { police, pompiers, samu, commun? } }`.
- `Contexte` : `{ pays: string, crise: boolean }` — persisté sous `nath.metiers.contexte`,
  devinable depuis la langue BCP-47 du navigateur (`fr-SN` → `SN`, `en-GH` → `GH`).

---

## 10. Tests — 59 fichiers, 646 tests, et les verrouillages qui comptent

**Commandes.** `npm.cmd test` (tout, ~155 s) · `npm.cmd test -- tests/metiers.test.ts`
(un fichier) · `npx.cmd vitest run tests/<fichier>` (équivalent). **Le compte est la vérité :
le dire sans l'avoir vu est une faute.**

**Les tests qui font office de loi (ne pas les contourner) :**

| Test | Ce qu'il verrouille |
|---|---|
| `garde-fou-langue.test.ts` | aucune élision baissée (`l eau`, `d un`, `qu il`…) dans **aucun** texte servi ; scanne les sources |
| `metiers.test.ts` | ≥ 18 packs ; les ids par vague ; marqueurs de contenu par pack ; `pays?` ; `packsPourPays` ; `ordonnerPourCrise` ; **négation médicale** `ne (jamais\|pas\|rien)` sur chaque piège soins/crise/vague 5 (vérifiée **piege par piege**, pas en bloc) ; **câblage UI** vérifié dans le source de `outilsUI.ts` via `import.meta.glob` raw (imports de `pays`/`contexte`, appels au filtre, `Mode crise`, `data-pays=`, `data-act=`, et **pré-sélection `paysVu = paysEffectif`**) |
| `metiers-pays.test.ts` | unicité des codes, numéros d'urgence renseignés, 8 piliers AO, insensibilité à la casse, SN 15/17/18, GH 191/192/193, FR 15/17/18/112 |
| `metiers-contexte.test.ts` | défaut, préfixe `nath.`, round-trip, **JSON menteur** toléré, code inconnu ignoré, `devinerPaysDepuisLangue` |
| `play-store.test.ts` | manifeste conforme TWA (id, scope, start_url, lang, orientation, categories, icônes `any`+`maskable`) |
| `cerveau*.test.ts` | `choisirCerveau` local > réseau > repli ; cache-first ; clé de réponse |
| `pro.test.ts` `monetisation.test.ts` | **tout est libre par défaut** ; un paywall n'existe que sur réglage explicite |

**Méthode TDD imposée.** ROUGE d'abord : écrire le test, **le voir échouer pour la bonne
raison** (fonctionnalité absente, pas faute de frappe), puis le code minimum. Jamais de code
de production écrit avant son test échoué. Si le test passe immédiatement, il ne teste rien.

---

## 11. Cahier des charges — ce qui est livré, ce qui est partiel

### SP2-lite — Langues vivantes (wolof + nouchi) — **LIVRÉ & DÉPLOYÉ**
Socle wolof (16 formes attestées) + registre nouchi (5 formes citées) + `traduction/carnet.ts`
enrichissable entrée par entrée, rangé sous `nath.trad.carnet`, transporté par le coffre +
onglet **Langues**. Éprouvé en runtime hors-ligne (« merci » → « jërëjëf »). 528 tests à l'époque.

### SP3-lite — Examen blanc — **LIVRÉ & DÉPLOYÉ**
`etudes/examen.ts` : composition **déterministe par graine**, notation, durée conseillée,
appréciation qui n'est **jamais une fin** (« C'est en bonne voie ») + onglet **Examen** sur les
paquets de l'élève. Éprouvé en runtime (5 cartes, réponses cachées puis révélées, 3/5 · 60 %).

### SP3-bis — Packs Métiers — **LIVRÉ, 5 vagues, 18 packs — tout est en prod**
`src/metiers/pack.ts`, onglet **Métiers**. Chaque pack : 5 tâches (gestes concrets), 6-8 mots
de glossaire, 3-4 pièges avec négation explicite. Français simple, 100 % hors-ligne.

| # | id | Nom | Pays |
|---|---|---|---|
| 1 | `couture` | Couture | universel |
| 2 | `boulangerie` | Boulangerie | universel |
| 3 | `electricite` | Électricité | universel |
| 4 | `cuisine-senegalaise` | Cuisine sénégalaise | `['SN']` |
| 5 | `premiers-soins` | Premiers soins | universel |
| 6 | `cuisine-afrique-ouest` | Cuisine d’Afrique de l’Ouest | `['CI','ML','BF','GN','BJ','TG','GH','NG','CM','MR']` |
| 7 | `crise-survie` | Crise & survie | universel |
| 8 | `approvisionnement` | Approvisionnement | universel |
| 9 | `coiffure` | Coiffure & tressage | universel |
| 10 | `reparation-telephones` | Réparation téléphones | universel |
| 11 | `marchage` | Marîchage | universel |
| 12 | `maconnerie` | Maçonnerie & bâtiment | universel |
| 13 | `peche-artisanale` | Pêche artisanale | universel |
| 14 | `elevage` | Élevage (volaille & petits animaux) | universel |
| 15 | `sante-communautaire` | Santé communautaire (prévention + référence, **négations médicales**) | universel |
| 16 | `cordonnerie` | Cordonnerie | universel |
| 17 | `plomberie` | Plomberie | universel |
| 18 | `peinture` | Peinture en bâtiment | universel |

**Filtrage & crise.** `packsPourPays(packs, code)` garde universels + pays choisi. Depuis la
vague 5, l'onglet filtre sur le **pays « vu »** : celui choisi, sinon celui deviné de la langue
du navigateur (`fr-SN` → SN) via `paysEffectif` — l'utilisateur garde la main, le clic « Tous »
réinitialise vers cet automatisme doux. `ordonnerPourCrise(packs)` remonte `crise-survie` puis `approvisionnement` **en
tête sans jamais rien retirer** (doctrine gratuit non bridé). `pays.ts` : **13 pays**
`SN ML CI BF GN BJ TG NE GH NG CM MA FR` avec numéros d'urgence, monnaie, langues, emoji +
`AVERTISSEMENT_URGENCE`. `contexte.ts` : `lireContexte` / `ecrireContexte` /
`devinerPaysDepuisLangue` / `paysEffectif`, persistés sous `nath.metiers.contexte`.
Progression sous `nath.metiers.progression`.

**Contenu notable.** thiéb, yassa, mafé, **banku, attiéké, foutou/foufou, jollof, ndolé,
saka-saka, garba, alloco** ; survie sans hôpital (ébullition, chloration, **SRO**, latrine,
triage, rationnement) ; méthode d'approvisionnement (**stock tampon**, **fournisseur de
repli**, prix de revient, seuil d'alerte, chaîne du froid) ; démêler/vanille/natte/défrisage ;
**ESD**, nappe, batterie **Li-ion** (emballement thermique) ; pépinière, **repiquage**,
**paillage**, rotation ; **équerrage 3-4-5**, fondations, **chaînage**, **hourdis**,
**gobetis**, **mortier bâtard**, enduits en trois couches.

### SP1 — Cerveau hors-ligne — **CÂBLÉ EN PROD, chantier ouvert**
`cerveauRouteur.ts` (`choisirCerveau` local > réseau > repli, `cleeDeReponse`, `avecCache`)
est **réellement le décideur** dans `ui.ts` (plus de précédence recopiée à la main — verrouillé
par test d'intégration source) et le **cache-first est câblé dans `creerCerveauNet`** : une
question posée ne repart jamais deux fois vers l'API (un échec se retente, il n'est pas figé).
**Ce qui reste à faire :** téléchargement réel des poids (plusieurs Go) et fiabilité **WebGPU
sous Windows**. C'est le 1ᵉʳ levier concret « arrêter de payer ».

### SP4 — Play Store — **OUTILLÉ dans le dépôt, publication hors-dépôt**
Manifeste durci pour **TWA** + garde-fou `play-store.test.ts` +
`scripts/prepare-play-store.ps1` (build, contrôles de prérequis, Bubblewrap, checklist
**targetSdk 36** + `/.well-known/assetlinks.json`). **Bloquant : il faut JDK + Android SDK +
Play Console** — hors du pouvoir du dépôt et de l'agent.

### SP5 — Monétisation FCFA — **MÉCANISME ARMÉ, NON ACTIVÉ**
`monetisation/paliers.ts` : toute capacité est « libre » par défaut ; une ne se réserve que
sur réglage explicite, et alors la **clé Nath+ locale** (`monetisation/cle.ts`,
`scripts/gen-cle.mjs`) l'ouvre. **Aucun paywall forcé.** La décision de modèle
(**pack à vie** vs **abonnement**) appartient à l'utilisateur — les mécanismes sont prêts.

---

## 12. Limites, lacunes et pitfalls connus — la liste honnête

**Sujets techniques ouverts.**
- **Poids du modèle local** non téléchargé : SP1 est un *routeur* intelligent, pas encore un
  cerveau fully-on-device. WebGPU/Windows instable.
- **TWA = premier chargement en ligne.** Pour du vrai hors-ligne dès l'installation, il faudra
  **Capacitor** (bundle natif) — arbitrage non tranché.
- **Pré-sélection par la langue : câblée** (`paysVu = paysEffectif(ctx, navigator.languages)`
  dans `rendreMetiers()`, verrouillée dans `metiers.test.ts`). Nuance assumée : le clic « Tous »
  écrit `pays: ''` et **retombe sur la devinette** de la langue — pas sur « aucun filtrage »
  quand une région est détectable. Si on veut un « Tous » vraiment neutre, il faudra un champ
  « choix explicite » dans `Contexte`.
- **Les noms de fonctions internes disparaissent dans le bundle minifié** (`packsPourPays`,
  `ordonnerPourCrise`…). **Ne jamais conclure à une fonctionnalité absente à partir du JS
  servi** : vérifier les **string literals** (ids, `data-pays=`, `Mode crise`, vocabulaire).
- Le **garde-fou langue ne détecte pas les accents manquants** (il ne cherche que les élisions
  baissées) — d'où la faute `equerrage` restée invisible jusqu'à relecture manuelle post-push.
- Les **numéros d'urgence** peuvent être périmés ; l'avertissement est affiché, mais une
  révision périodique humaine reste nécessaire.
- Les packs **sans `pays`** s'affichent partout : un contenu très localisé (cuisine sénégalaise)
  doit penser à déclarer `pays`, sinon il pollue les autres contextes.

**Dettes de forme.** Aucun `CHANGELOG.md`. Historique = messages de commit. Les specs
anciennes (2026-10-02) ne reflètent plus l'état ; la **vision du 2026-10-15** + **ce bilan**
sont les documents vivants.

---

## 13. Prochaines étapes — par priorité recommandée

**0. Fait (18 oct.).** Polish `équerrage` + bilan poussés (`39646d9`), puis vague 5 + pré-sélection
poussées (`ec8a1ae`) et déployées — prod vérifiée au curl.

**1. Vague 5 des Packs Métiers — LIVRÉE EN PROD.** Six packs (pêche artisanale, élevage,
santé communautaire, cordonnerie, plomberie, peinture), TDD ROUGE→VERT, poussée en `ec8a1ae`
et déployée (bundle `index-BlbwIZL5.js`).

**2. Pré-sélection du pays par la langue — LIVRÉE EN PROD.** `paysEffectif` câblé dans
`rendreMetiers()` (`paysVu`), verrou source + vérification runtime en navigateur (voir §2).

**3. SP1 — poids local réel.** Télécharger et éprouver un modèle on-device, mesurer ce qui
fonctionne sur les téléphones visés (pas seulement sur Windows desktop). C'est la promesse
« extraordinaire sans connexion » qui devient tangible.

**4. SP4 — Play Store.** Installer JDK + Android SDK **à la main**, puis
`scripts/prepare-play-store.ps1`. Prévoir `/.well-known/assetlinks.json` sur Pages et
l'arbitrage **TWA vs Capacitor** (voir §12).

**5. SP5 — Monétisation.** Décision produit à demander à l'utilisateur : pack à vie ou
abonnement ; ensuite activer `paliers.ts` capacité par capacité + Mobile Money (agrégateur).

**6. Marque & déploiement humain.** Vérification **INAPIPI/OMPIC/BOIP** de « NUAGE »,
réservation des domaines et handles (liste complète dans `docs/LANCEMENT.md`).

**7. Hygiène (quand même).** Un `CHANGELOG.md` par version ; relire l'orthographe française
des textes avant poussée (le garde-fou ne couvre que les élisions).

---

## 14. Documentation du dépôt — ce qui fait autorité

| Fichier | Rôle | Statut |
|---|---|---|
| **`docs/BILAN-TRANSMISSION.md`** (ce fichier) | transfert entre agents : état, accès, doctrine, pièges, cap | **à jour 18 oct. 2026** |
| `docs/superpowers/specs/2026-10-15-indispensable-hors-ligne-vision.md` | vision produit, recherche sourcée, statuts SP1→SP5 | **à jour 18 oct. 2026** |
| `docs/LANCEMENT.md` | kit de lancement : actions humaines, comptes, marque, déploiement | à jour (préfixe `nath.` : 18 clés) |
| `docs/superpowers/specs/2026-10-02-…-design.md` | design originel nuage sensoriel | **historique**, dépassé sur les périmètres |
| `docs/superpowers/plans/2026-10-02-…md` | plan exécuté de l'alpha | **historique** |

**Conventions de docs.** Une spec = une date + un sujet (`YYYY-MM-DD-<sujet>-design.md`) ;
un plan = `plans/` ; les statuts d'avancement vivent dans la **note de vision**, pas dans les
fichiers de code. **Ne réécris pas l'historique : ajoute une section datée.**

---

## 15. Mémoire à long terme — déjà enregistrée (ne pas redemander)

Les points suivants sont mémorisés dans le système et appliqués sans rappel :
doctrine TDD strict · gratuit jamais bridé · jamais de nom de moteur à l'écran ·
poussée uniquement sur « fais github » · PowerShell 5.1 avec `npm.cmd`/`npx.cmd`/`curl.exe`
et `;` au lieu de `&&` · attribution « Nath-Tech » · sécurité médicale (négation obligatoire) ·
fail-open / local-first · propagation CDN ~60 s avec cache-buster · dépôt `ecqm19services-web`.

---

## 16. Première session de l'agent entrant — la checklist

- [ ] Lire §0, §6, §11, §13 de ce document.
- [ ] `cd f:/icf; git log --oneline -5; git status --short` — vérifier que le §2 est encore vrai.
- [ ] `npm.cmd test` — **voir** le compte (attendu ≥ 631, tout vert).
- [ ] Si `src/metiers/pack.ts` apparaît en modification non commitée → c'est le polish
      `équerrage` : proposer la poussée, **ne pas pousser sans « fais github »**.
- [ ] Demander le cap à l'utilisateur : **vague 5** · pré-sélection pays · **SP1** poids
      local · **SP4** Play Store · **SP5** monétisation.
- [ ] Travailler en vagues : ROUGE vu → vert → suite + tsc + build → rapport honnête chiffré.
- [ ] Mettre à jour §2 / §11 / §14 à chaque livraison, et la note de vision.

---

*By Nath-Tech. Bilan écrit le 15–18 octobre 2026, vérifié contre le dépôt à chaque ligne.*
