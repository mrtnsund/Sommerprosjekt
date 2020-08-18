import {
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonAvatar,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonItem,
} from "@ionic/react";
import "./DashboardPage.css";
import React from "react";
import {
  analyticsOutline,
  carSportOutline,
  happyOutline,
  peopleCircleOutline,
  constructOutline,
} from "ionicons/icons";

const DashboardPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonGrid>
          <IonRow className="statistics">
            <IonCol>
              <p className="statisticsNo">1</p>
              <p className="statisticsText">TRIP</p>
            </IonCol>
            <IonCol>
              <p className="statisticsNo">23</p>
              <p className="statisticsText">LIKES</p>
            </IonCol>
            <IonCol>
              <p className="statisticsNo">22</p>
              <p className="statisticsText">LIKES</p>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid className="cardsContainer">
          <IonRow className="cards">
            <IonCol className="card en">
              <div className="iconContainer">
                <IonIcon icon={carSportOutline} className="icon"></IonIcon>
              </div>
              <p className="cardText">My trips</p>
            </IonCol>
            <IonCol className="card to">
              <div className="iconContainer">
                <IonIcon icon={happyOutline} className="icon"></IonIcon>
              </div>
              <p className="cardText">Give recommendation</p>
            </IonCol>
          </IonRow>
          <IonRow className="cards">
            <IonCol className="card tre">
              <div className="iconContainer">
                <IonIcon icon={peopleCircleOutline} className="icon"></IonIcon>
              </div>
              <p className="cardText">Friends</p>
            </IonCol>
            <IonCol className="card fire">
              <div className="iconContainer">
                <IonIcon icon={constructOutline} className="icon"></IonIcon>
              </div>
              <p className="cardText">Placeholder</p>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default DashboardPage;
