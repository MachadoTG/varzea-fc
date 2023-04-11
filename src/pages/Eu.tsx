import {
  IonContent,
  IonHeader,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  RefresherEventDetail
} from "@ionic/react";
import { useEffect, useState } from "react";
import { getUsuario } from "../api/ApiJsonServer";
import { IUsuario } from "../interfaces/BasicInterfaces";
import "./Eu.css";

const Eu: React.FC = () => {
  const [ususario, setUsuario] = useState<IUsuario>();
  useEffect(() => {
    getUsuarioInfo();
  }, []);

  const getUsuarioInfo = () => {
    getUsuario(1).then(response => setUsuario(response));
  }

  function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
    getUsuarioInfo();
    event.detail.complete();
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Eu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Eu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent>
          </IonRefresherContent>
        </IonRefresher>
      </IonContent>
    </IonPage>
  );
};

export default Eu;
