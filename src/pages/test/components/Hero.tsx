import type React from "react"
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent } from "@ionic/react"

const Hero: React.FC = () => {
  return (
    <IonCard className="bg-purple-100 dark:bg-purple-800 m-0 mt-4">
      <img
        src="merc.jpg"
        alt="Supermercado"
        className="w-full h-48 md:h-64 lg:h-96 object-cover"
      />
      <IonCardHeader>
        <IonCardTitle className="text-2xl md:text-3xl lg:text-4xl font-bold text-purple-700 dark:text-purple-300">
          Bienvenido a SuperMercado
        </IonCardTitle>
      </IonCardHeader>
      <IonCardContent className="text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300">
        Tu destino para productos frescos y de calidad. Descubre nuestras ofertas y servicios excepcionales.
      </IonCardContent>
    </IonCard>
  )
}

export default Hero

