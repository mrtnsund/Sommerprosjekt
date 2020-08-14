import React, { useState } from "react";
import {
  IonList,
  IonItem,
  IonInput,
  IonButton,
  IonLabel,
} from "@ionic/react";
import markerService from "../services/markerServices";

export const MarkerForm: React.FC<{
  markerCoordinates: any;
  nearestPlace: any;
  markerLocations: any;
  handleSaveClick: any;
  updateMarkers: any;
}> = ({
  markerCoordinates,
  nearestPlace,
  markerLocations,
  handleSaveClick,
  updateMarkers,
}) => {
  const [pointName, setPointName] = useState<string>();
  const [description, setDescription] = useState<string>();

  const addMarker = (event: any) => {
    //stops page from refreshing after new marker is added.
    event.preventDefault();

    let { lng, lat } = markerCoordinates;

    let newid = 0;
    if (markerLocations.length !== 0) {
      newid = markerLocations.slice(-1)[0].id + 1;
    }

    if (lng !== undefined && lat !== undefined) {
      const newMarker = {
        id: newid,
        name: pointName,
        nearestLocation: nearestPlace,
        description: description,
        longitude: lng,
        latitude: lat,
      };

      markerService
        .create(newMarker)
        .then((returnedMarker) => {
          console.log("new marker added: ", returnedMarker);
          updateMarkers(returnedMarker);
        })
        .catch((error) => console.log(error));
      handleSaveClick();
    } else {
      //Add some error handling here?
      return;
    }
  };

  return (
    <form onSubmit={addMarker}>
      <IonList>
        <IonItem>
          <IonLabel position="floating">Name of Location</IonLabel>
          <IonInput
            value={pointName}
            placeholder={"Name of location..."}
            onIonChange={(e) => setPointName(e.detail.value!)}
            clearInput
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Description</IonLabel>
          <IonInput
            value={description}
            placeholder="Give a good description..."
            onIonChange={(e) => setDescription(e.detail.value!)}
            clearInput
          ></IonInput>
        </IonItem>
        <IonButton type="submit" expand="block">
          Save
        </IonButton>
      </IonList>
    </form>
  );
};
