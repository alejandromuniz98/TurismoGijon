# Acceptance criteria

1. Cambiar una asignación en `src/images/assets.js` es suficiente para cambiar la imagen en la UI correspondiente.
2. No hay `import … from "../images/archivo.ext"` (ni rutas equivalentes) fuera de `assets.js`, excepto iconos Leaflet.
3. Logo del header y breadcrumbs sale de `BRAND.logo`.
4. Imágenes inline de hubs/mapa/rutas/restaurantes salen de `INLINE_IMAGES`.
5. La app compila sin errores de módulo.
