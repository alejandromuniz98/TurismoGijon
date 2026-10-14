# Plan: Mejora del mapa turístico

## Enfoque
Cambio acotado al mapa: datos de POIs, iconos por categoría, tiles más limpios, layout más alto y leyenda. Sin rediseñar toda la página.

## Decisiones técnicas
| Decisión | Elección | Alternativa rechazada |
| --- | --- | --- |
| Tiles | OSM France Humanitarian (HOT) | Carto Voyager (ahora exige API key) |
| Iconos | `DivIcon` coloreados por categoría | Icono Leaflet por defecto (todos iguales) |
| Datos | Array en módulo de mapa (o `src/data/mapPois.js`) | Hardcode mínimo actual |
| Vista inicial | `fitBounds` de todos los POIs | Zoom fijo 13 (deja fuera Laboral/Botánico) |
| Posición en página | Mapa justo tras el lead; figuras debajo | Figuras antes del mapa (empuja el mapa fuera del primer viewport) |

## Contratos públicos
- Ruta `/mapa-turistico-gijon` sin cambios.
- Export default de `GijonMap` sin cambios.

## Archivos previstos
- `src/data/mapPois.js` (nuevo)
- `src/components/map/GijonMap.js`
- `src/styles/GijonMap.css`
- `src/pages/MapPage.js`
