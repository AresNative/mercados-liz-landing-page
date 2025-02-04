import type React from "react"
import { IonIcon } from "@ionic/react"
import { pricetagOutline } from "ionicons/icons"

const Ofertas: React.FC = () => {
  return (
    <div className="h-full">
      <h2 className="text-xl font-bold text-white mb-4 flex items-center">
        <IonIcon icon={pricetagOutline} className="mr-2" />
        Ofertas Especiales
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-gray-700 rounded-lg p-4 flex flex-col items-center">
            <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm mb-2">-30%</div>
            <img src="/placeholder.svg" alt="Oferta" className="w-full h-32 object-cover rounded-lg mb-2" />
            <h3 className="text-white text-center">Oferta {item}</h3>
            <p className="text-purple-400">Antes: $99.99</p>
            <p className="text-red-400 font-bold">Ahora: $69.99</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Ofertas

