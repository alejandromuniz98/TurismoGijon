# Acceptance criteria

1. Ninguna página ni el Footer renderiza huecos con etiqueta «Publicidad» ni placeholders `ad-slot`.
2. No existen `src/components/ads/AdSlot.js`, `src/styles/AdSlot.css` ni `src/config/ads.js`.
3. No hay imports de `AdSlot` ni de `config/ads` en el código de la app.
4. `npm run build` termina correctamente.
5. La documentación de tareas manuales no indica mantener huecos `AdSlot` en la UI.
