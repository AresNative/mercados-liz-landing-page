import type React from "react"
import { IonIcon } from "@ionic/react"
import { bookOutline } from "ionicons/icons"

const Historia: React.FC = () => {
  return (
    <div className="h-full">
      <h2 className="text-xl font-bold text-white mb-4 flex items-center">
        <IonIcon icon={bookOutline} className="mr-2" />
        Nuestra Historia
      </h2>
      <div className="bg-gray-700 rounded-lg p-4">
        <p className="text-gray-300 text-sm leading-relaxed">
          Desde 1990, hemos estado sirviendo a nuestra comunidad con los mejores productos y el mejor servicio. Nuestra
          misión es proporcionar alimentos frescos y de calidad a precios accesibles.
        </p>
        <button className="mt-4 bg-purple-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-600 transition-colors">
          Conoce más
        </button>
      </div>
    </div>
  )
}

export default Historia

