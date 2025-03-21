export const LABEL_FORMATS = {
  small: { name: "Pequeña", width: 300, height: 150, unit: "px" },
  medium: { name: "Mediana", width: 400, height: 200, unit: "px" },
  large: { name: "Grande", width: 500, height: 250, unit: "px" },
  a4: { name: "A4", width: 210, height: 297, unit: "mm" },
  letter: { name: "Carta", width: 216, height: 279, unit: "mm" },
  cenefa: { name: "Cenefa", width: 500, height: 100, unit: "px" },
  custom: { name: "Personalizada", width: 300, height: 150, unit: "px" },
} as const;
