import type React from "react"
import { IonIcon } from "@ionic/react"
import { bookOutline, arrowForward } from "ionicons/icons"

const Historia: React.FC = () => {
  return (
    <div className="h-full bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl p-6">
      <h2 className="text-2xl font-bold text-purple-700 mb-6 flex items-center">
        <IonIcon icon={bookOutline} className="mr-2" />
        Nuestra Historia
      </h2>
      <div className="bg-white border border-purple-200 shadow-lg rounded-lg p-6">
        <p className="text-gray-600 text-base leading-relaxed mb-6">
          Desde 1990, hemos estado sirviendo a nuestra comunidad con los mejores productos y el mejor servicio. Nuestra
          misión es proporcionar alimentos frescos y de calidad a precios accesibles.
        </p>
        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-purple-700 transition-colors duration-300 flex items-center">
          Conoce más
          <IonIcon icon={arrowForward} className="ml-2" />
        </button>
      </div>
    </div>
  )
}

export default Historia

