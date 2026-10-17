# Tareas manuales (Firebase, Search Console, AdSense)

Este documento lista lo que **debes completar tú** fuera del código. No afirma indexación, aprobación de AdSense ni cumplimiento legal automático.

## Variables de entorno (opcional)

Crea `.env` en la raíz del proyecto (no la subas a git si contiene secretos):

```env
REACT_APP_SITE_URL=https://turismoengijon.com

# AdSense — dejar desactivado hasta tener ca-pub real, CMP y unidades
REACT_APP_ADSENSE_ENABLED=false
REACT_APP_ADSENSE_CLIENT=
REACT_APP_ADSENSE_SLOT_HOME_MID=
REACT_APP_ADSENSE_SLOT_HOME_FOOTER=
REACT_APP_ADSENSE_SLOT_ARTICLE_TOP=
REACT_APP_ADSENSE_SLOT_ARTICLE_SIDE=
REACT_APP_ADSENSE_SLOT_ARTICLE_MID=
REACT_APP_ADSENSE_SLOT_BLOG_TOP=
REACT_APP_ADSENSE_SLOT_BLOG_FOOTER=
REACT_APP_ADSENSE_SLOT_MAP_BOTTOM=
REACT_APP_ADSENSE_SLOT_RUTAS_MID=
REACT_APP_ADSENSE_SLOT_HUB_INLINE=
REACT_APP_ADSENSE_SLOT_FOOTER=
```

Sin `REACT_APP_ADSENSE_ENABLED=true` y un `ca-pub-…` válido **no** se carga el script de AdSense ni se muestran anuncios (los `AdSlot` no dejan hueco visual).

## Despliegue Firebase Hosting

```bash
firebase logout
firebase login
firebase use turismoporgijon
npm run build
firebase deploy --only hosting --project turismoporgijon
```

URL esperada: https://turismoengijon.com

Si aparece error de “site name”, comprueba que `firebase.json` incluye `"site": "turismoporgijon"`.

## Google Search Console

1. Entra en [Google Search Console](https://search.google.com/search-console) con la cuenta del sitio.
2. Verifica la propiedad (meta `google-site-verification` en `public/index.html`).
3. Envía el sitemap: `https://turismoengijon.com/sitemap.xml`
4. Usa “Inspección de URL” en portada, hubs y 2–3 artículos clave.
5. Revisa Cobertura / Páginas e informes de experiencia.

**Nota:** La app es una SPA (React). Google suele ejecutar JS, pero el HTML inicial es mínimo.

## Google AdSense + Privacy & Messaging (obligatorio en EEE/UK/CH para anuncios personalizados)

### Distinción importante

| Sistema | Qué cubre |
|---|---|
| Banner casero del sitio (`tg_cookie_consent`) | Solo Firebase Analytics |
| Google Privacy & Messaging (CMP certificada / TCF) | Consentimiento publicitario AdSense en EEE, Reino Unido y Suiza |

El banner de analítica **no** sustituye a una CMP certificada.

### Pasos en la cuenta AdSense (propietario)

1. Solicita / gestiona AdSense en [adsense.google.com](https://www.adsense.google.com/) para el dominio del sitio.
2. Cuando tengas el ID de editor (`ca-pub-…`), anótalo; **no lo inventes**.
3. En AdSense → **Privacidad y mensajes** (Privacy & messaging):
   - Configura el mensaje de **reglamentos europeos** (GDPR / EU user consent).
   - Selecciona proveedores de tecnología publicitaria (ATPs) o el conjunto habitual.
   - Publica el mensaje para el sitio/dominio correcto.
4. Crea unidades de anuncio (anuncios automáticos y/o bloques) y copia los IDs numéricos de unidad.
5. Actualiza `public/ads.txt` con la **línea exacta** que AdSense indique (sustituye el stub comentado). Comprueba `https://turismoengijon.com/ads.txt` tras el deploy.
6. En el proyecto, configura `.env` con `REACT_APP_ADSENSE_ENABLED=true`, `REACT_APP_ADSENSE_CLIENT` y los `REACT_APP_ADSENSE_SLOT_*` reales.
7. Rebuild + deploy (solo cuando autorices publicar).
8. Verifica en un navegador del EEE:
   - Aparece el mensaje de Privacy & Messaging (si aplica a tu tráfico).
   - No se solicitan consentimientos publicitarios duplicados de forma confusa.
   - Network: `adsbygoogle.js` / `googlesyndication` solo tras activar la config.
   - Firebase Analytics sigue respetando «Solo necesarias» / «Aceptar analítica».

Documentación oficial:

- [Requisitos de consentimiento / CMP](https://support.google.com/adsense/answer/7670013?hl=es)
- [Requisitos CMP certificada EEE/UK/CH](https://support.google.com/adsense/answer/13554116?hl=es)
- [Acerca de Privacy & messaging](https://support.google.com/adsense/answer/10924669?hl=es)
- [ads.txt](https://support.google.com/adsense/answer/7532444?hl=es)

### Lo que el código ya hace

- Carga `adsbygoogle.js` **solo** si AdSense está activo en env.
- `AdSlot` no pinta placeholders si faltan IDs.
- Banner casero limitado a analítica, con texto que aclara el alcance.
- Políticas de privacidad/cookies actualizadas para describir AdSense de forma preparatoria.

### Lo que el código no puede hacer

- Aprobar la cuenta AdSense.
- Configurar Privacy & Messaging en tu consola.
- Garantizar cumplimiento legal (asesoramiento profesional si lo necesitas).
- Inventar `ca-pub` o líneas `ads.txt`.

## EmailJS (formulario de contacto)

En `src/components/Contacto.js` deben coincidir Service ID, Template ID, Public Key y variables del template.

## Cómo añadir un artículo nuevo

1. Crea `src/content/articles/MiGuia.js`.
2. Registra el loader en `src/content/articleLoaders.js`.
3. Metadatos en `src/data/articleRegistry.js`.
4. Imagen en `ARTICLE_HERO_SRC` (`src/images/assets.js`).
5. Ruta en `src/data/sitemap-paths.json`.
6. Enlaces internos si corresponde.
7. `npm run build` y despliega.

## Pendiente técnico conocido

- Soft 404 en Firebase (rewrite a `index.html`).
- Prerender/SSG no implementado.
- Compresión WebP masiva pendiente.
