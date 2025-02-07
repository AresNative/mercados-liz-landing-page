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
    <div className="h-full p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold text-purple-700 mb-4 sm:mb-6">Nuestros Servicios</h2>
      <div className="space-y-4 sm:space-y-6">
        {servicios.map((servicio, index) => (
          <div key={index} className="flex gap-3 sm:gap-4 items-center p-3 sm:p-4 bg-white border rounded-lg hover:shadow-md transition-shadow duration-300">
            <div className="bg-purple-100 rounded-full p-2 sm:p-3">
              <IonIcon icon={servicio.icon} className="text-xl sm:text-2xl text-purple-600" />
            </div>
            <div>
              <h3 className="font-medium text-base sm:text-lg text-purple-800">{servicio.title}</h3>
              <p className="text-purple-600 text-sm sm:text-base">{servicio.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Servicios
