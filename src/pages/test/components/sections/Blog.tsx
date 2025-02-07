import type React from "react"
import { IonIcon } from "@ionic/react"
import { newspaperOutline, arrowForward } from "ionicons/icons"

const Blog: React.FC = () => {
  return (
    <div className="h-full p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold text-purple-700 mb-4 sm:mb-6 flex items-center">
        <IonIcon icon={newspaperOutline} className="mr-2" />
        Blog
      </h2>
      <div className="space-y-4 sm:space-y-6">
        {[1, 2].map((item) => (
          <div key={item} className="bg-purple-50 rounded-lg border border-purple-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
            <img src="/fondo.jpg" alt="Blog" className="w-full h-32 sm:h-48 object-cover" />
            <div className="p-3 sm:p-4">
              <h3 className="font-medium text-base sm:text-lg text-purple-800 mb-2">Artículo {item}</h3>
              <p className="text-purple-600 text-sm sm:text-base mb-3 sm:mb-4 line-clamp-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <button className="text-purple-600 font-medium text-sm sm:text-base flex items-center hover:text-purple-700 hover:underline hover:bg-transparent transition-colors duration-300">
                Leer más
                <IonIcon icon={arrowForward} className="ml-1 sm:ml-2" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog
