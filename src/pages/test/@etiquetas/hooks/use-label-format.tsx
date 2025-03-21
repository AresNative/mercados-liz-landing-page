"use client"

import type React from "react"

import { useState } from "react"
import { LABEL_FORMATS } from "@/pages/test/@etiquetas/data/label-formats"
import type { LabelFormat } from "@/pages/test/@etiquetas//types/label"

export function useLabelFormat() {
    const [selectedFormat, setSelectedFormat] = useState<LabelFormat>("medium")
    const [customWidth, setCustomWidth] = useState(300)
    const [customHeight, setCustomHeight] = useState(150)
    const [customUnit, setCustomUnit] = useState<"px" | "mm" | "cm">("px")

    // Get current label dimensions
    const getLabelDimensions = () => {
        if (selectedFormat === "custom") {
            return {
                width: customWidth,
                height: customHeight,
                unit: customUnit,
            }
        }
        return LABEL_FORMATS[selectedFormat]
    }

    // Get label style based on format
    const getLabelStyle = () => {
        const dimensions = getLabelDimensions()

        let style: React.CSSProperties = {
            width: `${dimensions.width}${dimensions.unit === "px" ? "px" : dimensions.unit}`,
            height: `${dimensions.height}${dimensions.unit === "px" ? "px" : dimensions.unit}`,
            border: "1px solid #e5e7eb",
            padding: "1rem",
            borderRadius: "0.375rem",
            boxSizing: "border-box",
            margin: "0 auto",
            overflow: "hidden",
        }

        // Ajustar el estilo para la vista previa (escalar si es necesario)
        if (dimensions.unit !== "px") {
            // Escalar para la vista previa
            const scale = dimensions.width > 400 ? 400 / dimensions.width : 1
            style = {
                ...style,
                transform: `scale(${scale})`,
                transformOrigin: "top left",
                marginBottom: `${dimensions.height * scale - dimensions.height}px`,
            }
        }

        // Estilo especial para formato cenefa
        if (selectedFormat === "cenefa") {
            style = {
                ...style,
                display: "flex",
                alignItems: "center",
                background: "linear-gradient(to right, #f8f9fa, #e9ecef)",
                borderLeft: "8px solid #4f46e5",
            }
        }

        return style
    }

    return {
        selectedFormat,
        setSelectedFormat,
        customWidth,
        setCustomWidth,
        customHeight,
        setCustomHeight,
        customUnit,
        setCustomUnit,
        getLabelDimensions,
        getLabelStyle,
    }
}

