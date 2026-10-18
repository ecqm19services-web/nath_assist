// La boîte à outils de Nath : huit assistants d'usage quotidien — flamme, frigo,
// assiette, journal, tuteur, souffle, résumé, carte des savoirs. Chacun possède
// un moteur qui tourne sans réseau : le grand cerveau n'ajoute que du confort,
// jamais une condition. Aucun nom de moteur à l'écran, aucune donnée personnelle
// qui sort de l'appareil.

import { createVoice } from './voice';
import { exporterCoffre, importerCoffre } from './coffre';
import { lireCarnet, teacher, traduire } from '../traduction/carnet';
import {
  ajouterPaquet,
  ajouterFiche,
  lirePaquets,
} from '../etudes/store';
import {
  apprecier,
  composerExamen,
  dureeConseillee,
  resultatExamen,
  type Fiche,
} from '../etudes/examen';
import {
  PACKS as METIERS_PACKS,
  avancerJour,
  motDuJour,
  ordonnerPourCrise,
  packsPourPays,
  piegeDuJour,
  progressionDe,
  trouverPack,
  tacheDuJour,
} from '../metiers/pack';
import { PAYS as METIERS_PAYS, AVERTISSEMENT_URGENCE, paysDe } from '../metiers/pays';
import { lireContexte, ecrireContexte, paysEffectif, type Contexte } from '../metiers/contexte';
import {
  analyserDictee,
  epurerDictee,
} from '../traduction/dictee';
import {
  decouperIngredients,
  ideesParCerveau,
  listeCourses,
  platsPossibles,
  suggestionsMinutes,
} from '../assist/cuisine';
import {
  analyseParCerveau,
  decrireAssiette,
  verdictAssiette,
} from '../assist/assiette';
import {
  cartesDepuisJournal,
  effacerEntree,
  filtrerJournal,
  lireJournal,
  noterEntree,
} from '../assist/journal';
import { pucesDepuisTexte, pucesVersFiches, resumerParCerveau } from '../assist/resume';
import { decouperEnonce, etapesHorsLigne, expliquerParCerveau } from '../assist/tuteur';
import {
  ajouterSession,
  dureeCycle,
  lireSouffle,
  progression,
  RYTHME_478,
  RYTHME_CARRE,
  type PhaseSouffle,
} from '../assist/souffle';
import { archipel, type Ile } from '../assist/carte';
import { SOCLE, type Notice } from '../etudes/encyclo';
import { ajouterXp, lireFlamme, niveauDe, partDuNiveau, titreDuNiveau } from '../assist/flamme';
import { lireEndpoint, lireTemperament } from './cerveauNet';

const el = (html: string) => {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild as HTMLElement;
};

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] ?? c);

type Onglet = 'flamme' | 'frigo' | 'assiette' | 'journal' | 'tuteur' | 'souffle' | 'resume' | 'carte' | 'langues' | 'examen' | 'metiers' | 'coffre';

const TITRES: Record<Onglet, string> = {
  flamme: 'Flamme',
  frigo: 'Frigo',
  assiette: 'Assiette',
  journal: 'Journal',
  tuteur: 'Tuteur',
  souffle: 'Souffle',
  resume: 'Résumé',
  carte: 'Carte',
  langues: 'Langues',
  examen: 'Examen',
  metiers: 'Métiers',
  coffre: 'Coffre',
};

export function creerPanneauOutils(storage: Storage): HTMLElement {
  const voix = createVoice();
  const bouton = el('<button class="outils-btn" title="Ma boîte à outils" aria-label="Ouvrir la boîte à outils">🧰</button>');
  const paneau = el(`
    <div class="outils-paneau" hidden role="dialog" aria-label="Boîte à outils">
      <div class="outils-tete">
        <div class="outils-onglets">
          ${Object.keys(TITRES)
            .map((k) => `<button data-ot="${k}"${k === 'flamme' ? ' class="actif"' : ''}>${TITRES[k as Onglet]}</button>`)
            .join('')}
        </div>
        <button class="outils-fermer" title="Fermer" aria-label="Fermer">×</button>
      </div>
      <div class="outils-corps"></div>
    </div>`);
  document.body.append(bouton, paneau);
  const corps = paneau.querySelector('.outils-corps') as HTMLElement;

  // ——— état, hors des fonctions de rendu : il survit aux re-rendus ———
  let actif: Onglet = 'flamme';
  let frigo = '';
  let assiette = '';
  let tuteurQ = '';
  let tuteurR: string | null = null;
  let resumeTexte = '';
  let resumeR: string[] = [];
  let journalReq = '';
  let journalTitre = '';
  let journalTexte = '';
  let souffleRythme: PhaseSouffle[] = RYTHME_478;
  let souffleCycles = 3;
  let souffleTimer: number | null = null;
  let souffleDepart = 0;
  let carteIle: string | null = null;
  let languesLang = 'wolof';
  let languesReq = '';
  let languesDe = '';
  let languesA = '';
  let languesMsg = '';
  let languesRes: { resultat: string | null; manques: string[] } | null = null;
  let examenPaquetId = '';
  let examenGraine = '';
  let examenCartes: Fiche[] | null = null;
  let examenMarks: Record<string, boolean> = {};
  let examenResultat: { corrects: number; total: number; score: number } | null = null;
  let metiersPackId = METIERS_PACKS[0]?.id ?? '';

  const horsLigne = () => (!navigator.onLine ? '<p class="outils-note">Hors-ligne : tout ce que tu vois ici continue de fonctionner.</p>' : '');
  const cerveauRegle = () => !!lireEndpoint(storage).trim();

  // ——— 1. La flamme : la série des jours ———
  function rendreFlamme(): void {
    const f = lireFlamme(storage);
    const n = niveauDe(f.xp);
    const part = Math.round(partDuNiveau(f.xp) * 100);
    corps.innerHTML = `
      <div class="oi-carte">
        <p class="oi-titre">🔥 ${f.streak} jour${f.streak > 1 ? 's' : ''} de suite</p>
        <p class="oi-note">Record : ${f.meilleur} jour${f.meilleur > 1 ? 's' : ''} · ${f.xp} points · niveau ${n} — ${esc(titreDuNiveau(n))}</p>
        <div class="oi-barre"><i style="width:${part}%"></i></div>
        <p class="oi-note">${part} % du chemin vers le niveau ${n + 1}.</p>
        <div class="oi-actions">
          <button data-xp="10">Je révise aujourd’hui (+10)</button>
          <button data-xp="25">J’ai fini un paquet (+25)</button>
        </div>
        <p class="oi-note">Chaque fiche revue dans le coin d’études ajoute aussi ses points, toute seule.</p>
      </div>${horsLigne()}`;
    corps.querySelectorAll<HTMLButtonElement>('[data-xp]').forEach((b) => {
      b.addEventListener('click', () => {
        ajouterXp(storage, Number(b.dataset.xp));
        rendreFlamme();
      });
    });
  }

  // ——— 2. Le frigo : ce que j'ai, ce que je peux faire ———
  function rendreFrigo(): void {
    const ing = decouperIngredients(frigo);
    const props = platsPossibles(ing);
    const cours = listeCourses(ing);
    corps.innerHTML = `
      <div class="oi-carte">
        <label class="oi-libelle" for="oi-frigo">Ce que j’ai sous la main</label>
        <textarea id="oi-frigo" class="oi-champ" rows="2" placeholder="2 œufs, tomate, riz, oignon…">${esc(frigo)}</textarea>
        <div class="oi-actions">
          ${voix.sttDisponible ? '<button data-act="micro" data-cible="frigo">🎤 Dictater</button>' : ''}
          <button data-act="vingt">Dîner en 20 minutes</button>
          ${cerveauRegle() ? '<button data-act="cereau">Demander une idée</button>' : ''}
        </div>
        ${ing.length ? `<p class="oi-note">Je retiens : ${ing.map(esc).join(', ')}.</p>` : ''}
        <div data-zone></div>
      </div>${horsLigne()}`;
    const champ = corps.querySelector('#oi-frigo') as HTMLTextAreaElement;
    champ.addEventListener('input', () => {
      frigo = champ.value;
      rendreFrigo();
      const c = corps.querySelector('#oi-frigo') as HTMLTextAreaElement;
      c.focus();
      c.setSelectionRange(c.value.length, c.value.length);
    });
    const zone = corps.querySelector('[data-zone]') as HTMLElement;
    if (props.length) {
      zone.innerHTML = `<p class="oi-titre2">Ce que je peux faire</p>` + props
        .slice(0, 6)
        .map(
          (p) => `<div class="oi-ligne"><span>${esc(p.plat.nom)} · ${p.plat.minutes} min</span>
            <small>${p.manquants.length ? `manque : ${p.manquants.map(esc).join(', ')}` : 'j’ai tout'}</small></div>`,
        )
        .join('');
    } else if (ing.length) {
      zone.innerHTML = '<p class="oi-note">Rien sur la carte avec ces seuls mots — ajoute un féculent, un légume ou une protéine.</p>';
    }
    if (cours.length) {
      zone.innerHTML += `<p class="oi-titre2">Liste de courses</p><p class="oi-cours">${cours.map(esc).join(' · ')}</p>`;
    }
    corps.querySelector('[data-act="vingt"]')?.addEventListener('click', () => {
      frigo = suggestionsMinutes(20).map((p) => p.ingredients.slice(0, 2).join(', ')).slice(0, 3).join(', ');
      rendreFrigo();
    });
    brancherMicro(corps.querySelector('[data-act="micro"]'), champ, (t) => {
      frigo = t;
      rendreFrigo();
    });
    corps.querySelector('[data-act="cereau"]')?.addEventListener('click', async (e) => {
      const b = e.currentTarget as HTMLButtonElement;
      b.disabled = true;
      b.textContent = 'Je réfléchis…';
      const r = await ideesParCerveau(lireEndpoint(storage), decouperIngredients(frigo), fetch, lireTemperament(storage));
      zone.innerHTML += r
        ? `<p class="oi-titre2">Une idée en plus</p><p class="oi-reponse">${esc(r)}</p>`
        : '<p class="oi-note">Pas de réponse venue — la carte du frigo reste utilisable hors-ligne.</p>';
      b.disabled = false;
      b.textContent = 'Demander une idée';
    });
  }

  // ——— 3. L'assiette ———
  function rendreAssiette(): void {
    const a = decrireAssiette(assiette);
    const v = verdictAssiette(a.total);
    corps.innerHTML = `
      <div class="oi-carte">
        <label class="oi-libelle" for="oi-assiette">Ce que je mange</label>
        <textarea id="oi-assiette" class="oi-champ" rows="2" placeholder="2 œufs, riz, poulet, banane…">${esc(assiette)}</textarea>
        <div class="oi-actions">${voix.sttDisponible ? '<button data-act="micro" data-cible="assiette">🎤 Dictater</button>' : ''}
        ${cerveauRegle() ? '<button data-act="cereau">Avis du grand cerveau</button>' : ''}</div>
        ${a.articles.length ? `
          <table class="oi-table"><thead><tr><th>Aliment</th><th>Qté</th><th>kcal</th><th>P</th><th>G</th><th>L</th></tr></thead>
          <tbody>${a.articles
            .map((x) => `<tr><td>${esc(x.nom)}</td><td>${x.quantite}</td><td>${x.kcal}</td><td>${x.p}</td><td>${x.g}</td><td>${x.l}</td></tr>`)
            .join('')}</tbody>
          <tfoot><tr><td>Total</td><td></td><td>${Math.round(a.total.kcal)}</td><td>${a.total.p}</td><td>${a.total.g}</td><td>${a.total.l}</td></tr></tfoot></table>
          <p class="oi-verdict oi-${v.equilibre}">${esc(v.mot)}</p>` : '<p class="oi-note">Écris ce que tu manges : l’estimation vient aussitôt, sans réseau.</p>'}
        ${a.inconnus.length ? `<p class="oi-note">Je ne connais pas encore : ${a.inconnus.map(esc).join(', ')}.</p>` : ''}
        <div data-zone></div>
      </div>${horsLigne()}`;
    const champ = corps.querySelector('#oi-assiette') as HTMLTextAreaElement;
    champ.addEventListener('input', () => {
      assiette = champ.value;
      rendreAssiette();
      const c = corps.querySelector('#oi-assiette') as HTMLTextAreaElement;
      c.focus();
      c.setSelectionRange(c.value.length, c.value.length);
    });
    brancherMicro(corps.querySelector('[data-act="micro"]'), champ, (t) => {
      assiette = t;
      rendreAssiette();
    });
    corps.querySelector('[data-act="cereau"]')?.addEventListener('click', async (e) => {
      const b = e.currentTarget as HTMLButtonElement;
      const zone = corps.querySelector('[data-zone]') as HTMLElement;
      b.disabled = true;
      b.textContent = 'Je regarde…';
      const r = await analyseParCerveau(lireEndpoint(storage), assiette, fetch, lireTemperament(storage));
      zone.innerHTML = r
        ? `<p class="oi-reponse">${esc(r)}</p>`
        : '<p class="oi-note">Aucun avis n’est revenu ; le calcul ci-dessus reste valable.</p>';
      b.disabled = false;
      b.textContent = 'Avis du grand cerveau';
    });
  }

  // ——— 4. Le journal des découvertes ———
  function rendreJournal(): void {
    const tout = lireJournal(storage);
    const montres = filtrerJournal(tout, journalReq).slice(0, 30);
    corps.innerHTML = `
      <div class="oi-carte">
        <input id="oi-jreq" class="oi-champ" type="search" placeholder="Retrouver une note (les accents ne comptent pas)" value="${esc(journalReq)}" />
        <input id="oi-jtitre" class="oi-champ" type="text" placeholder="Titre de la découverte" value="${esc(journalTitre)}" />
        <textarea id="oi-jtexte" class="oi-champ" rows="2" placeholder="Ce que j’ai compris…">${esc(journalTexte)}</textarea>
        <div class="oi-actions">
          <button data-act="noter">Noter</button>
          <button data-act="cartes">En faire des cartes</button>
          ${voix.sttDisponible ? '<button data-act="micro" data-cible="jtexte">🎤 Dictater</button>' : ''}
        </div>
        <p class="oi-note">${tout.length} note${tout.length > 1 ? 's' : ''} gardée${tout.length > 1 ? 's' : ''} sur cet appareil.</p>
        <div class="oi-liste">${montres
          .map(
            (e) => `<div class="oi-ligne" data-id="${esc(e.id)}"><span><strong>${esc(e.titre)}</strong>
              <small> · ${new Date(e.at).toLocaleDateString('fr-FR')} · ${esc(e.origine)}</small></span>
              <button data-act="del" title="Effacer">×</button></div>
              <p class="oi-pet">${esc(e.texte)}</p>`,
          )
          .join('') || '<p class="oi-note">Rien pour l’instant — la prochaine découverte tient sur deux lignes.</p>'}</div>
        <div data-zone></div>
      </div>${horsLigne()}`;
    const req = corps.querySelector('#oi-jreq') as HTMLInputElement;
    req.addEventListener('input', () => {
      journalReq = req.value;
      rendreJournal();
      (corps.querySelector('#oi-jreq') as HTMLInputElement).focus();
    });
    const jt = corps.querySelector('#oi-jtitre') as HTMLInputElement;
    jt.addEventListener('input', () => (journalTitre = jt.value));
    const jx = corps.querySelector('#oi-jtexte') as HTMLTextAreaElement;
    jx.addEventListener('input', () => (journalTexte = jx.value));
    corps.querySelector('[data-act="noter"]')!.addEventListener('click', () => {
      noterEntree(storage, { titre: journalTitre, texte: journalTexte, origine: 'outil' });
      journalTitre = '';
      journalTexte = '';
      rendreJournal();
    });
    corps.querySelector('[data-act="cartes"]')!.addEventListener('click', () => {
      const cartes = cartesDepuisJournal(filtrerJournal(lireJournal(storage), journalReq));
      const nombre = versCartes('Mon journal', cartes);
      // Le mot reste dans la carte, comme partout ailleurs : jamais collé sous le panneau.
      (corps.querySelector('[data-zone]') as HTMLElement).insertAdjacentHTML(
        'beforeend',
        `<p class="oi-reponse">${nombre ? `${nombre} carte${nombre > 1 ? 's' : ''} ajoutée${nombre > 1 ? 's' : ''} au paquet « Mon journal » — révise-les dans le coin d’études.` : 'Rien à cartographier : écris au moins une note.'}</p>`,
      );
    });
    brancherMicro(corps.querySelector('[data-act="micro"]'), jx, () => {
      journalTexte = jx.value;
    });
    corps.querySelectorAll<HTMLElement>('[data-act="del"]').forEach((b) => {
      b.addEventListener('click', () => {
        effacerEntree(storage, b.closest<HTMLElement>('.oi-ligne')?.dataset.id ?? '');
        rendreJournal();
      });
    });
  }

  // ——— 5. Le tuteur : l'exercice pas à pas ———
  function rendreTuteur(): void {
    const decoupe = decouperEnonce(tuteurQ);
    corps.innerHTML = `
      <div class="oi-carte">
        <label class="oi-libelle" for="oi-tut">Ma question, mon énoncé</label>
        <textarea id="oi-tut" class="oi-champ" rows="3" placeholder="Résoudre 3x + 5 = 20 — ou recopier l’énoncé ligne par ligne.">${esc(tuteurQ)}</textarea>
        <div class="oi-actions">
          <button data-act="plan">Le plan, stylo en main</button>
          ${voix.sttDisponible ? '<button data-act="micro" data-cible="tut">🎤 Dictater</button>' : ''}
          ${voix.ttsDisponible ? '<button data-act="lire">🔊 Me lire le plan</button>' : ''}
          ${cerveauRegle() ? '<button data-act="cereau">Faire résoudre</button>' : ''}
        </div>
        ${decoupe.questions.length ? `<p class="oi-note">Ce qu’on te demande : ${decoupe.questions.map(esc).join(' · ')}</p>` : ''}
        <div data-zone>${tuteurR ? `<p class="oi-reponse">${esc(tuteurR)}</p>` : ''}</div>
      </div>${horsLigne()}`;
    const champ = corps.querySelector('#oi-tut') as HTMLTextAreaElement;
    champ.addEventListener('input', () => {
      tuteurQ = champ.value;
    });
    const zone = corps.querySelector('[data-zone]') as HTMLElement;
    corps.querySelector('[data-act="plan"]')!.addEventListener('click', () => {
      const etapes = etapesHorsLigne(tuteurQ);
      zone.innerHTML = `<p class="oi-titre2">Le plan</p><ol class="oi-pas">${etapes.map((s) => `<li>${esc(s)}</li>`).join('')}</ol>`;
    });
    corps.querySelector('[data-act="lire"]')?.addEventListener('click', () => {
      voix.parler(etapesHorsLigne(tuteurQ).join(' . '), 'posee');
    });
    brancherMicro(corps.querySelector('[data-act="micro"]'), champ, (t) => {
      tuteurQ = t;
    });
    corps.querySelector('[data-act="cereau"]')?.addEventListener('click', async (e) => {
      const b = e.currentTarget as HTMLButtonElement;
      b.disabled = true;
      b.textContent = 'Je cherche…';
      const r = await expliquerParCerveau(lireEndpoint(storage), tuteurQ, fetch, lireTemperament(storage));
      tuteurR = r;
      zone.innerHTML = r
        ? `<p class="oi-titre2">Résolution</p><p class="oi-reponse">${esc(r)}</p>`
        : '<p class="oi-note">Rien n’est revenu — le plan hors-ligne fonctionne quand même.</p>';
      b.disabled = false;
      b.textContent = 'Faire résoudre';
    });
  }

  // ——— 6. Le souffle : la respiration guidée ———
  function rendreSouffle(): void {
    const reg = lireSouffle(storage);
    const total = dureeCycle(souffleRythme);
    // On ne dit pas « 1 minute » pour 36 secondes : les secondes se disent tant qu'elles parlent.
    const minutes = Math.round(reg.secondes / 60);
    const respire = reg.secondes < 60
      ? `${reg.secondes} seconde${reg.secondes > 1 ? 's' : ''}`
      : `${minutes} minute${minutes > 1 ? 's' : ''}`;
    corps.innerHTML = `
      <div class="oi-carte">
        <p class="oi-titre">Respirer à ${souffleRythme === RYTHME_478 ? '4-7-8' : 'au carré'} · ${souffleCycles} cycles · ${total * souffleCycles} s</p>
        <div class="oi-souffle"><i></i><span data-phase="">${souffleTimer === null ? 'Prêt' : ''}</span></div>
        <div class="oi-actions">
          <button data-ry="478"${souffleRythme === RYTHME_478 ? ' class="actif"' : ''}>4-7-8</button>
          <button data-ry="carre"${souffleRythme === RYTHME_CARRE ? ' class="actif"' : ''}>Carré</button>
          <button data-cy="3"${souffleCycles === 3 ? ' class="actif"' : ''}>3</button>
          <button data-cy="5"${souffleCycles === 5 ? ' class="actif"' : ''}>5</button>
          <button data-cy="8"${souffleCycles === 8 ? ' class="actif"' : ''}>8</button>
          <button data-act="go">${souffleTimer === null ? 'Commencer' : 'Arrêter'}</button>
        </div>
        <p class="oi-note">${reg.sessions} séance${reg.sessions > 1 ? 's' : ''} au repos · ${respire} respirées.</p>
        <p class="oi-note">Le minuteur tourne dans l’appareil, sans son obligatoire : tu peux fermer les yeux.</p>
      </div>${horsLigne()}`;
    corps.querySelectorAll<HTMLElement>('[data-ry]').forEach((b) =>
      b.addEventListener('click', () => {
        if (souffleTimer !== null) return;
        souffleRythme = b.dataset.ry === 'carre' ? RYTHME_CARRE : RYTHME_478;
        rendreSouffle();
      }),
    );
    corps.querySelectorAll<HTMLElement>('[data-cy]').forEach((b) =>
      b.addEventListener('click', () => {
        if (souffleTimer !== null) return;
        souffleCycles = Number(b.dataset.cy) || 3;
        rendreSouffle();
      }),
    );
    corps.querySelector('[data-act="go"]')!.addEventListener('click', () => {
      if (souffleTimer !== null) {
        arreterSouffle(true);
        return;
      }
      souffleDepart = Date.now();
      const go = corps.querySelector('[data-act="go"]') as HTMLButtonElement;
      go.textContent = 'Arrêter'; // le geste doit se voir tout de suite, pas au prochain rendu
      souffleTimer = window.setInterval(() => {
        const a = progression(Date.now() - souffleDepart, souffleRythme, souffleCycles);
        if (a.fini) {
          arreterSouffle(true);
          return;
        }
        // Les nœuds sont re-capturés à chaque tic : un re-rendu ne peut pas figer l’aiguille.
        const affiche = corps.querySelector('[data-phase]');
        const pastille = corps.querySelector<HTMLElement>('.oi-souffle i');
        if (affiche) affiche.textContent = `${a.phase} · ${a.reste} · cycle ${a.cycle}/${souffleCycles}`;
        const rayon = a.phase === 'Inspire' ? 1 : a.phase === 'Retiens' ? 0.92 : 0.55;
        if (pastille) pastille.style.transform = `scale(${rayon})`;
      }, 200);
    });
  }

  function arreterSouffle(tient: boolean): void {
    if (souffleTimer !== null) window.clearInterval(souffleTimer);
    souffleTimer = null;
    const secondes = tient ? Math.min(dureeCycle(souffleRythme) * souffleCycles, Math.round((Date.now() - souffleDepart) / 1000)) : 0;
    // Sous trois secondes, ce n'est pas une séance : on ne gonfle pas le compteur.
    if (secondes >= 3) ajouterSession(storage, { secondes });
    rendreSouffle();
  }

  // ——— 7. Le résumé express ———
  function rendreResume(): void {
    corps.innerHTML = `
      <div class="oi-carte">
        <label class="oi-libelle" for="oi-res">Colle ou dicte un texte</label>
        <textarea id="oi-res" class="oi-champ" rows="4" placeholder="Cours, article, message long…">${esc(resumeTexte)}</textarea>
        <div class="oi-actions">
          <button data-act="puces">Résumer ici (hors-ligne)</button>
          ${voix.sttDisponible ? '<button data-act="micro" data-cible="res">🎤 Dictater</button>' : ''}
          ${voix.ttsDisponible ? '<button data-act="lire">🔊 Lire</button>' : ''}
          ${cerveauRegle() ? '<button data-act="cereau">Résumer avec le grand cerveau</button>' : ''}
          <button data-act="cartes">En faire des cartes</button>
        </div>
        <div data-zone>${resumeR.length ? `<ol class="oi-pas">${resumeR.map((p) => `<li>${esc(p)}</li>`).join('')}</ol>` : ''}</div>
      </div>${horsLigne()}`;
    const champ = corps.querySelector('#oi-res') as HTMLTextAreaElement;
    champ.addEventListener('input', () => (resumeTexte = champ.value));
    const zone = corps.querySelector('[data-zone]') as HTMLElement;
    corps.querySelector('[data-act="puces"]')!.addEventListener('click', () => {
      resumeR = pucesDepuisTexte(resumeTexte, 5);
      zone.innerHTML = resumeR.length
        ? `<ol class="oi-pas">${resumeR.map((p) => `<li>${esc(p)}</li>`).join('')}</ol>`
        : '<p class="oi-note">Trop court pour être coupé en puces — ajoute quelques phrases.</p>';
    });
    corps.querySelector('[data-act="lire"]')?.addEventListener('click', () => {
      voix.parler(resumeR.length ? resumeR.join(' . ') : resumeTexte.slice(0, 400), 'posee');
    });
    brancherMicro(corps.querySelector('[data-act="micro"]'), champ, (t) => (resumeTexte = t));
    corps.querySelector('[data-act="cereau"]')?.addEventListener('click', async (e) => {
      const b = e.currentTarget as HTMLButtonElement;
      b.disabled = true;
      b.textContent = 'Je lis…';
      const r = await resumerParCerveau(lireEndpoint(storage), resumeTexte, fetch, lireTemperament(storage));
      resumeR = r ? r.split(/\n+/).map((x) => x.replace(/^[-•*]\s*/, '').trim()).filter(Boolean) : [];
      zone.innerHTML = resumeR.length
        ? `<ol class="oi-pas">${resumeR.map((p) => `<li>${esc(p)}</li>`).join('')}</ol>`
        : '<p class="oi-note">Rien n’est revenu — le bouton « Résumer ici » marche sans réseau.</p>';
      b.disabled = false;
      b.textContent = 'Résumer avec le grand cerveau';
    });
    corps.querySelector('[data-act="cartes"]')!.addEventListener('click', () => {
      const cartes = resumeR.length ? pucesVersFiches(resumeR) : pucesVersFiches(pucesDepuisTexte(resumeTexte, 5));
      const nombre = versCartes('Résumés', cartes);
      zone.insertAdjacentHTML(
        'beforeend',
        `<p class="oi-reponse">${nombre ? `${nombre} carte${nombre > 1 ? 's' : ''} dans le paquet « Résumés ».` : 'Résume d’abord (bouton hors-ligne) pour obtenir des cartes.'}</p>`,
      );
    });
  }

  // ——— 8. La carte des savoirs ———
  function rendreCarte(): void {
    const toutes: Notice[] = SOCLE;
    const iles: Ile[] = archipel(toutes);
    const choisie = carteIle ? iles.find((i) => i.nom === carteIle) ?? null : null;
    const vues = choisie ? toutes.filter((n) => choisie.ids.includes(n.id)) : [];
    corps.innerHTML = `
      <div class="oi-carte">
        <p class="oi-titre">L’archipel des savoirs · ${toutes.length} notices</p>
        <div class="oi-iles">${iles
          .map(
            (i) =>
              `<button class="oi-ile${i.nom === carteIle ? ' actif' : ''}" data-ile="${esc(i.nom)}" style="--p:${Math.max(6, Math.round(i.part))}%"><span>${esc(i.nom)}</span><small>${i.nombre} · ${i.part}%</small></button>`,
          )
          .join('')}</div>
        ${
          choisie
            ? `<p class="oi-titre2">${esc(choisie.nom)}</p><div class="oi-grille">${vues
                .map((n) => `<div class="oi-puce"><strong>${esc(n.titre)}</strong><p>${esc(n.resume)}</p></div>`)
                .join('')}</div>`
            : '<p class="oi-note">Choisis une île : ses notices s’ouvrent ici, même sans réseau. Les étoiles et la recherche t’attendent dans le coin d’études.</p>'
        }
      </div>${horsLigne()}`;
    corps.querySelectorAll<HTMLElement>('[data-ile]').forEach((b) =>
      b.addEventListener('click', () => {
        carteIle = b.dataset.ile ?? null;
        rendreCarte();
      }),
    );
  }

  // ——— Un paquet par thème, créé à la demande : les cartes rejoignent Réviser. ———
  function versCartes(nom: string, cartes: { verso: string; recto: string }[]): number {
    const propres = cartes.filter((c) => c.verso.trim() && c.recto.trim());
    if (!propres.length) return 0;
    let paquet = lirePaquets(storage).find((p) => p.nom === nom);
    if (!paquet) paquet = ajouterPaquet(storage, nom) ?? undefined;
    if (!paquet) return 0;
    let n = 0;
    for (const c of propres) if (ajouterFiche(storage, paquet.id, c.verso, c.recto)) n++;
    return n;
  }

  function brancherMicro(bouton: Element | null | undefined, champ: HTMLElement, apres: (texte: string) => void): void {
    const b = bouton as HTMLButtonElement | null | undefined;
    if (!b || !voix.sttDisponible) return;
    b.addEventListener('click', () => {
      b.disabled = true;
      b.textContent = '🎤 Je t’écoute…';
      voix.ecouter((t) => {
        const dictee = analyserDictee(t);
        const texte = epurerDictee(dictee ? `${dictee.de}, ${dictee.a}` : t);
        (champ as HTMLTextAreaElement).value = texte;
        apres(texte);
        b.disabled = false;
        b.textContent = '🎤 Dictater';
      });
    });
  }

  // ——— 9. Les langues : parler la sienne, la garder sans réseau ———
  const LANGUES: [string, string][] = [
    ['wolof', 'Wolof'], ['nouchi', 'Nouchi'], ['anglais', 'Anglais'],
    ['espagnol', 'Espagnol'], ['arabe', 'Arabe'], ['chinois', 'Chinois'],
  ];

  function rendreLangues(): void {
    const apprises = lireCarnet(storage);
    corps.innerHTML = `
      <div class="oi-carte">
        <p class="oi-titre">&#128483;&#65039; Parler ta langue</p>
        <p class="oi-note">Traduire un mot, une petite phrase — ici, même sans réseau. Ce que tu apprends ici reste sur ton appareil et voyage avec ton coffre.</p>
        <div class="oi-actions">
          ${LANGUES.map(([k, nom]) => `<button data-lg="${k}"${k === languesLang ? ' class="actif"' : ''}>${nom}</button>`).join('')}
        </div>
        <label class="oi-libelle" for="oi-lg-mot">Le mot ou la phrase, en français</label>
        <input id="oi-lg-mot" class="oi-champ" type="text" placeholder="ex. merci, de l’eau, ma maison" value="${esc(languesReq)}" />
        <div class="oi-actions">
          <button data-act="dire">Traduire</button>
          ${voix.ttsDisponible ? '<button data-act="lire">&#128266; Me le dire</button>' : ''}
        </div>
        <div data-res>${languesRes
          ? `<p class="oi-reponse">${esc(languesRes.resultat ?? 'Je ne sais pas encore ce mot.')}</p>${languesRes.manques.length ? `<p class="oi-note">Il me manque : ${languesRes.manques.map(esc).join(', ')} — donne-le moi en dessous.</p>` : ''}`
          : ''}</div>
        <p class="oi-titre2">Lui apprendre un mot</p>
        <input id="oi-lg-de" class="oi-champ" type="text" placeholder="en français (ex. voiture)" value="${esc(languesDe)}" />
        <input id="oi-lg-a" class="oi-champ" type="text" placeholder="dans ta langue (ex. gaara)" value="${esc(languesA)}" />
        <div class="oi-actions"><button data-act="donner">Ajouter au carnet</button></div>
        ${languesMsg ? `<p class="oi-note">${esc(languesMsg)}</p>` : ''}
        <p class="oi-note">${apprises.length} mot${apprises.length > 1 ? 's' : ''} appris${apprises.length > 1 ? 's' : ''} de toi, gardés sur cet appareil.</p>
      </div>${horsLigne()}`;
    const mot = corps.querySelector('#oi-lg-mot') as HTMLInputElement;
    mot.addEventListener('input', () => (languesReq = mot.value));
    const de = corps.querySelector('#oi-lg-de') as HTMLInputElement;
    de.addEventListener('input', () => (languesDe = de.value));
    const a = corps.querySelector('#oi-lg-a') as HTMLInputElement;
    a.addEventListener('input', () => (languesA = a.value));
    corps.querySelectorAll<HTMLElement>('[data-lg]').forEach((b) =>
      b.addEventListener('click', () => {
        languesLang = b.dataset.lg ?? 'wolof';
        languesRes = null;
        rendreLangues();
      }),
    );
    corps.querySelector('[data-act="dire"]')!.addEventListener('click', () => {
      languesRes = traduire(languesReq, languesLang, storage);
      rendreLangues();
    });
    corps.querySelector('[data-act="lire"]')?.addEventListener('click', () => {
      if (languesRes?.resultat) voix.parler(languesRes.resultat, 'posee');
    });
    corps.querySelector('[data-act="donner"]')!.addEventListener('click', () => {
      const avant = lireCarnet(storage).length;
      teacher(storage, languesDe, languesA, languesLang);
      const apres = lireCarnet(storage).length;
      const nom = languesDe.trim();
      if (apres > avant) languesMsg = `C’est noté : « ${nom} » se dit « ${languesA.trim()} ». Merci.`;
      else if (nom && languesA.trim()) languesMsg = `Ta parole remplace l’ancienne pour « ${nom} ».`;
      else languesMsg = 'Il me faut le mot et sa traduction pour l’apprendre.';
      languesDe = '';
      languesA = '';
      rendreLangues();
    });
  }

  // ——— 10. L'examen blanc : se tester avant le vrai jour, hors-ligne ———
  function rendreExamen(): void {
    const paquets = lirePaquets(storage);
    if (!examenPaquetId && paquets.length) examenPaquetId = paquets[0].id;
    const paquet = paquets.find((p) => p.id === examenPaquetId) ?? null;
    const cartes = examenCartes ?? [];
    const corrige = examenResultat !== null;
    const sujets = paquet
      ? `<div class="oi-actions">${paquets
          .map(
            (p) =>
              `<button data-pq="${esc(p.id)}"${p.id === examenPaquetId ? ' class="actif"' : ''}>${esc(p.nom)} (${p.fiches.length})</button>`,
          )
          .join('')}</div>`
      : '';
    const liste = cartes.length
      ? `<p class="oi-titre2">Ton sujet · ${cartes.length} cartes · vise ${dureeConseillee(cartes.length)} s</p>` +
        `<div class="oi-liste">${cartes
          .map(
            (f, i) =>
              `<div class="oi-ligne"><span><strong>${i + 1}. ${esc(f.verso)}</strong></span>` +
              `<button data-mark="${esc(f.id)}"${examenMarks[f.id] ? ' class="actif"' : ''}>${examenMarks[f.id] ? 'Je savais' : 'À revoir'}</button></div>` +
              (corrige ? `<p class="oi-pet">${esc(f.recto)}</p>` : ''),
          )
          .join('')}</div>` +
        `<div class="oi-actions"><button data-act="corriger">Voir mon résultat</button><button data-act="nouveau">Un autre sujet</button></div>` +
        (corrige
          ? `<p class="oi-reponse">${examenResultat!.corrects}/${examenResultat!.total} · ${Math.round(examenResultat!.score * 100)} % — ${esc(apprecier(examenResultat!.score))}</p>`
          : '')
      : '';
    corps.innerHTML = `
      <div class="oi-carte">
        <p class="oi-titre">&#128221; L’examen blanc</p>
        <p class="oi-note">Avant le vrai jour, teste-toi dans les mêmes conditions — ici, même sans réseau. Choisis un paquet, compose un sujet, souviens-toi, puis dis ce que tu savais.</p>
        ${paquets.length ? sujets : '<p class="oi-note">Aucun paquet encore. Crée des fiches dans le coin d’études, ou envoie-en depuis le résumé.</p>'}
        ${paquet && !cartes.length
          ? `<div class="oi-actions"><button data-act="composer"${paquet.fiches.length < 2 ? ' disabled' : ''}>Composer un sujet (${Math.min(10, paquet.fiches.length)} cartes)</button></div>${
              paquet.fiches.length < 2 ? '<p class="oi-note">Il faut au moins deux cartes dans ce paquet.</p>' : ''
            }`
          : ''}
        ${liste}
      </div>${horsLigne()}`;
    corps.querySelectorAll<HTMLElement>('[data-pq]').forEach((b) =>
      b.addEventListener('click', () => {
        examenPaquetId = b.dataset.pq ?? examenPaquetId;
        examenCartes = null;
        examenMarks = {};
        examenResultat = null;
        rendreExamen();
      }),
    );
    corps.querySelector('[data-act="composer"]')?.addEventListener('click', () => {
      if (!paquet) return;
      examenGraine = `${paquet.id}-${Date.now()}`;
      examenCartes = composerExamen(paquet.fiches, 10, examenGraine);
      examenMarks = {};
      examenResultat = null;
      rendreExamen();
    });
    corps.querySelector('[data-act="nouveau"]')?.addEventListener('click', () => {
      if (!paquet) return;
      examenGraine = `${paquet.id}-${Date.now()}`;
      examenCartes = composerExamen(paquet.fiches, 10, examenGraine);
      examenMarks = {};
      examenResultat = null;
      rendreExamen();
    });
    corps.querySelectorAll<HTMLElement>('[data-mark]').forEach((b) =>
      b.addEventListener('click', () => {
        const id = b.dataset.mark ?? '';
        examenMarks = { ...examenMarks, [id]: !examenMarks[id] };
        rendreExamen();
      }),
    );
    corps.querySelector('[data-act="corriger"]')?.addEventListener('click', () => {
      if (!cartes.length) return;
      examenResultat = resultatExamen(cartes.map((f) => ({ id: f.id, juste: !!examenMarks[f.id] })));
      rendreExamen();
    });
  }

  // ——— 11. Les métiers : un indispensable de métier, hors-ligne ———
  function rendreMetiers(): void {
    // Le contexte (pays + mode crise) pilote ce qui est visible et dans quel ordre.
    const ctx: Contexte = lireContexte(storage);
    // Pays « vu » : celui choisi ; à défaut, celui que la langue du navigateur
    // laisse deviner (fr-SN → Sénégal). Sans region détectable, on reste sur « Tous ».
    const langues = navigator.languages?.length
      ? Array.from(navigator.languages)
      : [navigator.language ?? ''];
    const paysVu = paysEffectif(ctx, langues);
    const visibles = ordonnerPourCrise(packsPourPays(METIERS_PACKS, paysVu));
    // Si le pack courant sort de la liste filtrée, retomber sur le premier visible.
    if (!visibles.some((x) => x.id === metiersPackId)) {
      metiersPackId = visibles[0]?.id ?? '';
    }
    const pack = trouverPack(metiersPackId) ?? visibles[0];
    if (!pack) {
      corps.innerHTML = '<div class="oi-carte"><p class="oi-note">Aucun pack métier pour l’instant.</p></div>';
      return;
    }
    const jour = progressionDe(pack.id, storage);
    const t = tacheDuJour(pack, jour);
    const m = motDuJour(pack, jour);
    const p = piegeDuJour(pack, jour);
    const boutonsPacks = visibles.map(
      (x) => `<button data-mt="${esc(x.id)}"${x.id === pack.id ? ' class="actif"' : ''}>${x.emoji} ${esc(x.nom)}</button>`,
    ).join('');
    const boutonsPays = [
      `<button data-pays=""${paysVu === '' ? ' class="actif"' : ''}>Tous</button>`,
      ...METIERS_PAYS.map(
        (pp) => `<button data-pays="${esc(pp.code)}"${paysVu === pp.code ? ' class="actif"' : ''}>${pp.emoji} ${esc(pp.nom)}</button>`,
      ),
    ].join('');
    const paysChoisi = paysVu ? paysDe(paysVu) : null;
    const encartUrgence = paysChoisi
      ? `<p class="oi-titre2">Urgences ${paysChoisi.emoji} ${esc(paysChoisi.nom)}</p>
         <p class="oi-pet">Police ${esc(paysChoisi.urgence.police)} · Pompiers ${esc(paysChoisi.urgence.pompiers)} · SAMU ${esc(paysChoisi.urgence.samu)}${paysChoisi.urgence.commun ? ' · Numéro commun ' + esc(paysChoisi.urgence.commun) : ''}</p>
         <p class="oi-pet">${esc(AVERTISSEMENT_URGENCE)}</p>`
      : '';
    const criseLibelle = ctx.crise ? '✓ Mode crise activé' : 'Mode crise (priorise survie & approvisionnement)';
    corps.innerHTML = `
      <div class="oi-carte">
        <p class="oi-titre">&#129520; Un métier, un jour, un geste</p>
        <p class="oi-note">Apprends le métier comme on l’apprend sur le terrain : aujourd’hui une tâche, un mot exact, un piège à éviter. Hors-ligne, sans compte ; ta progression voyage avec le coffre.</p>
        <p class="oi-titre2">Pays</p>
        <div class="oi-actions">${boutonsPays}</div>
        <div class="oi-actions"><button data-act="crise"${ctx.crise ? ' class="actif"' : ''}>${criseLibelle}</button></div>
        ${encartUrgence}
        <p class="oi-titre2">Le métier</p>
        <div class="oi-actions">${boutonsPacks}</div>
        <p class="oi-note">${esc(pack.resume)}</p>
        <p class="oi-titre2">Jour ${jour + 1} — la tâche du jour</p>
        <p><strong>${esc(t.titre)}</strong></p>
        <ul class="oi-liste">${t.gestes.map((g) => `<li>• ${esc(g)}</li>`).join('')}</ul>
        <p class="oi-titre2">Le mot juste</p>
        <p><strong>${esc(m.mot)}</strong> — ${esc(m.sens)}</p>
        <p class="oi-titre2">Le piège du jour</p>
        <p>${esc(p.enoncé)}</p>
        <p class="oi-pet">Pour l’éviter : ${esc(p.eviter)}</p>
        <div class="oi-actions"><button data-act="demain">Jour suivant</button></div>
      </div>${horsLigne()}`;
    corps.querySelectorAll<HTMLElement>('[data-mt]').forEach((b) =>
      b.addEventListener('click', () => {
        metiersPackId = b.dataset.mt ?? metiersPackId;
        rendreMetiers();
      }),
    );
    corps.querySelectorAll<HTMLElement>('[data-pays]').forEach((b) =>
      b.addEventListener('click', () => {
        const code = b.dataset.pays ?? '';
        // Choix explicite : « Tous » (code '') reste neutre dès qu'on le touche,
        // la devinette de la langue ne reprend la main que tant que rien n'est choisi.
        ecrireContexte(storage, { ...ctx, pays: code, choixExplicite: true });
        rendreMetiers();
      }),
    );
    corps.querySelector('[data-act="crise"]')?.addEventListener('click', () => {
      ecrireContexte(storage, { ...ctx, crise: !ctx.crise });
      rendreMetiers();
    });
    corps.querySelector('[data-act="demain"]')?.addEventListener('click', () => {
      avancerJour(pack.id, storage);
      rendreMetiers();
    });
  }

  // ——— 12. Le coffre : emporter et reposer ses souvenirs ———
  function rendreCoffre(): void {
    corps.innerHTML = `
      <div class="oi-carte">
        <p class="oi-titre">🎒 Le coffre de tes souvenirs</p>
        <p class="oi-note">Ce que la Compagne sait de toi — ton prénom, tes fiches, tes réglages — reste sur ton appareil. Une réinstallation, ou un iPhone qui vide Safari, peut tout effacer. Emporte tes affaires dans ce texte, repose-les où tu veux.</p>
        <div class="oi-actions"><button data-act="emporter">Emporter mes affaires</button></div>
        <textarea id="oi-coffre" class="oi-champ" rows="4" placeholder="Ton texte apparaît ici…"></textarea>
        <div class="oi-actions">
          <button data-act="copier">Copier</button>
          <button data-act="reposer">Reposer ici</button>
        </div>
        <div data-zone></div>
      </div>${horsLigne()}`;
    const champ = corps.querySelector('#oi-coffre') as HTMLTextAreaElement;
    const zone = corps.querySelector('[data-zone]') as HTMLElement;
    const souffler = (t: string) => {
      zone.innerHTML = `<p class="oi-note">${esc(t)}</p>`;
    };
    corps.querySelector('[data-act="emporter"]')?.addEventListener('click', () => {
      champ.value = exporterCoffre(storage);
      souffler('Tes affaires tiennent dans ce texte. Copie-le et garde-le pour toi — personne d’autre n’y lit quoi que ce soit.');
    });
    corps.querySelector('[data-act="copier"]')?.addEventListener('click', async () => {
      if (!champ.value.trim()) {
        souffler('D’abord « Emporter mes affaires », puis copie.');
        return;
      }
      try {
        await navigator.clipboard.writeText(champ.value);
        souffler('Copié. Colle-le là où tu veux le garder.');
      } catch {
        champ.focus();
        champ.select();
        souffler('Tout est sélectionné — copie-le à la main.');
      }
    });
    corps.querySelector('[data-act="reposer"]')?.addEventListener('click', () => {
      const n = importerCoffre(storage, champ.value);
      souffler(
        n > 0
          ? `${n} affaire${n > 1 ? 's' : ''} remise${n > 1 ? 's' : ''} en place. Recharge la page pour tout retrouver.`
          : 'Rien à reposer ici : ce texte n’est pas un coffre valide.',
      );
    });
  }

  const RENDUS: Record<Onglet, () => void> = {
    flamme: rendreFlamme,
    frigo: rendreFrigo,
    assiette: rendreAssiette,
    journal: rendreJournal,
    tuteur: rendreTuteur,
    souffle: rendreSouffle,
    resume: rendreResume,
    carte: rendreCarte,
    langues: rendreLangues,
    examen: rendreExamen,
    metiers: rendreMetiers,
    coffre: rendreCoffre,
  };

  function rendre(o: Onglet): void {
    actif = o;
    paneau.querySelectorAll('.outils-onglets button').forEach((b) => {
      b.classList.toggle('actif', (b as HTMLElement).dataset.ot === o);
    });
    if (souffleTimer !== null && o !== 'souffle') arreterSouffle(false);
    corps.innerHTML = '';
    RENDUS[o]();
  }

  paneau.querySelectorAll<HTMLElement>('.outils-onglets button').forEach((b) => {
    b.addEventListener('click', () => rendre((b.dataset.ot as Onglet) ?? 'flamme'));
  });
  bouton.addEventListener('click', () => {
    paneau.hidden = !paneau.hidden;
    if (!paneau.hidden) rendre(actif);
  });
  paneau.querySelector('.outils-fermer')!.addEventListener('click', () => {
    if (souffleTimer !== null) arreterSouffle(false);
    paneau.hidden = true;
  });
  window.addEventListener('online', () => {
    if (!paneau.hidden) rendre(actif);
  });
  window.addEventListener('offline', () => {
    if (!paneau.hidden) rendre(actif);
  });

  return bouton;
}
