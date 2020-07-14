import ReactMapGL from 'react-map-gl';
import React, { useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
require('dotenv').config();


const MapContainer: React.FC = (props:any) => {


  const [viewport, setViewport] = useState({
    latitude: 60.3930,
    longitude: 5.3242,
    zoom: 13
  })

  return (
    <div>
      <ReactMapGL
        width='100vw'
        height='100vh'
        latitude={viewport.latitude}
        longitude={viewport.longitude}
        zoom={viewport.zoom}
        mapboxApiAccessToken={process.env.REACT_APP_API_TOKEN}
        mapStyle='mapbox://styles/mapbox/streets-v11'
        onViewportChange={setViewport}
      >

      </ReactMapGL>
    </div>
  )

}

export default MapContainer