import type React from "react"
import { IonIcon } from "@ionic/react"
import { mailOutline } from "ionicons/icons"

const Newsletter: React.FC = () => {
  return (
    <div className="h-full w-full">
      <h2 className="text-xl font-bold text-white mb-4 flex items-center">
        <IonIcon icon={mailOutline} className="mr-2" />
        Newsletter
      </h2>
      <div className="bg-gray-700 rounded-lg p-4">
        <p className="text-gray-300 text-sm mb-4">Suscríbete para recibir ofertas exclusivas y noticias.</p>
        <div className="flex gap-2 w-full">
          <input
            type="email"
            placeholder="Tu email"
            className="flex-1 bg-gray-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button className="bg-purple-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-600 transition-colors">
            Suscribir
          </button>
        </div>
      </div>
    </div>
  )
}

export default Newsletter

