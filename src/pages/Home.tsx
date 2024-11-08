import { IconCard } from '@/components/displays/card-icon';
import { MainForm } from '@/components/form/main-form';
import { Input } from '@/components/functions/input';
import { MyMap } from '@/components/plugins/map';
import Page from '@/template/page';
import { IonButton, IonFab, IonFabButton, IonIcon, IonItem } from '@ionic/react';
import {
  chevronDown,
  logoFacebook,
  logoWhatsapp
} from 'ionicons/icons';
import { CreditCard, Mail, MapPin, Package, Phone, Plane, ShoppingCart, Truck } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { asingn } from "@/store/reducers";
import { useEffect } from 'react';
import { GetUserInfo } from '@/services/web_site_gets';
import { List } from '@/components/displays/list';
import { OffertCard } from '@/components/displays/card';
import Styles from "./Offers.module.css";

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


  function rutas(link: string) {
    return (
      <OffertCard avatarUrl={link} />)
  }
  const ruta: any = [
    { link: "https://www.cocacolaep.com/assets/Uploads/resources/Coca-Cola-1210.jpg" },
    { link: "https://cdn.shopify.com/s/files/1/1547/6619/files/logo.png?v=1698644298" },
    { link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSgEuX0hSXHfBeGvSHwOyoXcd-sJOh96GvQQ&s" },
    { link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Ub0t4Q4nI1ec4QiDNyMYDTIhYDkKfpgEdg&s" },
    { link: "https://www.lala.com.mx/storage/app/media/LogotipoEvolucion/2016.png" },
    { link: "https://storage.googleapis.com/www-paredro-com/uploads/2018/11/%C2%BFPor-que%CC%81-el-logo-de-Sabritas-tiene-una-carita-feliz.jpg" },
    { link: "https://upload.wikimedia.org/wikipedia/commons/6/68/Pepsi_2023.svg" },
    { link: "https://purina.com.mx/sites/default/files/styles/webp/public/2024-02/Gatina_C_0.png.webp?itok=bkyb6mPj" },
  ]

  return (

    <Page /* titulo='Mercados Liz' */>
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
            <IonIcon icon={chevronDown} ></IonIcon>
          </IonFabButton >
        </IonFab>

        <ul>
          <li>
            <a href="https://www.facebook.com/share/1WZv93NVER/" target="_blank" >
              <IonButton shape='round' fill="clear">
                <IonIcon size='large' icon={logoFacebook} />
              </IonButton>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/share/1WZv93NVER/" target="_blank" >
              <IonButton color="success" shape='round' fill="clear">
                <IonIcon size='large' icon={logoWhatsapp} />
              </IonButton>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/share/1WZv93NVER/" target="_blank" >
              <IonButton color="liz" shape='round' fill="clear">
                <Mail color="var(--primary)" size={24} />
              </IonButton>
            </a>
          </li>
        </ul>
      </nav>

      <section style={{ marginTop: "5rem" }}>
        <h2 className="titulos">Nuestras características</h2>
        <ul className='product'>
          <IconCard title='Selección Local' text='Productos auténticos del Valle de Guadalupe' >
            <ShoppingCart color='var(--primary)' size={40} />
          </IconCard>

          <IconCard title='Entrega a Domicilio' text='Rápida en todo el Valle y alrededores' >
            <Truck color='var(--primary)' size={40} />
          </IconCard>

          <IconCard title='Mayoreo' text='Productos a mayoreo y menudeo' >
            <Package color='var(--primary)' size={40} />
          </IconCard>

          <IconCard title='Pagos Seguros' text='Múltiples opciones disponibles' >
            <CreditCard color='var(--primary)' size={40} />
          </IconCard>
        </ul>
      </section>

      <section style={{ marginTop: "5rem", borderTop: "1px solid #b4b4b4e0" }} >

        <nav  >
          <h2 className="titulos">Marcas que nos acompañan </h2>
          <ul className={Styles["ul"]}>
            {ruta.map((data: any, key: any) => (rutas(data.link)))}

          </ul>
        </nav>
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

        <div style={{ margin: "2rem auto ", width: "90% " }}>

          <List >
            <IonButton style={{ textDecoration: "underline" }} color="liz" shape='round' fill="clear" onClick={() => incrementTes("Matriz")}>
              <MapPin color="var(--primary)" size={24} /> Mayoreo
            </IonButton>

            <IonButton style={{ textDecoration: "underline" }} color="liz" shape='round' fill="clear" onClick={() => incrementTes("Valle de guadalupe")}>
              <MapPin color="var(--primary)" size={24} /> Valle de Guadalupe
            </IonButton>

            <IonButton style={{ textDecoration: "underline" }} color="liz" shape='round' fill="clear" onClick={() => incrementTes("Valle de las palmas")}>
              <MapPin color="var(--primary)" size={24} /> Valle de las Palmas
            </IonButton>

            <IonButton style={{ textDecoration: "underline" }} color="liz" shape='round' fill="clear" onClick={() => incrementTes("Testerazo")}>
              <MapPin color="var(--primary)" size={24} /> Testerazo
            </IonButton>

          </List>

          <MyMap />
        </div>
      </section>

    </Page >
  );
};

export default Home;