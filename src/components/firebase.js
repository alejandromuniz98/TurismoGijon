import { initializeApp } from "firebase/app";
import {
  initializeAnalytics,
  isSupported,
  setAnalyticsCollectionEnabled,
} from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCXryzj9wRK6FaHeslPz_t5m-lWBj4gdkc",
  authDomain: "turismoporgijon.firebaseapp.com",
  projectId: "turismoporgijon",
  storageBucket: "turismoporgijon.appspot.com",
  messagingSenderId: "136641651944",
  appId: "1:136641651944:web:476a4ae4d8d32212f8955d",
  measurementId: "G-XJDD6Z1L61",
};

const app = initializeApp(firebaseConfig);

/** @type {import('firebase/analytics').Analytics | null} */
let analytics = null;
let analyticsInitPromise = null;

/**
 * Inicializa Analytics solo tras consentimiento.
 * send_page_view: false evita el page_view automático (lo controla App.js).
 * @returns {Promise<import('firebase/analytics').Analytics | null>}
 */
export async function enableAnalytics() {
  if (typeof window === "undefined") return null;

  if (analytics) {
    setAnalyticsCollectionEnabled(analytics, true);
    return analytics;
  }

  if (analyticsInitPromise) return analyticsInitPromise;

  analyticsInitPromise = (async () => {
    const supported = await isSupported().catch(() => false);
    if (!supported) return null;

    analytics = initializeAnalytics(app, {
      config: {
        send_page_view: false,
      },
    });
    setAnalyticsCollectionEnabled(analytics, true);
    return analytics;
  })();

  return analyticsInitPromise;
}

/** Detiene la recolección analítica sin destruir la app Firebase. */
export function disableAnalyticsCollection() {
  if (analytics) {
    setAnalyticsCollectionEnabled(analytics, false);
  }
}

export function getAnalyticsInstance() {
  return analytics;
}

export { app };
