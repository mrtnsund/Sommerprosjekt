import { IonCard, IonCardHeader, IonItem, IonIcon, IonCardSubtitle, IonCardContent } from "@ionic/react";
import React from "react";
import { archiveSharp, pencilSharp, trashSharp, caretDownSharp, flagOutline, pinOutline, ellipsisVertical, pin, flag, ellipsisHorizontal } from "ionicons/icons";

const RoutesPageCard = () => {
    return (
        <IonCard>
        <IonCardHeader>
          <IonItem lines="none">
            <IonIcon slot="end" icon={archiveSharp} className="archiveIcon"/>
            <IonIcon slot="end" icon={pencilSharp} className="editIcon"/>
            <IonIcon slot="end" icon={trashSharp} className="deleteIcon"/>
          <IonCardSubtitle>
          <IonItem lines="none">
              <IonIcon icon={pin} className="pinIcon"/>
              <p className="destinationTo">Bergen</p>

              <IonIcon icon={ellipsisHorizontal} className="ellipsisIcon"/> 
              <p className="destinationFrom">Stavanger</p>
              <IonIcon icon={flag} className="flagIcon"/>

          </IonItem>
          </IonCardSubtitle>
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