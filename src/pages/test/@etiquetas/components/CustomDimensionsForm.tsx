"use client"

interface CustomDimensionsFormProps {
  width: number
  onWidthChange: (width: number) => void
  height: number
  onHeightChange: (height: number) => void
  unit: "px" | "mm" | "cm"
  onUnitChange: (unit: "px" | "mm" | "cm") => void
}

export default function CustomDimensionsForm({
  width,
  onWidthChange,
  height,
  onHeightChange,
  unit,
  onUnitChange,
}: CustomDimensionsFormProps) {
  return (
    <div className="space-y-4 p-4 bg-gray-50 rounded-md border border-gray-200">
      <h3 className="text-sm font-medium text-gray-700">Dimensiones Personalizadas</h3>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="custom-width" className="block text-sm font-medium text-gray-700">
            Ancho
          </label>
          <input
            id="custom-width"
            type="number"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={width}
            onChange={(e) => onWidthChange(Number.parseInt(e.target.value))}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="custom-height" className="block text-sm font-medium text-gray-700">
            Alto
          </label>
          <input
            id="custom-height"
            type="number"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={height}
            onChange={(e) => onHeightChange(Number.parseInt(e.target.value))}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="custom-unit" className="block text-sm font-medium text-gray-700">
          Unidad
        </label>
        <select
          id="custom-unit"
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          value={unit}
          onChange={(e) => onUnitChange(e.target.value as "px" | "mm" | "cm")}
        >
          <option value="px">Píxeles (px)</option>
          <option value="mm">Milímetros (mm)</option>
          <option value="cm">Centímetros (cm)</option>
        </select>
      </div>
    </div>
  )
}

