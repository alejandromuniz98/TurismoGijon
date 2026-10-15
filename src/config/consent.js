/** Clave de preferencia de cookies en localStorage. */
export const CONSENT_STORAGE_KEY = "tg_cookie_consent";

/** Evento DOM para sincronizar banner, Analytics y page_view. */
export const CONSENT_CHANGED_EVENT = "tg-consent-changed";

/** @typedef {'all' | 'necessary' | null} ConsentValue */

/** @returns {ConsentValue} */
export function getStoredConsent() {
  if (typeof window === "undefined") return null;
  const value = localStorage.getItem(CONSENT_STORAGE_KEY);
  if (value === "all" || value === "necessary") return value;
  return null;
}

/** @param {'all' | 'necessary'} value */
export function setStoredConsent(value) {
  const previous = getStoredConsent();
  localStorage.setItem(CONSENT_STORAGE_KEY, value);
  if (previous !== value) {
    window.dispatchEvent(new CustomEvent(CONSENT_CHANGED_EVENT, { detail: value }));
  }
}

export function clearStoredConsent() {
  localStorage.removeItem(CONSENT_STORAGE_KEY);
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGED_EVENT, { detail: null }));
}

export function hasAnalyticsConsent() {
  return getStoredConsent() === "all";
}
