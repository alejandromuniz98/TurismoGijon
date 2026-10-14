import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useNavigate } from "react-router-dom";
import { MAP_POIS, POI_CATEGORIES } from "../../data/mapPois";
import "../../styles/GijonMap.css";

const CATEGORY_ICONS = Object.fromEntries(
  Object.entries(POI_CATEGORIES).map(([key, meta]) => [
    key,
    L.divIcon({
      className: "gijon-map-marker",
      html: `<span class="gijon-map-marker__pin" style="--marker-color:${meta.color}"></span>`,
      iconSize: [28, 36],
      iconAnchor: [14, 34],
      popupAnchor: [0, -28],
    }),
  ])
);

const POI_POSITIONS = MAP_POIS.map((poi) => poi.position);

function FitBounds({ positions }) {
  const map = useMap();

  useEffect(() => {
    if (!positions.length) return;
    const bounds = L.latLngBounds(positions);
    map.fitBounds(bounds, { padding: [36, 36], maxZoom: 14 });
  }, [map, positions]);

  return null;
}

/**
 * Enlace usable dentro de popups de Leaflet (React Router Link suele fallar ahí).
 */
function MapPopupLink({ to, children }) {
  const navigate = useNavigate();

  return (
    <a
      href={to}
      className="gijon-map-popup__link"
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        navigate(to);
      }}
    >
      {children}
    </a>
  );
}

/**
 * Mapa interactivo centrado en Gijón con puntos turísticos reales.
 */
function GijonMap() {
  const center = [43.54, -5.655];

  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, []);

  return (
    <div className="gijon-map-wrap">
      <MapContainer
        className="gijon-map"
        center={center}
        zoom={13}
        scrollWheelZoom
        aria-label="Mapa de puntos de interés en Gijón"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> · &copy; <a href="https://www.openstreetmap.fr/">OSM France</a>'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <FitBounds positions={POI_POSITIONS} />
        {MAP_POIS.map((poi) => {
          const category = POI_CATEGORIES[poi.category];
          return (
            <Marker key={poi.id} position={poi.position} icon={CATEGORY_ICONS[poi.category]}>
              <Popup className="gijon-map-popup">
                <span className="gijon-map-popup__cat" style={{ "--marker-color": category.color }}>
                  {category.label}
                </span>
                <strong className="gijon-map-popup__title">{poi.title}</strong>
                <p className="gijon-map-popup__note">{poi.note}</p>
                {poi.link ? (
                  <p className="gijon-map-popup__links">
                    <MapPopupLink to={poi.link}>Ver guía relacionada</MapPopupLink>
                  </p>
                ) : null}
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>

      <ul className="gijon-map-legend" aria-label="Leyenda de categorías del mapa">
        {Object.entries(POI_CATEGORIES).map(([key, meta]) => (
          <li key={key} className="gijon-map-legend__item">
            <span className="gijon-map-legend__swatch" style={{ background: meta.color }} aria-hidden="true" />
            {meta.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GijonMap;
