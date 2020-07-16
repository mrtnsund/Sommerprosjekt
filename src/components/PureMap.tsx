import ReactMapGL, {
  NavigationControl,
  Marker,
  GeolocateControl,
} from "react-map-gl";
import React, { PureComponent } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import "./marker.css";
require("dotenv").config();

interface MarkerProps {
  id: number;
  longitude: number;
  latitude: number;
}

// PureComponent ensures that the markers are only rerendered when data changes
class Markers extends PureComponent<{ data: any }> {
  render() {
    const { data } = this.props;

    return data.map((marker: MarkerProps) => (
      <Marker
        className="marker"
        key={marker.id}
        longitude={marker.longitude}
        latitude={marker.latitude}
      />
    ));
  }
}

class PureMap extends PureComponent {
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
    const locations = event.lngLat;

    let newid = 0;
    if (markerLocations.length !== 0) {
      newid = markerLocations.slice(-1)[0].id + 1;
    }

    const newMarker = {
      id: newid,
      longitude: locations[0],
      latitude: locations[1],
    };

    markerLocations = [...markerLocations, newMarker];
    this.setState({ markerLocations });
  };

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
        <Markers data={this.state.markerLocations} />
        <div style={{ position: "absolute", right: 3, marginTop: "5%" }}>
          <NavigationControl />
        </div>
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
      </ReactMapGL>
    );
  }
}

export default PureMap;
