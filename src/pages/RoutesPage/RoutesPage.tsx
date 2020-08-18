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
import { NewRouteModal } from "../../components/NewRouteModal";

const RoutesPage: React.FC = () => {
  const [viewMap, setViewMap] = useState(false);
  const [modalState, setModalState]= useState(false);

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

      <NewRouteModal/>

      
    </IonPage>
  );
};

export default RoutesPage;
