import { Menu } from "@/pages/menu";
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton, IonPage, IonContent } from "@ionic/react";
import style from "@/components/displays/header.module.css";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";

export default function Background({ children }: { children: React.ReactNode }) {
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

    return (
        <>
            <Menu />
            <IonPage id="main-content" className="relative isolate overflow-hidden bg-white px-2 py-20 sm:py-24 md:py-28 lg:px-8 min-h-screen">
                <IonHeader className="absolute top-0 l-0 w-full z-50">
                    <IonToolbar
                        className="absolute -left-8"
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

                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
                <div className="absolute inset-y-0 right-1/2 -z-10 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

                <main className="z-40">{children}</main>

                <ul className="fixed bottom-0 -left-0 flex flex-col bg-white border-t-slate-500 w-full z-50">
                    <li>©{fecha} SUPERMERCADOS MEJIA S. DE R.L. DE C.V. Todos los derechos reservados.</li>
                    <li className="flex sm:flex-row gap-2">
                        <a style={{ color: "var(--primary)", textDecoration: "none" }} href="/terminosycondiciones">Términos y Condiciones</a>
                        <a style={{ color: "var(--primary)", textDecoration: "none" }} href="/privacidad">Política de Privacidad</a>
                        <a style={{ color: "var(--primary)", textDecoration: "none" }} href="/Contact">Contacto</a>
                    </li>
                </ul>
            </IonPage>
        </>
    );
}