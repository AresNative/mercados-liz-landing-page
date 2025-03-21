import { IonButtons, IonContent, IonHeader, IonMenuButton, IonTitle, IonToolbar } from "@ionic/react";
import Background from "./background";
import style from "@/components/displays/header.module.css";

export default function Body({ children }: { children: React.ReactNode }) {
    const fecha = new Date().getFullYear();

    return (
        <Background>
            <IonHeader
                className={`main-content fixed top-0 left-0 w-full transition-transform duration-300 `}
            >
                <IonToolbar
                    style={{ "--background": "linear-gradient(to right, #A855F7, #37065f)" } as React.CSSProperties}
                    className="text-white"
                >
                    <IonTitle size="large" className={style.titulos}>Liz</IonTitle>
                    <IonButtons slot="end" className={style.centerButton}>
                        <IonMenuButton color="light" />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-content-v2">
                {children}
                <ul className="bottom-0 mt-5 flex flex-col bg-white border-t-slate-100 w-full border lg:items-center">
                    <li>©{fecha} SUPERMERCADOS MEJIA S. DE R.L. DE C.V. Todos los derechos reservados.</li>
                    <li className="flex sm:flex-row gap-2">
                        <a style={{ color: "var(--primary)", textDecoration: "none" }} href="/terminosycondiciones">Términos y Condiciones</a>
                        <a style={{ color: "var(--primary)", textDecoration: "none" }} href="/privacidad">Política de Privacidad</a>
                        <a style={{ color: "var(--primary)", textDecoration: "none" }} href="/Contact">Contacto</a>
                    </li>
                </ul>
            </IonContent>
        </Background>
    );
}
