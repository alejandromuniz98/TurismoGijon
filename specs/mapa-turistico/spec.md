# Spec: Mejora del mapa turístico de Gijón

## Objetivo
Mejorar la experiencia visual y de utilidad del mapa en `/mapa-turistico-gijon`: mayor legibilidad, marcadores más claros y cobertura de los lugares más famosos.

## Alcance
- Componente `GijonMap` y estilos asociados.
- Página `MapPage` (copy/SEO alineados con nuevos POIs).
- Datos de puntos de interés (POIs).

## Requisitos funcionales
1. El mapa debe mostrar al menos 15 puntos de interés turístico reales de Gijón.
2. Los POIs deben agruparse por categoría visual (p. ej. playa, mirador, cultura, barrio, verde).
3. Cada marcador abre un popup con título, breve descripción y enlace útil cuando exista ruta interna.
4. El mapa debe ajustar la vista para encuadrar todos los marcadores al cargar.
5. Debe existir una leyenda de categorías legible en desktop y móvil.

## Requisitos no funcionales
- Sin nuevas dependencias npm.
- Mantener Leaflet + react-leaflet existentes.
- Preservar lazy-load de `GijonMap` en `MapPage`.
- UTF-8 y toponimia correcta (á, ñ, etc.).

## Fuera de alcance
- Rutas/polyline entre puntos.
- Geolocalización del usuario.
- Capas filtrables interactivas avanzadas (solo leyenda informativa).
