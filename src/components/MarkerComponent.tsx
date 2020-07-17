import React, { PureComponent } from "react";
import { Marker } from "react-map-gl";
import "./marker.css";
import "mapbox-gl/dist/mapbox-gl.css";

interface MarkerProps {
  id: number;
  longitude: number;
  latitude: number;
}

export default class Markers extends PureComponent<{ data: any }> {
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
