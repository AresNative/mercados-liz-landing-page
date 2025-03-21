"use client"

import { LABEL_FORMATS } from "@/pages/test/@etiquetas/data/label-formats"
import type { LabelFormat } from "@/pages/test/@etiquetas/types/label"

interface FormatSelectorProps {
  selectedFormat: LabelFormat
  onFormatChange: (format: LabelFormat) => void
}

export default function FormatSelector({ selectedFormat, onFormatChange }: FormatSelectorProps) {
  return (
    <div className="space-y-2">
      <label htmlFor="label-format" className="block text-sm font-medium text-gray-700">
        Formato de Etiqueta
      </label>
      <select
        id="label-format"
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        value={selectedFormat}
        onChange={(e) => onFormatChange(e.target.value as LabelFormat)}
      >
        {Object.entries(LABEL_FORMATS).map(([key, format]) => (
          <option key={key} value={key}>
            {format.name} ({format.width}×{format.height}
            {format.unit})
          </option>
        ))}
      </select>
    </div>
  )
}

