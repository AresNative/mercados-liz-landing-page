import { ModalBase } from "@/pages/modal";
import {
    IonAlert, IonButton, IonCol, IonContent,
    IonFooter, IonGrid, IonHeader, IonIcon,
    IonItem, IonLabel, IonToolbar, IonTitle,
    IonList, IonMenu, IonRow
} from "@ionic/react";
import React, { useRef, useState } from "react";
import styles from "@/pages/modal.module.css";
import { Button } from "@/components/functions/button";
import { Input } from "@/components/functions/input";
import { useHistory } from "react-router-dom";
import { Tooltip } from "@nextui-org/react";
import {
    BadgeDollarSign, BookOpenText,
    BriefcaseBusiness, FileBadge,
    FilePlus2, Home, Info, Star,
    ShoppingBagIcon, X,
} from 'lucide-react';
import { Select } from "@/components/functions/select";
import { useForm, useWatch, Control } from "react-hook-form";
import { GetUserInfo } from "@/services/web_site_gets";
import { PostUser, PostUserReg } from "@/services/web_site_post";
import Swal from 'sweetalert2';

interface RutasProps {
    link: string;
    icon: React.ReactNode;
    text: string;
}

const Rutas: React.FC<RutasProps> = ({ link, icon, text }) => {
    return (
        <IonItem routerLink={link}>
            <IonLabel style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                {icon}
                {text}
            </IonLabel>
        </IonItem>
    );
};
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
    const { register, control, handleSubmit } = useForm();
    const onSubmit = handleSubmit((data) => {
        //GetUserInfo();
        if (name === "Login") {
            PostUser(data).then((r: any) => {
                mostrarAlerta();
            });
        } else {
            const { name, apellido, ...otros } = data;
            const dataForm = { name: `${name} ${apellido}`, date: new Date(), ...otros };
            PostUserReg(dataForm).then((r: any) => {
                mostrarAlerta();
            });
        }
    });
    const mostrarAlerta = () => {
        Swal.fire({
            title: 'Error',
            text: 'Usuario no encontrado, por favor verifique los datos ingresados',
            icon: 'warning', // Puedes cambiar el icono a 'success', 'error', etc.
            confirmButtonText: 'Aceptar',
        });
    };
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
                    <form onSubmit={onSubmit} className={styles["modal"]}>
                        <div>
                            <X color="red" onClick={closeModal} style={{
                                position: "absolute",
                                top: "30px",
                                right: "110px",
                                cursor: 'pointer'
                            }}
                            />
                        </div>
                        <Input props={register("email")} label="Usuario" type="email" placheolder="Ingresa tu usario" />
                        <Input props={register("password")} label="Contraseña" type="password" placheolder="Ingresa tu contraseña" />
                        <p className={styles["switch-text"]}>¿No tienes cuenta?
                            <span onClick={() => setname("Sign up")} className={styles["switch-link"]}> Registrate aquí</span>
                        </p>
                        <Button type="submit" color="default" label="Iniciar Sesión"/*  onClick={handleClickLogin} */ />
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
                    <form onSubmit={onSubmit} className={styles["modal"]}>
                        <div>
                            <X color="red" onClick={closeModal} style={{
                                position: "absolute",
                                top: "30px",
                                right: "110px",
                                cursor: 'pointer'
                            }}
                            />
                        </div>
                        <Input props={register("name")} label="Nombre(s)" type="text" placheolder="Ingresa tu mombre(s)" />
                        <Input props={register("apellido")} label="Apellidos" type="text" placheolder="Ingresa tus apellidos" />
                        <Input props={register("email")} label="Correo" type="email" placheolder="Usuario@mercadosliz.com" />
                        <Input props={register("password")} label="Contraseña" type="password" placheolder="Ingresa una contraseña" />
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
                                },

                            ]
                        }
                            message='Áreas'
                        />
                        <p className={styles["switch-text"]}>¿Ya tienes una cuenta?
                            <span onClick={() => setname("Login")} className={styles["switch-link"]}> Inicia Sesión</span>
                        </p>
                        <Button type="submit" color="default" label="Registrate" /* onClick={handleClickSignup} */ />
                    </form>
                </div>
            );
        }
    }
    //marcas que nos acompañan
    const ruta: any = [{
        link: "/", icon: <Home color='var(--primary)' size={20} />, text: "Inicio"
    },
    { link: "/Ofertas", icon: <BadgeDollarSign color='green' size={20} />, text: "Ofertas" },
    { link: "/billing", icon: <FilePlus2 color='var(--primary)' size={20} />, text: "Facturación" },
    { link: "/Contact", icon: <Info color='#6cb2ff' size={20} />, text: "Más información" },//
    { link: "/Reclutamiento", icon: <BriefcaseBusiness color='var(--primary)' size={20} />, text: "Únete a la familia" },
    { link: "/Historia", icon: <BookOpenText color='purple' size={20} />, text: "Nuestra Historia" },
    { link: "/Servicio", icon: <Star color='blue' size={20} />, text: "Valoranos" },//
    { link: "/ProveedoresNuev", icon: <ShoppingBagIcon color='pink' size={20} />, text: "Nuevos Proveedores" },
    { link: "/Proveedores", icon: <FileBadge color='pink' size={20} />, text: "Proveedores" }
    ]

    return (
        <>
            <IonMenu side="end" contentId="main-content"  >
                <IonHeader >
                    <IonToolbar color="liz">
                        <IonTitle>Menú</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <IonList style={{ borderRadius: "5px" }}>
                        {ruta.map((data: any, key: any) => (<Rutas key={key} link={data.link} icon={data.icon} text={data.text} />))}
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
