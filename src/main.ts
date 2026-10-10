import { createScene } from './nuage/scene';
import { computeSceneParams, createInitialState } from './nuage/state';
import { startBreath } from './input/breathIO';
import { ControleurCamera } from './input/cameraIO';
import { messageConsentement } from './input/camera';
import { createEmotionSmoother, mapEmotion } from './input/emotion';
import { cheekLuminance, estimateBpm } from './nuage/rppg';
import { generateAura } from './aura/aura';
import { attachPointer, attachTilt } from './input/touch';
import { ambientLevel, ambientMood, startAmbient } from './audio/ambient';
import { createCompagneUI } from './compagne/ui';
import { creerPanneauSavoir } from './compagne/savoirUI';
import { probaEvenements } from './nuage/meteo';
import { chargerCielReel } from './nuage/cielReel';

const canvas = document.getElementById('scene') as HTMLCanvasElement;
const scene = createScene(canvas);
const state = createInitialState();
state.seed = localStorage.getItem('nuage.seed') ?? crypto.randomUUID();
localStorage.setItem('nuage.seed', state.seed);
// État réel des sens : la Compagne ne ment jamais sur ce qu'elle perçoit.
const capteurs = { cameraOn: false, micOn: false };
startBreath((v) => { state.breath = Math.max(state.breath, v); }).then((ok) => { capteurs.micOn = ok; });

// La caméra NE S'ALLUME JAMAIS SEULE : un contrôleur attend un choix explicite
// de l'utilisateur (bouton œil → consentement → ouverture). Au lancement, elle
// est fermée, le flux libre, aucun témoin d'accès allumé.
const video = document.getElementById('cam') as HTMLVideoElement;
const lisser = createEmotionSmoother();
const cam = new ControleurCamera(
  video,
  localStorage,
  (s) => { state.emotion = lisser(mapEmotion(s)); },
  (on) => { capteurs.cameraOn = on; video.classList.toggle('video-actif', on); },
);
const cameraDisponible =
  typeof navigator !== 'undefined' && !!navigator.mediaDevices?.getUserMedia;

const etat = document.getElementById('etat')!;
const aura = generateAura(state.seed);

// Le doigt décale le champ de nuages ; l'inclinaison soulève le ciel.
let focus: [number, number] = [0.5, 0.5];
attachPointer(canvas, (x, y) => { focus = [x, y]; });
attachTilt((x) => { state.breath = Math.max(state.breath, Math.abs(x)); });

// La Compagne : voix, bulles, mémoire et vie propre, branchées sur l'état vivant.
createCompagneUI(() => ({
  emotion: state.emotion,
  breath: state.breath,
  timeOfDay: state.timeOfDay,
  seed: aura.musiqueSeed,
  bpm: state.bpm,
  cameraOn: capteurs.cameraOn,
  micOn: capteurs.micOn,
}), {
  // La caméra est un sens opt-in : l'UI ne peut l'activer qu'avec consentement.
  cameraDisponible,
  estOuverte: () => cam.ouverte,
  basculer: () => cam.basculer(), // allume ou éteint, renvoie le nouvel état
  changerFace: () => cam.basculerFace(), // avant ⇄ arrière
  consentement: messageConsentement,
});

// Le coin d'études (🎓) : réviser des fiches, apprendre un sujet (base locale,
// puis connexion proposée sur accord), traduire avec un lexique de tout le monde.
creerPanneauSavoir(localStorage);

// Le ciel vit seul : toutes les 15 s, il décide d'un éclair ou d'une filante
// selon l'humeur et l'heure — personne ne lui a rien demandé.
setInterval(() => {
  const p = probaEvenements(state.emotion, computeSceneParams(state).night);
  // Un vrai orage dehors : le ciel a le droit de gronder encore plus fort.
  const orageReel = state.cielReel?.orage && Math.random() < 0.4;
  if (orageReel || Math.random() < p.eclair) scene.eclair();
  if (Math.random() < p.filer) scene.filer(0.08 + Math.random() * 0.75, 0.7 + Math.random() * 0.25);
}, 15000);

// Le ciel réel : un seul bouton, un seul consentement (la demande de position
// du navigateur), une seule source gratuite. Rien n'est stocké, rien ne sort
// à part deux nombres — et seulement quand la personne l'a voulu.
const cielBtn = document.createElement('button');
cielBtn.className = 'ciel-btn';
cielBtn.type = 'button';
cielBtn.textContent = '⛅';
cielBtn.title = 'Le ciel réel — laisser respirer au nuage le temps de chez toi';
cielBtn.setAttribute('aria-label', 'Laisser au nuage le temps réel de chez toi');
document.body.append(cielBtn);
let cielTimer = 0;
async function respirerLeCiel(lat: number, lon: number): Promise<void> {
  const ciel = await chargerCielReel(lat, lon, fetch);
  if (ciel) {
    state.cielReel = ciel;
    cielBtn.classList.add('actif');
    cielBtn.title = `Dehors, ${ciel.libelle} — le nuage respire avec lui`;
  }
}
cielBtn.addEventListener('click', () => {
  if (cielTimer) {
    // deuxième appui : on rend au ciel sa vie intérieure
    window.clearInterval(cielTimer);
    cielTimer = 0;
    state.cielReel = null;
    cielBtn.classList.remove('actif');
    cielBtn.title = 'Le ciel réel — laisser respirer au nuage le temps de chez toi';
    return;
  }
  if (!navigator.geolocation) return; // pas d'oreille pour la position : on n'imite pas
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      void respirerLeCiel(pos.coords.latitude, pos.coords.longitude);
      cielTimer = window.setInterval(() => void respirerLeCiel(pos.coords.latitude, pos.coords.longitude), 600000);
    },
    () => { cielBtn.classList.remove('actif'); }, // refus ou silence : on ne force rien
    { enableHighAccuracy: false, timeout: 10000, maximumAge: 600000 },
  );
});

// Un toucher du ciel : onde lumineuse + éveil de la musique (politique autoplay).
let reveille = false;
canvas.addEventListener('pointerdown', (e) => {
  const r = canvas.getBoundingClientRect();
  scene.tap((e.clientX - r.left) / r.width, 1 - (e.clientY - r.top) / r.height);
  if (!reveille) {
    reveille = startAmbient(aura.musiqueSeed);
  }
});

// rPPG : échantillonnage ~8 fps de la luminance cutanée, pouls glissant.
const rctx = document.createElement('canvas').getContext('2d', { willReadFrequently: true })!;
const lum: number[] = [];
setInterval(() => {
  const v = cheekLuminance(video, rctx);
  if (v != null) {
    lum.push(v);
    if (lum.length > 80) lum.shift();
    state.bpm = estimateBpm(lum, 8);
  }
}, 125);

let last = performance.now();
function boucle(now: number) {
  const dt = (now - last) / 1000;
  last = now;
  // L'heure locale pilote le cycle jour/nuit du ciel.
  const d = new Date();
  state.timeOfDay = (d.getHours() + d.getMinutes() / 60) / 24;
  // Décroissance douce du souffle : les nuages retombent quand on cesse de souffler.
  state.breath = Math.max(0, state.breath - dt * 0.5);
  // Le nuage « respire » doucement au rythme du pouls détecté.
  if (state.bpm) {
    const phase = Math.sin((Date.now() / (60000 / state.bpm)) * 2 * Math.PI);
    state.breath = Math.max(state.breath, 0.08 * phase + 0.08);
  }
  scene.apply(computeSceneParams(state), focus);
  scene.setBpm(state.bpm);
  scene.frame(dt);
  // L'ambiance sonore suit l'humeur et l'intensité du souffle.
  ambientMood(state.emotion);
  ambientLevel(state.breath);
  etat.textContent = reveille
    ? `aura : ${aura.nom} · humeur : ${state.emotion} · souffle : ${(state.breath * 100) | 0}% · pouls : ${state.bpm ? Math.round(state.bpm) : '—'}`
    : `aura : ${aura.nom} · touche le ciel pour éveiller la musique`;
  requestAnimationFrame(boucle);
}
requestAnimationFrame(boucle);
console.log('Nath Assist v1-alpha — ICF·Future by Nath-Tech');
