import React, { useState } from 'react';
import { IonModal, IonButton, IonContent } from '@ionic/react';
import "../styles/savemarkermodal.css"

export const NewMarkerModal: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <IonContent>
      <IonModal isOpen={showModal} cssClass='my-custom-class' onDidDismiss={() => setShowModal(false)}>
        <p>This is modal content</p>
        <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
      </IonModal>
      <IonButton onClick={() => setShowModal(true)}>Show Modal</IonButton>
    </IonContent>
  );
};