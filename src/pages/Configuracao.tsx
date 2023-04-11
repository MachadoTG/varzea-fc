import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToggle,
  IonToolbar,
  RefresherEventDetail,
} from "@ionic/react";
import { useEffect, useState } from "react";
import { getUsuario } from "../api/ApiJsonServer";
import { IUsuario } from "../interfaces/BasicInterfaces";
import "./Configuracao.css";

const Configuracao: React.FC = () => {
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
          <IonTitle>Configuracoes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Perfil</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent>
          </IonRefresherContent>
        </IonRefresher>

        {ususario ?
          <>
            <IonCard key={ususario.id}>
              <IonCardHeader>
                <IonCardTitle>Dados Pessoais</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonInput label="Nome" labelPlacement="floating" maxlength={20} value={ususario?.nome || ''}></IonInput>
                <IonInput label="Email" labelPlacement="floating" maxlength={20} value={ususario?.email || ''}></IonInput>
                <IonInput label="Telefone" labelPlacement="floating" maxlength={20} value={ususario?.telephone || ''}></IonInput>
              </IonCardContent>
            </IonCard>
            <IonCard key="2">
              <IonCardHeader>
                <IonCardTitle>Notificacoes</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonList>
                  <IonItem>
                    <IonToggle enableOnOffLabels={true}>Receber Emails</IonToggle>
                  </IonItem>
                  <IonItem>
                    <IonToggle enableOnOffLabels={true}>Ativar Notificacoes</IonToggle>
                  </IonItem>
                  <IonItem>
                    <IonToggle enableOnOffLabels={true}>Ativar Notificacoes via push</IonToggle>
                  </IonItem>
                </IonList>
              </IonCardContent>
            </IonCard>
          </>
          :
          <IonCard key="1">
            <h3>Erro ao buscar dados</h3>
          </IonCard>
        }
      </IonContent>
    </IonPage>
  );
};

export default Configuracao;
