import {
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonAvatar,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import './DashboardPage.css';
import React from "react";

const DashboardPage: React.FC = () => {
  return (
    <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle size="large">Dashboard</IonTitle>
          </IonToolbar>
        </IonHeader>

      <IonContent>
        <IonGrid className="cardsContainer">
          <IonRow className="cards">
            <IonCol className="card en">
              My trips
            </IonCol>
            <IonCol className="card to">Give recommendations</IonCol>
          </IonRow>
          <IonRow className="cards">
            <IonCol className="card tre">Placeholder</IonCol>
            <IonCol className="card fire">Placeholder</IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default DashboardPage;
