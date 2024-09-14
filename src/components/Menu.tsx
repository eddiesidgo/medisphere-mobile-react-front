import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { mailOutline, mailSharp} from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Pacientes',
    url: '/pacientes',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: 'Home',
    url: '/',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },

];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
      <IonList id="inbox-list">
          <IonListHeader>Inbox</IonListHeader> 

          <IonNote>hi@ionicframework.com</IonNote>
          {appPages.map((appPage, index) => {
            const isCurrentPage = location.pathname === appPage.url;
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem 
                  className={isCurrentPage ? 'selected' : ''} // Aplicamos la clase condicionalmente
                  routerLink={appPage.url}
                  routerDirection="none" 
                  lines="none" 
                  detail={false}
                >
                  <IonIcon aria-hidden="true" slot="start" icon={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList> 

        {/* <IonList id="labels-list">
          <IonListHeader>Labels</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon aria-hidden="true" slot="start" icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList> */}
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
