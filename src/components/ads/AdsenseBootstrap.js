import { useEffect } from "react";
import { ADSENSE_CLIENT, isAdsenseActive } from "../../config/ads";

const SCRIPT_ATTR = "data-adsense-loader";

/**
 * Carga una sola vez el script de AdSense cuando la config está activa.
 * Privacy & Messaging (CMP certificada) se sirve desde la consola de Google
 * cuando el propietario publica el mensaje de reglamentos europeos; no sustituye
 * al banner casero de analítica Firebase.
 */
export default function AdsenseBootstrap() {
  useEffect(() => {
    if (!isAdsenseActive() || typeof document === "undefined") return;
    if (document.querySelector(`script[${SCRIPT_ATTR}]`)) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`;
    script.crossOrigin = "anonymous";
    script.setAttribute(SCRIPT_ATTR, "1");
    document.head.appendChild(script);
  }, []);

  return null;
}
