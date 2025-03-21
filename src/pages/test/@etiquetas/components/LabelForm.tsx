"use client"

import type { RefObject } from "react"
import { Printer } from "lucide-react"
import DatePicker from "@/pages/test/@etiquetas/components/DatePicker"
import FormatSelector from "@/pages/test/@etiquetas/components/FormatSelector"
import CustomDimensionsForm from "@/pages/test/@etiquetas/components/CustomDimensionsForm"
import type { LabelData } from "@/pages/test/@etiquetas/types/label"
import type { LabelFormat } from "@/pages/test/@etiquetas/types/label"
import { printLabel } from "@/pages/test/@etiquetas/utils/print-utils"

interface LabelFormProps {
  labelData: LabelData
  onDataChange: (data: Partial<LabelData>) => void
  selectedFormat: LabelFormat
  setSelectedFormat: (format: LabelFormat) => void
  customWidth: number
  setCustomWidth: (width: number) => void
  customHeight: number
  setCustomHeight: (height: number) => void
  customUnit: "px" | "mm" | "cm"
  setCustomUnit: (unit: "px" | "mm" | "cm") => void
  labelRef: RefObject<HTMLDivElement>
  barcodeRef: RefObject<SVGSVGElement>
  generateBarcode: () => void
}

export default function LabelForm({
  labelData,
  onDataChange,
  selectedFormat,
  setSelectedFormat,
  customWidth,
  setCustomWidth,
  customHeight,
  setCustomHeight,
  customUnit,
  setCustomUnit,
  labelRef,
  barcodeRef,
  generateBarcode,
}: LabelFormProps) {
  const handlePrint = () => {
    generateBarcode()
    setTimeout(() => {
      printLabel(labelRef, selectedFormat, customWidth, customHeight, customUnit)
    }, 500)
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="product-name" className="block text-sm font-medium text-gray-700">
          Nombre del Producto
        </label>
        <input
          id="product-name"
          type="text"
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={labelData.productName}
          onChange={(e) => onDataChange({ productName: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
          Precio (€)
        </label>
        <input
          id="price"
          type="number"
          step="0.01"
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={labelData.price}
          onChange={(e) => onDataChange({ price: Number.parseFloat(e.target.value) })}
        />
      </div>

      <div className="flex items-center space-x-2 my-4">
        <div className="relative flex items-start">
          <div className="flex items-center h-5">
            <input
              id="has-offer"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              checked={labelData.hasOffer}
              onChange={(e) => onDataChange({ hasOffer: e.target.checked })}
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="has-offer" className="font-medium text-gray-700">
              Tiene oferta
            </label>
          </div>
        </div>
      </div>

      {labelData.hasOffer && (
        <div className="space-y-2">
          <label htmlFor="original-price" className="block text-sm font-medium text-gray-700">
            Precio Original (€)
          </label>
          <input
            id="original-price"
            type="number"
            step="0.01"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={labelData.originalPrice}
            onChange={(e) => onDataChange({ originalPrice: Number.parseFloat(e.target.value) })}
          />
        </div>
      )}

      <div className="space-y-2">
        <label htmlFor="barcode" className="block text-sm font-medium text-gray-700">
          Código de Barras (EAN-13)
        </label>
        <input
          id="barcode"
          type="text"
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={labelData.barcodeValue}
          onChange={(e) => onDataChange({ barcodeValue: e.target.value })}
          maxLength={13}
          pattern="[0-9]*"
        />
      </div>

      <DatePicker
        selectedDate={labelData.expirationDate}
        onDateChange={(date) => onDataChange({ expirationDate: date })}
      />

      <FormatSelector selectedFormat={selectedFormat} onFormatChange={setSelectedFormat} />

      {selectedFormat === "custom" && (
        <CustomDimensionsForm
          width={customWidth}
          onWidthChange={setCustomWidth}
          height={customHeight}
          onHeightChange={setCustomHeight}
          unit={customUnit}
          onUnitChange={setCustomUnit}
        />
      )}

      <button
        className="w-full mt-4 flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={handlePrint}
      >
        <Printer className="mr-2 h-4 w-4" />
        Imprimir Etiqueta
      </button>
    </div>
  )
}

