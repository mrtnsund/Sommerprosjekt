import React, { useState } from "react";
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonButton,
  IonIcon,
} from "@ionic/react";
import "./RoutesPage.css";
import RoutesPageCard from "./RoutesPageCard";
import { add } from "ionicons/icons";

const RoutesPage: React.FC = () => {
  const [viewMap, setViewMap] = useState(false);

  const toggleView = () => {
    setViewMap(!viewMap);
  };

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
      <RoutesPageCard />

      <IonButton
        expand="block"
        color="success"
        className="addButton"
        size="large"
      >
        <IonIcon icon={add} />
        <p className="addButtonText">Add a new route</p>
      </IonButton>
    </IonPage>
  );
};

export default RoutesPage;
