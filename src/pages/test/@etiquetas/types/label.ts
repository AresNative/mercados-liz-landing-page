import type { LABEL_FORMATS } from "@/pages/test/@etiquetas/data/label-formats";

export type LabelFormat = keyof typeof LABEL_FORMATS;

export interface LabelData {
  productName: string;
  price: number;
  originalPrice: number;
  barcodeValue: string;
  hasOffer: boolean;
  expirationDate: Date | undefined;
}
