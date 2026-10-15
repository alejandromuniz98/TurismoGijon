/**
 * Configuración de Google AdSense.
 * Los anuncios permanecen desactivados hasta definir el publisher y activar el flag.
 *
 * Variables de entorno (opcional, en `.env`):
 * - REACT_APP_ADSENSE_ENABLED=true
 * - REACT_APP_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX
 */

export const ADSENSE_ENABLED =
  String(process.env.REACT_APP_ADSENSE_ENABLED || "").toLowerCase() === "true";

export const ADSENSE_CLIENT = (process.env.REACT_APP_ADSENSE_CLIENT || "").trim();

/** true solo si hay publisher real y activación explícita */
export function isAdsenseActive() {
  return ADSENSE_ENABLED && /^ca-pub-\d+$/.test(ADSENSE_CLIENT);
}
