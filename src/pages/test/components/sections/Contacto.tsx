import type React from "react"
import { IonIcon } from "@ionic/react"
import { callOutline, mailOutline, locationOutline } from "ionicons/icons"

const Contacto: React.FC = () => {
  return (
    <div className="h-full">
      <h2 className="text-xl font-bold text-white mb-4">Contacto</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-700 rounded-lg p-4 flex flex-col items-center text-center">
          <IonIcon icon={callOutline} className="text-3xl text-purple-400 mb-2" />
          <h3 className="text-white font-medium mb-1">Teléfono</h3>
          <p className="text-gray-300 text-sm">+1 234 567 890</p>
        </div>
        <div className="bg-gray-700 rounded-lg p-4 flex flex-col items-center text-center">
          <IonIcon icon={mailOutline} className="text-3xl text-purple-400 mb-2" />
          <h3 className="text-white font-medium mb-1">Email</h3>
          <p className="text-gray-300 text-sm">contacto@super.com</p>
        </div>
        <div className="bg-gray-700 rounded-lg p-4 flex flex-col items-center text-center">
          <IonIcon icon={locationOutline} className="text-3xl text-purple-400 mb-2" />
          <h3 className="text-white font-medium mb-1">Dirección</h3>
          <p className="text-gray-300 text-sm">Calle Principal #123</p>
        </div>
      </div>
    </div>
  )
}

export default Contacto

