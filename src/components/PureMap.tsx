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
import markerService from "../services/markerServices";
import Crosshair from "./Crosshair";
import FabMapButton from "./FabMapButton";
import "./map.css";
import { IonButton } from "@ionic/react";

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
    event.preventDefault();
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
      markerService
        .create(newMarker)
        .then((returnedMarker) => {
          markerLocations = [...markerLocations, returnedMarker];
          this.setState({ markerLocations });
          console.log("added: ", newMarker);
        })
        .catch((error) => console.log(error));
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

    markerService.getAll().then((markerLocations: any) => {
      this.setState({ markerLocations });
    });
  }
  _updateViewport = (viewport: any) => {
    this.setState({ viewport });
  };

  deleteAll = () => {
    let { markerLocations } = this.state;

    console.log(markerLocations);
    for (let i = 0; i < markerLocations.length; i++) {
      let id = markerLocations[i].id;
      console.log(id);

      markerService
        .remove(id)
        .then((returned) => {
          console.log("deleted: ", returned);
          markerLocations = markerLocations.filter((m: any) => m.id !== id);
          this.setState({ markerLocations });

        })
        .catch((error) => console.log(error));
    }

  };

  render() {
    return (
      <div>
        <ReactMapGL
          className="mapContainer"
          ref={this.mapRef}
          {...this.state.viewport}
          width="100%"
          height="78.5vh"
          mapboxApiAccessToken={process.env.REACT_APP_API_TOKEN}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          onViewportChange={this._updateViewport}
          attributionControl={false}
        >
          <MarkerComponent data={this.state.markerLocations} />
          <Crosshair />
          <FabMapButton addMarker={this.addCenterMarker} />
          <IonButton
            shape="round"
            style={{ marginTop: "40%" }}
            onClick={this.deleteAll}
          >
            !!RemoveAllMarkers!!
          </IonButton>

          <div style={{ position: "absolute", right: 3, marginTop: "50%" }}>
            <NavigationControl />
            <GeolocateControl
              positionOptions={{ enableHighAccuracy: true }}
              trackUserLocation={true}
              onViewportChange={this._updateViewport}
              showUserLocation={true}
            />
          </div>
        </ReactMapGL>
      </div>
    );
  }
}
