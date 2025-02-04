import type React from "react"
import { IonIcon } from "@ionic/react"
import { starOutline, cardOutline, timeOutline } from "ionicons/icons"

const Servicios: React.FC = () => {
  const servicios = [
    { icon: starOutline, title: "Calidad Premium", desc: "Los mejores productos" },
    { icon: cardOutline, title: "Pago Seguro", desc: "Múltiples métodos" },
    { icon: timeOutline, title: "24/7", desc: "Siempre disponibles" },
  ]

  return (
    <div className="h-full">
      <h2 className="text-xl font-bold text-white mb-4">Nuestros Servicios</h2>
      <div className="space-y-4">
        {servicios.map((servicio, index) => (
          <div key={index} className="flex items-center space-x-3 bg-gray-700 p-3 rounded-lg">
            <IonIcon icon={servicio.icon} className="text-2xl text-purple-400" />
            <div>
              <h3 className="text-white font-medium">{servicio.title}</h3>
              <p className="text-gray-300 text-sm">{servicio.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Servicios

