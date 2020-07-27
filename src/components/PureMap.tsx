import React, { PureComponent } from "react";
import ReactMapGL, {
  NavigationControl,
  GeolocateControl,
  InteractiveMap,
} from "react-map-gl";
//@ts-ignore
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
import Markers from "./Markers";
import "mapbox-gl/dist/mapbox-gl.css";
import "../styles/popupmodal.css";
import markerService from "../services/markerServices";
import MapAddButton from "./MapAddButton";
import Crosshair from "./Crosshair";
import {
  IonModal,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonItem,
} from "@ionic/react";

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
    showModalPopup: false as boolean,
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
    this.setState({ showModalPopup: true });
  };
  _closeModal() {
    this.setState({ showModalPopup: false });
  }

  _renderPopup() {
    const { popupInfo } = this.state;

    

    return (
      popupInfo && (
       
        <IonModal
          isOpen={this.state.showModalPopup}
          cssClass="custom-height"
          onDidDismiss={() => this._closeModal()}
        >
          <IonContent>
            <IonHeader>
              <IonToolbar>
                <IonTitle>{popupInfo.name} </IonTitle>
                <IonButton slot="end" onClick={() => this._closeModal()}>
                  close
                </IonButton>
                <IonItem>
                  Lng: {popupInfo.longitude}
                  <br />
                  Lat: {popupInfo.latitude}
                </IonItem>
              </IonToolbar>
            </IonHeader>
            <IonItem>Nearby: {popupInfo.nearestLocation}</IonItem>
            <IonItem>Description: {popupInfo.description} </IonItem>
          </IonContent>
        </IonModal>
      )
    );
  }

  componentDidMount() {
    //this._addDirections();

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
          <Markers
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

          <div style={{ position: "absolute", right: 3, marginTop: "4%" }}>
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
