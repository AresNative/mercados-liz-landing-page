import { IconCard } from '@/components/displays/card-icon';
import { MainForm } from '@/components/form/main-form';
import { Input } from '@/components/functions/input';
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
import { List } from '@/components/displays/list';
import { OffertCard } from '@/components/displays/card';
import Styles from "./ofertas/Offers.module.css";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  function incrementTes(suc: string) {
    dispatch(asingn({ sucursal: suc }))
  }

  /* Preguntar por mas marcas, cual usar cual quitar */
  const ruta = [
    { link: "https://i.pinimg.com/originals/1e/c1/d2/1ec1d2ce366d1f603b1bde70ae508063.png", alt: "Logo Coca-Cola", loading: "lazy" },
    { link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSgEuX0hSXHfBeGvSHwOyoXcd-sJOh96GvQQ&s", alt: "Logo Carnes JC", loading: "lazy" },
    { link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Ub0t4Q4nI1ec4QiDNyMYDTIhYDkKfpgEdg&s", alt: "Logo Bachoco", loading: "lazy" },
    { link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoNLrjPjBNdUknJi15FZm4Hn6V8v8KSIxmxw&s", alt: "Logo Jumex", loading: "lazy" },
    { link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW-dbiFtg2py_AmoUAo0rW4XsHJLBD8NqdWA&s", alt: "Logo el Pato", loading: "lazy" },
    { link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr80DB83MHyE8_vSgXMYPNP4JwBX-haUY9gA&s", alt: "Logo Lala", loading: "lazy" },
    { link: "https://storage.googleapis.com/www-paredro-com/uploads/2018/11/%C2%BFPor-que%CC%81-el-logo-de-Sabritas-tiene-una-carita-feliz.jpg", alt: "Logo Sabritas", loading: "lazy" },
    { link: "https://upload.wikimedia.org/wikipedia/commons/6/68/Pepsi_2023.svg", alt: "Logo Pepsi", loading: "lazy" },
    { link: "https://impulsoregio.wordpress.com/wp-content/uploads/2015/01/barcel-1.png", alt: "Logo Barce;", loading: "lazy" },
    { link: "https://grupopenafiel.com.mx/wp-content/uploads/2023/01/penafiel2.jpg", alt: "Logo Logo Peñafiel", loading: "lazy" },
    { link: "https://i.pinimg.com/474x/6e/0c/16/6e0c16bacd5f4d0ec47578bede80529b.jpg", alt: "Logo Snappe", loading: "lazy" },
    { link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPBhUzaJmH8cw30ZIK5CPj-65dkB6fP3J8kA&s", alt: "Logo Purina", loading: "lazy" },
    { link: "https://logoeps.com/wp-content/uploads/2013/04/nestle-chocolate-vector-logo.png", alt: "Logo Nescle", loading: "lazy" },
    { link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCvC_ZkhQZ9Sa9WFZ1oMcOI0nguyc1mCAlBQ&s", alt: "Logo Grand chunk", loading: "lazy" },
    { link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt2FD9gES91gxVxTSlb_ajTepOmAI6pCZD-g&s", alt: "Logo Logo diamcers", loading: "lazy" },
    { link: "https://laikapp.s3.amazonaws.com/dev_images_categories/whiskas_logo_circulo3.png", alt: "Logo whiskas", loading: "lazy" },
    { link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdqT8qaJuNDmCdKqNbOrwbmFztSkOKZQCJsA&s", alt: "Logo StarMilk ", loading: "lazy" },
    { link: "https://cdn.worldvectorlogo.com/logos/yoplait.svg", alt: "Logo Youplayt", loading: "lazy" },
    { link: "https://images.seeklogo.com/logo-png/50/2/la-costena-logo-png_seeklogo-507641.png", alt: "Logo La costeña", loading: "lazy" },
    { link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbYRdgVd44Lk6xU3V08lNPGTBDmmP4jp2kng&s", alt: "Logo La costeña", loading: "lazy" },
  ];

  return (
    <Page>
      <section className='section-1'>
        <div className='overlay'>
          <h1 className="titulos">Siempre Fresco Siempre Bien</h1>
          <p style={{ fontSize: "x-large" }}>
            Ofrecemos variedad en productos de abarrotes, carnicería, panadería, frutas y verduras, ventas al mayoreo, pedidos y mucho más.
          </p>
        </div>
      </section>

      <nav className='section-2'>
        <IonFab
          style={{ bottom: '-4rem', left: '50%', transform: 'translate(-50%, -50%)' }}
        // Cambia aria-hidden por esto
        >
          <IonFabButton aria-hidden="false" color="liz">
            <IonIcon icon={chevronDown} />
          </IonFabButton>
        </IonFab>

        <ul>
          <li>
            <a href="https://www.facebook.com/share/1WZv93NVER/" target="_blank" >
              <IonButton shape='round' fill="clear" >
                <IonIcon size='large' icon={logoFacebook} />
              </IonButton>
            </a>
          </li>
          {/*Preguntar que link iria si compras servicio a domicilio o quejas*/}
          <li>
            <a href="https://wa.me/52NUMERO" target="_blank"  >
              <IonButton color="success" shape='round' fill="clear" >
                <IonIcon size='large' icon={logoWhatsapp} />
              </IonButton>
            </a>
          </li>
          <li>
            <a href="https://mail.google.com/mail/?view=cm&to=atncliente@mercadosliz.com&su=Consulta%20sobre%20servicio%20y%20más%20información&body=Hola,%20quisiera%20saber%20más%20información%20sobre%20sus%20productos%20y%20servicios%20que%20ofrecen.%0AGracias" target="_blank" >
              <IonButton color="liz" shape='round' fill="clear" >
                <Mail color="var(--primary)" size={24} />
              </IonButton>
            </a>
          </li>
        </ul>
      </nav>

      <section style={{ marginTop: "5rem" }}>
        <h2 className="titulos">Nuestras características</h2>
        <ul className='product'>
          <IconCard title='Selección Local' text='Productos auténticos del Valle de Guadalupe.' >
            <ShoppingCart color='var(--secondary)' size={50} />
          </IconCard>

          <IconCard title='Entrega a Domicilio' text='Rápida en todo el Valle y alrededores.' >
            <Truck color='var(--secondary)' size={50} />
          </IconCard>

          <IconCard title='Mayoreo' text='Productos a mayoreo y menudeo.' >
            <Package color='var(--secondary)' size={50} />
          </IconCard>

          <IconCard title='Pagos Seguros' text='Pagos con Crédito, Débito y Efectivo' >
            <CreditCard color='var(--secondary)' size={50} />
          </IconCard>
        </ul>
      </section>
      {/* ----------------------------------------------------------------------------------------------- */}

      <section className='sectionM'
        style={{
          marginTop: "5rem",
          borderTop: "1px solid #b4b4b4e0",
          marginBottom: "1rem",
        }}
      >
        <nav>
          <h2 className="titulos">Marcas que nos acompañan</h2>
          <ul className={Styles["ul"]}>
            {[...ruta, ...ruta].map((data, key) => (
              <OffertCard key={key} avatarUrl={data.link} />
            ))}
          </ul>
        </nav>
      </section>

      {/* ----------------------------------------------------------------------------------------------- */}

      <section className='mail'>
        <h2 className="titulos">Contacto directo</h2>

        <ul className='product'>
          <li style={{ marginBottom: "16px" }}>
            <MainForm message='Enviar' >
              <Input label="Nombre(s)" type="text" placheolder="Ingrese sus nombres" />
              <Input label="Mensaje" type="text" placheolder="Exprese sus dudas..." />
            </MainForm>
          </li>

          <li className="card-mail">
            <div className="contact-item">
              <MapPin color="var(--primary)" size={24} />
              <span>Calle Principal 216, 22750 Francisco Zarco, B.C.</span>
            </div>

            <div className="contact-item">
              <Phone color="var(--primary)" size={24} />
              <span>+52 646 155 2022</span>
            </div>

            <div className="contact-item">
              <Mail color="var(--primary)" size={24} />
              <span>atncliente@mercadosliz.com</span>
            </div>

            <div className="contact-item">
              <span ><strong >Horario de Atención:</strong></span>
              <span style={{ paddingLeft: "5px" }}> 08:00 AM - 09:00 PM</span>
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

        <div style={{ margin: "1rem" }}>

          <List>
            <div >

              <IonButton style={{ textDecoration: "underline" }} color="liz" shape="round" fill="clear" onClick={() => incrementTes("Matriz")}>
                <MapPin color="var(--primary)" size={24} /> Mayoreo
              </IonButton>

              <IonButton style={{ textDecoration: "underline" }} color="liz" shape="round" fill="clear" onClick={() => incrementTes("Valle de guadalupe")}>
                <MapPin color="var(--primary)" size={24} /> Valle de Guadalupe
              </IonButton>

              <IonButton style={{ textDecoration: "underline" }} color="liz" shape="round" fill="clear" onClick={() => incrementTes("Valle de las palmas")}>
                <MapPin color="var(--primary)" size={24} /> Valle de las Palmas
              </IonButton>

              <IonButton style={{ textDecoration: "underline" }} color="liz" shape="round" fill="clear" onClick={() => incrementTes("Testerazo")}>
                <MapPin color="var(--primary)" size={24} /> Testerazo
              </IonButton>
            </div>
          </List>

          <MyMap />
        </div>
      </section>

    </Page >
  );
};

export default Home;