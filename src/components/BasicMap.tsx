import ReactMapGL, { NavigationControl, Marker } from "react-map-gl";
import React, { useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
require("dotenv").config();

const locations = [
  {
    latitude: 60.393,
    longitude: 5.3242,
  },
  {
    latitude: 60.493,
    longitude: 5.31,
  },
];

const BasicMap: React.FC = (props: any) => {
  const [viewport, setViewport] = useState({
    latitude: 60.393,
    longitude: 5.3242,
    zoom: 8,
  });

  return (
    <ReactMapGL
      width="100vw"
      height="90vh"
      latitude={viewport.latitude}
      longitude={viewport.longitude}
      zoom={viewport.zoom}
      mapboxApiAccessToken={process.env.REACT_APP_API_TOKEN}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      onViewportChange={setViewport}
    >
      <div style={{ position: "absolute", right: 0, marginTop: "10%" }}>
        <NavigationControl />
      </div>
    </ReactMapGL>
  );
};

export default BasicMap;
