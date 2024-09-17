import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonMenuButton,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
} from '@ionic/react';
import { useHistory, useLocation } from 'react-router-dom';
import { mailOutline, mailSharp, logOutOutline } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/',
    iosIcon: mailOutline,
    mdIcon: mailSharp,
  },
  {
    title: 'Pacientes',
    url: '/pacientes',
    iosIcon: mailOutline,
    mdIcon: mailSharp,
  },
];

const Menu: React.FC = () => {
  const location = useLocation();
  const history = useHistory();

  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    localStorage.removeItem('token'); // Elimina el token de autenticación
    history.push('/login'); // Redirige al login
  };

  return (
    <>
      {/* Header para el toggle en vista móvil */}
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton /> {/* Botón para abrir el menú */}
          </IonButtons>
          <IonTitle>MediSphere ©</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* Menú lateral */}
      <IonMenu contentId="main" type="overlay">
        <IonContent>
          <IonList id="inbox-list">
            <IonListHeader>MediSphere ©</IonListHeader>
            <br />
            {appPages.map((appPage, index) => {
              const isCurrentPage = location.pathname === appPage.url;
              return (
                <IonMenuToggle key={index} autoHide={false}>
                  <IonItem
                    className={isCurrentPage ? 'selected' : ''}
                    routerLink={appPage.url}
                    routerDirection="none"
                    lines="none"
                    detail={false}
                    onClick={() => document.querySelector('ion-menu')?.close()} // Cierra el menú al hacer clic
                  >
                    <IonIcon aria-hidden="true" slot="start" icon={appPage.mdIcon} />
                    <IonLabel>{appPage.title}</IonLabel>
                  </IonItem>
                </IonMenuToggle>
              );
            })}

            {/* Botón de Logout */}
            <IonMenuToggle autoHide={false}>
              <IonItem
                button
                lines="none"
                onClick={handleLogout} // Llamada a la función de logout
              >
                <IonIcon aria-hidden="true" slot="start" icon={logOutOutline} />
                <IonLabel>Cerrar Sesión</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>
    </>
  );
};

export default Menu;
