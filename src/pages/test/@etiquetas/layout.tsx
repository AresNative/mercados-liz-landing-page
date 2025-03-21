import Body from "../template/body"
import Etiquetas from "./page"
export default function EtiquetasLayout() {
    return (
        <Body>
            <section className="min-h-screen">
                <Etiquetas />
            </section>
        </Body>
    )
}

