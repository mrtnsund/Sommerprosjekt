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

require("dotenv").config();

const queryParams = {
  country: "no",
};

export const NewRouteModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [geocoderItemFrom, setGeocoderItemFrom] = useState("");
  const [geocoderItemTo, setGeocoderItemTo] = useState("");
  const [viewport, setViewport] = useState({
    longitude: 5.3242,
    latitude: 60.393,
    zoom: 6,
  });

  const onFromSelected = (viewport: any, item: any) => {
    setViewport(viewport);
    console.log("From: ", item.geometry.coordinates);
    setGeocoderItemFrom(item);
  };

  const onToSelected = (viewport: any, item: any) => {
    setViewport(viewport);
    console.log("To: ", item.geometry.coordinates);
    setGeocoderItemTo(item);
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
                  initialInputValue=""
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
                  initialInputValue=""
                />
              </IonCol>
            </IonRow>
          </IonGrid>
          <IonButton expand="block" size="large">
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
