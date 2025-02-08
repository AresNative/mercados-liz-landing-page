import { IonButton } from "@ionic/react";
import styles from "./main-form.module.css"
import { Send } from "lucide-react";
import { PostPostulacion } from "@/services/web_site_post";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";


interface FromProps {
    children?: React.ReactNode;
    jsonForm?: any;
    functionFrom?: string;
    message: string;
}
const handleEnviar = async () => {
    Swal.fire({
        title: "Gracias nos pondremos en contacto",
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



export function MainForm({ message, functionFrom, children, jsonForm }: FromProps) {
    const { register, control, handleSubmit } = useForm();
    const onSubmit = handleSubmit(async (data) => {
        try {
            await PostPostulacion(data);
            handleEnviar(); // Llamar la alerta después de enviar los datos
        } catch (error) {
            Swal.fire({
                title: "Error al enviar el formulario",
                text: "Por favor, intente nuevamente.",
                icon: "error",
                confirmButtonText: "Aceptar",
            });
        }
    });
    return (
        <form onSubmit={onSubmit} className={styles["form"]}>
            {children}
            <div>
                <IonButton
                    color="liz"
                    size="small"
                    fill="outline"
                    slot="end"
                    style={{
                        marginTop: "10px",
                    }}
                >
                    <span
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                        }}>
                        {message}
                        <Send style={{ fontSize: "16px" }} />
                    </span>
                </IonButton>
            </div>
        </form>
    )
}