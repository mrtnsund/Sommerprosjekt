import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import Header from '../components/Header';

const DashboardPage: React.FC = () => {
  return (
    <IonPage>

      <Header />
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Dashboard</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Dashboard" />
      </IonContent>
    </IonPage>
  );
};

export default DashboardPage;
