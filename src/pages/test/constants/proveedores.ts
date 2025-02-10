import { Field } from "@/utils/constants/interfaces";

export function ProveedoresField(): Field[] {
  return [
    {
      name: "name",
      type: "INPUT",
      label: "Nombre completo",
      placeholder: "Juan Perez...",
      require: true,
    },
    {
      name: "email",
      type: "MAIL",
      label: "Correo de contacto",
      placeholder: "example@mail.com...",
      require: true,
    },
    {
      name: "company",
      type: "INPUT",
      label: "Nombre de la compañia",
      placeholder: "...",
      require: true,
    },
    {
      name: "department",
      type: "SELECT",
      label: "Departamento en el que se enfoca",
      options: [
        "Abarrotes Comestibles",
        "Frutas y Verduras",
        "Cuidado Personal",
        "Carnes",
        "Mercancías Generales",
        "Bebidas y Licores",
        "Lacteos",
        "Dulcería",
        "Especies y Condimentos",
        "Materia Prima",
      ],
      enableAutocomplete: "true",
      placeholder: "estado",
      require: true,
      multi: true,
    },
    {
      type: "INPUT",
      name: "rfc",
      label: "RFC de la empresa",
      placeholder: "0000000000XZY",
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
          name: "addres",
          label: "Direccion",
          placeholder: "Direcion del estrablecimiento o almacen",
          require: true,
        },
        {
          type: "INPUT",
          name: "code",
          label: "Codigo postal",
          placeholder: "00000",
          require: true,
        },
      ],
    },
    {
      type: "FILE",
      name: "file",
      label: "Catalogo o archivos de referencia",
      placeholder: "",
      require: false,
    },
  ];
}
