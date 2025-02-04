import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from '@/pages/Home';
import Reclutamiento from '@/pages/usuario/Reclutamiento';

import ContactPage from '@/pages/info/Contact';
import SesionPage from '@/pages/Sesion';
import Billing from '@/pages/usuario/Billing';

import '@/theme/variables.css';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import ServicioPage from './pages/usuario/Calificacion';
import 'animate.css';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
/* import './index.css'; */
import CertificacionPage from './pages/certificaciones/certificacionpage';
import Offers from './pages/ofertas/Offers';
import NuevoProvePage from './pages/proveedores/nuevosprovedores';
import InfprovPage from './pages/vistaUser/provnuevo';
import ProveePage from './pages/proveedores/portalprov';
import HistoriaPage from './pages/info/History';
import ValoracionEmpleadosPage from './pages/PageVistas/valoracionesEmpleados';
import PrivacidadPage from './pages/info/privacidad';
import TerminosPage from './pages/info/terminos';
import React from 'react';
import { getLocalStorageItem } from './services/localstorage';
import { rutasAdmin, rutasCompras, rutasRH } from './constantes/rutas';
import PageTest from './pages/test/@admin/page';
import PageUser from './pages/test/@user/page';

setupIonicReact({
  mode: 'ios'
});

const App: React.FC = () => {

  const selector = useSelector((state: RootState) => state.users);
  const usuario = getLocalStorageItem("typeUser");

  return <SwitchTypeUserRender rol={usuario ? usuario : selector.typeUser} />
};

export default App;
function SwitchTypeUserRender(props: any) {

  const renderRoutes = (routes: Array<{ src: string; pagina: React.ComponentType }>) =>
    routes.map((data, index) => (
      <Route key={index} exact path={data.src}>
        {React.createElement(data.pagina)}
      </Route>
    ));

  switch (props.rol) {
    case "recursosH":
      return (
        <IonApp>
          <IonReactRouter>
            <IonRouterOutlet>
              {renderRoutes(rutasRH)}
              <Route exact path="/">
                <Redirect to={rutasRH[0]?.src || "/"} />
              </Route>
            </IonRouterOutlet>
          </IonReactRouter>
        </IonApp>
      );
    case "Admin":
      return (
        <IonApp>
          <IonReactRouter>
            <IonRouterOutlet>
              {renderRoutes(rutasAdmin)}
              <Route exact path="/">
                <Redirect to={rutasAdmin[0]?.src || "/"} />
              </Route>
            </IonRouterOutlet>
          </IonReactRouter>
        </IonApp>
      );
    case "Compras":
      return (
        <IonApp>
          <IonReactRouter>
            <IonRouterOutlet>
              {renderRoutes(rutasCompras)}
              <Route exact path="/">
                <Redirect to={rutasCompras[0]?.src || "/"} />
              </Route>
            </IonRouterOutlet>
          </IonReactRouter>
        </IonApp>
      );
    default:
      return <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>

            {/* Informacion */}
            <Route exact path="/Contact">
              <ContactPage />
            </Route>

            <Route exact path="/privacidad">
              <PrivacidadPage />
            </Route>
            <Route exact path="/terminosycondiciones">
              <TerminosPage />
            </Route>

            {/* Menu */}
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/Reclutamiento">
              <Reclutamiento />
            </Route>
            <Route exact path="/Ofertas">
              <Offers />
            </Route>
            <Route exact path="/billing">
              <Billing />
            </Route>

            <Route exact path="/Historia">
              <HistoriaPage />
            </Route>
            <Route exact path="/Sesion">
              <SesionPage />
            </Route>
            <Route exact path="/Servicio">
              <ServicioPage />
            </Route>
            <Route exact path="/ProveedoresNuev">
              <NuevoProvePage />
            </Route>
            <Route exact path="/Proveedores">
              <ProveePage />
            </Route>

            {/* prueba*/}
            <Route exact path="/CertificacionPage">
              <CertificacionPage />
            </Route>

            {/* Paginas informacion que muestran datos  */}
            <Route exact path="/provpage">
              <InfprovPage />
            </Route>
            <Route exact path="/test">
              <PageTest />
            </Route>
            <Route exact path="/user">
              <PageUser />
            </Route>

            {/* Vistas Interaccion Usuarios */}
            <Route exact path="/ValoracionEmpleadosPage">
              <ValoracionEmpleadosPage />
            </Route>

            {/*  */}
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>;
  }
}