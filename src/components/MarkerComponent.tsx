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
        //in order to add marker add proper location:
        //offsetLeft needs to be -(half of the size of the icon).
        //offsetTop needs to be -(size of the icon).
        offsetLeft={-20}
        offsetTop={-40}
      />
    ));
  }
}
