import React, { useEffect, useRef } from "react";
import { ADSENSE_CLIENT, canRenderAdUnit, getAdUnitId } from "../../config/ads";
import "../../styles/AdSlot.css";

/**
 * Unidad AdSense. No renderiza nada (sin hueco visual) si AdSense no está
 * activo o falta el ID de unidad en variables de entorno.
 *
 * @param {Object} props
 * @param {'inline'|'sidebar'|'footer'|'banner'} [props.variant]
 * @param {keyof import('../../config/ads').AD_UNIT_IDS} props.unitKey
 */
function AdSlot({ variant = "inline", unitKey }) {
  const pushedRef = useRef(false);
  const ready = canRenderAdUnit(unitKey);
  const adSlot = getAdUnitId(unitKey);

  useEffect(() => {
    if (!ready || pushedRef.current || typeof window === "undefined") return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushedRef.current = true;
    } catch {
      // El script puede no estar listo; el siguiente montaje reintentará si hace falta.
      pushedRef.current = false;
    }
  }, [ready, adSlot, unitKey]);

  if (!ready) return null;

  return (
    <aside className={`ad-slot ad-slot--${variant}`} aria-label="Publicidad" data-ad-unit={unitKey}>
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

export default AdSlot;
