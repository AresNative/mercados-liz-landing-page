import { Field } from "@/utils/constants/interfaces";

export function EvaluacionField(): Field[] {
  return [
    {
      type: "INPUT",
      name: "nombre",
      label: "Ingrese su nombre completo",
      placeholder: "Juan Perez...",
      require: true,
    },
    {
      name: "empleado",
      type: "INPUT",
      label: "Empleado que lo atendio",
      placeholder: "Añada un nombre valido...",
      require: true,
    },
    {
      name: "area",
      type: "SELECT",
      label: "Area",
      options: ["Cajas", "Sistemas", "Recivo", "Pagos", "Ventas"],
      enableAutocomplete: "true",
      placeholder: "area del trabajador",
      require: false,
      multi: true,
    },
    {
      type: "Flex",
      name: "flex",
      label: "Flex",
      require: false,
      elements: [
        {
          type: "INPUT",
          name: "productividad",
          label: "Productividad del trabajador",
          placeholder: "1 - 5",
          require: false,
        },
        {
          type: "INPUT",
          name: "calidad",
          label: "Calidad del trabajador",
          placeholder: "1 - 5",
          require: false,
        },
      ],
    },
  ];
}
