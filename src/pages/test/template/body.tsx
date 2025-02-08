import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import Background from "./background";
import { useLocation } from "react-router";
import { useRef, useState, useEffect } from "react";

import style from "@/components/displays/header.module.css";
import ThemeToggle from "../components/ThemeToggle";
export default function Body({ children }: { children: React.ReactNode }) {

    const fecha = new Date().getFullYear();
    const contentRef = useRef<HTMLIonContentElement>(null);
    const location = useLocation();
    const isHomePage = location.pathname === "/home";

    const [headerStyle, setHeaderStyle] = useState({
        background: isHomePage ? "transparent" : "linear-gradient(to right, #790596, #37065f)",
        color: isHomePage ? "#000" : "#fff",
        backdropFilter: isHomePage ? "none" : "blur(0px)",
    });

    const handleScroll = (scrollTop: number) => {
        if (isHomePage) {
            const newStyle = scrollTop > 50
                ? { background: "#d1d1d196", color: "#000", backdropFilter: "blur(10px)" }
                : { background: "37065f", color: "#37065f", backdropFilter: "none" };
            setHeaderStyle(newStyle);
        }
    };

    useEffect(() => {
        if (!isHomePage || !contentRef.current) return;

        const contentElement = contentRef.current;
        const onScroll = (event: CustomEvent) => handleScroll((event.detail as any).scrollTop);

        contentElement.addEventListener("ionScroll", onScroll);
        return () => contentElement.removeEventListener("ionScroll", onScroll);
    }, [isHomePage]);

    const [darkMode, setdarkMode] = useState(false)

    return (
        <Background>
            <IonPage className="overflow-y-auto overflow-x-hidden w-full min-h-screen pt-24 m-auto relative">
                <IonHeader className="absolute top-0 left-8 w-full z-50">
                    <IonToolbar
                        className="fixed -top-1 left-0 z-50"
                        style={{
                            "--background": headerStyle.background,
                            color: headerStyle.color,
                            backdropFilter: headerStyle.backdropFilter,
                        }}
                    >
                        <IonTitle size="large" className={style.titulos}>Liz</IonTitle>
                        <IonButtons slot="end" className={style.centerButton}>
                            <IonMenuButton color="light" />
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-content-v2">
                    {children}
                    {/* <ThemeToggle darkMode={darkMode} setDarkMode={setdarkMode} /> */}
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
    )
}

