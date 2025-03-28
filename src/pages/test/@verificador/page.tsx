import PriceChecker from "@/pages/test/@verificador/components/price-checker"
import Body from "../template/body"

export default function VerificadorPage() {
    return (
        <Body>
            <div className="w-full max-w-xl m-auto min-h-screen mt-20">
                <h1 className="text-2xl font-bold mb-6 text-center">Verificador de Precios</h1>
                <PriceChecker />
            </div>
        </Body>
    )
}

