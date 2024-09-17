
import { UserCard } from '@/components/displays/card';
import { IconCard } from '@/components/displays/card-icon';
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
import { CreditCard, Package, ShoppingCart, Truck } from 'lucide-react';
const Home: React.FC = () => {
  return (
    <Page titulo='Mercados Liz'>

      <section className='section-1'>
        <div className='overlay'>
          <h1 className="titulos">Siempre Frescos Siempre Bien</h1>
          <p>
            Ofrecemos variedad en productos de abarrotes, carniceria, panaderia, frutas y verduras, ventas al mayoreo, pedidos y mucho mas.
          </p>
        </div>
      </section>

      <IonFab style={{ top: '76%', left: '50%', transform: 'translate(-50%, -50%)' }}>
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
      <section>

        <h2 className="titulos">Nuestras caracteristicas</h2>
        <ul className='product'>
          <IconCard title='Selección Local' text='test de texto largo de ejemplo' >
            <ShoppingCart color='var(--primary)' />
          </IconCard>

          <IconCard title='Entrega a Domicilio' text='Rápida en todo el Valle y alrededores' >
            <Truck color='var(--primary)' />
          </IconCard>

          <IconCard title='Mayoreo' text='test de texto largo de ejemplo' >
            <Package color='var(--primary)' />
          </IconCard>

          <IconCard title='Pagos Seguros' text='Múltiples opciones disponibles' >
            <CreditCard color='var(--primary)' />
          </IconCard>
        </ul>
      </section>
      <section className='section-3'>
        <h2
          className="titulos"
          style={{
            marginTop: "4rem"
          }}>
          Donde encontrarnos
        </h2>

        <div style={{ margin: "2rem auto ", width: "40rem" }}>
          <Select />
          <MyMap />
        </div>
      </section>

    </Page >
  );
};

export default Home;