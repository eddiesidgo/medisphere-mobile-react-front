import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

// Interfaz para definir los props de PrivateRoute
interface PrivateRouteProps extends RouteProps {
  component: React.ComponentType<any>;
}

// Componente PrivateRoute para proteger rutas
const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem('token'); // Verifica si hay token en localStorage

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" /> // Redirige a /login si no está autenticado
        )
      }
    />
  );
};

export default PrivateRoute;
