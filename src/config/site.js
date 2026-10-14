import { DEFAULT_OG_IMAGE_URL } from "../images/assets";

export const SITE_NAME = "Turismo Gijón";
export const SITE_TAGLINE = "Guía de viaje, playas y planes en la costa de Asturias";
export const CONTACT_EMAIL = "turismoengijon@gmail.com";

const envUrl = process.env.REACT_APP_SITE_URL;
export const SITE_URL = (envUrl || "https://turismoporgijon.web.app").replace(/\/$/, "");

/** Convierte ruta de bundler (/static/media/...) o absoluta en URL absoluta para JSON-LD y Open Graph. */
export function absoluteUrl(assetPath) {
  if (!assetPath) return SITE_URL;
  const s = String(assetPath);
  if (s.startsWith("http://") || s.startsWith("https://")) return s;
  const path = s.startsWith("/") ? s : `/${s}`;
  return `${SITE_URL}${path}`;
}

/** OG por defecto: ver DEFAULT_OG_IMAGE_URL en src/images/assets.js */
export const DEFAULT_OG_IMAGE = DEFAULT_OG_IMAGE_URL;

export const ORGANIZATION = {
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo192.png`,
};
