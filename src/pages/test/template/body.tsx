import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import Background from "./background";
import { useEffect, useState, useRef } from "react";

import style from "@/components/displays/header.module.css";

export default function Body({ children }: { children: React.ReactNode }) {
    const fecha = new Date().getFullYear();
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsHeaderVisible(window.scrollY <= 50);
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (e.clientY < 50) {
                setIsHeaderVisible(true);
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
            }
        };

        const handleMouseLeave = () => {
            if (window.scrollY > 50) {
                timeoutRef.current = setTimeout(() => setIsHeaderVisible(false), 300);
            }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseleave", handleMouseLeave);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    return (
        <Background>
            <IonPage className="overflow-y-auto overflow-x-hidden w-full min-h-screen pt-24 m-auto relative">
                <IonHeader
                    className={`fixed top-0 left-0 w-full transition-transform duration-300 ${isHeaderVisible ? "translate-y-0" : "-translate-y-full"}`}
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
            </IonPage>
        </Background>
    );
}
