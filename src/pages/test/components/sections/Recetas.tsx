import type React from "react"
import { IonIcon } from "@ionic/react"
import { restaurantOutline, timeOutline, starOutline } from "ionicons/icons"

const Recetas: React.FC = () => {
  return (
    <div className="h-full bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl p-6">
      <h2 className="text-2xl font-bold text-purple-700 mb-6 flex items-center">
        <IonIcon icon={restaurantOutline} className="mr-2" />
        Recetas
      </h2>
      <div className="space-y-4">
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="bg-white border border-purple-200 shadow-lg rounded-lg p-4 flex items-center space-x-4 hover:shadow-xl transition-shadow duration-300">
            <img src="/frutas.png" alt="Receta" className="w-20 h-20 rounded-lg object-cover" />
            <div>
              <h3 className="font-medium text-lg text-purple-800">Receta {item}</h3>
              <p className="text-gray-600 text-sm flex items-center mt-1">
                <IonIcon icon={timeOutline} className="mr-1" />
                Tiempo: 30 min
              </p>
              <div className="flex items-center mt-2">
                <IonIcon icon={starOutline} className="text-yellow-500 mr-1" />
                <IonIcon icon={starOutline} className="text-yellow-500 mr-1" />
                <IonIcon icon={starOutline} className="text-yellow-500 mr-1" />
                <IonIcon icon={starOutline} className="text-yellow-500 mr-1" />
                <IonIcon icon={starOutline} className="text-yellow-500" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Recetas
