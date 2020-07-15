import {
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import Header from "../components/Header";

const DashboardPage: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Dashboard</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h1>Welcome to the Dashboard</h1>
      </IonContent>
    </IonPage>
  );
};

export default DashboardPage;
