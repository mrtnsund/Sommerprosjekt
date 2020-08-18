import React, { useState, useEffect } from "react";
import {
  IonFab,
  IonFabButton,
  IonIcon,
  IonModal,
  IonButton,
  IonToolbar,
  IonTitle,
  IonHeader,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { listOutline } from "ionicons/icons";

export const MarkerListButton: React.FC<{ locations: any }> = ({
  locations,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [markers, setMarkers] = useState([]);

  
  useEffect(() => {
    setMarkers(locations);
  }, [locations]);

  const renderMarkerList = (list: any) => {
    return list.map((marker: any) => (
      <IonList key={marker.id}>
        <IonItem detail={false}>
          <IonLabel>
            <h1>{marker.name}</h1>
            <p>{marker.description}</p>
            </IonLabel>
        </IonItem>
      </IonList>
    ));
  };


  return (
    <IonFab vertical="bottom" horizontal="center" slot="fixed">
      <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
        <IonContent>
          <IonHeader translucent={true}>
            <IonToolbar>
              <IonTitle>Points of Interest</IonTitle>
              <IonButton slot="end" onClick={() => setShowModal(false)}>
                Close
              </IonButton>
            </IonToolbar>
          </IonHeader>
          {renderMarkerList(markers)}
        </IonContent>
      </IonModal>
      <IonFabButton size="small" onClick={() => setShowModal(true)}>
        <IonIcon icon={listOutline} />
      </IonFabButton>
    </IonFab>
  );
};
