import React, {  } from "react";
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle } from "@ionic/react";
import PureMap from "../../components/PureMap";

const RoutesPageMap = () => {
    return (
        <div>
            <IonHeader>
            <IonToolbar>
            <IonButtons slot="start">
                <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Routes</IonTitle>
            </IonToolbar>
            </IonHeader>
            <PureMap />
        </div>
    )
}

export default RoutesPageMap;