// L'interface de la Compagne : bulles douces en bas du ciel, micro local,
// clavier complet (accessibilité), mémoire du prénom et vie proactive —
// elle pense et parle toute seule, sans qu'on la sollicite.
import { detectIntent, respond, type CompagneCtx, type Intent } from './engine';
import { calculerNumero, calculerSuite, estUneQuestionDate, estUneQuestionHeure } from './logique';
import { repondreMaths } from './maths';
import { creerCerveau, consentementLocal, demanderLocal, gpuDisponible, persona, type Cerveau, type Message } from './cerveau';
import { creerCerveauNet, lireEndpoint, lireTemperament } from './cerveauNet';
import { choisirCerveau } from './cerveauRouteur';
import { choisirPensee, garderCap, jugerSurPlace, scorerTension } from './juge';
import { ecrireMemoire, extrairePrenom, lireMemoire, saluerRetour } from './memoire';
import { ancreLangue, humeurVoix, rappelLangue, separerLecture } from './comprehension';
import { brouillonDe, fautIlRetisser } from './dialogue';
import { candidatesPourMonologue, choisirMonologue, nextDelai, type MonoCtx } from './proactive';
import { entendReveil } from './reveil';
import { createVoice } from './voice';
import { idProfil } from '../monetisation/cle';
import { activer, changerNom, estActif, nomEffectif } from '../monetisation/pro';
import type { Face } from '../input/camera';

// La caméra est un sens qu'on ne réclame qu'avec accord explicite : l'UI reçoit
// ces commandes du pilote (main) et ne peut que les déclencher sur un geste net.
export interface SensCamera {
  cameraDisponible: boolean;
  estOuverte: () => boolean;
  basculer: () => Promise<boolean>; // allume/éteint, renvoie le nouvel état
  changerFace: () => Promise<Face>; // avant ⇄ arrière
  consentement: () => string;
}

export function createCompagneUI(
  getCtx: () => CompagneCtx & { bpm: number | null },
  sens: SensCamera,
) {
  const voice = createVoice();
  let memoire = lireMemoire(localStorage);
  // Nath+ : état local, nom d'éveil effectif lu à chaque phrase (changeable sans recharger).
  const seedActuel = () => localStorage.getItem('nuage.seed') ?? '';
  const nomActuel = () => nomEffectif(localStorage, seedActuel());

  const zone = document.createElement('div');
  zone.className = 'compagne';
  zone.innerHTML = `
    <div class="compagne-bulles" aria-live="polite"></div>
    <form class="compagne-ligne">
      <button type="button" class="compagne-mic" title="Parler à la Compagne" aria-label="Parler à la Compagne">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8">
          <path d="M12 3a3 3 0 0 1 3 3v5a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3z"/>
          <path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>
        </svg>
      </button>
      <button type="button" class="compagne-reveil" title="Réveil vocal « Hey Nath » — écoute permanente" aria-label="Activer le réveil vocal Hey Nath" aria-pressed="false">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8">
          <path d="M6 12a6 6 0 0 1 12 0v4a3 3 0 0 1-3 3H9"/>
          <path d="M12 3v2M4 12H2M22 12h-2"/>
        </svg>
      </button>
      <button type="button" class="compagne-yeux" title="Mode vidéo — activer la caméra, avec votre accord" aria-label="Activer la caméra" aria-pressed="false">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8">
          <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      </button>
      <button type="button" class="compagne-retourner" title="Changer de caméra (avant / arrière)" aria-label="Changer de caméra" hidden>
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8">
          <path d="M3 12a9 9 0 0 1 15-6.7L21 8"/>
          <path d="M21 3v5h-5"/>
          <path d="M21 12a9 9 0 0 1-15 6.7L3 16"/>
          <path d="M3 21v-5h5"/>
        </svg>
      </button>
      <button type="button" class="compagne-pro" title="Nath+ — personnaliser le nom d'éveil" aria-label="Nath+" aria-pressed="false">✦</button>
      <input class="compagne-champ" type="text" placeholder="Dis « Hey Nath »… (ou écris)" aria-label="Écrire à la Compagne" />
      <button type="submit" class="compagne-envoi" aria-label="Envoyer">· · ·</button>
    </form>
    <div class="compagne-pro-paneau" hidden>
      <p class="pro-tete">Nath+ — un nom d'éveil à votre façon. Le gratuit reste entier, sans limite.</p>
      <p>Votre identifiant : <b class="pro-id">…</b> <span class="pro-note">— communiquez-le pour recevoir une clé</span></p>
      <form class="pro-form-cle">
        <input class="pro-cle" type="text" placeholder="Clé (XXXX-XXXX-…)" aria-label="Clé Nath+" autocomplete="off" />
        <button type="submit">Activer</button>
      </form>
      <form class="pro-form-nom" hidden>
        <input class="pro-nom" type="text" placeholder="Nouveau nom d'éveil" aria-label="Nom d'éveil personnalisé" autocomplete="off" />
        <button type="submit">Choisir</button>
      </form>
      <p class="pro-etat" role="status"></p>
    </div>`;
  document.body.appendChild(zone);

  const bulles = zone.querySelector('.compagne-bulles') as HTMLElement;
  const champ = zone.querySelector('.compagne-champ') as HTMLInputElement;
  const mic = zone.querySelector('.compagne-mic') as HTMLButtonElement;
  const reveilBtn = zone.querySelector('.compagne-reveil') as HTMLButtonElement;
  const yeuxBtn = zone.querySelector('.compagne-yeux') as HTMLButtonElement;
  const retournerBtn = zone.querySelector('.compagne-retourner') as HTMLButtonElement;
  const form = zone.querySelector('.compagne-ligne') as HTMLFormElement;

  if (!voice.sttDisponible) {
    mic.style.display = 'none'; // pas de voix dans ce navigateur → on n'imite pas
    reveilBtn.style.display = 'none'; // le réveil vocal non plus
  }
  if (!sens.cameraDisponible) {
    yeuxBtn.style.display = 'none'; // pas de caméra possible → on ne propose pas de l'allumer
  }

  function bulle(texte: string, qui: 'moi' | 'nuage'): HTMLElement {
    const b = document.createElement('div');
    b.className = `bulle bulle-${qui}`;
    b.textContent = texte;
    bulles.appendChild(b);
    while (bulles.children.length > 6) bulles.removeChild(bulles.firstChild!);
    bulles.scrollTop = bulles.scrollHeight;
    return b;
  }

  function dire(texte: string, humeur: Parameters<typeof voice.parler>[1]) {
    bulle(texte, 'nuage');
    voice.parler(texte, humeur);
  }

  let dernierEchange = performance.now();
  let dernierMono = ''; // sa dernière phrase intérieure — jamais de disque rayé

  // Mémoire immédiate de la conversation : son dernier calcul, de quoi on parlait,
  // le tour — pour que « plus 2 », « encore » et les poèmes ne sortent pas du vide.
  const memoireLoc: { resultat: number | null; sujet: Intent | null; tour: number } = {
    resultat: null, sujet: null, tour: 0,
  };

  // Le grand cerveau (Qwen, gratuit, local) télécharge en silence ; le petit
  // moteur répond pendant ce temps — personne n'attend jamais.
  let cerveau: Cerveau | null = null;
  const histoire: Message[] = [];

  function monterCerveauLocal(bCerveau: HTMLElement): void {
    // Le verrou est ici, pas seulement sur le bouton : pas un octet ne part sans
    // le oui de la personne. Un oui donné une fois est relu, il n'est jamais deviné.
    if (!consentementLocal(localStorage)) return;
    // Rien de confidentiel à l'écran : ni nom de modèle, ni fragment brut de la
    // librairie — seulement des « ressources intellectuelles » en cours de chargement.
    let ressource = 1;
    let dernierP = 0;
    bCerveau.textContent = 'Chargement des ressources intellectuelles en cours... 0 %';
    creerCerveau((p) => {
      // Le % repart à zéro à chaque ressource : on les compte pour rester honnête
      // (pas un faux « ça recule »), sans jamais nommer ce qui se charge.
      if (p < dernierP - 0.2) ressource++;
      dernierP = p;
      bCerveau.textContent = `Chargement des ressources intellectuelles en cours... ${Math.min(99, Math.round(p * 100))} % · ressource ${ressource}`;
    }).then(({ cerveau: c, raison }) => {
      const net = lireEndpoint(localStorage);
      if (c) {
        // Le plus grand cerveau réglé par la personne garde la main : le local
        // sagement en réserve, il prendra le relais si la ligne se tait.
        if (!net) cerveau = c;
        bCerveau.textContent = net
          ? 'Mon cerveau de réserve est prêt, si la ligne devait manquer.'
          : 'Mon cerveau est arrivé. Dis les phrases les plus tordues, je suivrai.';
        return;
      }
      if (net) {
        bCerveau.textContent = 'Le cerveau de réserve n’a pas pu atterrir... la ligne, elle, répond déjà.';
        return;
      }
      bCerveau.textContent = raison === 'reseau'
        ? 'Un hic du réseau empêche mon gros cerveau d’atterrir... je reste attentive avec mon petit moteur.'
        : raison === 'machine'
          ? 'Ma carte graphique refuse ce cerveau, trop costaud pour elle... mon petit moteur suffit, et le ciel n’en est pas moins vivant.'
          : 'Le gros cerveau n’a pas pu atterrir ici... je reste attentive avec mon petit moteur.';
      // Jamais bloquant, jamais sans recours : une reprise est toujours possible
      // (les fragments déjà téléchargés restent en cache, la reprise repart plus loin).
      const relance = document.createElement('button');
      relance.type = 'button';
      relance.className = 'compagne-relance';
      relance.textContent = 'réessayer le cerveau';
      relance.addEventListener('click', () => {
        relance.remove();
        monterCerveauLocal(bCerveau);
      });
      bCerveau.appendChild(relance);
    });
  }

  function offrirLocal(b: HTMLElement): void {
    // Le gros cerveau se demande, il ne s'impose pas : une personne qui paie ses
    // données ne doit jamais les voir partir pendant qu'elle lit.
    const opt = document.createElement('button');
    opt.type = 'button';
    opt.className = 'compagne-relance';
    opt.textContent = 'charger un cerveau ici aussi (gros téléchargement)';
    opt.addEventListener('click', () => {
      demanderLocal(localStorage);
      opt.remove();
      monterCerveauLocal(bulle('', 'nuage'));
    });
    b.appendChild(opt);
  }

  function chargerCerveau(): void {
    // Un grand cerveau en ligne réglé est un choix explicite : il répond dès le
    // premier message, sans faire attendre. Et chez une personne qui paie ses
    // données, on ne lance jamais un gros téléchargement en cachette — ça se demande.
    const net = lireEndpoint(localStorage);
    const gpu = gpuDisponible();
    const oui = consentementLocal(localStorage);
    // La précédence n'est plus recopiée ici : c'est le routeur qui tranche,
    // et il tient la cohérence avec les tests (local > réseau > repli).
    const canal = choisirCerveau({
      localPret: false,
      consentementLocal: oui,
      gpuCompatible: gpu,
      enLigne: true,
      endpointRegle: !!net,
    });
    if (canal === 'reseau') {
      cerveau = creerCerveauNet(net, fetch, lireTemperament(localStorage));
      const b = bulle('Je suis reliée à un plus grand cerveau — demande-moi ce que tu veux.', 'nuage');
      if (gpu) offrirLocal(b);
      return;
    }
    if (canal === 'local') {
      // GPU + consentement : on charge le gros modèle local, avec son option de reprise.
      monterCerveauLocal(bulle('', 'nuage'));
      return;
    }
    // 'repli' : le petit moteur embarqué répond déjà. S'il reste une carte GPU
    // sans consentement, on ne l'impose pas — on le propose.
    if (gpu && !oui) {
      offrirLocal(bulle('Mon petit moteur répond déjà. Le grand cerveau local, lui, ne se télécharge que si vous le voulez.', 'nuage'));
    }
  }
  chargerCerveau();

  function traiter(question: string) {
    const q = question.trim();
    if (!q) return;
    dernierEchange = performance.now();
    bulle(q, 'moi');

    // A-t-elle appris un nom ? Le garder pour toujours.
    if (!memoire.prenom) {
      const p = extrairePrenom(q);
      if (p) {
        memoire = { prenom: p, dejaVu: true };
        ecrireMemoire(localStorage, memoire);
        setTimeout(() => dire(`${p}… c’est une belle adresse pour une étoile. Je la garde.`, 'lumineuse'), 700);
        return;
      }
    }

    const c = getCtx();

    // Faits durs d'abord : calculs, suites de calcul, heure, date, et ses
    // poèmes/histoires (le quatrain embarqué est sûr, le petit modèle local
    // à côté) passent TOUJOURS par la logique embarquée — jamais par un cerveau.
    const suitePre = memoireLoc.resultat != null ? calculerSuite(q, memoireLoc.resultat) : null;
    if (repondreMaths(q) != null || calculerNumero(q) != null || suitePre != null || estUneQuestionHeure(q) || estUneQuestionDate(q) || detectIntent(q) === 'poeme') {
      const r = respond(q, {
        ...c,
        prenom: memoire.prenom,
        dernierResultat: memoireLoc.resultat,
        dernierSujet: memoireLoc.sujet,
        tour: memoireLoc.tour,
      });
      memoireLoc.tour++;
      if (r.resultat != null) memoireLoc.resultat = r.resultat;
      memoireLoc.sujet = r.sujet;
      histoire.push({ role: 'user', content: q }, { role: 'assistant', content: r.texte });
      setTimeout(() => dire(r.texte, r.humeur), 700);
      return;
    }

    // Chemin du grand cerveau : vraie compréhension, mémoire de conversation.
    if (cerveau) {
      const qui = cerveau;
      const night = Math.min(1, Math.max(0, (Math.abs(c.timeOfDay - 0.5) - 0.2) * 5));
      const bAttente = bulle('…', 'nuage');
      const messages: Message[] = [
        { role: 'system', content: persona({ prenom: memoire.prenom, emotion: c.emotion, bpm: c.bpm, breath: c.breath, night }) },
        ...histoire.slice(-10),
        { role: 'user', content: q },
      ];
      // La langue est la promesse du marché — une question wolof rendue
      // en français est une promesse rompue. Quand la réponse mesurée n'est pas
      // dans la langue de la question, on la retisse une fois, avec une ancre
      // qui nomme la langue et ferme les autres. Une fois : la reprise coûte.
      cerveau
        .ask(rappelLangue(messages))
        .then(async (rep) => {
          const lue = separerLecture(rep);
          const b = brouillonDe(q, lue.texte);
          let texte = b.texte.replace(/!/g, '…').slice(0, 600);
          let hum = lue.humeur;
          if (fautIlRetisser(b) && b.langueQuestion) {
            const reprise: Message[] = [
              { ...messages[0], content: `${messages[0].content} ${ancreLangue(b.langueQuestion)}` },
              ...messages.slice(1, -1),
              { role: 'user', content: q },
            ];
            const sec = separerLecture(await qui.ask(rappelLangue(reprise)));
            if (!fautIlRetisser(brouillonDe(q, sec.texte, true)) && sec.texte) {
              texte = sec.texte;
              hum = sec.humeur ?? hum;
            }
          }
          texte = texte || '…je cherche encore mes mots.';
          // Le cerveau a compris la langue : un prénom reçu en wolof, en anglais ou
          // dans une phrase bancale entre dans la mémoire comme par la règle française.
          if (lue.prenom && !memoire.prenom) {
            memoire = { prenom: lue.prenom, dejaVu: true };
            ecrireMemoire(localStorage, memoire);
          }
          const ton = humeurVoix(hum);
          // Garde-fou (silencieux tant qu'aucun secours n'est réglé) : une
          // réponse jugée hors cap cède la place à la réponse embarquée —
          // ni blocage, ni invention, le muet laisse tout passer.
          const filet = lireEndpoint(localStorage);
          if (filet && (await garderCap(filet, q, texte)) === false) {
            const rg = respond(q, { ...c, prenom: memoire.prenom });
            bAttente.textContent = rg.texte;
            histoire.push({ role: 'user', content: q }, { role: 'assistant', content: rg.texte });
            voice.parler(rg.texte, rg.humeur);
            return;
          }
          bAttente.textContent = texte;
          histoire.push({ role: 'user', content: q }, { role: 'assistant', content: texte });
          voice.parler(texte, ton);
        })
        .catch(() => {
          const r = respond(q, { ...c, prenom: memoire.prenom });
          bAttente.textContent = r.texte;
          voice.parler(r.texte, r.humeur);
        });
      return;
    }

    const r = respond(q, {
      ...c,
      prenom: memoire.prenom,
      dernierResultat: memoireLoc.resultat,
      dernierSujet: memoireLoc.sujet,
      tour: memoireLoc.tour,
    });
    // Elle note : résultat pour la suite, sujet pour les enchaînements, tour pour le neuf.
    memoireLoc.tour++;
    if (r.resultat != null) memoireLoc.resultat = r.resultat;
    memoireLoc.sujet = r.sujet;
    // Respiration avant de répondre : la Compagne ne riposte pas, elle répond.
    setTimeout(() => dire(r.texte, r.humeur), 700);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    traiter(champ.value);
    champ.value = '';
  });
  mic.addEventListener('click', () => {
    mic.classList.add('a-lécoute');
    voice.ecouter((t) => {
      mic.classList.remove('a-lécoute');
      traiter(t);
    });
    setTimeout(() => mic.classList.remove('a-lécoute'), 6000);
  });

  // Mode « Hey Nath » : écoute permanente. Elle n'ouvre les oreilles que quand
  // on prononce son nom — jamais sur un mot de tous les jours qui y ressemblerait.
  let couperReveil: (() => void) | null = null;
  reveilBtn.addEventListener('click', () => {
    if (couperReveil) {
      couperReveil();
      couperReveil = null;
      reveilBtn.classList.remove('actif');
      reveilBtn.setAttribute('aria-pressed', 'false');
      return;
    }
    couperReveil = voice.ecouteEnContinu((phrase) => {
      const r = entendReveil(phrase, nomActuel());
      if (!r.eveille) return; // on n'est pas appelée → on ne réagit pas
      dernierEchange = performance.now();
      if (r.requete) traiter(r.requete);
      else dire("Je t'écoute… dis, je suis là.", 'posee'); // un simple appel répond
    });
    reveilBtn.classList.add('actif');
    reveilBtn.setAttribute('aria-pressed', 'true');
    bulle(`OREILLES OUVERTES — appelle-moi « ${nomActuel() ?? 'Hey Nath'} » quand tu veux.`, 'nuage');
  });

  // ——— Nath+ : panneau discret au toucher du ✦. Aucun pop-up, aucune relance,
  // aucune gêne pour qui n'a pas acheté — le gratuit ignore totalement ce panneau. ———
  const proBtn = zone.querySelector('.compagne-pro') as HTMLButtonElement;
  const proPaneau = zone.querySelector('.compagne-pro-paneau') as HTMLElement;
  const proId = zone.querySelector('.pro-id') as HTMLElement;
  const proCle = zone.querySelector('.pro-cle') as HTMLInputElement;
  const proFormCle = zone.querySelector('.pro-form-cle') as HTMLFormElement;
  const proFormNom = zone.querySelector('.pro-form-nom') as HTMLFormElement;
  const proNom = zone.querySelector('.pro-nom') as HTMLInputElement;
  const proEtat = zone.querySelector('.pro-etat') as HTMLElement;

  function rafraichPro(): void {
    const actif = estActif(localStorage, seedActuel());
    const nom = nomActuel();
    proId.textContent = idProfil(seedActuel());
    proFormCle.hidden = actif;
    proFormNom.hidden = !actif;
    proEtat.textContent = actif
      ? nom ? `Nath+ actif : elle répond à « ${nom} » (et toujours à « Hey Nath »).` : "Nath+ actif — choisissez un nom d'éveil (vide = retour à Hey Nath)."
      : "Nath+ : un nom d'éveil à votre façon. Rien n'est enlevé au gratuit.";
    const appelle = nom ?? 'Hey Nath';
    champ.placeholder = `Dis « ${appelle} »… (ou écris)`;
    reveilBtn.title = `Réveil vocal « ${appelle} » — écoute permanente`;
  }
  proBtn.addEventListener('click', () => {
    const ouvrir = proPaneau.hidden;
    proPaneau.hidden = !ouvrir;
    proBtn.setAttribute('aria-pressed', String(ouvrir));
    if (ouvrir) rafraichPro();
  });
  proFormCle.addEventListener('submit', (e) => {
    e.preventDefault();
    if (activer(localStorage, seedActuel(), proCle.value)) {
      proCle.value = '';
      rafraichPro();
    } else {
      proEtat.textContent = "Cette clé ne convient pas à cet appareil — vérifiez l'identifiant communiqué.";
    }
  });
  proFormNom.addEventListener('submit', (e) => {
    e.preventDefault();
    if (changerNom(localStorage, seedActuel(), proNom.value)) {
      proNom.value = '';
      rafraichPro();
    } else {
      proEtat.textContent = 'Choisissez un nom en lettres (2 à 20), sans chiffres ni signes.';
    }
  });

  // ——— Caméra : un sens opt-in. Jamais allumée seule. Un geste sur l'œil →
  // d'abord une demande de consentement honnête, et seulement après, l'accès. ———
  function majEtatCamera(ouverte: boolean): void {
    yeuxBtn.classList.toggle('actif', ouverte);
    yeuxBtn.setAttribute('aria-pressed', String(ouverte));
    retournerBtn.hidden = !ouverte; // la bascule avant/arrière n'existe que si on voit
  }

  async function allumerCamera(): Promise<void> {
    try {
      const on = await sens.basculer();
      majEtatCamera(on);
      if (on) bulle("Me voilà, je te vois. Touche l'œil pour me fermer les yeux.", 'nuage');
    } catch {
      bulle("La caméra est refusée ou indisponible — on continue sans elle, rien n'est forcé.", 'nuage');
    }
  }

  function demanderConsentement(): void {
    const ligne = document.createElement('div');
    ligne.className = 'compagne-consent';
    const txt = document.createElement('span');
    txt.textContent = sens.consentement();
    const oui = document.createElement('button');
    oui.type = 'button';
    oui.className = 'compagne-relance';
    oui.textContent = "J'allume la caméra";
    const non = document.createElement('button');
    non.type = 'button';
    non.className = 'compagne-relance';
    non.textContent = 'Plus tard';
    oui.addEventListener('click', () => {
      ligne.remove();
      void allumerCamera();
    });
    non.addEventListener('click', () => ligne.remove());
    ligne.append(txt, oui, non);
    zone.insertBefore(ligne, form);
  }

  yeuxBtn.addEventListener('click', () => {
    if (sens.estOuverte()) {
      void sens.basculer().then((on) => {
        majEtatCamera(on);
        bulle('Je ferme les yeux. Rien de ce que je voyais n’est gardé.', 'nuage');
      });
    } else {
      demanderConsentement();
    }
  });

  retournerBtn.addEventListener('click', async () => {
    const face = await sens.changerFace();
    retournerBtn.title =
      face === 'arriere' ? 'Caméra arrière — touche pour revenir à l’avant' : 'Caméra avant — touche pour passer à l’arrière';
    bulle(face === 'arriere' ? 'Je montre le monde (caméra arrière).' : 'Je te regarde (caméra avant).', 'nuage');
  });

  // Premier mot : selon qu'elle vous connaît déjà ou non.
  setTimeout(() => {
    if (memoire.prenom) {
      dire(saluerRetour(memoire.prenom), 'lumineuse');
    } else {
      bulle('Je suis là… touche le ciel, écris-moi, ou appelle-moi « Hey Nath » (bouton oreille). On a toute la nuit.', 'nuage');
      // Curieuse une seule fois : elle demande qui vous êtes. Mais jamais pendant
      // qu on se parle — la réponse peut être en route, et le prénom arrive avec.
      const demanderNom = (): void => {
        if (memoire.prenom) return;
        if (performance.now() - dernierEchange < 25000) {
          window.setTimeout(demanderNom, 8000);
          return;
        }
        bulle('Au fait… comment tu t’appelles ?', 'nuage');
      };
      setTimeout(demanderNom, 12000);
    }
  }, 1500);

  // La vie proactive : ses pensées arrivent seules, espacées de 40 à 105 s.
  const penserSeule = () => {
    window.setTimeout(async () => {
      // Si on vient de lui parler, on repousse : elle n interrompt jamais.
      if (performance.now() - dernierEchange < 25000) return penserSeule();
      const c: MonoCtx = { ...getCtx(), prenom: memoire.prenom };
      // Le juge d'ailleurs (silencieux tant qu'aucune adresse n'est réglée) :
      // instant mal choisi → elle laisse passer son tour ; instant à apaiser
      // → elle propose le souffle plutôt que le poème. Une bulle — respirer
      // reste ta décision, jamais la sienne.
      const net = lireEndpoint(localStorage);
      if (net) {
        if ((await jugerSurPlace(net, c)) === false) return penserSeule();
        const tension = await scorerTension(net, c);
        if (tension != null && tension >= 1.5) {
          bulle('Je te sens tendu… on prend un souffle ensemble ? Touche le ciel, il redescendra avec toi.', 'nuage');
          return penserSeule();
        }
      }
      const m = choisirMonologue(c, Math.floor(Date.now() / 60000), dernierMono);
      let texte = m.texte;
      if (net) {
        // La pensée du moment : parmi les phrases de la règle locale, le juge
        // peut désigner la plus juste pour l'instant. Muet ou hors liste →
        // le hasard local, déjà bon, garde la main.
        const lice = candidatesPourMonologue(c).filter((x) => x !== dernierMono);
        texte = (await choisirPensee(net, c, lice)) ?? texte;
      }
      dernierMono = texte;
      bulle(texte, 'nuage'); // monologue = murmuré à l écrit, la voix reste pour les réponses
      penserSeule();
    }, nextDelai(Math.random));
  };
  penserSeule();
}
