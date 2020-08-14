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
  IonButton,
  IonIcon,
} from "@ionic/react";
import './RoutesPage.css';
import RoutesPageCard from "./RoutesPageCard";
import PureMap from "../../components/PureMap";
import { add } from "ionicons/icons";

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
      <IonButton expand="block" color="success" className="addButton" size="large">
          <IonIcon icon={add}/>
          <p className="addButtonText">Add a new route</p>
        </IonButton>
        <RoutesPageCard />
      </IonContent>
    </IonPage>
  );
};

export default RoutesPage;
