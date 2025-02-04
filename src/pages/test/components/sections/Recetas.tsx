import type React from "react"
import { IonIcon } from "@ionic/react"
import { restaurantOutline } from "ionicons/icons"

const Recetas: React.FC = () => {
  return (
    <div className="h-full">
      <h2 className="text-xl font-bold text-white mb-4 flex items-center">
        <IonIcon icon={restaurantOutline} className="mr-2" />
        Recetas
      </h2>
      <div className="space-y-3">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-gray-700 rounded-lg p-3 flex items-center space-x-3">
            <img src="/placeholder.svg" alt="Receta" className="w-16 h-16 rounded-lg object-cover" />
            <div>
              <h3 className="text-white font-medium">Receta {item}</h3>
              <p className="text-gray-300 text-sm">Tiempo: 30 min</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Recetas

