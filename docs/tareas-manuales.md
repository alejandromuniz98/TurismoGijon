# Tareas manuales (Firebase, Search Console, AdSense)

Este documento lista lo que **debes completar tú** fuera del código. No afirma indexación, aprobación de AdSense ni despliegue en producción.

## Variables de entorno (opcional)

Crea `.env` en la raíz del proyecto (no la subas a git si contiene secretos):

```env
REACT_APP_SITE_URL=https://turismoporgijon.web.app
REACT_APP_ADSENSE_ENABLED=false
REACT_APP_ADSENSE_CLIENT=
```

Cuando AdSense te dé el publisher ID:

```env
REACT_APP_ADSENSE_ENABLED=true
REACT_APP_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX
```

Los huecos `AdSlot` seguirán en placeholder hasta que pases también un `adSlot` real por unidad.

## Despliegue Firebase Hosting

```bash
firebase logout
firebase login
firebase use turismoporgijon
npm run build
firebase deploy --only hosting --project turismoporgijon
```

URL esperada: https://turismoporgijon.web.app

Si aparece error de “site name”, comprueba que `firebase.json` incluye `"site": "turismoporgijon"`.

## Google Search Console

1. Entra en [Google Search Console](https://search.google.com/search-console) con la cuenta del sitio.
2. Verifica la propiedad (ya hay meta `google-site-verification` en `public/index.html`; confirma que coincide con tu token).
3. Envía el sitemap: `https://turismoporgijon.web.app/sitemap.xml`
4. Usa “Inspección de URL” en portada, hubs y 2–3 artículos clave.
5. Revisa Cobertura / Páginas e informes de experiencia.
6. Consulta Rendimiento (impresiones, clics, CTR, posición) cuando haya datos.
7. Prioriza mejorar páginas con muchas impresiones y bajo CTR.

**Nota:** La app es una SPA (React). Google suele ejecutar JS, pero el HTML inicial es mínimo. Si la indexación es débil, valora prerender/SSG en una fase posterior.

## Google AdSense (preparación)

Checklist antes de solicitar:

- [ ] Contenidos originales y útiles publicados
- [ ] Navegación clara y páginas legales accesibles
- [ ] Contacto funcional
- [ ] Política de privacidad / cookies actualizadas
- [ ] Tráfico real (no forzar visitas artificiales)
- [ ] Dominio estable en HTTPS

Pasos cuando Google te apruebe:

1. Obtén `ca-pub-...`
2. Activa variables `REACT_APP_ADSENSE_*`
3. Crea `public/ads.txt` con la línea que AdSense indique (no inventes IDs)
4. Rebuild + deploy
5. Asigna `adSlot` a cada `AdSlot` cuando tengas IDs de unidad

Los anuncios están **desactivados por defecto** en el código.

## EmailJS (formulario de contacto)

En `src/components/Contacto.js` deben coincidir:

- Service ID real (`service_...`, no solo el nombre visible)
- Template ID
- Public Key
- Variables del template = `name` del formulario (`asunto`, `email`, `mensaje`)

## Cómo añadir un artículo nuevo

1. Crea `src/content/articles/MiGuia.js` (componente React con el cuerpo).
2. Registra el loader en `src/content/articleLoaders.js`.
3. Añade metadatos en `src/data/articleRegistry.js` (slug, SEO, fechas reales, FAQs, related).
4. Asigna imagen en `ARTICLE_HERO_SRC` dentro de `src/images/assets.js`.
5. Añade la ruta a `src/data/sitemap-paths.json`.
6. Enlázalo desde hub/footer/artículos relacionados si corresponde.
7. `npm run build` y despliega.

## Pendiente técnico conocido (no bloqueante para operar)

- Soft 404: Firebase reescribe todo a `index.html` (HTTP 200). La UI muestra 404 + `noindex`, pero el código HTTP no es 404 real.
- Prerender/SSG no implementado (migración grande; valorar solo si GSC muestra problemas de indexación).
- Compresión WebP masiva de imágenes: pendiente de optimización de assets.
