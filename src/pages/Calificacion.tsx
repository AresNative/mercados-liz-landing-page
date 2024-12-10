import Page from "@/template/page";
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonSpinner, IonTextarea } from "@ionic/react";
import { SendIcon, Star } from "lucide-react";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import styles from "@/pages/calificacion.module.css";
 

interface Estrellas {
    values: number[];
    rating: number;
}

export default function ServicioPage() {

    const calif: Estrellas = {
        values: [1, 2, 3, 4, 5],
        rating: 2
    };

    const [rating, setRating] = useState(0); // Calificación seleccionada
    const [hoverRating, setHoverRating] = useState(0); // Calificación al pasar el ratón
    const [feedback, setFeedback] = useState(""); // Estado para el contenido del textarea

    const handleRating = (value: number) => {
        setRating(value);
    };

    const handleSubmit = () => {
        // Lógica para enviar la calificación y el comentario al backend podría ir aquí

        // Alerta con SweetAlert2
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

        // Reiniciar la calificación y el contenido del textarea
        setRating(0);
        setFeedback("");
    };

    return (

        <Page>
            <form>
                <IonCard className={styles["form"]}>
                    <IonCardHeader>
                        <IonCardTitle className={styles["p"]}>Califica nuestro servicio</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent className={styles["content-card"]}>
                        <div className={styles["content"]}>
                            {calif.values.map((star) => (
                                <Star
                                    key={star}
                                    className={` ${rating + 1 <= star ? `${styles.estrellas}` : `${styles.estrella2}`}`}
                                    onClick={() => handleRating(star)}
                                    onMouseEnter={() => setHoverRating(star)}
                                    onMouseLeave={() => setHoverRating(0)}
                                    size={35}
                                />
                            ))}
                        </div>
                        <IonTextarea
                            className={styles["textarea2"]}
                            placeholder="Deja tu opinión, para nosotros es muy importante escucharte"
                            value={feedback}
                            onIonChange={(e) => setFeedback(e.detail.value!)} // Actualizar el estado
                        />
                        <IonButton
                            onClick={handleSubmit}
                            disabled={rating === 0 || feedback.trim() === ""}
                            fill="outline"
                            slot="center"
                            color="liz"
                        >
                            Enviar <SendIcon color="purple" />
                        </IonButton>
                    </IonCardContent>
                </IonCard>
            </form>
        </Page>
    );
}
