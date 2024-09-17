import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Page.css";

const Page: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Inicio</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="content-home">BIENVENIDO A MEDIAPHERE</div>
        <div className="circle1"></div>
        <div className="circle2"></div>
        <span className="circule-home1"></span>
        <span className="circule-home2"></span>
      </IonContent>
    </IonPage>
  );
};

export default Page;
