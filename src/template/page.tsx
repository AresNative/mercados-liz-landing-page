import { Menu } from "@/pages/menu";
import { IonButtons, IonContent, IonFooter, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { useEffect, useRef, useState } from "react";
import style from "@/components/displays/header.module.css";

interface ContainerProps {
    children: React.ReactNode;
}

const Page: React.FC<ContainerProps> = ({ children }) => {
    const fecha = new Date().getFullYear();
    const contentRef = useRef<HTMLIonContentElement>(null);
    const [headerColor, setHeaderColor] = useState('transparent');
    const [blurEffect, setBlurEffect] = useState('none'); // Nuevo estado para el efecto de blur
    const [tooltipColor, setTooltipColor] = useState("#000");

    const handleScroll = (scrollTop: number) => {
        if (scrollTop > 50) {
            setHeaderColor('#270f4e41'); // Cambiar color del header //#7600c096
            setBlurEffect('blur(10px)');  // Aplicar el efecto de desenfoque
            setTooltipColor("#000");
        } else {
            setHeaderColor('transparent'); // Cambiar a transparente cuando el scroll es menor a 50px
            setBlurEffect('none');  // Eliminar el desenfoque
            setTooltipColor("#000");
        }
    };

    useEffect(() => {
        const contentElement = contentRef.current;

        if (!contentElement) return; // Si la referencia no está disponible, salir del efecto

        // Evento de scroll
        const onScroll = (event: CustomEvent) => {
            const scrollTop = (event.detail as any).scrollTop;
            handleScroll(scrollTop);
        };

        contentElement.addEventListener('ionScroll', onScroll);

        // Limpiar el evento al desmontar el componente
        return () => {
            contentElement.removeEventListener('ionScroll', onScroll);
        };
    }, []);

    return (
        <>
            <Menu />
            <IonPage id="main-content">
                <IonHeader className={`ion-no-border ${style["headers"]}`} > {/* Cambiamos a uso de variable CSS */}
                    <IonToolbar className={style["toolbar"]} style={{ '--background': headerColor, color: tooltipColor, backdropFilter: blurEffect }}>
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
                                <li>©{fecha} SUPERMERCADOS MEJIA S. DE R.L. DE C.V. Todos los derechos reservados.</li>
                                <li style={{ display: "flex", gap: "2rem" }}>
                                    <a style={{ color: "var(--primary)" }}>Términos y Condiciones</a>
                                    <a style={{ color: "var(--primary)" }}>Política de Privacidad</a>
                                    <a style={{ color: "var(--primary)" }}>Contacto</a>
                                </li>
                            </ul>
                        </IonToolbar>
                    </IonFooter>
                </IonContent>
            </IonPage>
        </>
    );
};

export default Page