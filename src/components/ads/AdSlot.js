import React from "react";
import { SITE_MEDIA } from "../../images/assets";
import "../../styles/AdSlot.css";

/**
 * Hueco reservado para Google AdSense (sin cargar el script de anuncios).
 * Sustituir el interior por el snippet de AdSense cuando aprueben el sitio.
 *
 * @param {'inline'|'sidebar'|'footer'|'banner'} variant
 * @param {string} [slotKey] - identificador lógico para documentar qué bloque es
 */
function AdSlot({ variant = "inline", slotKey = "pending" }) {
  return (
    <aside
      className={`ad-slot ad-slot--${variant}`}
      aria-label="Espacio publicitario"
      data-ad-placeholder={slotKey}
    >
      <span className="ad-slot__label">Publicidad</span>
      <div
        className="ad-slot__frame"
        role="presentation"
        style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.88), rgba(255,255,255,0.88)), url(${SITE_MEDIA.adPlaceholder.src})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        {/* AdSense: <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-client="ca-pub-XXX" data-ad-slot="YYY" /> */}
      </div>
    </aside>
  );
}

export default AdSlot;
