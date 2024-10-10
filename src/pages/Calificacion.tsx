import Page from "@/template/page";
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonTextarea } from "@ionic/react";
import { Button } from "@nextui-org/react";
import { Plane, Star } from "lucide-react";
import { SetStateAction, useState } from "react";

export default function ServicioPage() {
    const [rating, setRating] = useState(0); // Estado para el rating
    const [comment, setComment] = useState(''); // Estado para el comentario

    const handleRating = (value: number) => {
        setRating(value); // Actualiza la calificación con el valor seleccionado
    };

    const handleSubmit = () => {
        console.log('Rating:', rating);
        console.log('Comment:', comment);
        // Aquí puedes agregar la lógica para enviar la calificación y el comentario a tu backend
        alert('¡Gracias por tu calificación!');
        setRating(0); // Resetea el rating
        setComment(''); // Resetea el comentario
    };

    return (
        <Page titulo={"Servicio"}>
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>Evaluación de Servicio</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    <div className="flex justify-center space-x-1 mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                                key={star}
                                className={`w-8 h-8 cursor-pointer ${star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                                    }`}
                                onClick={() => handleRating(star)} // Actualiza el rating al hacer clic en una estrella
                            />
                        ))}
                    </div>
                    <IonTextarea
                        placeholder="Danos tu opinión, es importante para nosotros escucharte"
                        value={comment} // Vincula el valor del textarea al estado 'comment'
                        onIonChange={(e: { detail: { value: SetStateAction<string>; }; }) => setComment(e.detail.value!)} // Actualiza el estado cuando cambia el valor
                    />
                    <Button
                        onClick={handleSubmit}
                        className="w-full"
                        disabled={rating === 0 || comment.trim() === ''} // Deshabilita el botón si no hay rating o comentario
                    >
                        <Plane />
                        Enviar
                    </Button>
                </IonCardContent>
            </IonCard>
        </Page>
    );
}
