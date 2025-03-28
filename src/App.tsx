import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import ContactPage from '@/pages/info/Contact';
import SesionPage from '@/pages/Sesion';
import Billing from '@/pages/usuario/Billing';

import PageCombos from './pages/test/@combos/page';
import PageUser from './pages/test/@user/page';
import PagePostulaciones from './pages/test/@postulaciones/page';
import PageVacantes from './pages/test/@vacantes/page';
import PageProveedores from './pages/test/@proveedores/page';
import PageProveedoresPortal from './pages/test/@proveedoresPortal/page';
import PageValoracion from './pages/test/@valoracion/page';
import PageEvaluacion from './pages/test/@evaluacion/page';
import EtiquetasLayout from './pages/test/@etiquetas/layout';
import ListasPage from './pages/test/@listas/page';
import ServicioPage from './pages/usuario/Calificacion';

import '@/theme/variables.css';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import 'animate.css';

import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import CertificacionPage from './pages/certificaciones/certificacionpage';
import Offers from './pages/ofertas/Offers';
import HistoriaPage from './pages/info/History';
import ValoracionEmpleadosPage from './pages/PageVistas/valoracionesEmpleados';
import PrivacidadPage from './pages/info/privacidad';
import TerminosPage from './pages/info/terminos';
import React, { useMemo } from 'react';
import { getLocalStorageItem } from './services/localstorage';
import { rutasAdmin, rutasCompras, rutasRH } from './constantes/rutas';
import VerificadorPage from './pages/test/@verificador/page';

setupIonicReact({
  mode: 'ios'
});

const App: React.FC = () => {
  const selector = useSelector((state: RootState) => state.users);
  const usuario = useMemo(() => getLocalStorageItem("typeUser"), []);

  return <SwitchTypeUserRender rol={usuario || selector.typeUser} />;
};

export default React.memo(App);

const SwitchTypeUserRender: React.FC<{ rol: any }> = React.memo(({ rol }) => {
  const renderRoutes = useMemo(() =>
    (routes: Array<{ src: string; pagina: React.ComponentType }>) =>
      routes.map((data, index) => (
        <Route key={index} exact path={data.src} component={data.pagina} />
      )),
    []
  );

  switch (rol) {
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

            {/* Menú */}
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

            {/* prueba */}
            <Route exact path="/CertificacionPage">
              <CertificacionPage />
            </Route>
            <Route exact path="/ValoracionEmpleadosPage"> {/* Vistas Interaccion Usuarios y prueba para Menú con typeUser*/}
              <ValoracionEmpleadosPage />
            </Route>

            {/* 
              ? paginas con nuevo modelo -- ! obligatorio 
            */}
            <Route exact path="/combos">
              <PageCombos />
            </Route>
            <Route exact path="/user">
              <PageUser />
            </Route>
            <Route exact path="/postulaciones">
              <PagePostulaciones />
            </Route>
            <Route exact path="/vacantes">
              <PageVacantes />
            </Route>
            <Route exact path="/proveedores">
              <PageProveedores />
            </Route>
            <Route exact path="/proveedoresPortal">
              <PageProveedoresPortal />
            </Route>
            <Route exact path="/valoracion">
              <PageValoracion />
            </Route>
            <Route exact path="/evaluacion">
              <PageEvaluacion />
            </Route>
            <Route exact path="/etiquetas">
              <EtiquetasLayout />
            </Route>
            <Route exact path="/listas">
              <ListasPage />
            </Route>
            <Route exact path="/verificador">
              <VerificadorPage />
            </Route>
            {/* 
              ? paginas con nuevo modelo -- ! obligatorio 
            */}

            <Route exact path="/">
              <Redirect to="/user" />
            </Route>
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>;
  }
})