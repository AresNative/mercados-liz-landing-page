import { Select } from '@/components/functions/select';
import { MyMap } from '@/components/plugins/map';
import Page from '@/template/page';
import { IonButton, IonFab, IonFabButton, IonIcon } from '@ionic/react';
import {
  chevronDown,
  logoFacebook,
  logoWhatsapp,
  mailOutline
} from 'ionicons/icons';
const Home: React.FC = () => {
  return (
    <Page titulo='Mercados Liz'>

      <section className='section-1'>
        <div className='overlay'>
          <p className="titulos">Siempre Frescos Siempre Bien</p>
          <p style={{ margin: "2rem auto" }}>
            Ofrecemos variedad en productos de abarrotes, carniceria, panaderia, frutas y verduras, ventas al mayoreo, pedidos y mucho mas.
          </p>
        </div>

        <div className='img-center'>
          <img src='/merc2.jpg' loading='lazy' />
          {/* <img src='/merc1.jpg' loading='lazy' />
          <img src='/merc3.jpg' loading='lazy' /> */}
        </div>
      </section>

      <IonFab style={{ top: '90%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <IonFabButton color="liz">
          <IonIcon icon={chevronDown}></IonIcon>
        </IonFabButton>
      </IonFab>


      <nav className='section-2'>
        <ul>
          <li>
            <IonButton shape='round' fill="clear">
              <IonIcon size='large' icon={logoFacebook} />
            </IonButton>
          </li>
          <li>
            <IonButton color="success" shape='round' fill="clear">
              <IonIcon size='large' icon={logoWhatsapp} />
            </IonButton>
          </li>
          <li>
            <IonButton color="liz" shape='round' fill="clear">
              <IonIcon size='large' icon={mailOutline} />
            </IonButton>
          </li>
        </ul>
      </nav>

      <section className='section-3'>
        <p
          className="titulos"
          style={{
            marginTop: "4rem"
          }}>
          Donde encontrarnos
        </p>

        <div style={{ margin: "2rem auto ", width: "40rem" }}>
          <Select />

          <MyMap />
        </div>
      </section>

    </Page >
  );
};

export default Home;