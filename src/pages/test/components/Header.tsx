import type React from "react"
import { useState } from "react"
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonMenu,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/react"
import { menuOutline } from "ionicons/icons"

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <IonHeader>
        <IonToolbar className="bg-purple-500 dark:bg-purple-700">
          <IonTitle className="text-white">SuperMercado</IonTitle>
          <IonButtons slot="end" className="hidden md:flex">
            <IonButton className="text-white">Inicio</IonButton>
            <IonButton className="text-white">Sucursales</IonButton>
            <IonButton className="text-white">Vacantes</IonButton>
            <IonButton className="text-white">Productos</IonButton>
          </IonButtons>
          <IonButtons slot="end" className="md:hidden">
            <IonButton onClick={() => setShowMenu(true)}>
              <IonIcon icon={menuOutline} className="text-white" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonMenu side="end" contentId="main-content" onIonDidClose={() => setShowMenu(false)} isOpen={showMenu}>
        <IonContent>
          <IonList>
            <IonItem>
              <IonLabel>Inicio</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Sucursales</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Vacantes</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Productos</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
    </>
  )
}

export default Header

