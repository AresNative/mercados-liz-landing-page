import type React from "react"
import { IonIcon } from "@ionic/react"
import { callOutline, mailOutline, locationOutline } from "ionicons/icons"

const Contacto: React.FC = () => {
  return (
    <div className="h-full bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl p-6">
      <h2 className="text-2xl font-bold text-purple-700 mb-6">Contacto</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-3/4">
        {[
          { icon: callOutline, title: "Teléfono", content: "+1 234 567 890" },
          { icon: mailOutline, title: "Email", content: "contacto@super.com" },
          { icon: locationOutline, title: "Dirección", content: "Calle Principal #123" },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg border border-purple-200 rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
          >
            <div className="bg-purple-100 rounded-full p-4 mb-4">
              <IonIcon icon={item.icon} className="text-4xl text-purple-600" />
            </div>
            <h3 className="text-purple-800 font-medium text-lg mb-2">{item.title}</h3>
            <p className="text-gray-600 text-base">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Contacto

