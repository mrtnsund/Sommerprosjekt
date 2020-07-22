import { IonCard, IonCardHeader, IonItem, IonIcon, IonCardSubtitle, IonCardContent } from "@ionic/react";
import React from "react";
import { archiveSharp, pencilSharp, trashSharp, caretDownSharp, flagOutline, pinOutline, ellipsisVertical, pin, flag } from "ionicons/icons";

const RoutesPageCard = () => {
    return (
        <IonCard>
        <IonCardHeader>
          <IonItem lines="none">
            <IonIcon slot="end" icon={archiveSharp} className="archiveIcon"/>
            <IonIcon slot="end" icon={pencilSharp} className="editIcon"/>
            <IonIcon slot="end" icon={trashSharp} className="deleteIcon"/>
          <IonCardSubtitle>
          </IonCardSubtitle>
          </IonItem>
          <IonItem lines="none">
            <IonIcon slot="start" icon={pin} className="pinIcon"/>
            <p className="destination">Bergen</p>
          </IonItem>
          <IonItem lines="none">
            <IonIcon slot="start" icon={ellipsisVertical} className="ellipsisIcon"/> 
          </IonItem>
          <IonItem lines="none">
            <IonIcon slot="start" icon={flag} className="flagIcon"/>
            <p className="destination">Stavanger</p>
          </IonItem>
        </IonCardHeader>

        <IonCardContent>
          <IonItem lines="none">
          <IonIcon slot="end" icon={caretDownSharp} className="expandIcon"/>

          </IonItem>
        </IonCardContent>
      </IonCard>
    )
}

export default RoutesPageCard;