import type { RefObject } from "react";
import type { LabelFormat } from "@/pages/test/@etiquetas/types/label";
import { LABEL_FORMATS } from "@/pages/test/@etiquetas/data/label-formats";

export const printLabel = (
  labelRef: RefObject<HTMLDivElement>,
  selectedFormat: LabelFormat,
  customWidth: number,
  customHeight: number,
  customUnit: "px" | "mm" | "cm"
) => {
  const printWindow = window.open("", "_blank");
  if (printWindow && labelRef.current) {
    const dimensions =
      selectedFormat === "custom"
        ? { width: customWidth, height: customHeight, unit: customUnit }
        : LABEL_FORMATS[selectedFormat];

    printWindow.document.write(`
      <html>
        <head>
          <title>Etiqueta de Producto</title>
          <style>
            body { margin: 0; padding: 20px; font-family: Arial, sans-serif; }
            .print-label { 
              width: ${dimensions.width}${dimensions.unit}; 
              height: ${dimensions.height}${dimensions.unit}; 
              padding: 15px; 
              border: 1px solid #ccc;
              box-sizing: border-box;
            }
            ${
              selectedFormat === "cenefa"
                ? `
              .print-label {
                display: flex;
                align-items: center;
                background: linear-gradient(to right, #f8f9fa, #e9ecef);
                border-left: 8px solid #4f46e5;
              }
              .print-label .barcode-container {
                flex: 0 0 auto;
                margin-right: 20px;
              }
              .print-label .content {
                flex: 1;
              }
            `
                : ""
            }
          </style>
        </head>
        <body>
          <div class="print-label">
            ${labelRef.current.innerHTML}
          </div>
          <script>
            window.onload = function() { window.print(); window.close(); }
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  }
};
