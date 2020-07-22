import {
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
} from "@ionic/react";
import React from "react";
import { NewMarkerModal } from "../components/SaveMarkerModal";

const DashboardPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle size="large">Dashboard</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h1>Welcome to the Dashboard</h1>
        <NewMarkerModal/>
      </IonContent>
    </IonPage>
  );
};

export default DashboardPage;
