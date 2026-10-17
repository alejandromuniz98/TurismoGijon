import { ADSENSE_CLIENT, ADSENSE_CLIENT_DEFAULT, canRenderAdUnit, isAdsenseActive } from "./ads";

describe("config/ads", () => {
  test("client por defecto es el ca-pub del sitio", () => {
    expect(ADSENSE_CLIENT_DEFAULT).toBe("ca-pub-7727728148044259");
    expect(ADSENSE_CLIENT).toBe("ca-pub-7727728148044259");
  });

  test("isAdsenseActive es false por defecto (sin env de activación de unidades)", () => {
    expect(isAdsenseActive()).toBe(false);
  });

  test("canRenderAdUnit es false sin slots configurados", () => {
    expect(canRenderAdUnit("homeMid")).toBe(false);
    expect(canRenderAdUnit("footer")).toBe(false);
  });
});
