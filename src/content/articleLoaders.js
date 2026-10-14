/**
 * Code splitting por artículo para mejorar el tiempo de carga inicial.
 */
export const articleLoaders = {
  "que-ver-gijon-1-dia": () => import("./articles/QueVerGijon1Dia"),
  "mejores-playas-gijon": () => import("./articles/MejoresPlayasGijon"),
  "donde-comer-gijon": () => import("./articles/DondeComerGijon"),
  "gijon-con-ninos": () => import("./articles/GijonConNinos"),
  "que-ver-gijon-gratis": () => import("./articles/QueVerGijonGratis"),
  "gijon-en-2-dias": () => import("./articles/GijonEn2Dias"),
  "gijon-cuando-llueve": () => import("./articles/GijonCuandoLlueve"),
  "errores-visitar-gijon": () => import("./articles/ErroresVisitarGijon"),
  "lugares-secretos-gijon": () => import("./articles/LugaresSecretosGijon"),
};
