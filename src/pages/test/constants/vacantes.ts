import { Field } from "@/utils/constants/interfaces";

export function VacantesField(): Field[] {
  return [
    {
      name: "titulo",
      type: "INPUT",
      label: "Titulo de la vacante",
      placeholder: "Cajero turno intermedio...",
      require: true,
    },
    {
      type: "Flex",
      name: "flex",
      label: "Flex",
      require: false,
      elements: [
        {
          name: "id_sucursal",
          type: "SELECT",
          label: "Sucursal",
          options: ["1", "2", "3"],
          enableAutocomplete: "true",
          placeholder: "Sucursal(es) en la(s) que se solicita el puesto",
          require: true,
          multi: true,
        },
        {
          name: "id_puesto",
          type: "SELECT",
          label: "Puesto",
          options: ["1", "2", "3"],
          enableAutocomplete: "true",
          placeholder: "Puesto solicitado",
          require: true,
          multi: false,
        },
      ],
    },
    {
      type: "INPUT",
      name: "years_experience",
      label: "Tiempo de experiencia",
      placeholder: "Experiencia necesaria para el puesto",
      require: false,
    },
    {
      type: "TEXT_AREA",
      name: "description",
      label: "Descripcion del puesto",
      placeholder: "Describe el puesto y sus actividades",
      require: false,
    },
  ];
}
