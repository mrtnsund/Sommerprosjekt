import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
} from "@ionic/react";
import PureMap from "../components/PureMap";

const MapView: React.FC = () => {
  return (
    <IonPage id="map-view">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Map</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent class="map-page">
        <PureMap/>
      </IonContent>
    </IonPage>
  );
};

export default MapView;
