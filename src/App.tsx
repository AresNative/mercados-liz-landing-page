import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from '@/pages/Home';
import Reclutamiento from '@/pages/Reclutamiento';
import Offers from '@/pages/Offers';
import ContactPage from '@/pages/Contact';
import SesionPage from '@/pages/Sesion';
import Billing from '@/pages/Billing';

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
import ServicioPage from './pages/Calificacion';
import HistoriaPage from './pages/History';
import NuevoProvePage from './pages/nuevosprovedores';
import ProveePage from './pages/portalprov';
import 'animate.css';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import './index.css';
import CertificacionPage from './pages/certificaciones/certificacionpage';
import InfprovPage from './pages/vistaUser/provnuevo';
import RHPage from './pages/PageVistas/Rh';
setupIonicReact({
  mode: 'ios'
});

const App: React.FC = () => {
  const selector = useSelector((state: RootState) => state.users);

  /*  if (selector.id === 2) {
 
     return <IonApp>
       <IonReactRouter>
         <IonRouterOutlet>
           {/*  *\/}
           <Route exact path="/">
             <Redirect to="/home" />
           </Route>
           <Route exact path="/home">
             <Home />
           </Route>
           <Route exact path="/Reclutamiento">
             <Reclutamiento />
           </Route>
 
         </IonRouterOutlet>
       </IonReactRouter >
     </IonApp>
 
   } 
   */

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          {/*  */}

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
          <Route exact path="/Contact">
            <ContactPage />
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
          <Route exact path="/RecursosHumanos">
            <RHPage />
          </Route>
          {/* prueba*/}
          <Route exact path="/CertificacionPage">
            <CertificacionPage />
          </Route>
          {/* Paginas informacion que muestran datos  */}
          <Route exact path="/provpage">
            <InfprovPage />
          </Route>

          {/* ------------ */}
          {/*  */}
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  )
};

export default App;

