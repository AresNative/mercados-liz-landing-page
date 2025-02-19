import Offers from "@/pages/ofertas/Offers";
import RHPage from "../pages/PageVistas/Rh";
import ComprasVentasPage from "../pages/PageVistas/comprasVentas";
import AdministracionPage from "@/pages/PageVistas/administracion";
import Reclutamiento from "@/pages/usuario/Reclutamiento";
import ServicioPage from "@/pages/usuario/Calificacion";
import ValoracionEmpleadosPage from "@/pages/PageVistas/valoracionesEmpleados";
import ValoracionPersonalTable from "@/pages/vistaUser/ValoracionPersonalTable";

interface ruta {
  src: string;
  label: string;
  pagina: React.ComponentType;
}

export const rutasRecursosH: ruta[] = [
  {
    src: "/RecursosHumanos",
    label: "Portal Recursos Humanos",
    pagina: RHPage,
  },
  {
    src: "/Reclutamiento",
    label: "Portal Recursos Humanos",
    pagina: Reclutamiento,
  },
  {
    src: "/ValoracionEmpleadosPage",
    label: "Evaluación Empleados",
    pagina: ValoracionPersonalTable,
  },
  /* Preguntar que mas accesos o que otra ventana necesita para poder agregarla 
  (Preguntar a Diana cual es la informacion necesaria que quiere que se vea en las tablas y tambien ver el que es de postulacione 
  para ver si se necesita mas detalles o menos detalles,ver proceso de vacante que maneja) *Diana y luis*/
];

export const rutasCompras: ruta[] = [
  {
    src: "/ComprasVentasPage",
    label: "Portal Compras",
    pagina: ComprasVentasPage,
  },
  {
    src: "/Ofertas",
    label: "Portal Compras",
    pagina: Offers,
  },
  {
    src: "/ValoracionEmpleadosPage",
    label: "Evaluación Empleados",
    pagina: ValoracionEmpleadosPage,
  },
  /* Preguntar que mas accesos o que otra ventana necesita para poder agregarla cesar y Luis */
];

export const rutasAdmin: ruta[] = [
  {
    src: "/AdministracionPage",
    label: "Portal Administracion",
    pagina: AdministracionPage,
  },
  {
    src: "/Servicio",
    label: "Portal ",
    pagina: ServicioPage,
  },
  {
    src: "/Ofertas",
    label: "Portal Compras",
    pagina: Offers,
  },
  {
    src: "/Reclutamiento",
    label: "Unete a la familia",
    pagina: Reclutamiento,
  },
  {
    src: "/ValoracionEmpleadosPage",
    label: "Evaluación Empleados",
    pagina: ValoracionEmpleadosPage,
  },
  /* Preguntar que mas accesos o que otra ventana necesita para poder agregarla  *Dani y Luis */
];
