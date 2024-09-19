import { IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonItem, IonLabel, IonList, IonMenu, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { LogIn, LogOut } from "lucide-react";
export function Menu() {
    return (
        <IonMenu side="end" contentId="main-content">
            <IonHeader>
                <IonToolbar color="liz">
                    <IonTitle>Menu</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonList style={{ borderRadius: "5px" }}>
                    <IonItem routerLink="/">
                        <IonLabel>Home</IonLabel>
                    </IonItem>
                    <IonItem routerLink="/Ofertas">
                        <IonLabel>Ofertas</IonLabel>
                    </IonItem>
                    <IonItem routerLink="/More">
                        <IonLabel>Descubre mas de nosotros</IonLabel>
                    </IonItem>
                    <IonItem routerLink="/Contact">
                        <IonLabel>Contactanos</IonLabel>
                    </IonItem>
                    <IonItem routerLink="/Reclutamiento">
                        <IonLabel>Unete a la familia</IonLabel>
                    </IonItem>
                </IonList>
            </IonContent>
            <IonFooter>
                <IonGrid>
                    <IonRow style={{ padding: "10px" }}>
                        <IonCol style={{ display: "flex", alignItems: "center", gap: "1rem", cursor: "pointer" }}>
                            Log In <LogIn />
                        </IonCol>
                        <IonCol style={{ display: "flex", alignItems: "center", gap: "1rem", cursor: "pointer" }}>
                            Log Out <LogOut />
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonFooter>
        </IonMenu>
    )
}