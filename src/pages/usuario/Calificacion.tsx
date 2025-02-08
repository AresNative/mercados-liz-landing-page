import Page from "@/template/page";
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonTextarea } from "@ionic/react";
import { SendIcon, Star } from "lucide-react";
import { useState } from "react";
import Swal from "sweetalert2";
import styles from "@/pages/usuario/calificacion.module.css";
import { PostValoracion } from "@/services/web_site_post";
import { useForm } from "react-hook-form";

interface Estrellas {
    values: number[];
    rating: number;
}

export default function ServicioPage() {
    const calif: Estrellas = {
        values: [1, 2, 3, 4, 5],
        rating: 2
    };
    const { handleSubmit, register, setValue } = useForm();
    const [rating, setRating] = useState(0); // Calificación seleccionada
    const [hoverRating, setHoverRating] = useState(0); // Calificación al pasar la flechita
    const [feedback, setFeedback] = useState(""); // Estado para el contenido del textarea

    const handleRating = (value: number) => {
        setRating(value);
        setValue("valor", value);
    };

    const onSubmit = handleSubmit(async (data) => {
        console.log(data);
        try {
            await PostValoracion(data);
            handleEnviar();
        } catch (error) {
            Swal.fire({
                title: "Error al enviar el formulario",
                text: "Por favor, intente nuevamente.",
                icon: "error",
                confirmButtonText: "Aceptar",
            });
        }
        setRating(0);
        setFeedback("");
        setValue("comment", "");
    }); // Reiniciar la calificación y el contenido del textarea

    const handleEnviar = () => {
        let timerInterval: NodeJS.Timeout;
        Swal.fire({
            title: "¡Gracias por tu opinión!",
            html: "",
            timer: 3000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getHtmlContainer()?.querySelector("b");
                timerInterval = setInterval(() => {
                    if (timer) {
                        timer.textContent = `${Swal.getTimerLeft()}`;
                    }
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        });
    };

    return (
        <Page>
            <form onSubmit={onSubmit}>
                <IonCard className={styles["form"]}>
                    <IonCardHeader>
                        <IonCardTitle className={styles["p"]}>Califica nuestro servicio</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent className={styles["content-card"]}>
                        <div className={styles["content"]}>
                            {calif.values.map((star) => (
                                <Star
                                    key={star}
                                    className={
                                        star <= (hoverRating || rating)
                                            ? styles.estrella2
                                            : styles.estrellas
                                    }
                                    onClick={() => handleRating(star)}
                                    onMouseEnter={() => setHoverRating(star)}
                                    onMouseLeave={() => setHoverRating(0)}
                                    size={35}
                                />))}
                        </div>

                        <IonTextarea
                            className={styles["textarea2"]}
                            placeholder="Deja tu opinión, para nosotros es muy importante escucharte*"
                            onIonChange={(e) => setFeedback(e.detail.value!)}
                            {...register("comment", { required: true && "Campo obligatorio" })}
                        />
                        <IonButton
                            type={"submit"}
                            disabled={rating === 0 || feedback.trim() === ""}
                            fill="outline"
                            slot="center"
                            color="liz"> Enviar <SendIcon style={{ marginLeft: "0.4rem" }} color="purple" />
                        </IonButton>
                    </IonCardContent>
                </IonCard>
            </form>
        </Page>
    );
}
