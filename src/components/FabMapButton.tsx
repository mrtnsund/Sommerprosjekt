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
import locationService from "../services/locationServices"

const FabMapButton: React.FC<{ addMarker: any; mapRef: any }> = ({
  addMarker,
  mapRef,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [coordinates, setCoordinates] = useState({ lng: 0, lat: 0 });
  const [showAddedToast, setShowAddedToast] = useState(false);
  const [placeName, setPlaceName] = useState("") as any

  const saveMarker = () => {
    addMarker();
    setShowModal(false);
    setShowAddedToast(true);
  };

  const openModal = () => {
    let { longitude, latitude } = mapRef.current.props;
    setCoordinates({ lng: longitude, lat: latitude });
    setShowModal(true);
    
    locationService
      .getLocation(longitude, latitude)
      .then((loc: any) => {
        setPlaceName(loc.features[0].place_name)
      })
      .catch(error => {
        return
      })
  };

  return (
    <IonFab vertical="bottom" horizontal="end" slot="fixed">
      <IonModal
        isOpen={showModal}
        cssClass="my-custom-class"
        onDidDismiss={() => setShowModal(false)}
      >
        <p>
          Stedsnavn: {placeName}
          <br/>
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
