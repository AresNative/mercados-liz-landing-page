import { IonButtons, IonContent, IonFooter, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
interface ContainerProps { children: React.ReactNode, titulo?: string }
const Page: React.FC<ContainerProps> = ({ children, titulo }) => {
    return (
        <>
            <IonMenu side="start" contentId="main-content">
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Menu Content</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">



                </IonContent>
            </IonMenu>

            <IonPage id="main-content">
                <IonHeader translucent={true} className="header">
                    <IonToolbar>
                        <IonTitle className="header-titulo">{titulo}</IonTitle>

                        <IonButtons slot="start" >
                            <IonMenuButton color="violet" style={{ fontSize: '3rem' }} />
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>

                <IonContent fullscreen>

                    <main>
                        {children}
                    </main>
                </IonContent>

                <IonFooter translucent={true}>
                    <IonToolbar>

                    </IonToolbar>
                </IonFooter>
            </IonPage>
        </>
    )
}
export default Page;