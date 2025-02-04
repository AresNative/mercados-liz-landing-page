import type React from "react"
import { IonIcon } from "@ionic/react"
import { cartOutline, eyeOutline } from "ionicons/icons"

const Productos: React.FC = () => {
    return (
        <div className="h-full flex flex-col bg-white rounded-xl p-4 sm:p-6 shadow-lg">
            <h2 className="text-xl sm:text-2xl font-bold text-purple-700 mb-4 sm:mb-6 flex items-center">
                <IonIcon icon={cartOutline} className="mr-2" />
                Productos Destacados
            </h2>
            <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="bg-purple-50 border border-purple-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
                        <img src="/merc2.jpg" alt="Producto" className="w-full h-24 sm:h-32 object-cover" />
                        <div className="p-2 sm:p-4">
                            <h3 className="text-sm sm:text-base font-medium text-purple-800">Producto {item}</h3>
                            <p className="text-purple-600 text-sm sm:text-base font-bold mt-1 sm:mt-2">$99.99</p>
                            <button className="mt-2 sm:mt-4 bg-purple-600 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center w-full">
                                <IonIcon icon={eyeOutline} className="mr-1 sm:mr-2" />
                                Ver detalles
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Productos
