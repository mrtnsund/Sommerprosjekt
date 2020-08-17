import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonPage,
  IonMenuButton,
  IonTitle,
  IonContent,
} from "@ionic/react";
import PureMap from "../../components/PureMap";

const RoutesPageMap = () => {
  return (
    <div>
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
          <PureMap />
        </IonContent>
      </IonPage>
    </div>
  );
};

export default RoutesPageMap;
