// Le ciel réel : quand la personne le veut bien, le nuage respire la météo
// vraie de son endroit. Open-Meteo — gratuit, sans compte, sans clé, sans
// compte-rendu de qui que ce soit. On n'envoie que deux nombres (latitude,
// longitude) que la personne a accepté de partager, et on ne garde rien.
// Code météo (WMO) → humeur du ciel : jamais d'invention, un code inconnu
// reste un ciel neutre.

export interface CielReel {
  pluie: number;       // 0..1
  turbulence: number;  // 0..1
  luminosite: number;  // 0..1
  orage: boolean;      // la foudre a le droit de tomber
  libelle: string;     // ce que le ciel traverse, en un mot doux
}

// Table WMO → ciel. Chaque ligne est une vérité météo documentée, pas un caprice.
export function codeVersCiel(code: number, ventKmh: number): CielReel {
  let pluie = 0;
  let luminosite = 0.85;
  let base = 0.15; // turbulence de fond, avant le vent
  let orage = false;
  let libelle = 'le ciel respire';

  if (code === 0 || code === 1) {
    luminosite = 0.95; libelle = code === 0 ? 'ciel dégagé' : 'à peine voilé';
  } else if (code === 2) {
    luminosite = 0.8; libelle = 'nuages passagers';
  } else if (code === 3) {
    luminosite = 0.55; base = 0.25; libelle = 'ciel couvert';
  } else if (code === 45 || code === 48) {
    luminosite = 0.35; base = 0.1; pluie = 0.08; libelle = 'brouillard';
  } else if (code >= 51 && code <= 57) {
    pluie = 0.35; luminosite = 0.45; libelle = 'bruine';
  } else if (code >= 61 && code <= 67) {
    pluie = code === 65 || code === 67 ? 0.8 : 0.55; luminosite = 0.4; libelle = 'pluie';
  } else if (code >= 71 && code <= 77) {
    pluie = 0.45; luminosite = 0.65; libelle = 'neige';
  } else if (code >= 80 && code <= 82) {
    pluie = code === 82 ? 0.9 : 0.6; luminosite = 0.4; base = 0.3; libelle = 'averses';
  } else if (code === 85 || code === 86) {
    pluie = 0.5; luminosite = 0.6; libelle = 'neiges';
  } else if (code >= 95 && code <= 99) {
    orage = true; pluie = 0.9; luminosite = 0.3; base = 0.7; libelle = 'orage';
  }

  // Le vent soulève le ciel, sans jamais le faire bondir hors du monde.
  const turbulence = Math.min(1, base + Math.min(0.4, Math.max(0, ventKmh) / 100));
  return { pluie, turbulence, luminosite, orage, libelle };
}

// Aller chercher le temps vrai. Le fetch est injecté : c'est l'appelant qui
// décide du moment, jamais ce module. Échec réseau = null, sans bruit.
export async function chargerCielReel(
  latitude: number,
  longitude: number,
  fetchImpl: typeof fetch,
): Promise<CielReel | null> {
  try {
    const url =
      'https://api.open-meteo.com/v1/forecast?latitude=' +
      encodeURIComponent(String(latitude)) +
      '&longitude=' + encodeURIComponent(String(longitude)) +
      '&current=weather_code,wind_speed_10m';
    const res = await fetchImpl(url);
    if (!res.ok) return null;
    const o = (await res.json()) as Record<string, any>;
    const code = o?.current?.weather_code;
    if (typeof code !== 'number') return null;
    const vent = typeof o.current.wind_speed_10m === 'number' ? o.current.wind_speed_10m : 0;
    return codeVersCiel(code, vent);
  } catch {
    return null;
  }
}
