import { GeolocateControl } from "mapbox-gl";
import React, { useRef, useState } from "react";
import ReactMapGL, { Map, Marker } from "react-map-gl";

export default function CustomMap() {
  // initial latitude, longitude, and zoom of the map
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-83.02271);
  const [lat, setLat] = useState(39.999387);
  const [zoom, setZoom] = useState(12);
  const [viewport, setViewport] = useState({
    latitude: lat,
    longitude: lng,
    zoom: zoom,
  });

  const mapboxApiKey =
    "pk.eyJ1IjoianVzdC16aiIsImEiOiJjbDkwMnJlcmwwbHI1M25vNXI4Y3Qyc25rIn0.Ep2w_2VsXfTdsbeBYikAXg";

  return (
    <>
      <div className="w-100 align-middle">
        <Map
          initialViewState={viewport}
          style={{ width: 600, height: 400 }}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          mapboxAccessToken={mapboxApiKey}
          onRender={(event) => event.target.resize()}
        >
          <Marker longitude={lng} latitude={lat}></Marker>
        </Map>
      </div>
    </>
  );
}
