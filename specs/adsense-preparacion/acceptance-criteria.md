# Acceptance criteria

1. Sin `REACT_APP_ADSENSE_ENABLED=true` y `ca-pub-…` válido, no se carga `adsbygoogle.js` ni se muestran huecos publicitarios.
2. El banner casero gestiona solo analítica y no se presenta como CMP certificada para publicidad.
3. Políticas de privacidad y cookies describen AdSense, cookies publicitarias, personalización y retirada de consentimiento de forma veraz (sin afirmar que los anuncios ya están activos si no lo están).
4. No se inventan IDs de editor ni de unidad ni líneas `ads.txt` falsas.
5. `npm test` (CI) y `npm run build` pasan.
6. No se modifica `src/config/site.js` defaults ni `scripts/generate-sitemap.js` ni SEO/sitemap/robots.
7. Pasos manuales del propietario documentados en `docs/tareas-manuales.md`.
