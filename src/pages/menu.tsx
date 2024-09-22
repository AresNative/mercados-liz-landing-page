import { ModalBase } from "@/pages/login";
import { IonButton, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonItem, IonLabel, IonList, IonMenu, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { LogIn, LogOut, UserPlus } from "lucide-react";
import { MainForm } from "../components/form/main-form";
import { useRef, useState } from "react";
import styles from "@/pages/login.module.css";
import { Button } from "@/components/functions/button";
import { Input } from "@/components/functions/input";

export function Menu() {
    const [name, setname] = useState("");
    const modalRef = useRef<HTMLIonModalElement>(null);

    function openModal(modalName: string) {
        setname(modalName);
        modalRef.current?.present(); // Abre el modal
    }
    function closeModal() {
        modalRef.current?.dismiss(); // Cierra el modal
    }

    function renderForm() {
        switch (name) {
            case "Login":
                return (
                    <form className={styles["modal"]}>
                        <h1 className={styles["tituloslog"]}> Iniciar sesión</h1>
                        <h1 className={styles["subtitulos-log"]}> Ingresa tus credenciales para acceder</h1>

                        <Input label="Usuario" type="email" placheolder="Nombre de usuario" />
                        <Input label="Contraseña" type="password" placheolder="Contraseña" />
                        {/* <Button type="submit" color="default" label="Iniciar sesion">Iniciar Sesion</Button> */}
                    </form>

                );
            case "Logout":
                return (
                    <form className={styles["modal"]}>

                        <input type="text" placeholder="Texto de confirmacion para cerrar sesion" />

                    </form>
                );
            case "Registro":
                return (

                    <form className={styles["modal"]}>
                        <h1 className={styles["tituloslog"]}> Registrate</h1>
                        <h1 className={styles["subtitulos-log"]}> Ingresa los siguientes datos para crear un nuevo usuario</h1>

                        <Input label="Nombre" type="text" placheolder="Nombre(s)" />
                        <Input label="Apellidos" type="text" placheolder="Apellidos" />
                        <Input label="Correo" type="email" placheolder="usuario@mercadosliz.com" />
                        <Input label="Contraseña" type="password" placheolder="Ingrese contraseña" />
                        {/*  <Button type="submit" color="default" label="Registrar usuario">Iniciar Sesion</Button> */}
                    </form >
                );
            default:
                return <></>;
        }
    }

    return (
        <>
            <IonMenu side="end" contentId="main-content">
                <IonHeader>
                    <IonToolbar color="liz">
                        <IonTitle>Menu</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <IonList style={{ borderRadius: "5px" }}>
                        <IonItem routerLink="/">
                            <IonLabel>Home</IonLabel>
                        </IonItem>
                        <IonItem routerLink="/Ofertas">
                            <IonLabel>Ofertas</IonLabel>
                        </IonItem>
                        <IonItem routerLink="/billing">
                            <IonLabel>Facturacion</IonLabel>
                        </IonItem>
                        <IonItem routerLink="/Contact">
                            <IonLabel>Contactanos</IonLabel>
                        </IonItem>
                        <IonItem routerLink="/Reclutamiento">
                            <IonLabel>Unete a la familia</IonLabel>
                        </IonItem>
                    </IonList>
                </IonContent>
                <IonFooter>
                    <IonGrid>
                        <IonRow style={{ padding: "10px" }}>

                            <IonCol style={{ display: "flex", alignItems: "center", gap: "0rem", cursor: "pointer" }}>
                                Log In <LogIn onClick={() => { openModal("Login") }} />
                            </IonCol>

                            <IonCol style={{ display: "flex", alignItems: "center", gap: "0rem", cursor: "pointer" }}>
                                Log Out <LogOut onClick={() => { openModal("Logout") }} />
                            </IonCol>

                            <IonCol style={{ display: "flex", alignItems: "center", gap: "0rem", cursor: "pointer" }}>
                                Registro <UserPlus onClick={() => { openModal("Registro"); }} />
                            </IonCol>

                        </IonRow>
                    </IonGrid>
                </IonFooter>
            </IonMenu>

            <ModalBase modalRef={modalRef} closeModal={closeModal}>{renderForm()}</ModalBase>
        </>
    )
}