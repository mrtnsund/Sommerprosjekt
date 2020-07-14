import { IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import React from 'react';
import DashboardPage from '../pages/DashboardPage';
import { Redirect, Route } from 'react-router';
import { calendar, informationCircle } from 'ionicons/icons';

const RoutesTabs: React.FC = () => {
    return (
        <IonTabs>
        <IonRouterOutlet>
          <Redirect exact path="/tabs" to="/tabs/schedule" />
          {/*
            Using the render method prop cuts down the number of renders your components will have due to route changes.
            Use the component prop when your component depends on the RouterComponentProps passed in automatically.
          */}
          <Route path="/dashboard" component={DashboardPage} exact={true} />
          <Route path="/tabs/schedule/:id" component={DashboardPage} />
          <Route path="/tabs/speakers/sessions/:id" component={DashboardPage} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="schedule" href="/tabs/schedule">
            <IonIcon icon={calendar} />
            <IonLabel>Schedule</IonLabel>
          </IonTabButton>
  
          <IonTabButton tab="about" href="/tabs/about">
            <IonIcon icon={informationCircle} />
            <IonLabel>About</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    )
}

export default RoutesTabs;