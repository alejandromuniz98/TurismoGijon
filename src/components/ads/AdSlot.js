import React, { useEffect } from "react";
import { SITE_MEDIA } from "../../images/assets";
import { ADSENSE_CLIENT, isAdsenseActive } from "../../config/ads";
import "../../styles/AdSlot.css";

let adsenseScriptRequested = false;

function ensureAdsenseScript() {
  if (adsenseScriptRequested || typeof document === "undefined") return;
  if (document.querySelector("script[data-adsense-loader]")) {
    adsenseScriptRequested = true;
    return;
  }
  adsenseScriptRequested = true;
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`;
  script.crossOrigin = "anonymous";
  script.dataset.adsenseLoader = "1";
  document.head.appendChild(script);
}

/**
 * Hueco publicitario. Por defecto muestra placeholder (sin AdSense activo).
 * @param {'inline'|'sidebar'|'footer'|'banner'} variant
 * @param {string} [slotKey]
 * @param {string} [adSlot] - data-ad-slot de AdSense cuando exista
 */
function AdSlot({ variant = "inline", slotKey = "pending", adSlot = "" }) {
  const active = isAdsenseActive() && Boolean(adSlot);

  useEffect(() => {
    if (!active) return;
    ensureAdsenseScript();
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // El script puede no estar listo aún; AdSense reintentará en siguientes renders.
    }
  }, [active, adSlot, slotKey]);

  if (active) {
    return (
      <aside className={`ad-slot ad-slot--${variant}`} aria-label="Publicidad" data-ad-key={slotKey}>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client={ADSENSE_CLIENT}
          data-ad-slot={adSlot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </aside>
    );
  }

  return (
    <aside
      className={`ad-slot ad-slot--${variant}`}
      aria-label="Espacio publicitario reservado"
      data-ad-placeholder={slotKey}
    >
      <span className="ad-slot__label">Publicidad</span>
      <div
        className="ad-slot__frame"
        role="presentation"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.88), rgba(255,255,255,0.88)), url(${SITE_MEDIA.adPlaceholder.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </aside>
  );
}

export default AdSlot;
