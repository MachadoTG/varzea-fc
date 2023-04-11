import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonDatetime,
  IonHeader,
  IonIcon,
  IonModal,
  IonPage,
  IonProgressBar,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import { calendarNumberOutline } from "ionicons/icons";
import { useEffect, useRef, useState } from "react";
import { IEventoDia } from "../interfaces/BasicInterfaces";
import "./Calendario.css";

const Calendario: React.FC = () => {
  const [diaSelecionado, setDiaselecionado] = useState<string>(new Date().toISOString());
  const [carregando, setCarregando] = useState<boolean>(true);
  const [eventosDia, setEventoDia] = useState<IEventoDia[]>([]);
  const modal = useRef<HTMLIonModalElement>(null);
  useEffect(() => {
    loadEventosDia()
  }, [])

  const handleCalendario = (e: React.SyntheticEvent<HTMLIonDatetimeElement, Event>) => {
    const { value } = e.target as HTMLInputElement;
    setDiaselecionado(value);
    setCarregando(true)
    loadEventosDia();
  }

  const loadEventosDia = () => {
    setTimeout(() => {
      const rnd = (Math.random() * 10) / 3;
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
      setEventoDia(eventos);
      setCarregando(false)
    }, Math.random() * 5000)
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



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="primary">
            <IonButton fill="solid" id="open-modal" color="primary">
              {new Date(diaSelecionado).toLocaleDateString("pt-br")}
              <IonIcon slot="end" icon={calendarNumberOutline}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle>Calendario</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard key={-1}>
          <IonCardHeader>
            <IonCardTitle>
              Eventos do dia
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            {carregando ? <IonProgressBar type="indeterminate"></IonProgressBar> :
              eventosDia.map((item, index) => (
                <IonCard key={index}>
                  <IonCardHeader>
                    <IonCardTitle>{item.titulo}</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <p>{item.descricao}</p>
                  </IonCardContent>
                </IonCard>
              ))
            }
          </IonCardContent>
        </IonCard>
        <IonModal ref={modal} trigger="open-modal" initialBreakpoint={0.5} breakpoints={[0, 0.25, 0.5, 0.75]}>
          <IonContent className="ion-padding">
            <IonDatetime locale="pt-br" size="cover" hourCycle="h23" value={diaSelecionado} onClick={handleCalendario}></IonDatetime>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage >
  );
};

export default Calendario;
