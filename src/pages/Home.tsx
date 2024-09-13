import { IonContent, IonDatetime, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import UserCard from '@/components/displays/card';
import { Input } from '@/components/functions/input';
import { Button } from '@/components/functions/button';
import { Accordion } from '@/components/functions/accordion';
import { CheckBox } from '@/components/functions/checkbox';

const Home: React.FC = () => {
  return (
    <IonPage className='ionic-app'>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Input />
        <Accordion />
        <IonDatetime presentation="date" color={'rose'}></IonDatetime>

        <UserCard
          name="John Doe"
          email="john.doe@example.com"
          avatarUrl="https://via.placeholder.com/64"
        />
        <Button />
        <CheckBox/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
