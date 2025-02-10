import { Field } from "@/utils/constants/interfaces";

export function ProveedoresPortalField(): Field[] {
  return [
    {
      type: "INPUT",
      name: "mov",
      label: "Movimiento",
      placeholder: "Tipo de movimiento que necesita",
      require: false,
    },
    {
      type: "TEXT_AREA",
      name: "comment",
      label: "Comentario o explicacion necesaria",
      placeholder: "Ingresa el texto necesario...",
      require: false,
    },
    {
      type: "FILE",
      name: "file",
      label: "archivo",
      placeholder: "Archivo",
      require: false,
    },
  ];
}
