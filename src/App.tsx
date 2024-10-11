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
import RHPage from './pages/Rh';
import ServicioPage from './pages/Calificacion';


setupIonicReact({
  mode: 'ios'
});

const App: React.FC = () => (
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
        <Route exact path="/Sesion">
          <SesionPage />
        </Route>
        <Route exact path="/Servicio">
          <ServicioPage />
        </Route>
        <Route exact path="/Sesion/RecursosHumanos">
          <RHPage />
        </Route>
        {/*  */}
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
