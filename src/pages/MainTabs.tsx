import { IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import React from 'react';
import DashboardPage from './DashboardPage';
import { Redirect, Route } from 'react-router';
import { homeOutline, mapOutline, carOutline } from 'ionicons/icons';
import MapView from './MapView';


interface MainTabsProps { }


const MainTabs: React.FC<MainTabsProps> = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact path="/tabs" to="/tabs/dashboard"/>
        {/*
            Using the render method prop cuts down the number of renders your components will have due to route changes.
            Use the component prop when your component depends on the RouterComponentProps passed in automatically.
          */}
        <Route path="/tabs/dashboard" render={() => <DashboardPage />} exact={true} />
        <Route path="/tabs/map" render={() => <MapView />} exact={true} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="dashboard" href="/tabs/dashboard">
          <IonIcon icon={homeOutline} />
          <IonLabel>Dashboard</IonLabel>
        </IonTabButton>
        <IonTabButton tab="map" href="/tabs/map">
          <IonIcon icon={mapOutline} />
          <IonLabel>Map</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  )
}

export default MainTabs;