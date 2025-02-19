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
    BadgeDollarSign, BookOpenText, X,
    FileBadge, Home, Info, Star,
    Forklift, ShieldCheck,
    BaggageClaim
} from 'lucide-react';
import { Select } from "@/components/functions/select";
import { useForm } from "react-hook-form";
import { PostUser, PostUserReg } from "@/services/web_site_post";
import Swal from 'sweetalert2';
import { getLocalStorageItem, removeFromLocalStorage, setLocalStorageItem } from "@/services/localstorage";
import { useDispatch } from "react-redux";
import { assignUsers } from "@/store/reducerUser";

interface RutasProps {
    link: string;
    icon: React.ReactNode;
    text: string;
    view?: boolean;
}

const Rutas: React.FC<RutasProps> = ({ link, icon, text, view }) => {
    return (
        <>
            {view === true && (<IonItem routerLink={link}>
                <IonLabel style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                    {icon}
                    {text}
                </IonLabel>
            </IonItem>)}
        </>
    );
};
export function Menu() {
    const dispatch = useDispatch();

    const router = useHistory();
    const [name, setname] = useState("Login");  // Inicializa en  Login
    const modalRef = useRef<HTMLIonModalElement>(null);

    // Abre el modal
    function openModal(modalName: string) {
        setname(modalName);
        modalRef.current?.present();
    }
    // Cierra el modal
    function closeModal() {
        router.push("/")
        modalRef.current?.dismiss();
        removeFromLocalStorage("typeUser")
    }
    //  Login o Sign up
    const { register, handleSubmit } = useForm();
    const onSubmit = handleSubmit(async (data) => {
        if (name === "Login") {
            try {
                const response: any = await PostUser(data);

                if (response && response.token) {
                    // Si el servidor devuelve un token válido
                    setLocalStorageItem("token", response);
                    setLocalStorageItem("typeUser", "Admin"); // Guarda el tipo de usuario
                    mostrarAlerta("Inicio de sesión exitoso");
                    // Actualiza el estado global del usuario
                    dispatch(
                        assignUsers({
                            id: response.userId,
                            token: response.token,
                            typeUser: "Admin"
                        })
                    );
                    // Redirecciona al inicio
                    router.push("/");
                } else {
                    // Si las credenciales no son válidas
                    mostrarAlerta("Datos incorrectos. Intente nuevamente.");
                }
            } catch (error) {
                console.error("Error durante el inicio de sesión:", error);
                mostrarAlerta("Ocurrió un problema. Intente más tarde.");
            }
        } else {
            // Lógica para registro
            const { name, apellido, ...otros } = data;
            const dataForm = { name: `${name} ${apellido}`, date: new Date(), ...otros };
            try {
                const response: any = await PostUserReg(dataForm);
                if (response) {
                    mostrarAlerta("Registro exitoso");
                }
            } catch (error) {
                console.error("Error durante el registro:", error);
                mostrarAlerta("Ocurrió un problema. Intente más tarde.");
            }
        }
    });
    const mostrarAlerta = (message: string) => {
        Swal.fire({
            title: message,
            showClass: {
                popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                       `
            },
            hideClass: {
                popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                       `
            }
        });
    };
    function renderForm() {
        const isLogin = name === "Login";
        return (
            <div key={name} className={styles["modal-container"]}>
                <div className={styles["tab-container"]}>
                    <button
                        className={`${styles["tab-button"]} ${isLogin ? styles["active"] : ""}`}
                        onClick={() => setname("Login")}
                    >
                        Iniciar Sesión
                    </button>
                    <button
                        className={`${styles["tab-button"]} ${!isLogin ? styles["active"] : ""}`}
                        onClick={() => setname("Sign up")}
                    >
                        Registrate
                    </button>
                </div>
                <form onSubmit={onSubmit} className={styles["modal"]}>
                    <div>
                        <X
                            className={styles["iconX"]}
                            onClick={closeModal}
                        />
                    </div>
                    {/* Renderizado condicional de campos de entrada */}
                    {isLogin ? (
                        <>
                            <Input
                                props={register("email")}
                                label="Usuario"
                                type="email"
                                placheolder="Ingresa tu usario"
                            />
                            <Input
                                props={register("password")}
                                label="Contraseña"
                                type="password"
                                placheolder="Ingresa tu contraseña"
                            /* autocomplete="off" */
                            />
                            <p className={styles["switch-text"]}>
                                ¿No tienes cuenta?
                                <span
                                    onClick={() => setname("Sign up")}
                                    className={styles["switch-link"]}
                                >
                                    {" "}
                                    Registrate aquí
                                </span>
                            </p>

                            <Button type="submit" color="default" label="Iniciar Sesión" />
                        </>
                    ) :
                        (
                            <>
                                <Input
                                    props={register("name")}
                                    label="Nombre(s)"
                                    type="text"
                                    placheolder="Ingresa tu nombre(s)"
                                />
                                <Input
                                    props={register("apellido")}
                                    label="Apellidos"
                                    type="text"
                                    placheolder="Ingresa tus apellidos"
                                />
                                <Input
                                    props={register("email")}
                                    label="Usuario"
                                    type="email"
                                    placheolder="Ingresa tu usario"
                                />
                                <Input
                                    props={register("password")}
                                    label="Contraseña"
                                    type="password"
                                    placheolder="Ingresa tu contraseña"
                                />
                                <Select
                                    values={[
                                        { name: "Administración" },
                                        { name: "Recursos Humanos" },
                                        { name: "Compras y ventas" }
                                    ]}
                                    message="Áreas"
                                />
                                <p className={styles["switch-text"]}>
                                    ¿Ya tienes una cuenta?
                                    <span
                                        onClick={() => setname("Login")}
                                        className={styles["switch-link"]}
                                    >
                                        {" "}
                                        Inicia Sesión
                                    </span>
                                </p>
                                <Button type="submit" color="default" label="Registrate" />
                            </>
                        )
                    }
                </form>
            </div>
        );
    }
    // Obtener el tipo de usuario desde el localStorage para poder añadir al menu paginas que no se ven sin usuario
    const typeUser = getLocalStorageItem("typeUser");

    //marcas que nos acompañan
    const ruta: any = [
        { link: "/", icon: <Home color='var(--primary)' size={20} />, text: "Inicio", view: true },
        { link: "/ofertas", icon: <BadgeDollarSign color='green' size={20} />, text: "Ofertas", view: true /* view: getLocalStorageItem("token") ? true : false  */ },
        /*  { link: "/billing", icon: <FilePlus2 color='var(--primary)' size={20} />, text: "Facturación", view: true /* view: getLocalStorageItem("typeUser") === "alamcen" ? true : false   }, */
        { link: "/Contact", icon: <Info color='#6cb2ff' size={20} />, text: "Más información", view: true },//
        { link: "/Reclutamiento", icon: <BaggageClaim /* BriefcaseBusiness */ color='var(--primary)' size={20} />, text: "Únete a la familia", view: true },
        { link: "/Historia", icon: <BookOpenText color='#9f80ff' size={20} />, text: "Nuestra Historia", view: true },
        { link: "/Servicio", icon: <Star color='#cfa8f8' size={20} />, text: "Valoranos", view: true },//
        { link: "/ProveedoresNuev", icon: <Forklift color='var(--primary)' size={20} />, text: "Nuevos Proveedores", view: true },
        { link: "/Proveedores", icon: <FileBadge color='pink' size={20} />, text: "Proveedores", view: true },
        { link: "/CertificacionPage", icon: <ShieldCheck color='var(--primary)' size={20} />, text: "Certificaciones", view: true },

        //  Agregar Evaluación empleados solo si ya se inicio sesion se tiene que ajustar para el tipo de usuario
        ...(typeUser ? [{ link: "/ValoracionEmpleadosPage", icon: <Star color='#ffd400' size={20} />, text: "Evaluación empleados", view: true }] : [])
    ]

    // Estado para mostrar la alerta de cerrar sesión
    const [showLogoutAlert, setShowLogoutAlert] = useState(false);

    // Función para manejar el cierre de sesión
    const handleLogout = () => {
        router.push("/")
        // Limpia el almacenamiento local
        localStorage.removeItem("token");
        localStorage.removeItem("typeUser");
        // Limpia el estado global si es necesario
        dispatch(assignUsers({ id: 0, token: "", typeUser: "" }));
    };

    return (
        <>
            <IonMenu side="end" contentId="main-content">
                <IonHeader >
                    <IonToolbar color="liz">
                        <IonTitle>Menú</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding" >
                    <IonList style={{ borderRadius: "5px" }}>
                        {ruta.map((data: any, key: any) => (
                            <Rutas key={key} link={data.link} icon={data.icon} text={data.text} view={data.view} />))}
                    </IonList>
                </IonContent>
                <IonFooter >
                    <IonGrid >
                        <IonRow style={{ padding: "5px" }} >
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
                                <IonButton color="liz" size="small" shape='round' fill="clear" id="present-alert" onClick={() => setShowLogoutAlert(true)}>
                                    <Tooltip content="Cerrar sesión" >
                                        <span className="text-lg text-default-100 cursor-pointer active:opacity-80">
                                            <IonIcon icon="logout.svg" size="small" content="fuera" />
                                        </span>
                                    </Tooltip>
                                </IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonFooter>
            </IonMenu >
            {/* cerrar modal */}
            <ModalBase modalRef={modalRef} closeModal={closeModal} >
                {renderForm()}
            </ModalBase>
            {/* Alerta de cerrar sesión */}
            <IonAlert
                isOpen={showLogoutAlert}
                onDidDismiss={() => setShowLogoutAlert(false)
                }
                header="¿Desea Cerrar Sesión?"
                buttons={
                    [{
                        text: "No",
                        cssClass: "alert-button-cancel",
                    },
                    {
                        text: "Sí",
                        cssClass: "alert-button-confirm",
                        handler: handleLogout,
                    },
                    ]}
            ></IonAlert >
        </>
    );
}