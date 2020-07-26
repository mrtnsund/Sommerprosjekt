import React, { PureComponent } from "react";
import ReactMapGL, {
  NavigationControl,
  GeolocateControl,
  InteractiveMap,
  Popup,
} from "react-map-gl";
//@ts-ignore
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
import MarkerComponent from "./MarkerComponent";
import "mapbox-gl/dist/mapbox-gl.css";
import markerService from "../services/markerServices";
import MapAddButton from "./MapAddButton";
import Crosshair from "./Crosshair";
import MarkerInfo from "./MarkerInfo";

require("dotenv").config();

export default class PureMap extends PureComponent {
  state = {
    viewport: {
      longitude: 5.3242,
      latitude: 60.393,
      zoom: 7,
    },
    markerLocations: [] as any,
    popupInfo: null as any,
  };

  mapRef = React.createRef<InteractiveMap>() as any;

  _updateMarkerLocations = (newMarker: any) => {
    let { markerLocations } = this.state;

    markerLocations = [...markerLocations, newMarker];

    this.setState({ markerLocations });
  };

  _addMarker = () => {
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
        name: "",
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

  _addDirections() {
    const map = this.mapRef.current.getMap();
    const directions = new MapboxDirections({
      accessToken: process.env.REACT_APP_API_TOKEN,
      unit: "metric",
      profile: "mapbox/driving",
    });

    map.addControl(directions, "top-left");
  }

  _updateViewport = (viewport: any) => {
    this.setState({ viewport });
  };

  _deleteMarker = (id: number) => {
    let { markerLocations } = this.state;

    markerService
      .remove(id)
      .then((returned) => {
        console.log(`deleted marker with id ${id}`);
        markerLocations = markerLocations.filter(
          (marker: any) => marker.id !== id
        );
        this.setState({ markerLocations });
      })
      .catch((error) => console.log(error));
  };

  _onClickMarker = (marker: any) => {
    this.setState({ popupInfo: marker });
  };

  _renderPopup() {
    const { popupInfo } = this.state;

    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeOnClick={false}
          onClose={() => this.setState({ popupInfo: null })}
        >
          <MarkerInfo data={popupInfo} />
        </Popup>
      )
    );
  }

  componentDidMount() {
    this._addDirections();

    markerService.getAll().then((markerLocations: any) => {
      this.setState({ markerLocations });
    });
  }

  render() {
    return (
      <div style={{ position: "absolute", width: "100%", height: "100%" }}>
        <ReactMapGL
          ref={this.mapRef}
          {...this.state.viewport}
          width="100%"
          height="100%"
          mapboxApiAccessToken={process.env.REACT_APP_API_TOKEN}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          onViewportChange={this._updateViewport}
          attributionControl={false}
        >
          <MarkerComponent
            data={this.state.markerLocations}
            onClick={this._onClickMarker}
          />

          {this._renderPopup()}
          <Crosshair />
          <MapAddButton
            mapRef={this.mapRef}
            markerLocations={this.state.markerLocations}
            updateMarkers={this._updateMarkerLocations}
          />

          <div style={{ position: "absolute", right: 25, marginTop: "14%" }}>
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
