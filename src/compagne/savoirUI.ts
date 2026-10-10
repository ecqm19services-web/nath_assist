// Le coin d'études de Nath : un bouton 🎓, trois gestes — Réviser, Savoir,
// Traduire. Tout le dur (mémoire espacée, quiz, base de connaissances, lexique)
// vit déjà dans l'appareil ; ici, seulement de la voix douce et des gestes clairs.
// Aucune donnée personnelle ne sort : la connexion n'est proposée que sur un oui,
// et ne transporte que le sujet demandé.

import { createVoice } from './voice';
import { fileDeRevue, type Fiche, type Note } from '../etudes/fiches';
import { genererQuiz, type Question } from '../etudes/quiz';
import {
  ajouterPaquet,
  lirePaquets,
  revoirFiche,
  statsPaquet,
  ajouterFiche,
} from '../etudes/store';
import {
  chargerDepuisLeNet,
  enregistrerSavoir,
  fichesDepuisTexte,
  trouverDansBase,
  type Savoir,
} from '../etudes/savoir';
import {
  ajouterEntree,
  importerEntrees,
  lexiqueDepart,
  serialiserEntrees,
  traduireExpression,
  validerEntrees,
  type Entree,
} from '../traduction/lexique';
import {
  activerMarque,
  desactiverMarque,
  lireMarque,
  teinteAffichee,
  type Marque,
} from '../entreprise/marque';
import { analyserDictee, epurerDictee } from '../traduction/dictee';
import { codeLangue, traduireEnLigne } from '../traduction/moteurNet';
import { devisEntreprise, formatFCFA } from '../entreprise/devis';
import { definirEndpoint, lireEndpoint } from './cerveauNet';

const CLE_SAVOIR = 'nath.savoir';
const CLE_LEXIQUE = 'nath.lexique';

const el = (html: string) => {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild as HTMLElement;
};

// Toute parole qui entre dans le panneau (saisies, stockages, réponses du net)
// est d'abord désarmée : plus rien ne peut se déguiser en code.
const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] ?? c);

export function creerPanneauSavoir(storage: Storage): HTMLElement {
  const voix = createVoice();
  const bouton = el('<button class="savoir-btn" title="Mon coin d\u2019études" aria-label="Ouvrir le coin d\u2019études">🎓</button>');
  const paneau = el(`
    <div class="savoir-paneau" hidden role="dialog" aria-label="Coin d'études">
      <div class="savoir-tete">
        <div class="savoir-onglets">
          <button data-on="reviser" class="actif">Réviser</button>
          <button data-on="savoir">Savoir</button>
          <button data-on="traduire">Traduire</button>
          <button data-on="entreprise">Entreprise</button>
        </div>
        <button class="savoir-fermer" title="Fermer" aria-label="Fermer">×</button>
      </div>
      <div class="savoir-corps"></div>
    </div>`);
  document.body.append(bouton, paneau);
  const corps = paneau.querySelector('.savoir-corps') as HTMLElement;

  bouton.addEventListener('click', () => {
    paneau.hidden = !paneau.hidden;
    if (!paneau.hidden) rendre(active);
  });
  paneau.querySelector('.savoir-fermer')!.addEventListener('click', () => (paneau.hidden = true));

  // ——— état ———
  let active: 'reviser' | 'savoir' | 'traduire' | 'entreprise' = 'reviser';
  let paquetSel: string | null = null; // null = tous
  let file: Fiche[] = [];
  let vueRevue: 'carte' | 'dette' | 'fin' = 'fin';
  let quiz: { questions: Question[]; index: number; reponses: number[]; fini: boolean } | null = null;

  const lireSavoir = (): Savoir[] => {
    try {
      const o = JSON.parse(storage.getItem(CLE_SAVOIR) ?? '[]') as unknown;
      if (!Array.isArray(o)) return [];
      return o.filter((s): s is Savoir =>
        !!s && typeof s === 'object' && typeof (s as Savoir).sujet === 'string' && typeof (s as Savoir).resume === 'string');
    } catch {
      return [];
    }
  };
  const lireLexique = (): Entree[] => validerEntrees(storage.getItem(CLE_LEXIQUE));

  paneau.querySelectorAll('.savoir-onglets button').forEach((b) =>
    b.addEventListener('click', () => {
      active = (b as HTMLElement).dataset.on as typeof active;
      paneau.querySelectorAll('.savoir-onglets button').forEach((x) => x.classList.toggle('actif', x === b));
      rendre(active);
    }));

  const paquetCourant = () => (paquetSel ? lirePaquets(storage).find((p) => p.id === paquetSel) ?? null : null);
  const paquetsOuTous = () => (paquetSel ? lirePaquets(storage).filter((p) => p.id === paquetSel) : lirePaquets(storage));

  function rendre(o: typeof active): void {
    corps.innerHTML = '';
    if (o === 'reviser') rendreReviser();
    else if (o === 'savoir') rendreSavoir();
    else if (o === 'entreprise') rendreEntreprise();
    else rendreTraduire();
  }

  // ——— Réviser ———
  function rendreReviser(): void {
    const paquets = lirePaquets(storage);
    const select = el(`<select class="savoir-select"><option value="">Tous les paquets</option></select>`) as HTMLSelectElement;
    for (const p of paquets) {
      const opt = document.createElement('option');
      opt.value = p.id;
      opt.textContent = `${p.nom} (${p.fiches.length})`;
      if (p.id === paquetSel) opt.selected = true;
      select.appendChild(opt);
    }
    select.addEventListener('change', () => {
      paquetSel = select.value || null;
      quiz = null;
      rendreReviser();
    });
    corps.appendChild(select);

    const ligneNom = el(`<div class="savoir-ligne"><input type="text" placeholder="Nouveau paquet (ex. Biologie)" aria-label="Nouveau paquet" /><button>Ajouter</button></div>`);
    const champNom = ligneNom.querySelector('input') as HTMLInputElement;
    ligneNom.querySelector('button')!.addEventListener('click', () => {
      const p = ajouterPaquet(storage, champNom.value);
      if (p) { paquetSel = p.id; rendreReviser(); }
      else champNom.focus();
    });
    corps.appendChild(ligneNom);

    const targets = paquetsOuTous();
    const stats = targets.map((p) => statsPaquet(p, Date.now())).reduce(
      (a, b) => ({ total: a.total + b.total, aRevoir: a.aRevoir + b.aRevoir, revisees: a.revisees + b.revisees }),
      { total: 0, aRevoir: 0, revisees: 0 },
    );
    corps.appendChild(el(`<p class="savoir-stats">${stats.total} cartes · <b>${stats.aRevoir} à revoir</b> · ${stats.revisees} travaillées</p>`));

    const importe = el(`<details class="savoir-import"><summary>Coller des cartes (une par ligne : question :: réponse)</summary><textarea rows="4" placeholder="Capitale du Cameroun :: Yaoundé&#10;2 + 2 :: 4"></textarea><button>Importer</button></details>`);
    const zone = importe.querySelector('textarea') as HTMLTextAreaElement;
    importe.querySelector('button')!.addEventListener('click', () => {
      const cible = paquetSel ?? ajouterPaquet(storage, 'Mes cartes')?.id ?? null;
      if (!cible) return;
      paquetSel = cible;
      let n = 0;
      for (const ligne of zone.value.split(/\r?\n/)) {
        const i = ligne.indexOf('::');
        if (i <= 0) continue;
        if (ajouterFiche(storage, cible, ligne.slice(0, i), ligne.slice(i + 2))) n++;
      }
      rendreReviser();
      if (n) voix.parler(`${n} cartes rangées dans ${paquetCourant()?.nom ?? 'Mes cartes'}.`, 'posee');
    });
    corps.appendChild(importe);

    // dicter un cours entier → des fiches naissent de la voix
    const dictee = el('<div class="savoir-actions"><button class="savoir-dicter">🎤 Dicter un cours</button></div>');
    dictee.querySelector('.savoir-dicter')!.addEventListener('click', () => {
      corps.querySelector('.savoir-session')?.remove();
      if (!voix.sttDisponible) {
        corps.appendChild(el('<p class="savoir-msg">Je n\u2019ai pas d\u2019oreille aujourd\u2019hui — colle ton cours en texte, ça marche aussi.</p>'));
        return;
      }
      corps.appendChild(el('<p class="savoir-msg">J\u2019écoute… parle normalement, je retirerai les « euh » tout seul.</p>'));
      voix.ecouter((entendu) => {
        const propre = epurerDictee(entendu);
        const ancien = corps.querySelector('.savoir-msg');
        ancien?.remove();
        if (!propre) {
          corps.appendChild(el('<p class="savoir-msg">Je n\u2019ai rien entendu de assez net — redicte, sans te presser.</p>'));
          return;
        }
        const cible = paquetSel ?? ajouterPaquet(storage, 'Mes cartes')?.id ?? null;
        if (!cible) return;
        paquetSel = cible;
        let n = 0;
        for (const f of fichesDepuisTexte(propre)) {
          if (ajouterFiche(storage, cible, f.verso, f.recto)) n++;
        }
        rendreReviser();
        const mot = n
          ? el(`<p class="savoir-msg">${n} cartes nées de ta voix, rangées dans « ${esc(paquetCourant()?.nom ?? 'Mes cartes')} ». Révise quand tu veux.</p>`)
          : el('<p class="savoir-msg">Trop court pour faire des cartes — dicte-moi des phrases complètes, une idée par phrase.</p>');
        corps.insertBefore(mot, corps.firstChild);
        if (n) voix.parler(`${n} cartes nées de ta dictée.`, 'lumineuse');
      });
    });
    corps.appendChild(dictee);

    const actions = el('<div class="savoir-actions"><button class="savoir-reviser">Réviser maintenant</button><button class="savoir-quiz">Quiz du jour</button></div>');
    actions.querySelector('.savoir-reviser')!.addEventListener('click', () => {
      file = fileDeRevue(paquetsOuTous(), Date.now());
      if (file.length === 0) {
        corps.querySelector('.savoir-session')?.remove();
        corps.appendChild(el('<p class="savoir-msg">Rien à revoir pour l\u2019instant — repose-toi, ou importe des cartes.</p>'));
        return;
      }
      vueRevue = 'carte';
      rendreSession();
    });
    actions.querySelector('.savoir-quiz')!.addEventListener('click', () => {
      const base = paquetCourant() ?? paquetsOuTous().find((p) => p.fiches.length >= 2);
      if (!base) {
        corps.appendChild(el('<p class="savoir-msg">Un quiz a besoin d\u2019un paquet d\u2019au moins deux cartes.</p>'));
        return;
      }
      quiz = { questions: genererQuiz(base, 5), index: 0, reponses: [], fini: false };
      rendreQuiz();
    });
    corps.appendChild(actions);
  }

  function rendreSession(): void {
    corps.querySelector('.savoir-session')?.remove();
    const carte = file.shift();
    if (!carte) {
      vueRevue = 'fin';
      corps.appendChild(el('<p class="savoir-msg session">Fin de la file 🌿 — tout est revu, la mémoire fait son travail en silence.</p>'));
      return;
    }
    vueRevue = 'carte';
    const s = el(`<div class="savoir-session session">
      <p class="savoir-reste">encore ${file.length}</p>
      <p class="savoir-verso">${esc(carte.verso)}</p>
      <div class="savoir-reponse" hidden><p class="savoir-recto">${esc(carte.recto)}</p></div>
      <div class="savoir-actions">
        <button class="savoir-voir">Voir la réponse</button>
        <span class="savoir-noter" hidden>
          <button data-n="difficile">Difficile</button>
          <button data-n="bien">Bien</button>
          <button data-n="facile">Facile</button>
        </span>
      </div>
    </div>`);
    const reponse = s.querySelector('.savoir-reponse') as HTMLElement;
    const noter = s.querySelector('.savoir-noter') as HTMLElement;
    s.querySelector('.savoir-voir')!.addEventListener('click', () => {
      reponse.hidden = false;
      noter.hidden = false;
      (s.querySelector('.savoir-voir') as HTMLElement).hidden = true;
      voix.parler(carte.recto, 'posee');
    });
    noter.querySelectorAll('button').forEach((b) =>
      b.addEventListener('click', () => {
        const cible = paquetSel ?? cartePaquetId(carte.id);
        if (cible) revoirFiche(storage, cible, carte.id, b.dataset.n as Note);
        rendreSession();
      }));
    corps.appendChild(s);
  }

  // retrouver le paquet d'une carte (file « tous ») — simple et local
  function cartePaquetId(ficheId: string): string | null {
    for (const p of lirePaquets(storage)) if (p.fiches.some((f) => f.id === ficheId)) return p.id;
    return null;
  }

  function rendreQuiz(): void {
    corps.querySelector('.savoir-session')?.remove();
    if (!quiz) return rendreReviser();
    const q = quiz.questions[quiz.index];
    if (!q || quiz.fini) {
      const bon = quiz.reponses.filter((r, i) => r === quiz!.questions[i].bonne).length;
      const total = quiz.questions.length;
      quiz = null;
      rendreReviser();
      const taux = Math.round((100 * bon) / (total || 1));
      corps.insertBefore(el(`<p class="savoir-msg session">Quiz : ${bon}/${total} (${taux} %). ${taux >= 70 ? 'Tu tiens le sujet.' : 'On creuse encore, tranquillement.'}</p>`), corps.firstChild);
      voix.parler(`Quiz terminé : ${bon} sur ${total}.`, 'lumineuse');
      return;
    }
    const s = el(`<div class="savoir-session session">
      <p class="savoir-reste">question ${quiz.index + 1} / ${quiz.questions.length}</p>
      <p class="savoir-verso">${esc(q.enonce)}</p>
      <div class="savoir-choix"></div>
    </div>`);
    const choix = s.querySelector('.savoir-choix') as HTMLElement;
    voix.parler(q.enonce, 'posee');
    q.choix.forEach((c, i) => {
      const b = document.createElement('button');
      b.textContent = c;
      b.addEventListener('click', () => {
        quiz!.reponses[quiz!.index] = i;
        [...choix.children].forEach((x, j) => x.classList.toggle('juste', j === q.bonne));
        b.classList.toggle('faux', i !== q.bonne);
        voix.parler(i === q.bonne ? 'Oui, exactement.' : c, i === q.bonne ? 'lumineuse' : 'douce');
        window.setTimeout(() => {
          quiz!.index++;
          rendreQuiz();
        }, 1100);
      });
      choix.appendChild(b);
    });
    corps.appendChild(s);
  }

  // ——— Savoir (la bibliothèque vivante) ———
  function rendreSavoir(): void {
    const ligne = el(`<div class="savoir-ligne"><input type="text" placeholder="Que veux-tu apprendre ? (ex. la mitose)" aria-label="Sujet" /><button>Chercher</button></div>`);
    const champ = ligne.querySelector('input') as HTMLInputElement;
    const btn = ligne.querySelector('button')!;
    const resultat = el('<div class="savoir-resultat"></div>');
    champ.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') lancer(champ.value.trim());
    });
    btn.addEventListener('click', () => lancer(champ.value.trim()));
    function lancer(sujet: string): void {
      resultat.innerHTML = '';
      if (!sujet) return;
      const trouve = trouverDansBase(lireSavoir(), sujet);
      if (trouve) afficherSavoir(trouve, resultat);
      else proposerRecherche(sujet, resultat);
    }
    corps.append(ligne, resultat);

    // le grand cerveau en ligne, pour les machines sans gros moteur local :
    // une adresse de Worker Nath-Tech, réglée une fois, jamais obligatoire.
    const cerveau = el(`<details class="savoir-import"><summary>Grand cerveau en ligne (pour les machines sages)</summary>
      <p class="savoir-note">Sur demande à Nath-Tech, une adresse de cerveau prêté peut être réglée ici : les machines sans grande carte répondent alors plus vite et plus loin. Laisser vide pour éteindre ce secours.</p>
      <div class="savoir-ligne"><input type="text" class="cerv-url" placeholder="https://… (vide pour effacer)" aria-label="Adresse du grand cerveau" /><button class="cerv-ok">Régler</button></div>
      <p class="savoir-msg cerv-etat"></p></details>`);
    const champUrl = cerveau.querySelector('.cerv-url') as HTMLInputElement;
    const etatCerv = cerveau.querySelector('.cerv-etat') as HTMLElement;
    const regle = lireEndpoint(storage);
    etatCerv.textContent = regle ? 'Le secours est réglé et veille.' : 'Aucun secours réglé — le cerveau local et le petit moteur suffisent.';
    cerveau.querySelector('.cerv-ok')!.addEventListener('click', () => {
      if (definirEndpoint(storage, champUrl.value)) {
        etatCerv.textContent = lireEndpoint(storage)
          ? 'Le secours est réglé — il répondra dès la prochaine ouverture.'
          : 'Secours éteint. Le ciel reste vivant, sans lui.';
        champUrl.value = '';
      } else {
        etatCerv.textContent = 'Cette adresse ne convient pas — il faut du https.';
      }
    });
    corps.appendChild(cerveau);
  }

  function afficherSavoir(s: Savoir, dans: HTMLElement): void {
    dans.innerHTML = '';
    const bloc = el(`<div class="savoir-fiche"><h4>${esc(s.titre)}</h4></div>`);
    // Une image d'encyclopédie, façon Encarta — si elle est saine (http only).
    if (s.image && /^https?:\/\//.test(s.image)) {
      const img = document.createElement('img');
      img.className = 'savoir-img';
      img.src = s.image;
      img.alt = '';
      img.loading = 'lazy';
      bloc.appendChild(img);
    }
    const texte = el(`<p>${esc(s.resume)}</p>`);
    bloc.appendChild(texte);
    const actions = el('<div class="savoir-actions"></div>');
    const enFiches = el('<button>En faire des cartes</button>');
    enFiches.addEventListener('click', () => {
      const carte = paquetCourant() ?? ajouterPaquet(storage, s.sujet);
      if (!carte) return;
      paquetSel = carte.id;
      let n = 0;
      for (const f of fichesDepuisTexte(s.resume)) {
        if (ajouterFiche(storage, carte.id, f.verso, f.recto)) n++;
      }
      dans.appendChild(el(`<p class="savoir-msg">${n} cartes rangées dans « ${esc(carte.nom)} » — onglet Réviser pour les travailler.</p>`));
      voix.parler(`${n} cartes rangées.`, 'lumineuse');
    });
    actions.appendChild(enFiches);
    const sure = /^https?:\/\//.test(s.url) ? s.url : '';
    if (sure) actions.appendChild(el(`<a class="savoir-lien" href="${esc(sure)}" target="_blank" rel="noopener noreferrer">Voir la source</a>`));
    dans.append(bloc, actions);
  }

  function proposerRecherche(sujet: string, dans: HTMLElement): void {
    const q = el(`<div class="savoir-fiche"><p>« ${esc(sujet)} » ne fait pas encore partie de mes connaissances enregistrées.</p>
      <p class="savoir-note">Veux-tu que je me connecte pour ramener le maximum de ressources sur ce sujet ? Seul le sujet sort de l\u2019appareil, rien sur toi.</p>
      <div class="savoir-actions"><button class="oui">Oui, cherche</button><button class="non">Garde pour plus tard</button></div></div>`);
    q.querySelector('.non')!.addEventListener('click', () => (dans.innerHTML = ''));
    q.querySelector('.oui')!.addEventListener('click', async () => {
      const attente = el('<p class="savoir-msg">Je cherche…</p>');
      dans.appendChild(attente);
      const web = await chargerDepuisLeNet(sujet, fetch);
      attente.remove();
      if (!web) {
        dans.appendChild(el('<p class="savoir-msg">Pas de réponse du net pour l\u2019instant — ou le sujet est trop précis. Réessaie, ou dicte-moi tes propres notes.</p>'));
        return;
      }
      const s: Savoir = { sujet, titre: web.titre, resume: web.resume, url: web.url, image: web.image, ramene_a: Date.now() };
      storage.setItem(CLE_SAVOIR, JSON.stringify(enregistrerSavoir(lireSavoir(), s)));
      dans.innerHTML = '';
      afficherSavoir(s, dans);
      voix.parler('J\u2019ai ramené de quoi apprendre.', 'lumineuse');
    });
    dans.appendChild(q);
  }

  // ——— Traduire (le lexique de tout le monde) ———
  function rendreTraduire(): void {
    const langue = el(`<input type="text" class="trad-langue" placeholder="Ta langue (ex. wolof, ewondo…)" aria-label="Langue" />`);
    const phrase = el('<textarea class="trad-phrase" rows="2" placeholder="Écris (ou dicte dans la bulle du bas)…" aria-label="Phrase à traduire"></textarea>');
    const sortir = el('<div class="savoir-resultat"></div>');
    const ligneBtn = el('<div class="savoir-actions"><button class="trad-faire">Traduire</button></div>');
    const ajouter = el(`<details class="savoir-import"><summary>Ajouter à mon lexique (il reste ici, hors-ligne)</summary>
      <div class="savoir-actions"><button class="trad-dicter">🎤 Dicter un mot — dites « bonjour veut dire… »</button></div>
      <div class="savoir-ligne"><input type="text" placeholder="mot français" aria-label="Mot français" /><input type="text" placeholder="traduction dans ta langue" aria-label="Traduction" /><button>Ajouter</button></div></details>`);
    ajouter.querySelector('.trad-dicter')!.addEventListener('click', () => {
      if (!voix.sttDisponible) {
        sortir.innerHTML = '';
        sortir.appendChild(el('<p class="savoir-msg">Je n\u2019ai pas d\u2019oreille aujourd\u2019hui — écris le mot ci-dessous.</p>'));
        return;
      }
      const l = (langue as HTMLInputElement).value.trim();
      sortir.innerHTML = '';
      sortir.appendChild(el('<p class="savoir-msg">J\u2019écoute… dis par exemple « bonjour veut dire naka nga def ».</p>'));
      voix.ecouter((entendu) => {
        sortir.innerHTML = '';
        const paire = analyserDictee(entendu);
        if (!paire) {
          sortir.appendChild(el(`<p class="savoir-msg">J\u2019ai entendu « ${esc(entendu)} » sans voir le couple — recommence avec « mot veut dire traduction ».</p>`));
          return;
        }
        if (!l) {
          inFr.value = paire.de;
          inTrad.value = paire.a;
          sortir.appendChild(el('<p class="savoir-msg">Donne-moi le nom de la langue en haut, puis appuie sur Ajouter — tout est prêt.</p>'));
          return;
        }
        storage.setItem(CLE_LEXIQUE, JSON.stringify(ajouterEntree(lireLexique(), paire.de, paire.a, l)));
        sortir.appendChild(el(`<p class="savoir-msg">${esc(paire.de)} → ${esc(paire.a)}, rangé dans mon carnet.</p>`));
        voix.parler(`${paire.de} veut dire ${paire.a}.`, 'lumineuse');
      });
    });
    const [inFr, inTrad] = [...ajouter.querySelectorAll('input')] as HTMLInputElement[];
    (ajouter.querySelector('.savoir-ligne button') as HTMLElement).addEventListener('click', () => {
      const l = (langue as HTMLInputElement).value;
      if (!l.trim() || !inFr.value.trim() || !inTrad.value.trim()) return;
      const entrees = validerEntrees(storage.getItem(CLE_LEXIQUE));
      storage.setItem(CLE_LEXIQUE, JSON.stringify(ajouterEntree(entrees, inFr.value, inTrad.value, l)));
      inFr.value = '';
      inTrad.value = '';
      voix.parler('C\u2019est dans mon carnet.', 'douce');
    });
    // mémoire douce de la langue choisie
    (langue as HTMLInputElement).value = localStorage.getItem('nath.trad.langue') ?? '';
    langue.addEventListener('change', () => localStorage.setItem('nath.trad.langue', (langue as HTMLInputElement).value));
    ligneBtn.querySelector('.trad-faire')!.addEventListener('click', () => {
      const l = (langue as HTMLInputElement).value;
      const r = traduireExpression((phrase as HTMLTextAreaElement).value, l, lireLexique());
      sortir.innerHTML = '';
      if (r.resultat) {
        const b = el(`<div class="savoir-fiche"><p class="trad-out">${esc(r.resultat)}</p></div>`);
        const ecouter = el('<button>Écouter</button>');
        ecouter.addEventListener('click', () => voix.parler(r.resultat as string, 'posee'));
        b.appendChild(ecouter);
        sortir.appendChild(b);
        if (r.manques.length) {
          sortir.appendChild(el(`<p class="savoir-note">mots que je ne connais pas encore : ${esc(r.manques.join(', '))} — ajoute-les ci-dessous, ton lexique grandit pour toujours.</p>`));
          proposerFilet();
        }
      } else {
        const socle = lexiqueDepart(l);
        if (socle.length) {
          const b = el(`<p class="savoir-msg">Je ne connais encore rien dans cette langue — mais on m'a donné des mots sûrs en « ${esc(l.trim())} ».</p>`);
          const charger = el('<button>Charger ce socle de mots</button>');
          charger.addEventListener('click', () => {
            let entrees = lireLexique();
            for (const e of socle) entrees = ajouterEntree(entrees, e.de, e.a, l.trim());
            storage.setItem(CLE_LEXIQUE, JSON.stringify(entrees));
            sortir.innerHTML = '';
            sortir.appendChild(el(`<p class="savoir-msg">${socle.length} mots de vie rangés dans mon carnet. Écris une phrase, je saurai répondre.</p>`));
            voix.parler('Le socle est chargé. Ton lexique peut grandir.', 'lumineuse');
          });
          b.appendChild(charger);
          sortir.appendChild(b);
        } else {
          sortir.appendChild(el('<p class="savoir-msg">Je ne connais encore aucun mot dans cette langue. Sème ton lexique une entrée à la fois, ou colle le carnet d\u2019un autre plus bas — ensemble on traduit tout le monde.</p>'));
        }
        proposerFilet();
      }
    });

    // le filet gratuit : quand le carnet ne sait pas, un moteur libre peut
    // prêter main-forte — uniquement sur demande, et sa parole reste étiquetée.
    function proposerFilet(): void {
      const code = codeLangue((langue as HTMLInputElement).value);
      if (!code) return; // le filet ne connaît pas cette langue : on ne fait pas semblant
      const bouton = el('<div class="savoir-actions"><button class="trad-filet">Demander au filet gratuit (cette phrase sortira de l\u2019appareil)</button></div>');
      bouton.querySelector('.trad-filet')!.addEventListener('click', async () => {
        const b = bouton.querySelector('button') as HTMLButtonElement;
        const brut = (phrase as HTMLTextAreaElement).value.trim();
        if (!brut) return;
        b.disabled = true;
        b.textContent = 'Je demande…';
        const rep = await traduireEnLigne(brut, 'fr', code, fetch);
        bouton.remove();
        if (!rep) {
          sortir.appendChild(el('<p class="savoir-msg">Le filet n\u2019a rien pu pour cette phrase — ton carnet reste la meilleure mémoire.</p>'));
          return;
        }
        const carte = el(`<div class="savoir-fiche"><p class="trad-out">${esc(rep)}</p><p class="savoir-note">proposition du filet gratuit — vérifie avec ton oreille ; si c\u2019est juste, range-le : ça rendra service à tout le monde.</p></div>`);
        const ranger = el('<button>Ranger dans mon carnet</button>');
        ranger.addEventListener('click', () => {
          const l = (langue as HTMLInputElement).value.trim();
          if (!l) return;
          storage.setItem(CLE_LEXIQUE, JSON.stringify(ajouterEntree(lireLexique(), brut, rep, l)));
          ranger.textContent = 'Rangé 🌿';
          (ranger as HTMLButtonElement).disabled = true;
          voix.parler('Merci — ton carnet est un peu plus monde.', 'douce');
        });
        carte.appendChild(ranger);
        sortir.appendChild(carte);
      });
      sortir.appendChild(bouton);
    }

    // le carnet de tout le monde : se prêter de main en main, hors-ligne
    const carnet = el(`<details class="savoir-import"><summary>Mon carnet complet — le prêter, ou emprunter celui d\u2019un autre</summary>
      <div class="savoir-actions"><button class="trad-copier">Copier tout mon lexique</button></div>
      <textarea class="trad-collecte" rows="3" placeholder="les mots copiés se collent ici pour être prêtés" aria-label="Mon lexique à prêter" hidden></textarea>
      <textarea class="trad-import" rows="3" placeholder="Colle ici le carnet d\u2019un autre (une ligne par mot : langue | mot :: traduction)" aria-label="Lexique à importer"></textarea>
      <div class="savoir-actions"><button class="trad-importer">Ajouter ces mots au mien</button></div></details>`);
    const collecte = carnet.querySelector('.trad-collecte') as HTMLTextAreaElement;
    carnet.querySelector('.trad-copier')!.addEventListener('click', async () => {
      const texte = serialiserEntrees(lireLexique());
      if (!texte) {
        voix.parler('Mon carnet est encore vide — ajoute des mots, il sera prêt à partager.', 'douce');
        return;
      }
      try {
        await navigator.clipboard.writeText(texte);
        sortir.innerHTML = '';
        sortir.appendChild(el(`<p class="savoir-msg">${esc(String(texte.split('\n').length))} mots copiés — colle-les chez qui veut, son lexique grandira.</p>`));
        voix.parler('C\u2019est copié. Tu peux le prêter.', 'lumineuse');
      } catch {
        collecte.hidden = false;
        collecte.value = texte;
        collecte.select();
        sortir.appendChild(el('<p class="savoir-note">Sélectionne tout dans la case et copie — le carnet est prêt à être prêté.</p>'));
      }
    });
    carnet.querySelector('.trad-importer')!.addEventListener('click', () => {
      const brut = (carnet.querySelector('.trad-import') as HTMLTextAreaElement).value;
      const avant = lireLexique();
      const apres = importerEntrees(brut, avant);
      const recus = apres.length - avant.length;
      if (recus <= 0) {
        sortir.appendChild(el('<p class="savoir-msg">Rien de nouveau là-dedans — ou les lignes ne sont pas dans le format « langue | mot :: traduction ».</p>'));
        return;
      }
      storage.setItem(CLE_LEXIQUE, JSON.stringify(apres));
      (carnet.querySelector('.trad-import') as HTMLTextAreaElement).value = '';
      sortir.appendChild(el(`<p class="savoir-msg">${esc(String(recus))} mots reçus d\u2019un autre — merci à lui. Notre lexique est plus fort.</p>`));
      voix.parler(`${recus} mots reçus. Merci à celui qui les a semés.`, 'douce');
    });
    corps.append(langue, phrase, ligneBtn, sortir, ajouter, carnet);
  }

  // ——— Entreprise : une organisation, un visage pour toute l'équipe ———
  let titreSansMarque: string | null = null;
  const patte = document.getElementById('patte');
  const patteSansMarque = patte ? patte.innerHTML : '';
  function habiller(m: Marque): void {
    if (titreSansMarque === null) titreSansMarque = document.title;
    const teinte = teinteAffichee(m);
    document.documentElement.style.setProperty('--teinte', teinte);
    let meta = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'theme-color';
      document.head.appendChild(meta);
    }
    meta.content = teinte;
    document.title = m.actif ? (m.slogan ? `${m.nom} — ${m.slogan}` : m.nom) : titreSansMarque;
    if (patte) {
      patte.innerHTML = m.actif
        ? `${esc(m.nom)} — <span>${esc(m.slogan || 'l\u2019assistant vivant')}</span>`
        : patteSansMarque;
    }
  }

  function rendreEntreprise(): void {
    const m = lireMarque(storage);
    const sortir = el('<div class="savoir-resultat"></div>');
    if (m.actif) {
      const carte = el(`<div class="savoir-fiche"><h4>${esc(m.nom)}</h4><p>${esc(m.slogan)}</p>
        <p class="savoir-note">Cet appareil porte le visage de « ${esc(m.organisation)} ».</p></div>`);
      const range = el('<div class="savoir-actions"><button class="ent-perso">Revenir en mode personnel</button></div>');
      range.querySelector('.ent-perso')!.addEventListener('click', () => {
        desactiverMarque(storage);
        habiller(lireMarque(storage));
        rendre('entreprise');
        voix.parler('Je reprends mon visage habituel.', 'douce');
      });
      corps.append(carte, range);
    }
    const form = el(`<div class="savoir-fiche">
      <p class="savoir-note">Pour une école, une ONG, une équipe : la clé se demande à Nath-Tech avec le nom exact de l’organisation. Rien n’est bridé, on peut toujours revenir.</p>
      <div class="savoir-ligne"><input type="text" class="ent-org" placeholder="Organisation (ex. Lycée Bilingue de Douala)" aria-label="Organisation" /></div>
      <div class="savoir-ligne"><input type="text" class="ent-nom" placeholder="Nom visible (ex. LBD)" aria-label="Nom de la marque" /><input type="text" class="ent-slogan" placeholder="Slogan (facultatif)" aria-label="Slogan" /></div>
      <div class="savoir-ligne"><input type="color" class="ent-teinte" value="${esc(teinteAffichee(m))}" aria-label="Teinte" /><input type="text" class="ent-cle" placeholder="Clé d’équipe (blocs de 4)" aria-label="Clé d’équipe" /></div>
      <div class="savoir-actions"><button class="ent-ok">Habiller l’app pour mon équipe</button></div>
    </div>`);
    form.querySelector('.ent-ok')!.addEventListener('click', () => {
      const lireChamp = (c: string) => (form.querySelector(`.${c}`) as HTMLInputElement).value;
      const ok = activerMarque(storage, {
        organisation: lireChamp('ent-org'),
        cle: lireChamp('ent-cle'),
        nom: lireChamp('ent-nom'),
        slogan: lireChamp('ent-slogan'),
        couleur: lireChamp('ent-teinte'),
      });
      if (ok) {
        habiller(lireMarque(storage));
        rendre('entreprise');
        voix.parler(`Désormais, je travaille pour ${lireMarque(storage).nom}.`, 'lumineuse');
      } else {
        sortir.innerHTML = '';
        sortir.appendChild(el('<p class="savoir-msg">Cette clé n’ouvre rien pour ce nom-là — vérifie le nom exact de l’organisation et la clé, bloc par bloc.</p>'));
      }
    });

    // le kit commercial : trois chiffres, pas de surprise
    const tarif = el(`<div class="savoir-fiche">
      <p class="savoir-note">Nath Entreprise pour une école, une ONG, une équipe — toute l\u2019équipe habillée, un seul prix :</p>
      <div class="savoir-ligne"><input type="number" class="ent-nb" min="1" placeholder="Nombre de personnes à équiper" aria-label="Nombre de personnes" /><button class="ent-devis">Estimer</button></div>
      <div class="ent-devis-out"></div>
    </div>`);
    tarif.querySelector('.ent-devis')!.addEventListener('click', () => {
      const n = Number((tarif.querySelector('.ent-nb') as HTMLInputElement).value);
      const out = tarif.querySelector('.ent-devis-out') as HTMLElement;
      out.innerHTML = '';
      if (!Number.isFinite(n) || n <= 0) {
        out.appendChild(el('<p class="savoir-msg">Entre d\u2019abord le nombre de personnes à équiper.</p>'));
        return;
      }
      const d = devisEntreprise(n);
      const ligne = d.mensuel === null
        ? `<b>${esc(d.palier)}</b> — ${esc(formatFCFA(null))} : parle-nous de ton réseau, on trouvera le juste chiffre.`
        : `<b>${esc(d.palier)}</b> — ${esc(formatFCFA(d.mensuel))} par mois pour toute l’équipe, soit environ ${Math.round(d.mensuel / n).toLocaleString('fr-FR')} F par personne. Et plus vous êtes nombreux, moins chaque tête coûte.`;
      out.appendChild(el(`<p class="savoir-msg">${ligne}</p>`));
      out.appendChild(el('<p class="savoir-note">Accord direct avec Nath-Tech (mobile money), puis la clé exacte de ton organisation. Le gratuit de chacun reste entier, toujours.</p>'));
    });
    corps.append(form, sortir, tarif);
  }

  habiller(lireMarque(storage));

  return bouton;
}
