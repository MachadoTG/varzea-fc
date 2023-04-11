import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import Calendario from "./pages/Calendario";
import Eu from "./pages/Eu";
import Home from "./pages/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/display.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";

/* Theme variables */
import {
  buildOutline,
  calendarOutline,
  homeOutline,
  personOutline,
} from "ionicons/icons";
import Configuracao from "./pages/Configuracao";
import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/eu">
            <Eu />
          </Route>
          <Route path="/calendario">
            <Calendario />
          </Route>
          <Route path="/configuracao">
            <Configuracao />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon aria-hidden="true" icon={homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="eu" href="/eu">
            <IonIcon aria-hidden="true" icon={personOutline} />
            <IonLabel>Eu</IonLabel>
          </IonTabButton>
          <IonTabButton tab="calendario" href="/calendario">
            <IonIcon aria-hidden="true" icon={calendarOutline} />
            <IonLabel>Calendario</IonLabel>
          </IonTabButton>
          <IonTabButton tab="configuracao" href="/configuracao">
            <IonIcon aria-hidden="true" icon={buildOutline} />
            <IonLabel>Configuracao</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
