import Offers from "@/pages/ofertas/Offers";
import RHPage from "@/pages/PageVistas/Rh";
import ComprasVentasPage from "@/pages/PageVistas/comprasVentas";
import AdministracionPage from "@/pages/PageVistas/administracion";
import Reclutamiento from "@/pages/usuario/Reclutamiento";
import ServicioPage from "@/pages/usuario/Calificacion";

interface ruta {
  src: string;
  label: string;
  pagina: React.ComponentType;
}

export const rutasRH: ruta[] = [
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
    label: "Portal Recursos Humanos",
    pagina: Reclutamiento,
  },
];
