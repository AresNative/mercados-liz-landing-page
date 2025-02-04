import type React from "react"
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel } from "@ionic/react"

const Vacantes: React.FC = () => {
  const vacantes = [
    { puesto: "Cajero", departamento: "Atención al Cliente" },
    { puesto: "Reponedor", departamento: "Almacén" },
    { puesto: "Gerente de Tienda", departamento: "Administración" },
  ]

  return (
    <IonCard className="m-0 bg-white dark:bg-gray-800">
      <IonCardHeader>
        <IonCardTitle className="text-xl md:text-2xl font-bold text-purple-600 dark:text-purple-400">
          Vacantes Disponibles
        </IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonList>
          {vacantes.map((vacante, index) => (
            <IonItem key={index} className="py-2 dark:text-white">
              <IonLabel>
                <h2 className="font-semibold">{vacante.puesto}</h2>
                <p className="text-sm md:text-base">{vacante.departamento}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonCardContent>
    </IonCard>
  )
}

export default Vacantes

