import type React from "react"
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel, IonIcon } from "@ionic/react"
import { briefcaseOutline, peopleOutline, businessOutline } from "ionicons/icons"

const Vacantes: React.FC = () => {
  const vacantes = [
    { puesto: "Cajero", departamento: "Atención al Cliente", icon: peopleOutline },
    { puesto: "Reponedor", departamento: "Almacén", icon: businessOutline },
    { puesto: "Gerente de Tienda", departamento: "Administración", icon: briefcaseOutline },
  ]

  return (
    <IonCard className="m-0 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-xl overflow-hidden">
      <IonCardHeader className="bg-cyan-600 text-white">
        <IonCardTitle className="text-2xl font-bold">Vacantes Disponibles</IonCardTitle>
      </IonCardHeader>
      <IonCardContent className="p-6">
        <IonList className="bg-transparent">
          {vacantes.map((vacante, index) => (
            <IonItem
              key={index}
              className="py-4 px-4 rounded-lg mb-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <IonIcon icon={vacante.icon} slot="start" className="text-cyan-600 text-2xl mr-4" />
              <IonLabel>
                <h2 className="font-semibold text-lg text-cyan-800">{vacante.puesto}</h2>
                <p className="text-base text-gray-600">{vacante.departamento}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
        <button className="mt-6 bg-cyan-600 text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-cyan-700 transition-colors duration-300 w-full">
          Ver todas las vacantes
        </button>
      </IonCardContent>
    </IonCard>
  )
}

export default Vacantes

