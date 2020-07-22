import { IonCard, IonCardHeader, IonItem, IonIcon, IonCardSubtitle, IonCardTitle, IonCardContent } from "@ionic/react";
import React from "react";
import { archiveSharp, pencilSharp, trashSharp, caretDownSharp } from "ionicons/icons";

const RoutesPageCard = () => {
    return (
        <IonCard>
        <IonCardHeader>
          <IonItem lines="none">
            <IonIcon slot="end" icon={archiveSharp} className="archiveIcon"/>
            <IonIcon slot="end" icon={pencilSharp} className="editIcon"/>
            <IonIcon slot="end" icon={trashSharp} className="deleteIcon"/>
          <IonCardSubtitle>
            <p>10 - 14 july</p>
          </IonCardSubtitle>
          </IonItem>
          <IonItem lines="none">
          <IonCardTitle>Første tur</IonCardTitle>
          </IonItem>
        </IonCardHeader>

        <IonCardContent>
          <IonItem lines="none">
          <IonIcon slot="end" icon={caretDownSharp} className="archiveIcon"/>

          </IonItem>
        </IonCardContent>
      </IonCard>
    )
}

export default RoutesPageCard;