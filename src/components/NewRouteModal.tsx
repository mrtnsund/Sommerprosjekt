import React, { useState } from "react";
import {
  IonModal,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonIcon,
  IonRow,
  IonGrid,
  IonCol,
} from "@ionic/react";
import { add, saveOutline } from "ionicons/icons";
import "../styles/popupmodal.css";
import Geocoder from "react-mapbox-gl-geocoder";

import directionService from "../services/directionServices";
import { dir } from "console";

require("dotenv").config();

const queryParams = {
  country: "no",
};

export const NewRouteModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [geocoderItemFrom, setGeocoderItemFrom] = useState({
    bbox: [],
    center: [],
    context: [],
    geometry: {
      coordinates: [],
      type: "",
    },
    id: "",
    place_name: "",
    properties: {},
    relevance: 0,
    text: "",
    type: "",
  });
  const [geocoderItemTo, setGeocoderItemTo] = useState({
    bbox: [],
    center: [],
    context: [],
    geometry: {
      coordinates: [],
      type: "",
    },
    id: "",
    place_name: "",
    properties: {},
    relevance: 0,
    text: "",
    type: "",
  });
  const [directions, setDirections] = useState({});

  const [viewport, setViewport] = useState({
    longitude: 5.3242,
    latitude: 60.393,
    zoom: 6,
  });

  const onFromSelected = (viewport: any, item: any) => {
    setViewport(viewport);
    setGeocoderItemFrom(item);
  };


  const onToSelected = (viewport: any, item: any) => {
    setViewport(viewport);
    setGeocoderItemTo(item);
  };

  const handleSaveClick = (event: any) => {
    event.preventDefault();
    let fromCoordinates = geocoderItemFrom.geometry.coordinates;
    let toCoordinates = geocoderItemTo.geometry.coordinates;

    let coordinates = `${fromCoordinates[0]},${fromCoordinates[1]};${toCoordinates[0]},${toCoordinates[1]}`;

    directionService
      .getDirections(coordinates)
      .then((directionObject) => {
        setDirections(directionObject);
        console.log(directionObject)
      })
      .catch((error) => {
        console.log(error);
        alert(`no directions found`);
      })
      .finally(() => setShowModal(false));
  };

  return (
    <IonContent>
      <IonModal
        isOpen={showModal}
        onDidDismiss={() => setShowModal(false)}
        cssClass="custom-height"
      >
        <IonContent>
          <IonHeader translucent={true}>
            <IonToolbar>
              <IonTitle>Add a new trip!</IonTitle>
              <IonButton slot="end" onClick={() => setShowModal(false)}>
                Close
              </IonButton>
            </IonToolbar>
          </IonHeader>
          <IonGrid>
            <IonRow>
              <IonCol>
                <p>From: </p>
              </IonCol>
              <IonCol>
                <Geocoder
                  mapboxApiAccessToken={process.env.REACT_APP_API_TOKEN}
                  viewport={viewport}
                  onSelected={onFromSelected}
                  hideOnSelect={true}
                  queryParams={queryParams}
                  updateInputOnSelect={true}
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <p>To: </p>
              </IonCol>
              <IonCol>
                <Geocoder
                  mapboxApiAccessToken={process.env.REACT_APP_API_TOKEN}
                  viewport={viewport}
                  onSelected={onToSelected}
                  hideOnSelect={true}
                  queryParams={queryParams}
                  updateInputOnSelect={true}
                />
              </IonCol>
            </IonRow>
          </IonGrid>
          <IonButton expand="block" size="large" onClick={handleSaveClick}>
            <IonIcon icon={saveOutline} />
            <p>Save</p>
          </IonButton>
        </IonContent>
      </IonModal>
      <IonButton
        expand="block"
        color="success"
        className="addButton"
        size="large"
        onClick={() => setShowModal(true)}
      >
        <IonIcon icon={add} />
        <p className="addButtonText">Add a new route</p>
      </IonButton>
    </IonContent>
  );
};
