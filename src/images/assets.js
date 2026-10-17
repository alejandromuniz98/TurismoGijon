/**
 * =============================================================================
 * CATÁLOGO DE IMÁGENES — edita AQUÍ para cambiar fotos del sitio
 * =============================================================================
 *
 * Cómo usar:
 * 1. Sustituye el fichero en `src/images/` (o añade uno nuevo e impórtalo abajo).
 * 2. Cambia solo la referencia en la sección correspondiente (BRAND, SITE_MEDIA,
 *    ARTICLE_HERO_SRC, HUB_HERO, HOME_HUB_CARD_IMAGES, PAGE_HERO, INLINE_IMAGES…).
 *
 * No importes imágenes desde páginas/componentes: importa desde este fichero.
 */
import laboral from "./laboral.jpg";
import surf from "./surf.jpg";
import playa from "./playa.jpg";
import paseoMuro from "./paseoMuro.jpg";
import cimadevilla from "./cimadevilla.jpg";
import estatuaPelayo from "./estatuaPelayo.jpg";
import GijonCalidadVida from "./GijonCalidadVida.jpg";
import SanPedro from "./SanPedro.jpg";
import queso from "./queso.jpg";
import bike from "./bike.jpg";
import walking from "./walking.jpg";
import cerro from "./cerro.jpg";
import mapaGijon from "./mapaGijon.jpg";
import arroz from "./arroz.jpg";
import cachopo from "./cachopo.jpg";
import acuario from "./acuario.jpg";
import fabada from "./fabada.jpg";
import covadonga from "./covadonga.jpg";
import barco from "./barco.jpg";
import sidra from "./sidra.jpg";
import ayuntamiento from "./ayuntamiento.jpg";
import logoGijon from "./logo-gijon.png";
import jardin from "./jardin.jpg";
import letronas from "./letronas.jpg";
import parque from "./parque.jpg";
import lloca from "./lloca.jpg";
import pixin from "./pixin.jpg";


/** Logo del header y breadcrumbs. */
export const BRAND = {
  logo: logoGijon,
};

/**
 * Medios globales del sitio (portada, cabecera, ads, Open Graph por defecto).
 * Cambia `src` / URL aquí para actualizar todas las vistas que los usan.
 */
export const SITE_MEDIA = {
  headerBackground: {
    src: GijonCalidadVida,
    alt: "Vista de Gijón desde el litoral",
  },
  homeHero: {
    src: GijonCalidadVida,
    alt: "Vista panorámica de Gijón con la playa de San Lorenzo y el paseo marítimo",
  },
};

/** OG por defecto (URL absoluta externa o path público). */
export const DEFAULT_OG_IMAGE_URL =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Gijon_panorama.jpg/1200px-Gijon_panorama.jpg";

/** Héroes de artículos por slug (URLs empaquetadas). */
export const ARTICLE_HERO_SRC = {
  "que-ver-gijon-1-dia": walking,
  "mejores-playas-gijon": playa,
  "donde-comer-gijon": cachopo,
  "gijon-con-ninos": acuario,
  "que-ver-gijon-gratis": cerro,
  "gijon-en-2-dias": SanPedro,
  "gijon-cuando-llueve": laboral,
  "errores-visitar-gijon": mapaGijon,
  "lugares-secretos-gijon": cimadevilla,
};

/** Imagen ancha opcional por ruta de hub (SectionHubPage). */
export const HUB_HERO = {
  "/que-ver-gijon": { src: letronas, alt: "Basílica de La Begoña y entorno en Gijón" },
  "/playas-gijon": { src: surf, alt: "Surf y mar en la costa de Gijón" },
  "/restaurantes-gijon": { src: sidra, alt: "Escanciado de sidra en chigre asturiano" },
  "/guias": { src: parque, alt: "Parque urbano en Gijón, ideal para familias" },
};

/** Tarjetas de la portada: tema → imagen. */
export const HOME_HUB_CARD_IMAGES = {
  "/que-ver-gijon": { src: letronas, alt: "Arquitectura religiosa y vistas en Gijón" },
  "/playas-gijon": { src: playa, alt: "Playa y paseo marítimo en Gijón" },
  "/restaurantes-gijon": { src: sidra, alt: "Sidra asturiana en mesa de chigre" },
  "/guias": { src: walking, alt: "Paseo a pie por la ciudad" },
  "/blog": { src: ayuntamiento, alt: "Eventos y ferias en Gijón" },
  "/rutas-en-gijon": { src: bike, alt: "Ruta y sendero en el entorno de Gijón" },
  "/mapa-turistico-gijon": { src: mapaGijon, alt: "Red de transporte y orientación en la ciudad" },
};

/** Héroes de páginas sueltas. */
export const PAGE_HERO = {
  blog: { src: ayuntamiento, alt: "Semana Negra de Gijón, cultura y ambiente urbano" },
  rutas: { src: bike, alt: "Bicicleta y movilidad por Gijón" },
  mapa: { src: cerro, alt: "Vistas desde el cerro y el litoral de Gijón" },
  contacto: { src: ayuntamiento, alt: "Ayuntamiento y cultura en Gijón" },
  privacidad: { src: lloca, alt: "La lloca y patrimonio cultural en Gijón" },
  cookies: { src: barco, alt: "Puerto de Gijón, barco en el mar" },
  avisoLegal: { src: covadonga, alt: "Covadonga, montaña en Asturias" },
  notFound: { src: surf, alt: "Mar y olas en la costa gijonesa" },
};

/** Franja inferior del pie (ambiente ciudad). */
export const FOOTER_STRIP = { src: GijonCalidadVida, alt: "Gijón en época navideña, luces en la ciudad" };

/** Bloque gastronómico en portada (intro). */
export const HOME_GASTRO_STRIP = [
  { src: fabada, alt: "Fabada asturiana, plato tradicional" },
  { src: arroz, alt: "Arroz con pitu de corral, cocina asturiana" },
  { src: queso, alt: "Queso asturiano y despensa local" },
];

/** Imágenes inline dentro de hubs / páginas (fuera del hero). */
export const INLINE_IMAGES = {
  queVerExtra: { src: estatuaPelayo, alt: "Terrazas en la estatua de Pelayo" },
  guiasExtra: { src: acuario, alt: "Acuario de Gijón, fauna marina para familias" },
  mapaJardin: { src: jardin, alt: "Jardín Botánico Atlántico de Gijón" },
  mapaAcuario: { src: acuario, alt: "Acuario de Gijón, plan familiar" },
  restaurantesExtra: { src: pixin, alt: "Pixín y pescado de lonja en la cocina asturiana" },
  rutasExtra: { src: paseoMuro, alt: "Paseo del Muro y costa de Gijón" },
};

/** Export sueltos por si un artículo o página necesita reutilizar el archivo crudo. */
export {
  acuario,
  arroz,
  bike,
  mapaGijon,
  cachopo,
  cerro,
  paseoMuro,
  estatuaPelayo,
  covadonga,
  fabada,
  ayuntamiento,
  jardin,
  laboral,
  logoGijon,
  lloca,
  GijonCalidadVida,
  cimadevilla,
  parque,
  pixin,
  playa,
  letronas,
  SanPedro,
  queso,
  sidra,
  barco,
  surf,
  walking,
};
