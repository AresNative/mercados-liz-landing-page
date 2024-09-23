import { ModalBase } from "@/pages/login";
import { IonAlert, IonButton, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonItem, IonLabel, IonList, IonMenu, IonRow, IonText, IonTitle, IonToolbar } from "@ionic/react";
import { CircleUser, LogIn, LogOut, User, UserCheck, UserPlus } from "lucide-react";
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
                        <Button type="submit" color="default" label="Iniciar sesion" />
                    </form>

                );
            case "Logout":
                return (
                    <form className={styles["modal"]}>

                        <IonText id="present-alert"> ¿Seguro que desea cerrar sesion?</IonText>
                        <IonAlert trigger="present-alert"
                            header="Cerrar Sesion"
                            className="custom-alert" buttons={[
                                {
                                    text: 'No',
                                    cssClass: 'alert-button-cancel',
                                },
                                {
                                    text: 'Si',
                                    cssClass: 'alert-button-confirm',
                                },
                            ]}
                        ></IonAlert>

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
                        <Button type="submit" color="default" label="Registrar usuario" />
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

                            <IonCol style={{ display: "flex", alignItems: "center", gap: "1rem", cursor: "pointer" }}>
                                <User onClick={() => { openModal("Login") }} />
                            </IonCol>

                            <IonCol style={{ display: "flex", alignItems: "center", gap: "1rem", cursor: "pointer" }}>
                                 <LogOut onClick={() => { openModal("Logout") }} />

                            </IonCol>

                            <IonCol style={{ display: "flex", alignItems: "center", gap: "1rem", cursor: "pointer" }}>
                                 <UserPlus onClick={() => { openModal("Registro"); }} />
                            </IonCol>

                        </IonRow>
                    </IonGrid>
                </IonFooter>
            </IonMenu>

            <ModalBase modalRef={modalRef} closeModal={closeModal}>{renderForm()}</ModalBase>
        </>
    )
}