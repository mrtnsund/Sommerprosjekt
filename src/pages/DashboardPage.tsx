import {
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonAvatar,
} from "@ionic/react";
import React from "react";

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
        <div style={{ marginLeft: "5%" }}>
          <IonAvatar>
            <img src="https://akamai.vgc.no/v2/images/9a407910-0876-4fce-8bca-14fe2865ec3a?fit=crop&h=2000&w=1831&s=b6bd65a63095b2a40a8cf3e6632e54865b576b82" />
          </IonAvatar>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default DashboardPage;
