import {
  CONSENT_STORAGE_KEY,
  getStoredConsent,
  hasAnalyticsConsent,
  setStoredConsent,
  clearStoredConsent,
} from "./consent";

describe("config/consent", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("sin preferencia: getStoredConsent es null y no hay analítica", () => {
    expect(getStoredConsent()).toBeNull();
    expect(hasAnalyticsConsent()).toBe(false);
  });

  test("aceptar analítica guarda all y hasAnalyticsConsent es true", () => {
    setStoredConsent("all");
    expect(localStorage.getItem(CONSENT_STORAGE_KEY)).toBe("all");
    expect(hasAnalyticsConsent()).toBe(true);
  });

  test("solo necesarias no habilita analítica", () => {
    setStoredConsent("necessary");
    expect(hasAnalyticsConsent()).toBe(false);
  });

  test("clearStoredConsent elimina la preferencia", () => {
    setStoredConsent("all");
    clearStoredConsent();
    expect(getStoredConsent()).toBeNull();
  });
});
