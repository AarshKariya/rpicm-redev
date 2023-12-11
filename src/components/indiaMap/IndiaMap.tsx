import React, { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import NextLink from "next/link";
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

        bhavanCenters?.forEach((capital) => {
          const isWebsiteAvailable = capital?.website ? (
            <NextLink href={capital?.website}>{capital?.website}</NextLink>
          ) : (
            "Not available"
          );

          const popupContent = `
          <div>
            <h2>${capital?.name ?? "-"}</h2>
            <p>Address: ${capital?.address ?? "-"}</p>
            <p>Maps: <a href="${capital?.maps}">View on Map</a></p>
            <p>Website: ${isWebsiteAvailable}</p>
            <p>Email: ${capital?.email ?? "-"}</p>
          </div>
        `;

          const marker = L.marker(
            capital?.position as L.LatLngExpression
          ).addTo(map);

          marker.bindPopup(popupContent, {
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
        height: "520px",
        width: "100%",
        marginTop: "240px",
        marginBottom: "120px",
        display: "flex",
        justifyContent: "center",
      }}
      ref={mapRef}
    ></div>
  );
};

export default DynamicIndiaMap;
