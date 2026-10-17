# Plan: Preparación AdSense (InstruccionesAdSense.txt)

## Diagnóstico inicial (auditoría)

| Área | Estado actual | Problema |
|---|---|---|
| AdSlot / config ads | Eliminados del proyecto | No hay integración técnica lista para AdSense |
| Banner cookies | Solo analítica Firebase | Correcto para medición; **no** es CMP certificada TCF (no debe presentarse como consentimiento publicitario EEE) |
| Política privacidad | No menciona AdSense ni publicidad | Insuficiente para preparación AdSense |
| Política cookies | Publicidad “si en el futuro…” | Hay que describir AdSense, personalizada/no personalizada y CMP de Google |
| Aviso legal | Mención genérica a publicidad | Aceptable; afinar con honestidad (sin anuncios activos aún) |
| ads.txt | No existe | Necesario cuando Google dé la línea; stub documentado |
| Privacy & Messaging | No configurado (cuenta externa) | Obligatorio en EEE/UK/CH para anuncios personalizados con CMP certificada |
| SEO / site.js / sitemap | OK | No tocar |

## Decisión técnica

1. **Analítica:** mantener banner casero + `tg_cookie_consent` (solo Firebase Analytics).
2. **Publicidad EEE:** no inventar CMP TCF. Preparar carga de AdSense desactivada por defecto; el propietario configura **Google Privacy & Messaging** (CMP certificada) en la consola AdSense.
3. **AdSlot:** restaurar sin placeholders visuales (`null` si no hay config/consent/IDs reales).
4. **No inventar** `ca-pub-…` ni IDs de unidad ni entradas `ads.txt` falsas.
5. **No desplegar** sin autorización.

## Cambios previstos

- `src/config/ads.js` + `AdsenseBootstrap` + `AdSlot` (sin hueco visible)
- Insertar slots en páginas clave (invisibles hasta activación)
- Actualizar legales (privacidad, cookies; aviso legal mínimo)
- Ajustar textos del banner (alcance solo analítica)
- `public/ads.txt` con comentarios pendientes
- `docs/tareas-manuales.md` pasos Privacy & Messaging / AdSense
- Tests unitarios de config consent/ads + build

## Alternativas consideradas

- Sustituir el banner casero por solo Privacy & Messaging: rechazada por ahora (rompe analítica Firebase sin acceso a cuenta AdSense).
- Mostrar placeholders «Publicidad»: rechazada (usuario pidió eliminar huecos; slots invisibles hasta config real).
