import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import UserCard from '@/components/displays/card';
import { Input } from '@/components/functions/input';

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

        <UserCard
          name="John Doe"
          email="john.doe@example.com"
          avatarUrl="https://via.placeholder.com/64"
        />

      </IonContent>
    </IonPage>
  );
};

export default Home;
