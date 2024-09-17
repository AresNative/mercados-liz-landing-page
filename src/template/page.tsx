import { Headers } from "@/components/displays/header";
import { Menu } from "@/components/displays/menu";
import { IonContent, IonFooter, IonPage, IonToolbar } from "@ionic/react";

interface ContainerProps { children: React.ReactNode, titulo: string }

const Page: React.FC<ContainerProps> = ({ children, titulo }) => {
    const fecha = new Date().getFullYear();
    return (
        <>
            <Menu />
            <IonPage id="main-content">
                <Headers title={titulo} />

                <IonContent>
                    <main>
                        {children}
                    </main>

                    <IonFooter >
                        <IonToolbar>
                            <ul style={{
                                display: "flex",
                                listStyle: "none",
                                gap: "1rem",
                                width: "100%",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <li>
                                    ©{fecha} SUPERMERCADOS MEJIA S. DE R.L. DE C.V. Todos los derechos reservados.
                                </li>
                                <li>

                                </li>
                            </ul>

                        </IonToolbar>
                    </IonFooter>

                </IonContent>

            </IonPage >
        </>
    )
}

export default Page;
