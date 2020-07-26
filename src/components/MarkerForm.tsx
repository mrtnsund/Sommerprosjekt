import React, { useState } from "react";
import {
  IonList,
  IonItemDivider,
  IonItem,
  IonInput,
  IonButton,
} from "@ionic/react";
import markerService from "../services/markerServices";

export const MarkerForm: React.FC<{
  markerCoordinates: any;
  markerLocations: any;
  handleSaveClick: any;
  updateMarkers: any;
}> = ({
  markerCoordinates,
  markerLocations,
  handleSaveClick,
  updateMarkers,
}) => {
  const [pointName, setPointName] = useState<string>();

  const addMarker = () => {
    let { lng, lat } = markerCoordinates;

    let newid = 0;
    if (markerLocations.length !== 0) {
      newid = markerLocations.slice(-1)[0].id + 1;
    }

    if (lng !== undefined && lat !== undefined) {
      const newMarker = {
        id: newid,
        name: pointName,
        longitude: lng,
        latitude: lat,
      };

      markerService
        .create(newMarker)
        .then((returnedMarker) => {
          console.log("added: ", returnedMarker);
          updateMarkers(returnedMarker);
        })
        .catch((error) => console.log(error));
      handleSaveClick();
    } else {
      //Add some error handling here?
      return;
    }
  };

  const handleSubmit = (event: any) => {
    addMarker();

    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <IonList>
        <IonItemDivider>Name of Point of Interest</IonItemDivider>
        <IonItem>
          <IonInput
            value={pointName}
            placeholder="Enter input..."
            onIonChange={(e) => setPointName(e.detail.value!)}
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
