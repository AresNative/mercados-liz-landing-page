import type React from "react"
import Productos from "./sections/Productos"
import Ofertas from "./sections/Ofertas"
import Servicios from "./sections/Servicios"
import Blog from "./sections/Blog"
import Recetas from "./sections/Recetas"
import Contacto from "./sections/Contacto"
import Newsletter from "./sections/Newsletter"
import Historia from "./sections/Historia"
import Sucursales from "./Sucursales"

const GridLayout: React.FC = () => {
  return (
    <section>
      <div className="min-h-screen bg-gray-900 p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-4 max-w-7xl mx-auto">
          {/* Productos - Sección 10 */}
          <div className="md:col-span-2 lg:col-span-3 bg-gray-800 rounded-lg p-4 relative">
            <span className="top-2 left-2 bg-black/50 text-white px-2 py-1 rounded-md text-sm">10</span>
            <Productos />
          </div>

          {/* Ofertas - Sección 3 */}
          <div className="md:col-span-2 lg:col-span-6 bg-gray-800 rounded-lg p-4 relative">
            <span className="top-2 left-2 bg-black/50 text-white px-2 py-1 rounded-md text-sm">3</span>
            <Ofertas />
          </div>

          {/* Servicios - Sección 4 */}
          <div className="md:col-span-2 lg:col-span-3 bg-gray-800 rounded-lg p-4 relative">
            <span className="top-2 left-2 bg-black/50 text-white px-2 py-1 rounded-md text-sm">4</span>
            <Servicios />
          </div>

          {/* Blog - Sección 9 */}
          <div className="md:col-span-2 lg:col-span-3 bg-gray-800 rounded-lg p-4 relative">
            <span className="top-2 left-2 bg-black/50 text-white px-2 py-1 rounded-md text-sm">9</span>
            <Blog />
          </div>

          {/* Sucursales - Sección 2 */}
          <div className="md:col-span-4 lg:col-span-6 bg-gray-800 rounded-lg p-4 relative">
            <span className="top-2 left-2 bg-black/50 text-white px-2 py-1 rounded-md text-sm">2</span>
            <Sucursales />
          </div>

          {/* Recetas - Sección 5 */}
          <div className="md:col-span-2 lg:col-span-3 bg-gray-800 rounded-lg p-4 relative">
            <span className="top-2 left-2 bg-black/50 text-white px-2 py-1 rounded-md text-sm">5</span>
            <Recetas />
          </div>

          {/* Historia - Sección 6 */}
          <div className="md:col-span-2 lg:col-span-3 bg-gray-800 rounded-lg p-4 relative">
            <span className="top-2 left-2 bg-black/50 text-white px-2 py-1 rounded-md text-sm">6</span>
            <Historia />
          </div>

          {/* Newsletter - Sección 8 */}
          <div className="md:col-span-2 lg:col-span-3 bg-gray-800 rounded-lg p-4 relative">
            <span className="top-2 left-2 bg-black/50 text-white px-2 py-1 rounded-md text-sm">8</span>
            <Newsletter />
          </div>

          {/* Contacto - Sección 7 */}
          <div className="md:col-span-2 lg:col-span-6 bg-gray-800 rounded-lg p-4 relative">
            <span className="top-2 left-2 bg-black/50 text-white px-2 py-1 rounded-md text-sm">7</span>
            <Contacto />
          </div>
        </div>
      </div>
    </section>
  )
}

export default GridLayout

