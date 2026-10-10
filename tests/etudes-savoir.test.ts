import { describe, expect, it } from 'vitest';
import {
  chargerDepuisLeNet,
  enregistrerSavoir,
  fichesDepuisTexte,
  trouverDansBase,
  titreDepuisRecherche,
  type Savoir,
} from '../src/etudes/savoir';

const BASE: Savoir[] = [
  { sujet: 'la mitose', titre: 'Mitose', resume: 'La mitose est la division cellulaire.', url: 'u1', ramene_a: 1 },
  { sujet: 'Napoléon', titre: 'Napoléon Ier', resume: 'Empereur des Français.', url: 'u2', ramene_a: 2 },
];

describe('savoir : la base de connaissances locale', () => {
  it('trouverDansBase est sourde aux accents et à la casse', () => {
    expect(trouverDansBase(BASE, 'LA MITOSE')?.url).toBe('u1');
    expect(trouverDansBase(BASE, 'la   mitose !')?.url).toBe('u1');
  });

  it('une demande plus longue que le sujet connu se rattache à lui', () => {
    expect(trouverDansBase(BASE, 'explique-moi la mitose')?.url).toBe('u1');
  });

  it('inconnu = null, jamais d\u2019invention', () => {
    expect(trouverDansBase(BASE, 'la photosynthèse')).toBeNull();
  });

  it('enregistrerSavoir remplace le même sujet et refuse le vide', () => {
    const b = enregistrerSavoir(BASE, { sujet: 'La Mitose', titre: 'Mitose v2', resume: 'neuf', url: 'u9', ramene_a: 5 });
    expect(b.length).toBe(2);
    expect(trouverDansBase(b, 'mitose')?.resume).toBe('neuf');
    expect(enregistrerSavoir(BASE, { sujet: '  ', titre: 'x', resume: 'y', url: '', ramene_a: 0 })).toBe(BASE);
  });
});

describe('savoir : le puisage sur le net (injecté, jamais caché)', () => {
  const fauxFetch = (corps: unknown, ok = true) => async (url: string) => {
    (fauxFetch as any).derniereUrl = url;
    return { ok, status: ok ? 200 : 404, json: async () => corps };
  };

  it('extrait titre, résumé et lien depuis l’encyclopédie gratuite', async () => {
    const f = fauxFetch({
      title: 'Mitose',
      extract: 'La mitose est la division cellulaire.',
      content_urls: { desktop: { page: 'https://fr.wikipedia.org/wiki/Mitose' } },
    });
    const r = await chargerDepuisLeNet('la mitose', f as unknown as typeof fetch);
    expect(r).toEqual({ titre: 'Mitose', resume: 'La mitose est la division cellulaire.', url: 'https://fr.wikipedia.org/wiki/Mitose', image: '' });
    expect((fauxFetch as any).derniereUrl).toContain('rest_v1');
  });
  
  it('une image d’encyclopédie accompagne le savoir (façon Encarta)', async () => {
    const f = fauxFetch({
      title: 'Lion',
      extract: 'Le lion est un grand félin.',
      thumbnail: { source: 'https://upload.wikimedia.org/lion.jpg' },
      content_urls: { desktop: { page: 'https://fr.wikipedia.org/wiki/Lion' } },
    });
    const r = await chargerDepuisLeNet('lion', f as unknown as typeof fetch);
    expect(r?.image).toBe('https://upload.wikimedia.org/lion.jpg');
  });
  
  it('image folle (pas une http) = pas d’image, mais le savoir passe', async () => {
    const f = fauxFetch({
      title: 'X',
      extract: 'Résumé.',
      thumbnail: { source: 'javascript:alert(1)' },
      content_urls: { desktop: { page: 'u' } },
    });
    const r = await chargerDepuisLeNet('x', f as unknown as typeof fetch);
    expect(r?.image).toBe('');
    expect(r?.resume).toBe('Résumé.');
  });

  it('refus réseau ou page muette = rien, proprement', async () => {
    expect(await chargerDepuisLeNet('x', fauxFetch({}, false) as unknown as typeof fetch)).toBeNull();
    expect(await chargerDepuisLeNet('x', fauxFetch({ title: 'ras' }) as unknown as typeof fetch)).toBeNull();
    expect(await chargerDepuisLeNet('x', (async () => { throw new Error('coupez'); }) as unknown as typeof fetch)).toBeNull();
  });
});

describe('savoir : la recherche par titre, façon Encarta', () => {
  it('titreDepuisRecherche lit le premier résultat de la recherche plein texte', async () => {
    const f = async (url: string) => {
      (f as any).derniereUrl = url;
      return { ok: true, json: async () => ({ query: { search: [{ title: 'Mitose' }] } }) };
    };
    expect(await titreDepuisRecherche('la mitose', f as unknown as typeof fetch)).toBe('Mitose');
    expect((f as any).derniereUrl).toContain('list=search');
  });

  it('titreDepuisRecherche : recherche vide, refus ou coupure = null, jamais de cri', async () => {
    const vide = (async () => ({ ok: true, json: async () => ({ query: { search: [] } }) })) as unknown as typeof fetch;
    expect(await titreDepuisRecherche('x', vide)).toBeNull();
    const refuse = (async () => ({ ok: false, json: async () => ({}) })) as unknown as typeof fetch;
    expect(await titreDepuisRecherche('x', refuse)).toBeNull();
    const casse = (async () => { throw new Error('plus de réseau'); }) as unknown as typeof fetch;
    expect(await titreDepuisRecherche('x', casse)).toBeNull();
  });

  it('échec du titre exact → la recherche ramène le vrai titre et son résumé', async () => {
    const urls: string[] = [];
    const f = async (url: string) => {
      urls.push(url);
      if (url.includes('list=search')) {
        return { ok: true, json: async () => ({ query: { search: [{ title: 'Mitose' }] } }) };
      }
      if (url.endsWith('/Mitose')) {
        return { ok: true, json: async () => ({
          title: 'Mitose',
          extract: 'Division cellulaire qui conserve le patrimoine génétique.',
          content_urls: { desktop: { page: 'https://fr.wikipedia.org/wiki/Mitose' } },
        }) };
      }
      return { ok: false, status: 404, json: async () => ({}) };
    };
    const r = await chargerDepuisLeNet('la mitose', f as unknown as typeof fetch);
    expect(r).toEqual({ titre: 'Mitose', resume: 'Division cellulaire qui conserve le patrimoine génétique.', url: 'https://fr.wikipedia.org/wiki/Mitose', image: '' });
    expect(urls.length).toBe(3); // titre demandé → recherche → vrai titre
  });

  it('quand le titre direct marche, on ne questionne pas la recherche', async () => {
    const urls: string[] = [];
    const f = async (url: string) => {
      urls.push(url);
      return { ok: true, json: async () => ({ title: 'Pomme', extract: 'Fruit.', content_urls: { desktop: { page: 'https://fr.wikipedia.org/wiki/Pomme' } } }) };
    };
    const r = await chargerDepuisLeNet('Pomme', f as unknown as typeof fetch);
    expect(r?.titre).toBe('Pomme');
    expect(urls.length).toBe(1);
  });

  it('la recherche propose le même titre que la demande → pas de boucle, on s arrête', async () => {
    const urls: string[] = [];
    const f = async (url: string) => {
      urls.push(url);
      if (url.includes('list=search')) return { ok: true, json: async () => ({ query: { search: [{ title: 'la mitose' }] } }) };
      return { ok: false, status: 404, json: async () => ({}) };
    };
    expect(await chargerDepuisLeNet('la mitose', f as unknown as typeof fetch)).toBeNull();
    expect(urls.length).toBe(2);
  });
});

describe('savoir : transformer un cours en fiches', () => {
  it('le mot le plus riche de chaque phrase devient la réponse cachée', () => {
    const f = fichesDepuisTexte(
      "La photosynthèse convertit la lumière en énergie. Elle nourrit la plante. Court.",
    );
    expect(f.length).toBeGreaterThan(0);
    expect(f[0].recto.length).toBeGreaterThan(4);
    expect(f[0].verso).not.toContain(f[0].recto);
    expect(f[0].verso).toContain('convertit');
  });

  it('les phrases trop courtes ne deviennent pas des fiches', () => {
    expect(fichesDepuisTexte('Voilà. Oui. Non plus.')).toEqual([]);
  });

  it('plafonné au maximum demandé, sans doublons', () => {
    const texte = 'La cellule contient le noyau. Le noyau abrite l ADN. L ADN porte les gènes.';
    const deux = fichesDepuisTexte(texte, 2);
    expect(deux.length).toBeLessThanOrEqual(2);
  });
});
