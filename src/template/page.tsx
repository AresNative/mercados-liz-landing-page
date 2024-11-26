import { Menu } from "@/pages/menu";
import {
    IonButtons,
    IonContent,
    IonFooter,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
} from "@ionic/react";
import { useEffect, useRef, useState } from "react";
import style from "@/components/displays/header.module.css";
import { useLocation } from "react-router-dom"; // Importamos useLocation

interface ContainerProps {
    children: React.ReactNode;
}

const Page: React.FC<ContainerProps> = ({ children }) => {
    const fecha = new Date().getFullYear();
    const contentRef = useRef<HTMLIonContentElement>(null);
    const location = useLocation(); // Obtenemos la ubicación actual
    const isHomePage = location.pathname === "/home"; // Verificamos si estamos en la ruta raíz

    // Establecemos los estados iniciales basados en la ruta actual
    const [headerColor, setHeaderColor] = useState(
        isHomePage ? "transparent" : "#5409cd4f"
    );
    const [blurEffect, setBlurEffect] = useState(isHomePage ? "none" : "blur(4px)");
    const [tooltipColor, setTooltipColor] = useState(isHomePage ? "#000" : "#fff");

    const handleScroll = (scrollTop: number) => {
        if (scrollTop > 50) {

            setHeaderColor('#d1d1d196'); // Cambiar color del header //#7600c096
            setBlurEffect('blur(10px)');// Aplicar el efecto de desenfoque
            setTooltipColor("#000");

        } else {
            setHeaderColor("transparent");
            setBlurEffect("none");
            setTooltipColor("#000");
        }
    };

    useEffect(() => {
        if (!isHomePage) return; // Solo aplicamos el efecto si estamos en la ruta raíz

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
            <IonPage id="main-content">
                <IonHeader className={`ion-no-border ${style["headers"]}`}>
                    <IonToolbar
                        className={style["toolbar"]}
                        style={{
                            "--background": headerColor,
                            color: tooltipColor,
                            backdropFilter: blurEffect,
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
                                    <a style={{ color: "var(--primary)" }}>Términos y Condiciones</a>
                                    <a style={{ color: "var(--primary)" }}>Política de Privacidad</a>
                                    <a style={{ color: "var(--primary)" }}>Contacto</a>
                                    <a style={{ color: "var(--primary)" }}>Certificaciones</a>
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
