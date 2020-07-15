import ReactMapGL, { NavigationControl, Marker } from "react-map-gl";
import React, { PureComponent } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import "./marker.css";
require("dotenv").config();

interface MarkerProps {
  name: string;
  longitude: number;
  latitude: number;
}

const locations = [
  { name: "bergen", latitude: 60.39299, longitude: 5.32415 },
  { name: "bergen2", latitude: 60.59299, longitude: 5.42415 },
];

// PureComponent ensures that the markers are only rerendered when data changes
class Markers extends PureComponent<{ data: any }> {
  render() {
    const { data } = this.props;
    console.log("data", data);

    return data.map((marker: MarkerProps) => (
      <Marker
        className="marker"
        key={marker.name}
        longitude={marker.longitude}
        latitude={marker.latitude}
      />
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
        <Markers data={locations} />
        <div style={{ position: "absolute", right: 0, marginTop: "10%" }}>
          <NavigationControl />
        </div>
      </ReactMapGL>
    );
  }
}

export default PureMap;
