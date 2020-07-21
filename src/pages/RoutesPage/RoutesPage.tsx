import React, { useState } from "react";
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonLabel,
  IonSegment,
  IonSegmentButton,
} from "@ionic/react";
import './RoutesPage.css';
import RoutesPageCard from "./RoutesPageCard";
import PureMap from "../../components/PureMap";

const RoutesPage: React.FC = () => {
  const [viewMap, setViewMap] = useState(false)

  const toggleView = () => {
    setViewMap(!viewMap);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonSegment
            onClick={() => toggleView()}
            onIonChange={(e) => console.log('Segment selected', e.detail.value)}
          >
            <IonSegmentButton value="list">
              <IonLabel>List</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="map">
              <IonLabel>Map</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      { (viewMap) ? <PureMap /> : <RoutesPageCard /> }
      </IonContent>
    </IonPage>
  );
};

export default RoutesPage;
