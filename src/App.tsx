import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';
import Menu from './components/Menu';
import PrivateRoute from './components/PrivateRoute'; // Importa el componente PrivateRoute

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import PacientesPage from './pages/PacientesPage';
import HomePage from './pages/HomePage';
import Login from './Login/Login';
import { useLocation } from 'react-router-dom';

setupIonicReact();

const MainContent: React.FC = () => {
  const location = useLocation(); // Hook para obtener la ruta actual

  return (
    <>
      {location.pathname !== '/login' ? (
        <IonSplitPane when="(min-width: 768px)" contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            {/* Proteger rutas privadas con PrivateRoute */}
            <PrivateRoute path="/" exact component={HomePage} />
            <PrivateRoute path="/pacientes" exact component={PacientesPage} />
          </IonRouterOutlet>
        </IonSplitPane>
      ) : (
        <IonRouterOutlet id="main">
          {/* Ruta pública para el login */}
          <Route path="/login" exact component={Login} />
        </IonRouterOutlet>
      )}
    </>
  );
};

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <MainContent />
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
