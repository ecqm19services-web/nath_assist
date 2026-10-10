import { describe, expect, it } from 'vitest';
import { chargerCielReel, codeVersCiel } from '../src/nuage/cielReel';

describe('ciel réel : le vrai temps respire dans le nuage', () => {
  it('ciel dégagé = lumière haute, pas de pluie, calme', () => {
    const c = codeVersCiel(0, 5);
    expect(c.pluie).toBe(0);
    expect(c.luminosite).toBeGreaterThan(0.8);
    expect(c.orage).toBe(false);
    expect(c.libelle.length).toBeGreaterThan(0);
  });

  it('pluie et bruine font tomber de l’eau, jamais inventées', () => {
    expect(codeVersCiel(61, 10).pluie).toBeGreaterThan(0.3);
    expect(codeVersCiel(82, 20).pluie).toBeGreaterThan(0.5);
    expect(codeVersCiel(53, 8).pluie).toBeGreaterThan(0);
  });

  it('orage = turbulences, lumière basse, foudre autorisée', () => {
    const c = codeVersCiel(95, 40);
    expect(c.orage).toBe(true);
    expect(c.turbulence).toBeGreaterThan(0.6);
    expect(c.luminosite).toBeLessThan(0.5);
  });

  it('le vent soulève des turbulences, sans jamais dépasser 1', () => {
    const calme = codeVersCiel(1, 3);
    const tempete = codeVersCiel(1, 120);
    expect(tempete.turbulence).toBeGreaterThan(calme.turbulence);
    expect(tempete.turbulence).toBeLessThanOrEqual(1);
  });

  it('brouillard et neige éteignent la lumière', () => {
    expect(codeVersCiel(45, 5).luminosite).toBeLessThan(0.7);
    expect(codeVersCiel(73, 10).luminosite).toBeLessThan(0.8);
  });

  it('code inconnu = ciel neutre, jamais de plantage ni d’invention', () => {
    const c = codeVersCiel(12345, 0);
    expect(c.pluie).toBeGreaterThanOrEqual(0);
    expect(c.pluie).toBeLessThanOrEqual(1);
    expect(c.orage).toBe(false);
  });
});

describe('ciel réel : puiser sur le réseau gratuit (injecté)', () => {
  it('lit le code et le vent du courriel météo et les traduit en ciel', async () => {
    const f = async (url: string) => {
      (f as any).derniereUrl = url;
      return {
        ok: true,
        json: async () => ({ current: { weather_code: 95, wind_speed_10m: 55 } }),
      };
    };
    const c = await chargerCielReel(4.05, 9.76, f as unknown as typeof fetch);
    expect(c?.orage).toBe(true);
    expect((f as any).derniereUrl).toContain('open-meteo.com');
    expect((f as any).derniereUrl).toContain('latitude=4.05');
  });

  it('réseau refusé, réponse vide ou coupure = null, sans cri', async () => {
    const refuse = (async () => ({ ok: false, json: async () => ({}) })) as unknown as typeof fetch;
    expect(await chargerCielReel(1, 1, refuse)).toBeNull();
    const vide = (async () => ({ ok: true, json: async () => ({}) })) as unknown as typeof fetch;
    expect(await chargerCielReel(1, 1, vide)).toBeNull();
    const casse = (async () => { throw new Error('plus de réseau'); }) as unknown as typeof fetch;
    expect(await chargerCielReel(1, 1, casse)).toBeNull();
  });
});
