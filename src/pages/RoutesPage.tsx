import React from "react";
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonAvatar,
  IonChip,
  IonLabel,
  IonIcon,
  IonSegment,
  IonSegmentButton,
} from "@ionic/react";
import {
  pencilSharp,
  personCircleOutline,
  trashSharp,
  archiveSharp,
} from "ionicons/icons";

const RoutesPage = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonSegment
            onIonChange={(e) => console.log("Segment selected", e.detail.value)}
          >
            <IonSegmentButton value="friends">
              <IonLabel>List</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="enemies">
              <IonLabel>Map</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Bergen to Oslo</IonCardSubtitle>
            <IonCardTitle>Første tur</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonChip slot="start">
              <IonAvatar>
                <IonIcon icon={personCircleOutline} />
              </IonAvatar>
              <IonLabel>Kit Bishop</IonLabel>
            </IonChip>
            <IonIcon slot="end" icon={archiveSharp} />
            <IonIcon slot="end" icon={pencilSharp} />
            <IonIcon slot="end" icon={trashSharp} />
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default RoutesPage;
