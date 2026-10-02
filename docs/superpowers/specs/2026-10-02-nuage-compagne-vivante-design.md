# NUAGE — La Compagne Vivante : document de design (spec v1)

> Date : 2026-10-02 · Statut : validé oralement par le propriétaire, en attente de relecture écrite
> Producteur unique : le propriétaire du projet. Aucune lien avec tout actif existant (ICF School exclu du périmètre).

## 1. Vision en une phrase

Une application Android gratuite qui installe dans le téléphone **une présence qui vous voit, vous entend et vous accompagne — même sans internet** : cocon sensoriel (le Nuage), couteau suisse hors-ligne (la Compagne), et moteur de revenus quasi passifs visant **≥ 2 000 000 FCFA/mois entre M+15 et M+24**.

## 2. Lois du projet (non négociables)

1. **Coût fixe 0 €** : uniquement des paliers gratuits (Cloudflare Pages/R2/Workers free, GitHub Actions, modèles open source, SDK publicitaires gratuits, distributeurs sans frais fixes). Aucun serveur GPU, aucun abonnement. Exception unique connue : Google Play (25 $ à vie) → **contourné** par distribution APK direct + F-Droid ; l'achat Play est une décision future du propriétaire, jamais requis.
2. **Jamais de bridage du gratuit** : le socle (Nuage, Compagne de base, Mode Étudiant, accessibilité, sacred spaces sans pub) reste complet et gratuit à vie. Les restrictions visent uniquement les packs d'extension après l'essai de 15 jours, sous forme de « démo quotidienne » douce, jamais un retrait de capacité acquise.
3. **Effort humain quasi nul** : ~90 min d'ouverture de comptes à la semaine 1 (identité du propriétaire obligatoire : AdSense, YouTube, Mobile Money, comptes Cloudflare/GitHub) ; ~10 min/semaine de validation optionnelle des contenus de l'usine.
4. **Confidentialité par conception** : aucune donnée biométrique (visage, iris, pouls, audio de nuit) ne quitte l'appareil. C'est un engagement produit, juridique et marketing.
5. **Véracité des promesses** : aucun objectif « milliards » ; trajectoire chiffrée honnête (voir §9).

## 3. Marché et personas

- **Cœur** : Afrique francophone (Cameroun, Côte d'Ivoire, RDC, Sénégal…) — téléphones Android 3–6 Go de RAM, connexion 2G/3G intermittente, crédit téléphonique comme unité de prix.
- **Monnaie forte** : diaspora en France/Belgique/Canada — CPM et panier moyen 5–10× supérieurs.
- **Personas servis** : l'anxieux urbain (sommeil/calme), la mère de famille (histoires du soir), le commerçant (cahier vocal), l'élève/étudiant (photo→cours), la personne en situation de handicap (regard/signes/son), le senior isolé de la diaspora (voix amie).

## 4. Architecture produit — 4 couches

### Couche 1 — Le Nuage (sensoriel, V1)
Rendu temps réel (OpenGL ES/Vulkan via moteur léger type Babylon.js/Unity-Runtime gratuit ou moteur maison OpenGL) : nuages, aurores, pluie, ciel étoilé. Entrées : toucher, gyroscope, **micro (souffle/voix)**, **caméra (maillage du visage MediaPipe Face Mesh, suivi d'iris par estimation MediaPipe, sourire, pouls rPPG)**, geste (MediaPipe Hands). Le Nuage respire au rythme cardiaque (rPPG) et change d'état avec l'émotion détectée. Fonctionne sans IA ni connexion (mode dégradé magnifique).

### Couche 2 — La Compagne (couteau suisse hors-ligne, V1 socle + packs)
- Runtime modèles : **llama.cpp / MLC-LLM** embarqué Android ; noyau **Qwen2.5-1.5B-Instruct quantifié (~1 Go, Apache-2.0)** dans l'APK ; packs : Qwen3-4B / DeepSeek-R1-Distill-Qwen-1.5B/7B (MIT) en téléchargement Wi-Fi assisté.
- Voix : **Piper/Kokoro** TTS hors-ligne français + langues locales ; STT **Whisper-tiny/base**.
- Vision : **PaddleOCR** hors-ligne (photo→texte).
- Traduction : **NLLB-200 / AISARI** (ewondo, duala, bambara, wolof, swahili…).
- Connectivité assistée : API **Gemini free-tier** et **Mistral La Plateforme free-tier** quand le réseau existe — jamais obligatoires.
- Distribution des packs : Cloudflare R2 (10 Go gratuits) + QR « mise à jour en boutique » pour zones sans data.

### Couche 3 — Accessibilité (V1→V2, âme du projet)
Commande 100 % regards (pointer), monde sonore pour non-voyants (sonification des scènes), contrôle gestuel air-tap, mode respiration/autisme sans stimulation, langue des signes bidirectionnelle (V2, MediaPipe Hands + TTS), coach kiné par MediaPipe Pose (V2/Pro, disclaimer « bien-être, pas diagnostic médical »).

### Couche 4 — L'Usine sommeil (mégaphone passif, V2)
Pipeline GitHub Actions (gratuit, cron nocturne) : script LLM (Gemini free) → voix Piper/Kokoro → visuels du Nuage rendus headless (ffmpeg + moteur) → publication auto YouTube Data API (quota gratuit) en vidéos + live 24/7, distribution Spotify via **Amuse free plan**. Revenus : adsense YouTube + royalties. Aucune interaction humaine requise après calibration ; validation hebdo optionnelle anti-demonetization « contenu repeté ».

## 5. Les 12 fonctionnalités boosters (ordre validé)

| # | Fonction | Étage |
|---|---|---|
| 1 | Pouls visible rPPG | V1 |
| 4 | Halo d'aura (identité sensorielle unique) | V1 (+ cosmétiques Pro) |
| 10 | Arbre de parrainage (cadeau 15 j Pro) | V1 |
| 5 | Interprète de conversation hors-ligne | Pro (pack phare) |
| 6 | Cahier du marchand (comptes vocaux) | Pro |
| 7 | Ange du SOS (mesh Bluetooth/Wi-Fi Direct hors-réseau) | V2 |
| 11 | Langue des signes bidirectionnelle | V2 |
| 2 | Fenêtre magique AR (ARCore) | V3 |
| 3 | Studio à rêves (audio local, tableau matinal) | V3 |
| 8 | Télépathie à deux (handshake ultrasons) | V3 |
| 9 | Marché de proximité maillé (Bluetooth) | V3 |
| 12 | Coach kiné aérien (MediaPipe Pose) | Pro |

+ **Mode Étudiant** (V1, gratuit à vie) : photo→cours résumé à voix haute, cartes mémoire auto, quiz vocal, dictée structurée, partage de leçons hors-ligne par Bluetooth.

## 6. Modèle économique

### 6.1 Abonnement NUAGE Pro
- Essai complet 15 jours (toutes extensions ouvertes).
- Après J15 : le cœur reste 100 % gratuit ; les packs d'extension basculent en « démo quotidienne » + invitation douce.
- **Pro = 7 500 FCFA/an** (~625 FCFA/jour), diaspora **19 €/an** ; tout inclus, mises à jour à vie.
- Paiement : Mobile Money via agrégateurs à inscription gratuite et commission au succès (**Simplifi / PayDunn / Fezi au Cameroun/CIV**) ; international via **Lemon Squeezy/Gumroad** (0 € fixe, commission au succès). Prévoir RCCM/identité locale pour l'activation marchand (gratuit, ~une journée — dans les 90 min+ du kit lancement).

### 6.2 Doctrine publicitaire « la pluie ne tombe jamais dans le Nuage »
- **Interdits à vie de pub** : Nuage, sommeil, méditation, SOS, écrans enfants.
- Surface 1 (moteur) : **pub récompensée** volontaire (AdMob/Unity Ads, gratuits) — +10 min de démo Pro, cosmétiques d'aura.
- Surface 2 : bandeau verre dépoli discret sur l'accueil couteau-suisse uniquement, jamais en session.
- Surface 3 : **nuages de marque** (sponsoring direct, un annonceur validé à la fois, la pub devient contenu).
- Surface 4 : pub/royalties de l'Usine sommeil (passive).
- Interstitiel de sortie : **consciemment non retenu** (ennui > revenu) ; interrupteur désactivable.

### 6.3 Flux additionnels
Bourses/subventions accessibilité & innovation (candidatures gratuites : Google.org, Mozilla, UNICEF Innovation, Orange/Dahura francophonie, prix startups) ; licences futures (kiné, musées, télécoms) ; jamais comptés dans l'objectif plancher.

## 7. Réalité technique admise (franchises inscrites au spec)

- Les petits modèles ne surpassent pas Claude/GPT en usage général ; ils gagnent sur le pentagone : hors-ligne, coût nul, anonymat, langues locales, faible data. Positionnement marketing : **« Le géant n'entre pas dans la pièce sans internet. Nous, si. »**
- Mode Support aérien : suivi des mains réel (MediaPipe Hands, 21 points, <30 ms sur téléphone correct) mais **limite « gorilla arm »** : usage court/démo, jamais mode principal ; lumière faible = dégradation → guidance UI.
- rPPG : précision suffisante pour l'ambiance et le bien-être, pas pour le médical (disclaimer).
- Chaleur/batterie : sessions caméra+IA chauffent → durée conseillée affichée, « mode plume » optionnel (jamais par défaut).
- Sécurité des contenus : filtres système embarqués dans les prompts du modèle local + kit urgence (numéros d'assistance locaux intégrés).
- Piratage APK : accepté ; activation en ligne optionnelle + watermark pour les packs.
- Sauvegarde sans compte : **reprise par phrase-secrète** (cryptage client, blob chiffré sur R2 gratuit).

## 8. Identité, conformité, mesure

- **Nom/marque** : dépôt INAPIPI (ou OMPIC/BOIP selon pays retenu par le propriétaire) + vérification domaines/.app + handles sociaux **avant** toute communication. « NUAGE » considéré comme nom de travail.
- **Signature obligatoire « by Nath-Tech »** : sous chaque nom/face visible du produit — écran d'accueil et splash de l'app (pied de page sobre, toujours lisible, jamais bridant l'expérience), site vitrine Cloudflare Pages, descriptions YouTube/Spotify de l'Usine sommeil, PDF/docs légaux, pages de paiement et partages viraux (le lien partagé porte la mention). La mention fait partie de l'identité de marque : à intégrer dans les maquettes dès la Phase 0 et dans les gabarits automatiques de l'usine.
- **Conformité** : politique de confidentialité « tout local », consentement parental pour mineurs, disclaimers santé, CGV Pro, registre des données = aucun données personnelles server-side.
- **Analytics** : Cloudflare Web Analytics / Beacon gratuit et sans cookies espions ; aucune donnée biométrique mesurable à distance.
- **Resilience revenus** : si YouTube demonétise une chaîne, l'Usine bascule sur Spotify/Amazon Music/Apple Music ; 3 canaux de revenus indépendants (Pro / pub-récompensée+marque / usine) verrouillés.

## 9. Trajectoire financière honnête (objectif : ≥ 2 000 000 FCFA/mois)

Hypothèses conservatrices, mixed ARPP Pro/packs, 1 € = 656 FCFA.

| Jalon | Utilisateurs actifs mensuels | Revenu mensuel estimé | Détail dominant |
|---|---|---|---|
| M+3 | 5–15 k | 150–400 k FCFA | curiosity packs + premières pubs usine |
| M+6 | 30–60 k | 500–800 k FCFA | 300–600 Pro + YouTube monétisé |
| M+12 | 150–300 k | 1,2–1,8 M FCFA | 1 200–2 000 Pro + récompensée + sponsoring |
| **M+15–M+24** | 300–600 k | **2,0–3,5 M FCFA** | **2 700+ Pro ≈ 1,7 M** + usine 300–700 k + ads/branding 300–800 k |

Le seuil contractuel ≥ 2 M FCFA est **assumé comme atteint dans la fourchette M+15–M+24** si l'exécution tient la feuille de route ; toute communication promettant ce palier avant 12 mois est proscrite (loi 5).

## 10. Feuille de route de construction (A → Z)

- **Phase 0 — Fondations (S1–S2)** : git + CI Android (GitHub Actions gratuit), choix moteur de rendu, ouverture des comptes (kit 90 min), vérification marque/noms, dépôt des poids modèles, POC rPPG + face mesh + souffle sur téléphone cible (3 Go RAM).
- **Phase 1 — NUAGE V1 (S3–M+3)** : Nuage sensoriel complet + aura + parrainage + Mode Étudiant + noyau hors-ligne (Qwen 1,5B/Whisper/Piper) + phrase-secrète + pub récompensée + bandeau accueil + APK/F-Droid. Critère : 1 000 utilisateurs sans le moindre euro dépensé, crash-free > 99,5 %.
- **Phase 2 — Pro & usine (M+3 → M+9)** : packs Interprète, Cahier du marchand, SOS mesh, signes ; billing Mobile Money + Lemon Squeezy ; essai 15 j → bascule douce ; Usine sommeil 2 chaînes + Spotify ; nuages de marque. Critère : premiers 500 k FCFA/mois.
- **Phase 3 — Légende (M+9 → M+24)** : AR, Rêves, Télépathie, Marché maillé, kiné ; campagne bourses accessibilité ; licence pilotes. Critère : ≥ 2 M FCFA/mois sur 3 mois glissants.

## 11. Stratégie de test

- Matrice d'appareils : 3 Go/6 Go RAM, Android 8–15, faible lumière, 2G.
- Tests capteurs : jeu d'émotions/souffle enregistrés (corpus de référence), latence geste <50 ms, rPPG vs pouls-montre (±5 bpm tolérance ambiance).
- Tests modèles : suite « hors-ligne absolue » (mode avion) sur 200 tâches Compagne ; sécurité : batterie de prompts hostiles/pédagogiques filtrés.
- Billing : tests Mobile Money sandbox agrégateur + reçus ; reprise par phrase-secrète sur appareil neuf.
- Usine : pré-diffusion checklist automatique (dupes, originalité, droits) avant publication.
- Financement : test A/B prix packs + mesure de rétention J7/J30 avant tout changement de doctrine.

## 12. Ce qui est explicitement hors périmètre

ICF School et tout actif existant du propriétaire ; éducation formelle/plateforme scolaire ; serveurs payants ; fonds d'investissement ; contenu sous licence (musique/voix clonées commerciales) ; promesse de revenus « milliards » ; Google Play payant tant que non décidé par le propriétaire.

## 13. Questions ouvertes (à trancher par le propriétaire, sans bloquer la Phase 0)

1. Pays légal d'immatriculation marchand Mobile Money (Cameroun vs Côte d'Ivoire) — détermine agrégateur et RCCM.
2. Nom définitif + vérification de disponibilité des marques/domains.
3. Langue(s) de lancement de l'interprète en pack 1 (ewondo/duala vs bambara/wolof selon audience visée).
