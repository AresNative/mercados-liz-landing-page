import type React from "react"
import { IonIcon } from "@ionic/react"
import { mailOutline, arrowForward } from "ionicons/icons"

const Newsletter: React.FC = () => {
  return (
    <div className="h-full w-full bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl p-6">
      <h2 className="text-2xl font-bold text-purple-700 mb-4 flex items-center">
        <IonIcon icon={mailOutline} className="mr-2" />
        Newsletter
      </h2>
      <div className="bg-white shadow-lg border border-purple-200 rounded-lg p-6 h-3/4 flex items-center flex-col justify-center">
        <p className="text-gray-600 text-base mb-6 text-center">
          Suscríbete para recibir ofertas exclusivas y noticias.
        </p>
        <div className="flex gap-2 w-full max-w-md">
          <input
            type="email"
            placeholder="Tu email"
            className="flex-1 bg-gray-100 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
          />
          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-purple-700 transition-colors duration-300 flex items-center">
            Suscribir
            <IonIcon icon={arrowForward} className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Newsletter

