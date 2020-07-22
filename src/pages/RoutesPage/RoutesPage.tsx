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
  IonTitle,
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
          <IonTitle>Routes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <RoutesPageCard />
      </IonContent>
    </IonPage>
  );
};

export default RoutesPage;
