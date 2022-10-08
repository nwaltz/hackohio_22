import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken =
  "pk.eyJ1IjoianVzdC16aiIsImEiOiJjbDkwMnJlcmwwbHI1M25vNXI4Y3Qyc25rIn0.Ep2w_2VsXfTdsbeBYikAXg";

export default function MapBoxMap() {
  // initial latitude, longitude, and zoom of the map
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-83.02271);
  const [lat, setLat] = useState(39.999387);
  const [zoom, setZoom] = useState(12);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });
  return (
    <>
      <div ref={mapContainer} className="map-container" />
    </>
  );
}
