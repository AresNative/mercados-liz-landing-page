import { Field } from "@/utils/constants/interfaces";

export function CombosField(): Field[] {
  return [
    {
      name: "name",
      type: "INPUT",
      label: "Nombre del combo",
      placeholder: "Añada un nombre valido...",
      require: false,
    },
    {
      name: "state",
      type: "SELECT",
      label: "Estado",
      options: ["Dsiponible", "Proximamente", "Agotado"],
      enableAutocomplete: "true",
      placeholder: "estado",
      require: false,
      multi: false,
    },
    {
      type: "INPUT",
      name: "porcentaje",
      label: "Porcentaje de oferta",
      placeholder: "Porcentaje del precio en oferta",
      require: false,
    },
    {
      type: "Flex",
      name: "flex",
      label: "Flex",
      require: false,
      elements: [
        {
          type: "INPUT",
          name: "price",
          label: "Precio",
          placeholder: "Precio base de los productos en conjunto",
          require: false,
        },
        {
          type: "INPUT",
          name: "price_ofer",
          label: "Precio en oferta",
          placeholder: "Precio del combo",
          require: false,
        },
      ],
    },
    {
      type: "FILE",
      name: "file",
      label: "archivo",
      placeholder: "Archivo",
      require: false,
    },

    {
      type: "TEXT_AREA",
      name: "description",
      label: "Descripcion del combo",
      placeholder: "Describe el combo",
      require: false,
    },
  ];
}
