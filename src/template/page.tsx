import { Headers } from "@/components/displays/header";
import { Menu } from "@/pages/menu";
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
                                flexDirection: "column",
                                listStyle: "none",
                                gap: "1rem",
                                width: "100%",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <li>
                                    ©{fecha} SUPERMERCADOS MEJIA S. DE R.L. DE C.V. Todos los derechos reservados.
                                </li>
                                <li style={{ display: "flex", gap: "2rem" }}>
                                    <a style={{ color: "var(--primary)" }}>
                                        Términos y Condiciones
                                    </a>
                                    <a style={{ color: "var(--primary)" }}>
                                        Política de Privacidad
                                    </a>
                                    <a style={{ color: "var(--primary)" }}>
                                        Contacto
                                    </a>
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
