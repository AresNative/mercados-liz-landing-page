
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

      <nav className='section-2'>
        <IonFab style={{ bottom: '-4rem', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <IonFabButton color="liz">
            <IonIcon icon={chevronDown}></IonIcon>
          </IonFabButton>
        </IonFab>

        <h3 className='titulos'>
          Contactanos en:
        </h3>

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

      <section style={{ marginTop: "5rem" }}>
        <h2 className="titulos">Nuestras caracteristicas</h2>
        <ul className='product'>
          <IconCard title='Selección Local' text='test de texto largo de ejemplo' >

            <ShoppingCart color='var(--primary)' size={48} />
          </IconCard>

          <IconCard title='Entrega a Domicilio' text='Rápida en todo el Valle y alrededores' >
            <Truck color='var(--primary)' size={48} />
          </IconCard>

          <IconCard title='Mayoreo' text='test de texto largo de ejemplo' >
            <Package color='var(--primary)' size={48} />
          </IconCard>

          <IconCard title='Pagos Seguros' text='Múltiples opciones disponibles' >
            <CreditCard color='var(--primary)' size={48} />
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