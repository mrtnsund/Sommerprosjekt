import ReactMapGL, { NavigationControl, Marker } from "react-map-gl";
import React, { PureComponent } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
require("dotenv").config();

interface MarkersProps {
  name: string;
  longitude: number;
  latitude: number;
}

const CITIES = [
  { name: "bergen", longitude: 60.39299, latitude: 5.32415 },
  { name: "bergen2", longitude: 60.59299, latitude: 5.42415 },
];

// PureComponent ensures that the markers are only rerendered when data changes
class Markers extends PureComponent<{ data: any }> {
  render() {
    const { data } = this.props;
    return data.map((city: MarkersProps) => (
      <Marker
        key={city.name}
        longitude={city.longitude}
        latitude={city.latitude}
      ></Marker>
    ));
  }
}

class PureMap extends PureComponent {
  state = {
    viewport: {
      latitude: 60.393,
      longitude: 5.3242,
      zoom: 8,
    },
  };

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        width="100vw"
        height="90vh"
        mapboxApiAccessToken={process.env.REACT_APP_API_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={(viewport) => this.setState({ viewport })}
      >
        <Marker latitude={this.state.viewport.latitude} longitude={this.state.viewport.longitude} />
        <div style={{ position: "absolute", right: 0, marginTop: "10%" }}>
          <NavigationControl />
        </div>
        <Markers data={CITIES} />

      </ReactMapGL>
    );
  }
}

export default PureMap;
