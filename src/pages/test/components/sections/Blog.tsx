import type React from "react"
import { IonIcon } from "@ionic/react"
import { newspaperOutline } from "ionicons/icons"

const Blog: React.FC = () => {
  return (
    <div className="h-full">
      <h2 className="text-xl font-bold text-white mb-4 flex items-center">
        <IonIcon icon={newspaperOutline} className="mr-2" />
        Blog
      </h2>
      <div className="space-y-4">
        {[1, 2].map((item) => (
          <div key={item} className="bg-gray-700 rounded-lg overflow-hidden">
            <img src="/placeholder.svg" alt="Blog" className="w-full h-32 object-cover" />
            <div className="p-3">
              <h3 className="text-white font-medium">Artículo {item}</h3>
              <p className="text-gray-300 text-sm line-clamp-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog

