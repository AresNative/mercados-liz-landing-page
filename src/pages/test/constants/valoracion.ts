import { Field } from "@/utils/constants/interfaces";

export function ValoracionField(): Field[] {
  return [
    {
      type: "TEXT_AREA",
      name: "comment",
      label: "Comentario",
      placeholder:
        "Danos tu opinion, duda o mensaje directo para trabajar en ello...",
      require: true,
    },
    {
      type: "INPUT",
      name: "valor",
      label: "Valor",
      placeholder: "1 - 5",
      require: true,
    },
  ];
}
