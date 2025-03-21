import LabelGenerator from "./components/LabelGenerator"

export default function Etiquetas() {
    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-2xl font-bold mb-6">Generador de Etiquetas</h1>
            <LabelGenerator />
        </div>
    )
}

