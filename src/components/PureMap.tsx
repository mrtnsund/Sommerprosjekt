import React, { PureComponent } from "react";
import ReactMapGL, {
  NavigationControl,
  GeolocateControl,
} from "react-map-gl";
import MarkerComponent from "./MarkerComponent";

import "mapbox-gl/dist/mapbox-gl.css";
import "./marker.css";
require("dotenv").config();

export default class PureMap extends PureComponent {
  state = {
    viewport: {
      longitude: 5.3242,
      latitude: 60.393,
      zoom: 8,
    },
    markerLocations: [] as any,
  };

  addMarker = (event: any) => {
    let { markerLocations } = this.state;
    const coordinates = event.lngLat;

    let newid = 0;
    if (markerLocations.length !== 0) {
      newid = markerLocations.slice(-1)[0].id + 1;
    }

    const newMarker = {
      id: newid,
      longitude: coordinates[0],
      latitude: coordinates[1],
    };

    markerLocations = [...markerLocations, newMarker];
    this.setState({ markerLocations });
  };

  componentDidMount() {}

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        width="100vw"
        height="78vh"
        mapboxApiAccessToken={process.env.REACT_APP_API_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={(viewport) => this.setState({ viewport })}
        attributionControl={false}
        onClick={this.addMarker}
      >
        <div style={{ position: "absolute", right: 3, marginTop: "100%" }}>
          <NavigationControl />
          <GeolocateControl
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation={true}
          />
        </div>

        <MarkerComponent data={this.state.markerLocations} />
      </ReactMapGL>
    );
  }
}
