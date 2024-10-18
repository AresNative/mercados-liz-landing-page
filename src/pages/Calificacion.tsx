import Page from "@/template/page";
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonTextarea } from "@ionic/react";
import { SendIcon, Star } from "lucide-react";
import { useState } from "react";
import styles from "@/pages/calificacion.module.css"



interface Estrellas {
    values: number[];  // Cambié el tipo a `number[]` porque esperas números
    rating: number;
}




export default function ServicioPage() {

    const calif: Estrellas = {
        values: [1, 2, 3, 4, 5],  // Cambié las llaves a corchetes
        rating: 2
    }

    const [rating, setRating] = useState(0); // Calificación seleccionada
    const [hoverRating, setHoverRating] = useState(0); // Calificación al pasar el ratón

    const handleRating = (value: number) => {
        setRating(value);
    };

    const handleSubmit = () => {
        console.log('Rating:', rating);
        // Aquí puedes agregar la lógica para enviar la calificación y el comentario a tu backend
        alert('Mercados Liz agradece tu opinión ');
        setRating(0);
    };



    return (
        <Page /*  titulo={"Servicio"} */>

            {/* <img src="/uvas.png" className="img-uva" />
      
            <img src="/uvas.png" className="img-uva1" />
            <img src="/uvas.png" className="img-uva2" /> */}
            <IonCard className={styles["form"]}>
                <IonCardHeader>
                    <IonCardTitle className="titulos ">Califica nuestro servicio</IonCardTitle>
                </IonCardHeader>
                <IonCardContent className={styles["content-card"]}>
                    <div className={styles["content"]} >
                        {calif.values.map((star: any) => (
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
                    <IonTextarea className={styles["textarea2"]} placeholder="Deja tu opinión , para nosotros es muy importante escucharte" />
                    <IonButton
                        onClick={handleSubmit}
                        disabled={rating === 0}
                        fill="outline"
                        slot="center"
                        color="liz"
                    >
                        Enviar <SendIcon color="purple" />
                    </IonButton>
                </IonCardContent>
            </IonCard>
        </Page>
    );
}
