
import { MyMap } from '@/components/plugins/map';
import Page from '@/template/page';
import { IonItem } from '@ionic/react';

const Home: React.FC = () => {
  return (
    <Page titulo='Mercados Liz'>

      <section className='section-1'>
        <div style={{ display: "flex" }}>
          <div className='overlay'>
            <IonItem className="titulos" style={{ width: "34rem" }}>Siempre Frescos Siempre Bien</IonItem>

            <p style={{ width: "34rem", margin: "1rem" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At ullam, repudiandae esse non qui facilis quo. Et provident ipsa doloremque
              dolore adipisci vero eum voluptates hic suscipit harum? Minus, in!
            </p>
          </div>

          <div className='img-center'>
            <img src='/merc2.jpg' />
          </div>
        </div>
      </section>


      <section style={{
        borderTop: "1px solid #00000e",
        borderBottom: "1px solid #00000e",
        textAlign: "center",
        paddingTop: "3rem",
        paddingBottom: "3rem"
      }}>
        redes
      </section>

      <IonItem style={{
        width: "34rem",
        marginBottom: "4rem",
        marginTop: "4rem"
      }}>Donde encontrarnos</IonItem>

      <MyMap />

    </Page >
  );
};

export default Home;