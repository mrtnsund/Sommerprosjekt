import { Component } from 'react';
import ReactMapGL from 'react-map-gl';
import React from 'react';
import './map.css'
import 'mapbox-gl/dist/mapbox-gl.css';
require('dotenv').config();

class MapContainer extends Component {

  state = {
    viewport: {
      width: "60vw",
      height: "80vh",
      latitude: 42.430472,
      longitude: -123.334102,
      zoom: 16
    }
  };

  render() {
    console.log('hello')
    return (
      <div className="mapContainer">
        <ReactMapGL
          {...this.state.viewport}
          mapboxApiAccessToken={process.env.REACT_APP_API_TOKEN}
          mapStyle='mapbox://styles/mapbox/streets-v11'
          onViewportChange={(viewport => this.setState(viewport))}
        />
          
        
      </div>
    );
  }
}

export default MapContainer