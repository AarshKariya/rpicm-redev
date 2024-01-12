import React, { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import { bhavanCenters } from "./helpers/indiaMapCenters";

const DynamicIndiaMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const loadMap = async () => {
      if (mapRef.current && typeof window !== "undefined") {
        const L = await import("leaflet");

        const map = L.map(mapRef.current).setView([20.5937, 78.9629], 5);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "Map data © OpenStreetMap contributors",
        }).addTo(map);

        const customIcon = new L.Icon({
          iconUrl: "/mapMarkerIcon.png",
          iconSize: [40, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41],
        });

        bhavanCenters?.forEach((capital) => {
          const popupContent = `
          <div>
            <h2>${capital?.name ?? "-"}</h2>
            <p>Address: ${capital?.address ?? "-"}</p>
            <p>Website: <a href=${
              capital?.website
            } target="_blank" rel="noopener noreferrer">${
            capital?.website ? capital?.website : "-"
          }</a></p>
            <p>Email: <a href=mailto:${
              capital?.email
            } target="_blank" rel="noopener noreferrer">${
            capital?.email ?? "-"
          }</a></p>
          </div>
        `;

          L.marker(capital?.position as L.LatLngExpression, {
            icon: customIcon,
          })
            .addTo(map)
            .bindPopup(popupContent, {
              className: "custom-popup",
            });
        });
      }
    };

    loadMap();
  }, []);

  return (
    <div
      id="india-map"
      style={{
        height: "720px",
        width: "80%",
        marginTop: "240px",
        marginBottom: "120px",
        marginLeft: "120px",
        marginRight: "120px",
        display: "flex",
        justifyContent: "center",
      }}
      ref={mapRef}
    ></div>
  );
};

export default DynamicIndiaMap;
