import React, { useState } from "react";
import {
  IonFab,
  IonFabButton,
  IonIcon,
  IonFabList,
  IonModal,
  IonButton,
  IonHeader,
  IonToast,
  IonToolbar,
  IonTitle,
} from "@ionic/react";
import { add, flagOutline } from "ionicons/icons";
import "../styles/savemarkermodal.css";

const FabMapButton: React.FC<{ addMarker: any; mapRef: any }> = ({
  addMarker,
  mapRef,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [showAddedToast, setShowAddedToast] = useState(false);

  const saveMarker = () => {
    addMarker();
    setShowModal(false);
    setShowAddedToast(true);
  };

  const openModal = () => {
    let { latitude, longitude } = mapRef.current.props;
    setCoordinates({ lat: latitude, lng: longitude });
    setShowModal(true);
  };

  return (
    <IonFab vertical="bottom" horizontal="end" slot="fixed">
      <IonModal
        isOpen={showModal}
        cssClass="my-custom-class"
        onDidDismiss={() => setShowModal(false)}
      >
        <p>
          Longitude: {coordinates.lng}
          <br />
          Latitude: {coordinates.lat}
        </p>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Add new marker</IonTitle>
            <IonButton
              slot="end"
              onClick={() => setShowModal(false)}
            >close</IonButton>
          </IonToolbar>
        </IonHeader>

        <IonButton expand="block" onClick={() => saveMarker()}>
          Save
        </IonButton>
      </IonModal>
      <IonToast
        isOpen={showAddedToast}
        onDidDismiss={() => setShowAddedToast(false)}
        message="New marker added."
        duration={1000}
      />

      <IonFabButton size="small">
        <IonIcon icon={add} />
      </IonFabButton>
      <IonFabList side="top">
        <IonFabButton onClick={() => openModal()}>
          <IonIcon icon={flagOutline} />
        </IonFabButton>
      </IonFabList>
    </IonFab>
  );
};

export default FabMapButton;
