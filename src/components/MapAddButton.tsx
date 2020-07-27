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
  IonContent,
} from "@ionic/react";
import { add, flagOutline, carOutline, trashOutline } from "ionicons/icons";
import "../styles/popupmodal.css";
import locationService from "../services/locationServices";
import { MarkerForm } from "./MarkerForm";

const MapAddButton: React.FC<{
  mapRef: any;
  markerLocations: any;
  updateMarkers: any;
  openDirections: any;
  removeDirections: any;
}> = ({ mapRef, markerLocations, updateMarkers, openDirections, removeDirections }) => {
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

  const testMapRef = () => {
    console.log(mapRef.current.getMap());
    const map = mapRef.current.getMap();
    openDirections(map)
  }

  return (
    <IonFab vertical="bottom" horizontal="end" slot="fixed">
      <IonModal
        isOpen={showModal}
        cssClass="custom-height"
        onDidDismiss={() => setShowModal(false)}
      >
        <IonContent>
          
          <IonHeader>
            <IonToolbar>
              <IonTitle>Add New Marker</IonTitle>
              <IonButton slot="end" onClick={() => setShowModal(false)}>
                close
              </IonButton>
            </IonToolbar>
          </IonHeader>
          <p>
            Near: {placeName}
            <br />
            Longitude: {coordinates.lng}
            <br />
            Latitude: {coordinates.lat}
          </p>

          <MarkerForm
            markerCoordinates={coordinates}
            nearestPlace={placeName}
            handleSaveClick={closeModalAndToast}
            markerLocations={markerLocations}
            updateMarkers={updateMarkers}
          />
        </IonContent>
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
        <IonFabButton onClick={openDirections}>
          <IonIcon icon={carOutline} />
        </IonFabButton>
        <IonFabButton onClick={removeDirections}>
          <IonIcon icon={trashOutline} />
        </IonFabButton>
      </IonFabList>
    </IonFab>
  );
};

export default MapAddButton;
