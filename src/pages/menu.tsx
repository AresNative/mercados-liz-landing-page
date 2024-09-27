import { ModalBase } from "@/pages/modal";
import { IonAlert, IonButton, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonRow,  IonTitle, IonToolbar } from "@ionic/react";
import { UserPlus } from "lucide-react";
import { useRef, useState } from "react";
import styles from "@/pages/modal.module.css";
import { Button } from "@/components/functions/button";
import { Input } from "@/components/functions/input";
import { useHistory } from "react-router-dom";

export function Menu() {
    const router = useHistory();
    const handleClick = () => {  // Re-direccion de pagina 
        router.push('/Sesion');
    };
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
                        <Button type="button" color="default" label="Iniciar sesion" onClick={handleClick} />
                    </form>

                );
            case "Logout":
                return (
                    <></>
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
                        <Button type="button" color="default" label="Registrar usuario" onClick={() => { openModal("Login") }} />
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

                            <IonCol style={{ display: "flex", alignItems: "center", gap: "1rem", cursor: "pointer", justifyContent: "center", color: "var(--)" }}>
                                <IonIcon color="liz" icon="login.svg" size="small" onClick={() => { openModal("Login") }} />
                            </IonCol>

                            <IonCol style={{ display: "flex", alignItems: "center", gap: "1rem", cursor: "pointer", justifyContent: "center" }}>

                                <IonButton color="liz" size="small" shape='round' fill="clear" id="present-alert" onClick={() => { ("Logout") }}>
                                    <IonIcon icon="logout.svg" size="small" />
                                </IonButton>

                            </IonCol>

                            <IonCol style={{ display: "flex", alignItems: "center", cursor: "pointer", justifyContent: "center" }}>
                                <UserPlus color="var(--primary)" onClick={() => { openModal("Registro"); }} />
                            </IonCol>

                        </IonRow>
                    </IonGrid>
                </IonFooter>
            </IonMenu>

            <ModalBase modalRef={modalRef} closeModal={closeModal}>{renderForm()}</ModalBase>

            <IonAlert trigger="present-alert"
                header="¿Desea Cerrar Sesion?"
                className="custom-alert" buttons={[
                    {
                        text: 'No',
                        cssClass: 'alert-button-cancel ',
                    },
                    {
                        text: 'Si',
                        cssClass: 'alert-button-confirm',
                    },
                ]}
            ></IonAlert>
        </>
    )
}