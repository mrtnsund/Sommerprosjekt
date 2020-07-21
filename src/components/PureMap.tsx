import React, { PureComponent } from "react";
import ReactMapGL, {
  NavigationControl,
  GeolocateControl,
  InteractiveMap,
} from "react-map-gl";
//@ts-ignore
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
import MarkerComponent from "./MarkerComponent";
import "mapbox-gl/dist/mapbox-gl.css";
import "./marker.css";
import markerService from "../services/markerServices";
import Crosshair from "./Crosshair";
import "./crosshair.css";
import FabMapButton from "./FabMapButton";

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

  mapRef = React.createRef<InteractiveMap>() as any;

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

  addCenterMarker = () => {
    const map = this.mapRef.current.getMap();
    let { lng, lat } = map.getCenter();
    let { markerLocations } = this.state;

    let newid = 0;
    if (markerLocations.length !== 0) {
      newid = markerLocations.slice(-1)[0].id + 1;
    }

    if (lng !== undefined && lat !== undefined) {
      const newMarker = {
        id: newid,
        longitude: lng,
        latitude: lat,
      };
      markerLocations = [...markerLocations, newMarker];
      this.setState({ markerLocations });
    } else {
      //Add some error handling here.
      return;
    }
  };

  addNavigationControl() {
    const map = this.mapRef.current.getMap();
    const directions = new MapboxDirections({
      accessToken: process.env.REACT_APP_API_TOKEN,
      unit: "metric",
      profile: "mapbox/driving",
    });

    map.addControl(directions, "top-left");
  }

  componentDidMount() {
    this.addNavigationControl();

    markerService.getMarkers().then((markerLocations: any) => {
      this.setState({ markerLocations });
    });
  }
  _updateViewport = (viewport: any) => {
    this.setState({viewport});
  }

  render() {
    return (
      <div>
        <ReactMapGL
          ref={this.mapRef}
          {...this.state.viewport}
          width="100vw"
          height="78vh"
          mapboxApiAccessToken={process.env.REACT_APP_API_TOKEN}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          onViewportChange={this._updateViewport}
          attributionControl={false}
        >
          <Crosshair />
          <FabMapButton
            addMarker={this.addCenterMarker}
          />

          <div style={{ position: "absolute", right: 3, marginTop: "50%" }}>
            <NavigationControl />
            <GeolocateControl
              positionOptions={{ enableHighAccuracy: true }}
              trackUserLocation={true}
              onViewportChange={this._updateViewport}
              showUserLocation={true}
            />
          </div>

          <MarkerComponent data={this.state.markerLocations} />
        </ReactMapGL>
      </div>
    );
  }
}
