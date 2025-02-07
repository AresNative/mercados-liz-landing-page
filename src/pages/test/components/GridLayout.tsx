import type React from "react";
import Ofertas from "./sections/Ofertas";
import Servicios from "./sections/Servicios";
import Blog from "./sections/Blog";
import Contacto from "./sections/Contacto";
import Newsletter from "./sections/Newsletter";
import Historia from "./sections/Historia";
import Sucursales from "./sections/Sucursales";

const GridLayout: React.FC = () => {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-3 grid-rows-5 gap-2">

        {/* Ofertas - div1 */}
        <div className="col-span-3 row-span-1">
          <Ofertas />
        </div>

        {/* Servicios - div2 */}
        <div className="col-span-1 row-span-2">
          <Servicios />
        </div>

        {/* Sucursales - div3 */}
        <div className="col-span-1 row-span-2">
          <Historia />
        </div>

        {/* Historia - div4 */}
        <div className="col-span-2 row-span-1">
          <Sucursales />
        </div>

        {/* Blog - div5 */}
        <div className="col-span-1 row-span-2">
          <Blog />
        </div>

        {/* Contacto - div6 */}
        <div className="col-span-2 row-span-1">
          <Contacto />
        </div>

        {/* Newsletter - div7 */}
        <div className="col-span-2 row-span-1">
          <Newsletter />
        </div>
      </div>
    </section>
  );
};

export default GridLayout;