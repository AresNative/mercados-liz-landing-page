"use client"

import type React from "react"

import type { RefObject } from "react"
import { format } from "date-fns"
import type { LabelData } from "@/pages/test/@etiquetas/types/label"
import type { LabelFormat } from "@/pages/test/@etiquetas/types/label"

interface LabelPreviewProps {
  labelData: LabelData
  labelRef: RefObject<HTMLDivElement>
  barcodeRef: RefObject<SVGSVGElement>
  selectedFormat: LabelFormat
  getLabelStyle: () => React.CSSProperties
}

export default function LabelPreview({
  labelData,
  labelRef,
  barcodeRef,
  selectedFormat,
  getLabelStyle,
}: LabelPreviewProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Vista Previa</h2>
      <div className="bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden">
        <div className="p-6">
          <div
            ref={labelRef}
            style={getLabelStyle()}
            className={`${selectedFormat === "cenefa" ? "flex items-center" : ""}`}
          >
            {selectedFormat === "cenefa" ? (
              <>
                <div className="barcode-container mr-4">
                  <svg ref={barcodeRef} className="w-32"></svg>
                </div>
                <div className="content flex-1">
                  <div className="text-lg font-bold mb-1">{labelData.productName}</div>

                  {labelData.hasOffer ? (
                    <div className="flex items-center gap-2">
                      <div className="bg-red-100 py-1 px-2 rounded-md">
                        <span className="text-red-600 font-bold text-xs">¡OFERTA!</span>
                      </div>
                      <span className="text-gray-500 line-through text-xs">{labelData.originalPrice.toFixed(2)}€</span>
                      <span className="text-xl font-bold text-red-600">{labelData.price.toFixed(2)}€</span>
                    </div>
                  ) : (
                    <div className="text-xl font-bold">{labelData.price.toFixed(2)}€</div>
                  )}

                  {labelData.expirationDate && (
                    <div className="text-xs text-gray-600 mt-1">
                      Válido hasta: {format(labelData.expirationDate, "dd/MM/yyyy")}
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <div className="text-center mb-3">
                  <h3 className="font-bold text-lg">{labelData.productName}</h3>
                </div>

                <div className="flex justify-center mb-4">
                  <svg ref={barcodeRef} className="w-full"></svg>
                </div>

                <div className="text-center">
                  {labelData.hasOffer ? (
                    <div className="space-y-1">
                      <div className="bg-red-100 py-1 px-2 rounded-md inline-block">
                        <span className="text-red-600 font-bold text-sm">¡OFERTA!</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-gray-500 line-through text-sm">
                          {labelData.originalPrice.toFixed(2)}€
                        </span>
                        <span className="text-2xl font-bold text-red-600">{labelData.price.toFixed(2)}€</span>
                      </div>
                    </div>
                  ) : (
                    <div className="text-2xl font-bold">{labelData.price.toFixed(2)}€</div>
                  )}

                  {labelData.expirationDate && (
                    <div className="mt-2 text-sm text-gray-600">
                      Válido hasta: {format(labelData.expirationDate, "dd/MM/yyyy")}
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

