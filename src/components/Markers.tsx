import React, { PureComponent } from "react";
import { Marker } from "react-map-gl";
import "../styles/marker.css";
import "mapbox-gl/dist/mapbox-gl.css";
import markerImg from "../images/marker.png";


export default class Markers extends PureComponent<{ data: any, onClick: any }> {

  render() {
    const { data, onClick } = this.props;
    

    return data.map((marker: any) => (
      <Marker
        key={marker.id}
        longitude={marker.longitude}
        latitude={marker.latitude}
        //in order to add marker at crosshair's location:
        //offsetLeft has to be -(half of the size of the icon).
        //offsetTop has to be -(size of the icon).
        offsetLeft={-20}
        offsetTop={-40}
      >
        <img className="marker" src={markerImg} onClick={() => onClick(marker)} alt=""></img>
        

      </Marker>
    ));
  }
}
