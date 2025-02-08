import { Field } from "@/utils/constants/interfaces";

export function ContactoField(): Field[] {
  return [
    {
      name: "name",
      type: "INPUT",
      label: "Nombre completo",
      placeholder: "Juan Perez",
      require: false,
    },
    {
      name: "message",
      type: "TEXT_AREA",
      label: "Mensaje",
      placeholder:
        "Danos tu opinion o duda sobre nuestro sevicio y de ser necesario deja tu contacto",
      require: false,
      multi: false,
    },
  ];
}
