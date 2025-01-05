
import "@/pages/margen-pagina.css"
import { Input } from "@/components/functions/input";
import { Select } from "@/components/functions/select";
import { Button } from "@/components/functions/button";
import '@/components/displays/textarea.css'
import styles from "./portalprov.module.css"
import { useState } from "react";
import { IonButton } from "@ionic/react";
import { FileText } from "lucide-react";
import Page from "@/template/page";

interface Opcion {
    texto: string;
    tipo: 'text' | 'password' | 'email' | 'number' | "select" | 'date' | "h1" | undefined; // Tipo del input (text, email, number, etc.)
    subopciones?: { props?: any, texto: string, tipo: 'text' | 'password' | 'email' | 'number' | 'date' | "select" | undefined; multiple?: boolean; values?: any[]; }[]; // Subopciones opcionales con sus tipos
    values?: any[];
    multiple?: boolean;
    props?: any;
}

interface Pregunta {
    id: number;
    texto: string;
    opciones: Opcion[];
}

interface Respuesta {
    preguntaId: number;
    respuesta: string;
}
const preguntas: Pregunta[] = [
    {
        id: 1,
        texto: "Datos Generales",
        opciones: [
            { texto: "Información general", tipo: "h1" },
            { texto: "Proveedor", tipo: "text", props: "" },
            {
                texto: "Datos", tipo: "text", subopciones: [
                    { texto: "Fecha ", tipo: "date" },
                    {
                        texto: "Tipo de Movimiento", tipo: "select", props: "", multiple: false, values: [
                            { nombre: "Factura" },
                            { nombre: "Pago" },
                            { nombre: "Notificación" },
                            { nombre: "Validación de datos " },
                            { nombre: "etc." }
                        ]
                    },
                ]
            },
        ]
    },
];

const ProveePage = () => {

    const [paginaActual, setPaginaActual] = useState(0)
    const [respuestas, setRespuestas] = useState<Respuesta[]>([])

    const preguntaActual = preguntas[paginaActual]
    const esUltimaPagina = paginaActual === preguntas.length - 1

    const handleRespuesta = (respuesta: string) => {
        setRespuestas(prevRespuestas => {
            const nuevasRespuestas = [...prevRespuestas]
            const index = nuevasRespuestas.findIndex(r => r.preguntaId === preguntaActual.id)
            if (index !== -1) {
                nuevasRespuestas[index] = { preguntaId: preguntaActual.id, respuesta }
            } else {
                nuevasRespuestas.push({ preguntaId: preguntaActual.id, respuesta })
            }
            return nuevasRespuestas
        })
    }
    const AbrirPDF = () => {
        const urlPDF = ''; // Ruta al archivo pdf
        window.open(urlPDF, '_blank'); // Abre el pdf en una nueva pestaña
    };

    const handleEnviar = () => {
        // Aquí puedes implementar la lógica para enviar las respuestas a un servidor
        alert("¡Cuestionario enviado con éxito!123")
    }

    const respuestaActual = respuestas.find(r => r.preguntaId === preguntaActual.id)?.respuesta || ""
    return (
        <Page>
            <>
                <h2 className="titulos" style={{ marginTop: "6rem" }}> Portal proveedores Mercados Mejia </h2>
                <form className="margen-pagina ">
                    <div className={styles["reclutamiento"]} >
                        {preguntaActual.opciones.map((data: Opcion, index: number) => {
                            return (
                                <div className={styles["reclutamiento-columnas"]} key={index}>
                                    {data.subopciones ? (
                                        // Si hay subopciones, mostrar los inputs o selects dentro de subopciones
                                        <>
                                            {data.subopciones.map((subdata, subIndex) => (
                                                subdata.tipo === "select" ? (
                                                    <Select
                                                        key={subIndex}
                                                        multiple={subdata.multiple}
                                                        values={subdata.values || []} // Usamos las opciones de select en las subopciones
                                                        message={subdata.texto}       // Usamos el texto como mensaje o label
                                                    />
                                                ) : (
                                                    <Input
                                                        key={subIndex}
                                                        label={subdata.texto}
                                                        type={subdata.tipo}
                                                        placheolder=""
                                                    />
                                                )
                                            ))}
                                        </>
                                    ) : (
                                        // Verificar si el tipo es "select" en las opciones principales
                                        data.tipo === "select" ? (
                                            <Select
                                                multiple={data.multiple}
                                                values={data.values || []}  // Usamos las opciones del select desde data.values
                                                message={data.texto}        // Usamos el texto como mensaje o label
                                            />
                                        ) : data.tipo === "h1" ? (
                                            <h1>{data.texto}</h1>
                                        ) : (
                                            // Si no es "select", renderizar Input normal
                                            <Input label={data.texto} type={data.tipo} placheolder="" />
                                        )
                                    )}
                                </div>
                            );
                        })}
                        <input type="file" data-multiple-caption="{count} archivos seleccionados" accept=".xml,.pdf" multiple />

                        <div>
                            <textarea className="textarea" placeholder="Comentario"></textarea>
                        </div>
                        <div style={{ display: "flex" }}>
                            <Button label="Enviar" onClick={handleEnviar} type={"button"} color={"default"} />
                        </div>
                    </div>
                </form>
            </>
            <div className={styles["form"]}>
                <h2>Mis documentos</h2>
                <table className={styles["responsive-table"]}>
                    <thead>
                        <tr>
                            <th>Proveedor</th>
                            <th>Movimiento</th>
                            <th>Fecha</th>
                            <th>Comentarios</th>
                            <th><center>Archivo</center></th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>Provedor 1</td>
                            <td>Factura</td>
                            <td>10/10/2023</td>
                            <td>"Comentario"</td>
                            <td>
                                <IonButton color={"danger"} slot="end" shape="round" size="small" fill="clear" onClick={AbrirPDF}>

                                    <FileText />
                                </IonButton>
                            </td>
                        </tr>

                        <tr>
                            <td>Provedor 2</td>
                            <td>Factura</td>
                            <td>10/11/2023</td>
                            <td></td>
                            <td>
                                <IonButton color={"danger"} slot="end" shape="round" size="small" fill="clear" onClick={AbrirPDF}>
                                    <FileText />
                                </IonButton>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Page>

    );
};
export default ProveePage;