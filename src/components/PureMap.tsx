import ReactMapGL, { NavigationControl, Marker, MarkerProps } from "react-map-gl";
import React, { PureComponent } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import "./marker.css";
require("dotenv").config();

interface MarkersProps {
  name: string;
  longitude: number;
  latitude: number;
}

const locations = [
  { name: "bergen", longitude: 60.39299, latitude: 5.32415 },
  { name: "bergen2", longitude: 61.59299, latitude: 5.42415 },
];

// PureComponent ensures that the markers are only rerendered when data changes
class Markers extends PureComponent<{ data: any }> {
  render() {
    const { data } = this.props;
    console.log("data", data);
    
    return data.map((marker: MarkersProps) => (
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
        <Marker
          className="marker"
          latitude={60.393}
          longitude={5.3442}
        />
        <div style={{ position: "absolute", right: 0, marginTop: "10%" }}>
          <NavigationControl />
        </div>
        <Markers data={locations} />
      </ReactMapGL>
    );
  }
}

export default PureMap;
