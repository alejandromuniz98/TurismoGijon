# Plan: Catálogo central de imágenes

## Qué

Completar `src/images/assets.js` como único punto de asignación de imágenes de contenido y actualizar consumidores para no importar ficheros de `src/images/` directamente.

## Por qué

Facilitar cambiar fotos (logo, héroes, inline, portada) sin buscar imports repartidos por páginas y componentes.

## Enfoque

1. Ampliar `assets.js` con secciones claras: archivos, marca, site media, héroes, hubs, inline.
2. Sustituir imports directos (`logo-gijon.png`, variables sueltas) por claves semánticas (`BRAND.logo`, `INLINE_IMAGES.*`, etc.).
3. Corregir desajustes src/alt evidentes al centralizar (mapa: acuario; guías: acuario).

## Contratos públicos

- Se mantienen exports existentes (`ARTICLE_HERO_SRC`, `HUB_HERO`, `PAGE_HERO`, …).
- Se añaden: `BRAND`, `SITE_MEDIA`, `INLINE_IMAGES`, `DEFAULT_OG_IMAGE_URL`.
- `site.js` reutiliza `DEFAULT_OG_IMAGE_URL` desde assets.

## Riesgos

- Bajo: solo rewire de imports; URLs de bundler siguen siendo las mismas ficheros.
