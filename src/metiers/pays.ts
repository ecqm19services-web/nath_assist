// Table des pays servis. Volontairement sans logique : une simple donnée, que
// l'UI parcourt et que le contexte mémorise. Les numéros d'urgence affichés
// restent à confirmer auprès des autorités locales — l'écran le rappelle.

export interface Urgence {
  police: string;
  pompiers: string;
  samu: string;
  commun?: string;
}

export interface Pays {
  code: string;
  nom: string;
  emoji: string;
  monnaie: string;
  langues: string[];
  urgence: Urgence;
}

export const PAYS: Pays[] = [
  {
    code: 'SN', nom: 'Sénégal', emoji: '🇸🇳', monnaie: 'FCFA',
    langues: ['fr', 'wo'],
    urgence: { police: '17', pompiers: '18', samu: '15', commun: '112' },
  },
  {
    code: 'ML', nom: 'Mali', emoji: '🇲🇱', monnaie: 'FCFA',
    langues: ['fr', 'bm'],
    urgence: { police: '17', pompiers: '18', samu: '15' },
  },
  {
    code: 'CI', nom: 'Côte d’Ivoire', emoji: '🇨🇮', monnaie: 'FCFA',
    langues: ['fr'],
    urgence: { police: '17', pompiers: '180', samu: '150' },
  },
  {
    code: 'BF', nom: 'Burkina Faso', emoji: '🇧🇫', monnaie: 'FCFA',
    langues: ['fr'],
    urgence: { police: '17', pompiers: '18', samu: '1100' },
  },
  {
    code: 'GN', nom: 'Guinée', emoji: '🇬🇳', monnaie: 'GNF',
    langues: ['fr', 'ff'],
    urgence: { police: '17', pompiers: '114', samu: '111' },
  },
  {
    code: 'BJ', nom: 'Bénin', emoji: '🇧🇯', monnaie: 'FCFA',
    langues: ['fr'],
    urgence: { police: '117', pompiers: '118', samu: '112' },
  },
  {
    code: 'TG', nom: 'Togo', emoji: '🇹🇬', monnaie: 'FCFA',
    langues: ['fr'],
    urgence: { police: '117', pompiers: '118', samu: '111' },
  },
  {
    code: 'NE', nom: 'Niger', emoji: '🇳🇪', monnaie: 'FCFA',
    langues: ['fr', 'ha'],
    urgence: { police: '17', pompiers: '18', samu: '15' },
  },
  {
    code: 'GH', nom: 'Ghana', emoji: '🇬🇭', monnaie: 'GHS (cédi)',
    langues: ['en'],
    urgence: { police: '191', pompiers: '192', samu: '193', commun: '112' },
  },
  {
    code: 'NG', nom: 'Nigeria', emoji: '🇳🇬', monnaie: '₦ (naira)',
    langues: ['en', 'pcm', 'yo', 'ha'],
    urgence: { police: '112', pompiers: '199', samu: '767' },
  },
  {
    code: 'CM', nom: 'Cameroun', emoji: '🇨🇲', monnaie: 'FCFA',
    langues: ['fr', 'en'],
    urgence: { police: '17', pompiers: '118', samu: '112' },
  },
  {
    code: 'MA', nom: 'Maroc', emoji: '🇲🇦', monnaie: 'MAD (dirham)',
    langues: ['fr', 'ar'],
    urgence: { police: '19', pompiers: '15', samu: '15' },
  },
  {
    code: 'FR', nom: 'France', emoji: '🇫🇷', monnaie: '€',
    langues: ['fr'],
    urgence: { police: '17', pompiers: '18', samu: '15', commun: '112' },
  },
];

export function paysDe(code: string): Pays | null {
  if (!code) return null;
  const c = code.toUpperCase();
  return PAYS.find((p) => p.code === c) ?? null;
}

// Petit rappel honnête affiché à l'écran : un numéro mal à jour coûte une vie.
export const AVERTISSEMENT_URGENCE =
  'Numéros donnés à titre indicatif — confirmez-les auprès des autorités locales.';
