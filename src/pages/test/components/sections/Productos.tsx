import type React from "react"
import { IonIcon } from "@ionic/react"
import { cartOutline } from "ionicons/icons"

const Productos: React.FC = () => {
    return (
        <div className="h-full flex flex-col">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <IonIcon icon={cartOutline} className="mr-2" />
                Productos Destacados
            </h2>
            <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="bg-gray-700 rounded-lg p-3">
                        <img src="/placeholder.svg" alt="Producto" className="w-full h-24 object-cover rounded-lg mb-2" />
                        <h3 className="text-white text-sm font-medium">Producto {item}</h3>
                        <p className="text-purple-400 text-sm">$99.99</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Productos

