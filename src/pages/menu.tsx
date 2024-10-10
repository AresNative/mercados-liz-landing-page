import { ModalBase } from "@/pages/modal";
import { IonAlert, IonButton, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import React, { useRef, useState } from "react";
import styles from "@/pages/modal.module.css";
import { Button } from "@/components/functions/button";
import { Input } from "@/components/functions/input";
import { useHistory } from "react-router-dom";
import { Tooltip } from "@nextui-org/react";
import { BadgeDollarSign, BriefcaseBusiness,  FilePlus2,  Home, Info, Star, X } from 'lucide-react';
import { Select } from "@/components/functions/select";

export function Menu() {
    const router = useHistory();
    const handleClickLogin = () => {  // Redireccion de pagina despues del login
        router.push('/Sesion');
    };

    const handleClickSignup = () => {  // Redireccion de pagina despues del registro
        router.push('/Login');
    };

    const [name, setname] = useState("Login");  // Inicializa en  Login
    const modalRef = useRef<HTMLIonModalElement>(null);

    // Abre el modal
    function openModal(modalName: string) {
        setname(modalName);
        modalRef.current?.present();
    }

    // Cierra el modal
    function closeModal() {
        modalRef.current?.dismiss();
    }

    //  Login o Sign up
    function renderForm() {
        if (name === "Login") {
            return (

                <div className={styles["modal-container"]}>
                    <div className={styles["tab-container"]}>
                        <button className={`${styles["tab-button"]} ${name === "Login" ? styles["active"] : ""}`} onClick={() => setname("Login")}>
                            Iniciar Sesión
                        </button>
                        <button className={styles["tab-button"]} onClick={() => setname("Sign up")}>
                            Registrate
                        </button>
                    </div>
                    <form className={styles["modal"]}>
                        <div>
                            <X color="red" onClick={closeModal} style={{
                                position: "absolute",
                                top: "30px",
                                right: "110px",
                                cursor: 'pointer'
                            }}
                            />
                        </div>
                        <Input label="Usuario" type="email" placheolder="Ingresa tu usario" />
                        <Input label="Contraseña" type="password" placheolder="Ingresa tu contraseña" />
                        <p className={styles["switch-text"]}>¿No tienes cuenta?
                            <span onClick={() => setname("Sign up")} className={styles["switch-link"]}> Registrate aquí</span>
                        </p>
                        <Button type="button" color="default" label="Iniciar Sesión" onClick={handleClickLogin} />
                    </form>
                </div>
            );
        } else if (name === "Sign up") {
            return (
                <div className={styles["modal-container"]}>
                    <div className={styles["tab-container"]}>
                        <button className={styles["tab-button"]} onClick={() => setname("Login")}>
                            Iniciar Sesión
                        </button>
                        <button className={`${styles["tab-button"]} ${name === "Sign up" ? styles["active"] : ""}`} onClick={() => setname("Sign up")}>
                            Registrate
                        </button>
                    </div>
                    <form className={styles["modal"]}>
                        <div>
                            <X color="red" onClick={closeModal} style={{
                                position: "absolute",
                                top: "30px",
                                right: "110px",
                                cursor: 'pointer'
                            }}
                            />
                        </div>
                        <Input label="Nombre(s)" type="text" placheolder="Ingresa tu mombre(s)" />
                        <Input label="Apellidos" type="text" placheolder="Ingresa tus apellidos" />
                        <Input label="Correo" type="email" placheolder="Usuario@mercadosliz.com" />
                        <Input label="Contraseña" type="password" placheolder="Ingresa una contraseña" />
                        <Select values={
                            [
                                {
                                    name: "Administración"//
                                }, {
                                    name: "Recursos Humanos"//
                                }, {
                                    name: "Contabilidad"//
                                }, {
                                    name: "Recibo"//
                                }
                            ]
                        }
                            message='Áreas'

                        />
                        <p className={styles["switch-text"]}>¿Ya tienes una cuenta?
                            <span onClick={() => setname("Login")} className={styles["switch-link"]}> Inicia Sesión</span>
                        </p>
                        <Button type="button" color="default" label="Registrate" onClick={handleClickSignup} />
                    </form>
                </div>
            );
        }
    }

    return (
        <>
            <IonMenu side="end" contentId="main-content">
                <IonHeader>
                    <IonToolbar color="liz">
                        <IonTitle>Menú</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <IonList style={{ borderRadius: "5px" }}>
                        <IonItem routerLink="/">
                            <IonLabel style={{ display: "flex", alignItems: "center", gap: "2px" }}>
                                <Home color='var(--primary)' size={20} />
                                Inicio
                            </IonLabel>
                        </IonItem>
                        <IonItem routerLink="/Ofertas">
                            <IonLabel style={{ display: "flex", alignItems: "center", gap: "2px" }}>
                                <BadgeDollarSign color='green' size={20} />   Ofertas
                            </IonLabel>
                        </IonItem>
                        <IonItem routerLink="/billing">
                            <IonLabel style={{ display: "flex", alignItems: "center", gap: "2px" }}>
                                <FilePlus2 color='var(--primary)' size={20} />  Facturación

                            </IonLabel>
                        </IonItem>
                        <IonItem routerLink="/Contact">
                            <IonLabel style={{ display: "flex", alignItems: "center", gap: "2px" }} >
                                <Info color='#6cb2ff' size={20} />  Más información

                            </IonLabel>
                        </IonItem>
                        <IonItem routerLink="/Reclutamiento">
                            <IonLabel style={{ display: "flex", alignItems: "center", gap: "2px" }}>
                                <BriefcaseBusiness color='var(--primary)' size={20} /> Únete a la familia

                            </IonLabel>
                        </IonItem>
                        <IonItem routerLink="/Servicio">
                            <IonLabel style={{ display: "flex", alignItems: "center", gap: "2px" }}>
                                <Star color='var(--primary)' size={20} /> Valoranos

                            </IonLabel>
                        </IonItem>
                    </IonList>
                </IonContent>
                <IonFooter>
                    <IonGrid>
                        <IonRow style={{ padding: "5px" }}>
                            {/* Ícono de Login para abrir el modal */}
                            <IonCol style={{ display: "flex", alignItems: "center", gap: "1rem", cursor: "pointer", justifyContent: "center", color: "var(--)" }}>
                                <Tooltip content="Iniciar sesión">
                                    <span className="text-lg cursor-pointer active:opacity-80">
                                        <IonIcon color="liz" icon="login.svg" size="small" onClick={() => openModal("Login")} />
                                    </span>
                                </Tooltip>
                            </IonCol>

                            {/* Ícono de log out para  el modal */}
                            <IonCol style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer", justifyContent: "center" }}>

                                <IonButton color="liz" size="small" shape='round' fill="clear" id="present-alert" onClick={() => { ("Logout") }}>
                                    <Tooltip content="Cerrar sesión">
                                        <span className="text-lg text-default-100 cursor-pointer active:opacity-80">
                                            <IonIcon icon="logout.svg" size="small" content="fuera" />
                                        </span>
                                    </Tooltip>
                                </IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonFooter>
            </IonMenu>

            {/* cerrar modal */}
            <ModalBase modalRef={modalRef} closeModal={closeModal}>
                {renderForm()}
            </ModalBase>

            {/* Alerta de cerrar sesión */}
            <IonAlert trigger="present-alert"
                header="¿Desea Cerrar Sesión?"
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
    );
}
