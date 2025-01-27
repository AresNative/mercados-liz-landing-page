import { Menu } from "@/pages/menu";
import {
    IonButtons, IonContent, IonFooter, IonHeader,
    IonMenuButton, IonPage, IonTitle, IonToolbar,
} from "@ionic/react";
import { useEffect, useRef, useState } from "react";
import style from "@/components/displays/header.module.css";
import { useLocation } from "react-router-dom";


interface ContainerProps {
    children: React.ReactNode;
}
const Page: React.FC<ContainerProps> = ({ children }) => {
    const fecha = new Date().getFullYear();
    const contentRef = useRef<HTMLIonContentElement>(null);
    const location = useLocation(); // Obtenemos la ubicación actual
    const isHomePage = location.pathname === "/home"; // Verificamos si estamos en la ruta raíz

    // Establecemos los estados iniciales basados en la ruta actual
    const [headerStyle, setHeaderStyle] = useState({
        background: isHomePage ? "transparent" : "linear-gradient(to right, #790596, #37065f)",
        color: isHomePage ? "#000" : "#fff",
        backdropFilter: isHomePage ? "none" : "blur(0px)",
    });

    const handleScroll = (scrollTop: number) => {
        if (isHomePage) {
            if (scrollTop > 50) {
                setHeaderStyle({
                    background: "#d1d1d196", // Color cuando se hace scroll
                    color: "#000",
                    backdropFilter: "blur(10px)",
                });
            } else {
                setHeaderStyle({
                    background: "37065f", // Color inicial
                    color: "#37065f",
                    backdropFilter: "none",
                });
            }
        }
    };

    useEffect(() => {
        if (!isHomePage) return; // Solo aplicamos el efecto si estamos en la pantalla de inicio
        const contentElement = contentRef.current;
        if (!contentElement) return;
        const onScroll = (event: CustomEvent) => {
            const scrollTop = (event.detail as any).scrollTop;
            handleScroll(scrollTop);
        };
        contentElement.addEventListener("ionScroll", onScroll);
        return () => {
            contentElement.removeEventListener("ionScroll", onScroll);
        };
    }, [isHomePage]);

    return (
        <>
            <Menu />
            <IonPage id="main-content" >

                <IonHeader className={`ion-no-border ${style["headers"]}`}>
                    <IonToolbar
                        className={style["toolbar"]}
                        style={{
                            "--background": headerStyle.background,
                            color: headerStyle.color,
                            /* backdropFilter: headerStyle.backdropFilter, */
                        }}
                    >

                        <IonTitle size="large" className={style["titulos"]}>
                            Liz
                        </IonTitle>
                        <IonButtons slot="end" className={style["centerButton"]}>
                            <IonMenuButton color="light" />

                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen ref={contentRef} scrollEvents={true}>
                    <main>{children}</main>

                    <IonFooter>
                        <IonToolbar className={style["toolbar"]}>
                            <ul
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    listStyle: "none",
                                    gap: ".5rem",
                                    width: "100%",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <li>
                                    ©{fecha} SUPERMERCADOS MEJIA S. DE R.L. DE C.V. Todos los
                                    derechos reservados.
                                </li>
                                <li style={{ display: "flex", gap: "1rem", marginLeft: "1rem", marginRight: "1rem" }}>
                                    <a style={{ color: "var(--primary)", textDecoration: "none" }} href="/terminosycondiciones">Términos y Condiciones</a>
                                    <a style={{ color: "var(--primary)", textDecoration: "none" }} href="/privacidad">Política de Privacidad</a>
                                    <a style={{ color: "var(--primary)", textDecoration: "none" }} href="/Contact"> Contacto </a>
                                </li>
                            </ul>
                        </IonToolbar>
                    </IonFooter>
                </IonContent>
            </IonPage>
        </>
    );
};

export default Page;

