"use client"

import { useState, useRef } from "react"
import LabelForm from "./LabelForm"
import LabelPreview from "./LabelPreview"
import { useLabelFormat } from "@/pages/test/@etiquetas/hooks/use-label-format"
import { useBarcode } from "@/pages/test/@etiquetas/hooks/use-barcode"
import type { LabelData } from "@/pages/test/@etiquetas/types/label"

export default function LabelGenerator() {
  const [labelData, setLabelData] = useState<LabelData>({
    productName: "Producto de ejemplo",
    price: 19.99,
    originalPrice: 29.99,
    barcodeValue: "123456789012",
    hasOffer: true,
    expirationDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
  })

  const {
    selectedFormat,
    setSelectedFormat,
    customWidth,
    setCustomWidth,
    customHeight,
    setCustomHeight,
    customUnit,
    setCustomUnit,
    getLabelStyle,
  } = useLabelFormat()

  const { barcodeRef, generateBarcode } = useBarcode(labelData.barcodeValue)
  const labelRef = useRef<HTMLDivElement>(null)

  const handleDataChange = (newData: Partial<LabelData>) => {
    setLabelData((prev) => ({ ...prev, ...newData }))
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <LabelForm
        labelData={labelData}
        onDataChange={handleDataChange}
        selectedFormat={selectedFormat}
        setSelectedFormat={setSelectedFormat}
        customWidth={customWidth}
        setCustomWidth={setCustomWidth}
        customHeight={customHeight}
        setCustomHeight={setCustomHeight}
        customUnit={customUnit}
        setCustomUnit={setCustomUnit}
        labelRef={labelRef}
        barcodeRef={barcodeRef}
        generateBarcode={generateBarcode}
      />

      <LabelPreview
        labelData={labelData}
        labelRef={labelRef}
        barcodeRef={barcodeRef}
        selectedFormat={selectedFormat}
        getLabelStyle={getLabelStyle}
      />
    </div>
  )
}

