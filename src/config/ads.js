/**
 * Configuración de Google AdSense.
 *
 * El script del editor se carga desde public/index.html (ca-pub-7727728148044259).
 * Las unidades AdSlot siguen desactivadas hasta REACT_APP_ADSENSE_ENABLED=true
 * y REACT_APP_ADSENSE_SLOT_* con IDs reales.
 */

/** Client ID del sitio (puede sobrescribirse por env). */
export const ADSENSE_CLIENT_DEFAULT = "ca-pub-7727728148044259";

export const ADSENSE_ENABLED =
  String(process.env.REACT_APP_ADSENSE_ENABLED || "").toLowerCase() === "true";

export const ADSENSE_CLIENT = (
  process.env.REACT_APP_ADSENSE_CLIENT || ADSENSE_CLIENT_DEFAULT
).trim();

/** IDs de unidad por ubicación (vacíos hasta que el propietario los configure). */
export const AD_UNIT_IDS = {
  homeMid: (process.env.REACT_APP_ADSENSE_SLOT_HOME_MID || "").trim(),
  homeFooter: (process.env.REACT_APP_ADSENSE_SLOT_HOME_FOOTER || "").trim(),
  articleTop: (process.env.REACT_APP_ADSENSE_SLOT_ARTICLE_TOP || "").trim(),
  articleSide: (process.env.REACT_APP_ADSENSE_SLOT_ARTICLE_SIDE || "").trim(),
  articleMid: (process.env.REACT_APP_ADSENSE_SLOT_ARTICLE_MID || "").trim(),
  blogTop: (process.env.REACT_APP_ADSENSE_SLOT_BLOG_TOP || "").trim(),
  blogFooter: (process.env.REACT_APP_ADSENSE_SLOT_BLOG_FOOTER || "").trim(),
  mapBottom: (process.env.REACT_APP_ADSENSE_SLOT_MAP_BOTTOM || "").trim(),
  rutasMid: (process.env.REACT_APP_ADSENSE_SLOT_RUTAS_MID || "").trim(),
  hubInline: (process.env.REACT_APP_ADSENSE_SLOT_HUB_INLINE || "").trim(),
  footer: (process.env.REACT_APP_ADSENSE_SLOT_FOOTER || "").trim(),
};

/** @returns {boolean} */
export function isAdsenseActive() {
  return ADSENSE_ENABLED && /^ca-pub-\d+$/.test(ADSENSE_CLIENT);
}

/**
 * @param {keyof typeof AD_UNIT_IDS} unitKey
 * @returns {string}
 */
export function getAdUnitId(unitKey) {
  return AD_UNIT_IDS[unitKey] || "";
}

/** True solo si AdSense está activo y la unidad tiene ID numérico. */
export function canRenderAdUnit(unitKey) {
  const id = getAdUnitId(unitKey);
  return isAdsenseActive() && /^\d+$/.test(id);
}
