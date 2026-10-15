import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { disableAnalyticsCollection, enableAnalytics } from "../firebase";
import {
  CONSENT_CHANGED_EVENT,
  getStoredConsent,
  setStoredConsent,
} from "../../config/consent";
import "../../styles/CookieConsent.css";

/**
 * Banner de preferencias de cookies (analítica opcional).
 * Preferencia en localStorage vía src/config/consent.js.
 */
export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const applyStored = async () => {
      const saved = getStoredConsent();
      if (saved === "all") {
        await enableAnalytics();
        setVisible(false);
        return;
      }
      if (saved === "necessary") {
        disableAnalyticsCollection();
        setVisible(false);
        return;
      }
      setVisible(true);
    };

    applyStored();

    const onConsentChanged = () => {
      const saved = getStoredConsent();
      if (saved === null) {
        setVisible(true);
        return;
      }
      setVisible(false);
    };

    /** Footer u otros pueden pedir reabrir el banner. */
    const onOpenPreferences = () => {
      setVisible(true);
    };

    window.addEventListener(CONSENT_CHANGED_EVENT, onConsentChanged);
    window.addEventListener("tg-open-cookie-preferences", onOpenPreferences);
    return () => {
      window.removeEventListener(CONSENT_CHANGED_EVENT, onConsentChanged);
      window.removeEventListener("tg-open-cookie-preferences", onOpenPreferences);
    };
  }, []);

  const acceptAnalytics = async () => {
    setStoredConsent("all");
    setVisible(false);
    await enableAnalytics();
  };

  const acceptNecessaryOnly = () => {
    setStoredConsent("necessary");
    setVisible(false);
    disableAnalyticsCollection();
  };

  if (!visible) return null;

  return (
    <div className="cookie-consent" role="dialog" aria-labelledby="cookie-consent-title" aria-live="polite">
      <div className="cookie-consent__inner">
        <div className="cookie-consent__text">
          <p id="cookie-consent-title" className="cookie-consent__title">
            Cookies y analítica
          </p>
          <p>
            Usamos cookies técnicas necesarias para el funcionamiento del sitio. Si lo aceptas, también usamos Firebase
            Analytics (Google) para medir el uso de la web de forma agregada. Más información en la{" "}
            <Link to="/politica-cookies">Política de cookies</Link> y la{" "}
            <Link to="/politica-privacidad">Política de privacidad</Link>.
          </p>
        </div>
        <div className="cookie-consent__actions">
          <button type="button" className="cookie-consent__btn cookie-consent__btn--secondary" onClick={acceptNecessaryOnly}>
            Solo necesarias
          </button>
          <button type="button" className="cookie-consent__btn cookie-consent__btn--primary" onClick={acceptAnalytics}>
            Aceptar analítica
          </button>
        </div>
      </div>
    </div>
  );
}

/** Abre el banner para revisar o cambiar la preferencia. */
export function openCookiePreferences() {
  window.dispatchEvent(new Event("tg-open-cookie-preferences"));
}
