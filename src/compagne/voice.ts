// La voix de la Compagne : reconnaissance + synthèse 100 % locales (Web Speech,
// fournie par le système d'exploitation — zéro cloud, zéro compte, zéro euro).
// Navigateur sans voix → repli muet, l'écrit reste entier (loi du jamais-bloquant).
import type { HumeurReponse } from './engine';

export interface VoiceHandle {
  sttDisponible: boolean;
  ttsDisponible: boolean;
  ecouter: (cb: (texte: string) => void) => void;
  parler: (texte: string, humeur: HumeurReponse) => void;
}

const TIMBRES: Record<HumeurReponse, { rate: number; pitch: number }> = {
  posee: { rate: 0.92, pitch: 1.0 },
  lumineuse: { rate: 1.02, pitch: 1.15 },
  douce: { rate: 0.85, pitch: 0.95 },
  stabilisee: { rate: 0.8, pitch: 0.9 }, // plus lent, plus grave : l'ancrage
};

export function createVoice(): VoiceHandle {
  const w = window as any;
  const SR = w.SpeechRecognition || w.webkitSpeechRecognition;
  const recog = SR ? new SR() : null;
  if (recog) {
    recog.lang = 'fr-FR';
    recog.interimResults = false;
    recog.maxAlternatives = 1;
  }

  let frVoice: SpeechSynthesisVoice | null = null;
  const hasTts = 'speechSynthesis' in w;
  const pick = () => {
    const vs: SpeechSynthesisVoice[] = w.speechSynthesis?.getVoices?.() ?? [];
    frVoice = vs.find((v) => v.lang.toLowerCase().startsWith('fr')) ?? null;
  };
  if (hasTts) {
    pick();
    w.speechSynthesis.onvoiceschanged = pick;
  }

  return {
    sttDisponible: !!recog,
    ttsDisponible: hasTts,
    ecouter(cb) {
      if (!recog) return;
      recog.onresult = (e: any) => cb(e.results[0][0].transcript as string);
      recog.onerror = () => {}; // silence doux : pas de pop-up d'erreur
      try {
        recog.start();
      } catch {
        /* déjà en cours d'écoute — on ignore */
      }
    },
    parler(texte, humeur) {
      if (!hasTts) return;
      const u = new SpeechSynthesisUtterance(texte.replace(/\n/g, ' — '));
      const t = TIMBRES[humeur];
      u.rate = t.rate;
      u.pitch = t.pitch;
      u.lang = 'fr-FR';
      if (frVoice) u.voice = frVoice;
      w.speechSynthesis.cancel(); // une seule parole à la fois, jamais de queue
      w.speechSynthesis.speak(u);
    },
  };
}
