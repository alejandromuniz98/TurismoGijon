# Plan: Eliminar huecos reservados para publicidad

## Objetivo
Quitar de la UI y del código todos los placeholders/slots de publicidad (`AdSlot`), la config AdSense asociada y estilos residuales. No reintroducir anuncios.

## Alcance
- Páginas y Footer que montan `<AdSlot />`
- Componente `src/components/ads/AdSlot.js` y estilos
- Config `src/config/ads.js`
- Entrada `SITE_MEDIA.adPlaceholder`
- Documentación que instruya a usar huecos `AdSlot`

## Fuera de alcance
- Textos legales genéricos sobre publicidad futura (aviso legal / cookies), salvo que queden inconsistentes con la app
- Despliegue a Firebase (no en esta tarea)

## Contratos públicos
Ningún API/contrato externo; solo UI interna.

## Criterios de aceptación
Ver `acceptance-criteria.md`.
