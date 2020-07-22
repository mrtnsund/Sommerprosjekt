import React from "react";
import { IonFab, IonFabButton, IonIcon, IonFabList } from "@ionic/react";
import { add, flagOutline } from "ionicons/icons";


const FabMapButton: React.FC<{addMarker: any}> = ({addMarker}) => {
  return (
    <IonFab vertical="bottom" horizontal="end" slot="fixed">
      <IonFabButton size="small">
        <IonIcon icon={add} />
      </IonFabButton>
      <IonFabList side="top">
        <IonFabButton onClick={addMarker}>
          <IonIcon icon={flagOutline} />
        </IonFabButton>
      </IonFabList>
    </IonFab>
  );
};

export default FabMapButton;
