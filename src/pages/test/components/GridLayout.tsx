import type React from "react"
import Productos from "./sections/Productos"
import Ofertas from "./sections/Ofertas"
import Servicios from "./sections/Servicios"
import Blog from "./sections/Blog"
import Recetas from "./sections/Recetas"
import Contacto from "./sections/Contacto"
import Newsletter from "./sections/Newsletter"
import Historia from "./sections/Historia"
import Sucursales from "./sections/Sucursales"

const GridLayout: React.FC = () => {
  return (
    <section>
      <div className="p-4 sm:p-6 md:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6 mx-auto">
          {/* Productos - Sección 10 */}
          <div className="sm:col-span-1 lg:col-span-3">
            <Productos />
          </div>

          {/* Ofertas - Sección 3 */}
          <div className="sm:col-span-2 lg:col-span-6">
            <Ofertas />
          </div>

          {/* Servicios - Sección 4 */}
          <div className="sm:col-span-1 lg:col-span-3">
            <Servicios />
          </div>

          {/* Blog - Sección 9 */}
          <div className="sm:col-span-1 lg:col-span-3">
            <Blog />
          </div>

          {/* Sucursales - Sección 2 */}
          <div className="sm:col-span-2 lg:col-span-6">
            <Sucursales />
          </div>

          {/* Recetas - Sección 5 */}
          <div className="sm:col-span-1 lg:col-span-3">
            <Recetas />
          </div>

          {/* Historia - Sección 6 */}
          <div className="sm:col-span-1 lg:col-span-3">
            <Historia />
          </div>

          {/* Newsletter - Sección 8 */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Newsletter />
          </div>

          {/* Contacto - Sección 7 */}
          <div className="sm:col-span-2 lg:col-span-5">
            <Contacto />
          </div>
        </div>
      </div>
    </section>
  )
}

export default GridLayout
