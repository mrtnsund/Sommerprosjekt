import ReactMapGL, { NavigationControl } from 'react-map-gl';
import React, { useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
require('dotenv').config();


const MapContainer: React.FC = (props: any) => {


  const [viewport, setViewport] = useState({
    latitude: 60.3930,
    longitude: 5.3242,
    zoom: 8
  })

  return (

    <ReactMapGL
      width='100vw'
      height='90vh'
      latitude={viewport.latitude}
      longitude={viewport.longitude}
      zoom={viewport.zoom}
      mapboxApiAccessToken={process.env.REACT_APP_API_TOKEN}
      mapStyle='mapbox://styles/mapbox/streets-v11'
      onViewportChange={setViewport}
    >
      <div style={{ position: 'absolute', right: 0, marginTop: '10%'}}>
        <NavigationControl />
      </div>

    </ReactMapGL>

  )

}

export default MapContainer