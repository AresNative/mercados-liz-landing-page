"use client"

import { useRef, useEffect } from "react"
import JsBarcode from "jsbarcode"

export function useBarcode(barcodeValue: string) {
    const barcodeRef = useRef<SVGSVGElement>(null)

    // Generate barcode when component mounts or when barcode value changes
    useEffect(() => {
        generateBarcode()
    }, [barcodeValue])

    const generateBarcode = () => {
        if (barcodeRef.current) {
            try {
                JsBarcode(barcodeRef.current, barcodeValue, {
                    format: "EAN13",
                    lineColor: "#000",
                    width: 2,
                    height: 50,
                    displayValue: true,
                    fontSize: 12,
                })
            } catch (error) {
                console.error("Error generating barcode:", error)
            }
        }
    }

    return { barcodeRef, generateBarcode }
}

