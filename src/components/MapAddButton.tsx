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
import locationService from "../services/locationServices";
import { MarkerForm } from "./MarkerForm";

const MapAddButton: React.FC<{ mapRef: any; markerLocations: any, updateMarkers: any }> = ({
  mapRef,
  markerLocations,
  updateMarkers
}) => {
  const [showModal, setShowModal] = useState(false);
  const [coordinates, setCoordinates] = useState({ lng: 0, lat: 0 });
  const [showAddedToast, setShowAddedToast] = useState(false);
  const [placeName, setPlaceName] = useState<any>("");

  const closeModalAndToast = () => {
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
        setPlaceName(loc.features[0].place_name);
      })
      .catch((error) => {
        setPlaceName("No location found.");
      });
  };

  return (
    <IonFab vertical="bottom" horizontal="end" slot="fixed">
      <IonModal
        isOpen={showModal}
        cssClass="my-custom-class"
        onDidDismiss={() => setShowModal(false)}
      >
        <p>
          Location: {placeName}
          <br />
          Longitude: {coordinates.lng}
          <br />
          Latitude: {coordinates.lat}
        </p>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Add new marker</IonTitle>
            <IonButton slot="end" onClick={() => setShowModal(false)}>
              close
            </IonButton>
          </IonToolbar>
        </IonHeader>

        <MarkerForm
          markerCoordinates={coordinates}
          handleSaveClick={closeModalAndToast}
          markerLocations={markerLocations}
          updateMarkers={updateMarkers}
        />
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

export default MapAddButton;