import React, {  } from "react";
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle } from "@ionic/react";

const RoutesPageMap = () => {
    return (
        <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Routes</IonTitle>
        </IonToolbar>
        </IonHeader>
    )
}

export default RoutesPageMap;