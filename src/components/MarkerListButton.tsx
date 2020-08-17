import React from "react";
import { IonContent, IonFab, IonFabButton, IonIcon } from "@ionic/react";
import { listOutline } from "ionicons/icons";

export const RoutesListButton = () => {
  return (
      <IonFab vertical="center" horizontal="end" slot="fixed" >
        <IonFabButton
          size="small"
          onClick={() => alert("hello")}
        >
          <IonIcon icon={listOutline}/>
        </IonFabButton>
      </IonFab>
  );
};
