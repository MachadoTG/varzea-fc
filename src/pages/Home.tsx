import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
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
import { IEventoDia } from "../interfaces/BasicInterfaces";
import "./Home.css";

const Home: React.FC = () => {
  const [ususarios, setUsuarios] = useState<IEventoDia[]>([]);
  useEffect(() => {
    listarUsuarios();
  }, []);

  const listarUsuarios = () => {
    const rnd = Math.random() * 10;
    const eventos = []
    const dia = new Date().toISOString();
    for (let index = 0; index < rnd; index++) {
      eventos.push({
        id: 1,
        titulo: "Um evento Qualquer " + (index + 1),
        descricao: randomString(Math.random() * 200),
        creationDate: dia,
        creationUser: 1,
        alterationDate: dia,
        alterationUser: 1
      })
    }
    setUsuarios(eventos);
  }

  function randomString(len: number) {
    var str = "";
    for (var i = 0; i < len; i++) {
      var rand = Math.floor(Math.random() * 62);
      var charCode = rand += rand > 9 ? (rand < 36 ? 55 : 61) : 48;
      str += String.fromCharCode(charCode);
    }
    return str; // After all loops are done, return the concatenated string
  }

  function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
    listarUsuarios();
    event.detail.complete();
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent>
          </IonRefresherContent>
        </IonRefresher>
        {ususarios?.map(
          (item: IEventoDia, index: number) => {
            return (
              <IonCard key={index}>
                <IonCardHeader>
                  <IonCardTitle>{item.titulo}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <p>{item.descricao}</p>
                </IonCardContent>
              </IonCard>
            );
          }
        )}

      </IonContent>
    </IonPage>
  );
};

export default Home;
