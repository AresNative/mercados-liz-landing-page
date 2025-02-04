import type React from "react"
import { IonIcon } from "@ionic/react"
import { pricetagOutline, cartOutline } from "ionicons/icons"

const Ofertas: React.FC = () => {
  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
      <h2 className="text-xl sm:text-2xl font-bold text-purple-700 mb-4 sm:mb-6 flex items-center">
        <IonIcon icon={pricetagOutline} className="mr-2" />
        Ofertas Especiales
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-purple-50 border border-purple-200 rounded-lg p-4 sm:p-6 flex flex-col items-center hover:shadow-md transition-shadow duration-300">
            <div className="bg-purple-600 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold mb-2 sm:mb-4">-30%</div>
            <img src="/merc1.jpg" alt="Oferta" className="w-full h-32 sm:h-40 object-cover rounded-lg mb-2 sm:mb-4" />
            <h3 className="text-base sm:text-lg font-medium text-purple-800 mb-1 sm:mb-2">Oferta {item}</h3>
            <p className="text-gray-500 line-through text-sm">Antes: $99.99</p>
            <p className="text-purple-600 font-bold text-lg sm:text-xl mt-1">Ahora: $69.99</p>
            <button className="mt-2 sm:mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg text-sm sm:text-base font-medium hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center w-full">
              <IonIcon icon={cartOutline} className="mr-2" />
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Ofertas
