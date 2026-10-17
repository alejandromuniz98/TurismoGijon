import { canRenderAdUnit, isAdsenseActive } from "./ads";

describe("config/ads", () => {
  test("isAdsenseActive es false por defecto (sin env de activación)", () => {
    expect(isAdsenseActive()).toBe(false);
  });

  test("canRenderAdUnit es false sin client ni slot configurados", () => {
    expect(canRenderAdUnit("homeMid")).toBe(false);
    expect(canRenderAdUnit("footer")).toBe(false);
  });
});
