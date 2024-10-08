import { IconCard } from '@/components/displays/card-icon';
import { MainForm } from '@/components/form/main-form';
import { Input } from '@/components/functions/input';
import { Select } from '@/components/functions/select';
import { MyMap } from '@/components/plugins/map';
import Page from '@/template/page';
import { IonButton, IonFab, IonFabButton, IonIcon } from '@ionic/react';
import {
  chevronDown,
  logoFacebook,
  logoWhatsapp
} from 'ionicons/icons';
import { CreditCard, Mail, MapPin, Package, Phone, ShoppingCart, Truck } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { asingn } from "@/store/reducers";
import { useEffect } from 'react';
import { GetUserInfo } from '@/services/web_site_gets';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  function incrementTes(suc: string) {
    dispatch(asingn({ sucursal: suc }))
  }
  useEffect(() => {

    GetUserInfo().then((info: any) => {
      console.log(info);



    })

  }, [])

  return (
    <Page titulo='Mercados Liz'>
      <section className='section-1'>
        <div className='overlay'>
          <h1 className="titulos">Siempre Fresco Siempre Bien</h1>
          <p style={{ fontSize: "x-large" }}>
            Ofrecemos variedad en productos de abarrotes, carnicería, panadería, frutas y verduras, ventas al mayoreo, pedidos y mucho más.
          </p>
        </div>
      </section>

      <nav className='section-2'>
        <IonFab style={{ bottom: '-4rem', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <IonFabButton color="liz">
            <IonIcon icon={chevronDown}></IonIcon>
          </IonFabButton>
        </IonFab>

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
              <Mail color="var(--primary)" size={24} />
            </IonButton>
          </li>
        </ul>
      </nav>

      <section style={{ marginTop: "5rem" }}>
        <h2 className="titulos">Nuestras caracteristicas</h2>
        <ul className='product'>
          <IconCard title='Selección Local' text='Productos auténticos del Valle de Guadalupe' >

            <ShoppingCart color='var(--primary)' size={40} />
          </IconCard>

          <IconCard title='Entrega a Domicilio' text='Rápida en todo el Valle y alrededores' >
            <Truck color='var(--primary)' size={40} />
          </IconCard>

          <IconCard title='Mayoreo' text='test de texto largo de ejemplo' >
            <Package color='var(--primary)' size={40} />
          </IconCard>

          <IconCard title='Pagos Seguros' text='Múltiples opciones disponibles' >
            <CreditCard color='var(--primary)' size={40} />
          </IconCard>
        </ul>
      </section>

      <section className='mail'>
        <h2 className="titulos">Contacto directo</h2>
        <ul className='product'>
          <li>
            <MainForm message='Enviar'>
              <Input label="Nombre(s)" type="text" placheolder="Ingrese sus nombres" />
              <Input label="Mensaje" type="text" placheolder="Exprese sus dudas..." />
            </MainForm>
          </li>
          <li className="card-mail">
            <h3>Información de Contacto</h3>

            <div className="contact-item">
              <MapPin color="var(--primary)" size={24} />
              <span>Calle Principal 216, 22750 Francisco Zarco, B.C.</span>
            </div>

            <div className="contact-item">
              <Phone color="var(--primary)" size={24} />
              <span>+52 646 596 9489</span>
            </div>

            <div className="contact-item">
              <Mail color="var(--primary)" size={24} />
              <span>atncliente@mercadosliz.com</span>
            </div>

            <div className="contact-item">
              <span><strong>Horario de Atención:{" "}</strong></span>
              <span>7:00 AM - 11:00 PM</span>
            </div>
          </li>

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

        <div style={{ margin: "2rem auto ", width: "90%" }}>
          <Select values={
            [
              {
                name: "Matriz"//32.0998035,-116.5654255,15z
              }, {
                name: "Valle de guadalupe"//32.0945219,-116.576508
              }, {
                name: "Valle de las palmas"//32.3622361,-116.6245621,14.5z
              }, {
                name: "Testerazo"//32.2943975,-116.5420665
              }
            ]
          }
            message='Sucursales'
            onChange={incrementTes}
          />
          <MyMap />
        </div>
      </section>

    </Page >
  );
};

export default Home;