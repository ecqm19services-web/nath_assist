// L'interface de la Compagne : bulles douces en bas du ciel, micro local,
// clavier complet (accessibilité), mémoire du prénom et vie proactive —
// elle pense et parle toute seule, sans qu'on la sollicite.
import { respond, type CompagneCtx } from './engine';
import { creerCerveau, gpuDisponible, persona, type Cerveau, type Message } from './cerveau';
import { ecrireMemoire, extrairePrenom, lireMemoire } from './memoire';
import { choisirMonologue, nextDelai, type MonoCtx } from './proactive';
import { createVoice } from './voice';

export function createCompagneUI(getCtx: () => CompagneCtx & { bpm: number | null }) {
  const voice = createVoice();
  let memoire = lireMemoire(localStorage);

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
      <input class="compagne-champ" type="text" placeholder="Parle-lui… (ou écris)" aria-label="Écrire à la Compagne" />
      <button type="submit" class="compagne-envoi" aria-label="Envoyer">· · ·</button>
    </form>`;
  document.body.appendChild(zone);

  const bulles = zone.querySelector('.compagne-bulles') as HTMLElement;
  const champ = zone.querySelector('.compagne-champ') as HTMLInputElement;
  const mic = zone.querySelector('.compagne-mic') as HTMLButtonElement;
  const form = zone.querySelector('.compagne-ligne') as HTMLFormElement;

  if (!voice.sttDisponible) {
    mic.style.display = 'none'; // pas de voix dans ce navigateur → on n'imite pas
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

  // Le grand cerveau (Qwen, gratuit, local) télécharge en silence ; le petit
  // moteur répond pendant ce temps — personne n'attend jamais.
  let cerveau: Cerveau | null = null;
  const histoire: Message[] = [];
  if (gpuDisponible()) {
    const bCerveau = bulle('Je télécharge mon cerveau… 0 %', 'nuage');
    creerCerveau((p) => {
      bCerveau.textContent = `Je télécharge mon cerveau Qwen… ${Math.min(99, Math.round(p * 100))} %`;
    }).then((c) => {
      if (c) {
        cerveau = c;
        bCerveau.textContent = 'Mon cerveau est arrivé. Dis les phrases les plus tordues, je suivrai.';
      } else {
        bCerveau.textContent = 'Le gros cerveau n’a pas pu atterrir ici… je reste attentive avec mon petit moteur.';
      }
    });
  }

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
        setTimeout(() => dire(`${p}… c est une belle adresse pour une étoile. Je la garde.`, 'lumineuse'), 700);
        return;
      }
    }

    const c = getCtx();

    // Chemin du grand cerveau : vraie compréhension, mémoire de conversation.
    if (cerveau) {
      const night = Math.min(1, Math.max(0, (Math.abs(c.timeOfDay - 0.5) - 0.2) * 5));
      const bAttente = bulle('…', 'nuage');
      const messages: Message[] = [
        { role: 'system', content: persona({ prenom: memoire.prenom, emotion: c.emotion, bpm: c.bpm, breath: c.breath, night }) },
        ...histoire.slice(-10),
        { role: 'user', content: q },
      ];
      cerveau
        .ask(messages)
        .then((rep) => {
          const texte = rep.replace(/!/g, '…').slice(0, 600) || '…je cherche encore mes mots.';
          bAttente.textContent = texte;
          histoire.push({ role: 'user', content: q }, { role: 'assistant', content: texte });
          voice.parler(texte, 'posee');
        })
        .catch(() => {
          const r = respond(q, { ...c, prenom: memoire.prenom });
          bAttente.textContent = r.texte;
          voice.parler(r.texte, r.humeur);
        });
      return;
    }

    const r = respond(q, { ...c, prenom: memoire.prenom });
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

  // Premier mot : selon qu'elle vous connaît déjà ou non.
  setTimeout(() => {
    if (memoire.prenom) {
      dire(`Rebonjour ${memoire.prenom}… je gardais ta place dans le ciel.`, 'lumineuse');
    } else {
      bulle('Je suis là… touche le ciel, parle-moi, ou écris-moi. On a toute la nuit.', 'nuage');
      // Curieuse une seule fois : elle demande qui vous êtes.
      setTimeout(() => {
        if (!memoire.prenom) bulle('Au fait… comment tu t appelles ?', 'nuage');
      }, 12000);
    }
  }, 1500);

  // La vie proactive : ses pensées arrivent seules, espacées de 40 à 105 s.
  const penserSeule = () => {
    window.setTimeout(() => {
      // Si on vient de lui parler, on repousse : elle n interrompt jamais.
      if (performance.now() - dernierEchange < 25000) return penserSeule();
      const c: MonoCtx = { ...getCtx(), prenom: memoire.prenom };
      const m = choisirMonologue(c, Math.floor(Date.now() / 60000));
      bulle(m.texte, 'nuage'); // monologue = murmuré à l écrit, la voix reste pour les réponses
      penserSeule();
    }, nextDelai(Math.random));
  };
  penserSeule();
}
