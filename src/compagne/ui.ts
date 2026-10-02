// L'interface de la Compagne : bulles douces en bas du ciel, micro local,
// clavier complet (accessibilité : on peut tout faire sans voix ni souris fine).
import { respond, type CompagneCtx } from './engine';
import { createVoice } from './voice';

export function createCompagneUI(getCtx: () => CompagneCtx) {
  const voice = createVoice();

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

  function bulle(texte: string, qui: 'moi' | 'nuage') {
    const b = document.createElement('div');
    b.className = `bulle bulle-${qui}`;
    b.textContent = texte;
    bulles.appendChild(b);
    while (bulles.children.length > 6) bulles.removeChild(bulles.firstChild!);
    bulles.scrollTop = bulles.scrollHeight;
  }

  function traiter(question: string) {
    const q = question.trim();
    if (!q) return;
    bulle(q, 'moi');
    const r = respond(q, getCtx());
    // Petite respiration avant de répondre : la Compagne ne riposte pas, elle répond.
    setTimeout(() => {
      bulle(r.texte, 'nuage');
      voice.parler(r.texte, r.humeur);
    }, 700);
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
    // Le micro navigateur s'arrête seul ; on nettoie le visuel dans le doute.
    setTimeout(() => mic.classList.remove('a-lécoute'), 6000);
  });

  // Premiers mots de la Compagne (écrits seulement : le son demande un toucher).
  setTimeout(() => {
    bulle("Je suis là… touche le ciel, parle-moi, ou écris-moi. On a toute la nuit.", 'nuage');
  }, 1500);
}
