import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  
} from "@ionic/react";

import React from "react";
import { useLocation } from "react-router-dom";
import {
  mapOutline,
  mapSharp,
  homeOutline,
  homeSharp,
  carOutline,
  carSharp,
} from "ionicons/icons";
import "./Menu.css";

const username: string = "bruker";
const useremail: string = "bruker@sommerprosjekt.no";

interface Pages {
  title: string;
  path: string;
  icon: string;
  routerDirection?: string;
}

const routes = {
  appPages: [
    { title: "Dashboard", path: "/tabs/dashboard", icon: homeOutline },
    { title: "Map", path: "/tabs/map", icon: mapOutline },
    { title: "Routes", path: "/tabs/routes", icon: carOutline },
  ],
};

const renderListitems = (list: Pages[]) => {
  return list
    .filter((route) => !!route.path)
    .map((p) => (
      <IonMenuToggle key={p.title} auto-hide="false">
        <IonItem detail={false} routerLink={p.path} routerDirection="none">
          <IonIcon slot="start" icon={p.icon} />
          <IonLabel>{p.title}</IonLabel>
        </IonItem>
      </IonMenuToggle>
    ));
};

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList lines="none">{renderListitems(routes.appPages)}</IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
