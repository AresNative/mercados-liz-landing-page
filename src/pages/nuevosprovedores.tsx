import Page from "@/template/page";
import "@/pages/margen-pagina.css"
import { Input } from "@/components/functions/input";
import { Select } from "@/components/functions/select";
import { Button } from "@/components/functions/button";
import '@/components/displays/textarea.css'
import styles from "./reclutamiento.module.css"
import { useState } from "react";

interface Opcion {
    texto: string;
    tipo: 'text' | 'password' | 'email' | 'number' | "select" | 'date' | "h1" | undefined; // Tipo del input (text, email, number, etc.)
    subopciones?: { texto: string, tipo: 'text' | 'password' | 'email' | 'number' | 'date' | "select" | undefined; multiple?: boolean; values?: any[]; }[]; // Subopciones opcionales con sus tipos
    values?: any[];
    multiple?: boolean;
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
            { texto: "Información general proveedor", tipo: "h1" },
            {
                texto: "Informacion", tipo: "text", subopciones: [
                    { texto: "Nombre", tipo: "text" },
                    { texto: "Correo electronico", tipo: "email" }
                ]
            },
            {
                texto: "Compañia", tipo: "text", subopciones: [
                    { texto: "Compañia", tipo: "text" },
                    { texto: "Tipo de productos", tipo: "text" }
                ]
            },
            {
                texto: "Departamento al que va dirigido", tipo: "select", values: [
                    { nombre: "A" },
                    { nombre: "C" },
                    { nombre: "A" },
                    { nombre: "C" }
                ]
            },
            
        ]
    },
    
    
    
];

const NuevoProvePage = () => {

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

    

    const handleEnviar = () => {
        console.log("Respuestas enviadas:", respuestas)
        // Aquí puedes implementar la lógica para enviar las respuestas a un servidor
        alert("¡Gracias, nos pondremos en contacto con ustedes!")
    }

    const respuestaActual = respuestas.find(r => r.preguntaId === preguntaActual.id)?.respuesta || ""

    return (

        <Page titulo="NuevoProvePage" >
           {/*  <img src="/uvas.png" className="img-uva" /> */}
            <img src="/uvas.png" className="img-uva2" />
            <img src="/uvas.png" className="img-uva4" />
                <form >
                    <h2 className="titulos">Si quieres ser nuestro proveedor llena el siguiente formulario </h2>

                <div className={styles["reclutamiento"]} >
                    <p></p>
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

                        <div style={{ display: "flex" }}>
                        <Button label="Enviar" type={"button"} color={"default"} onClick={handleEnviar} />
                        </div>
                    </div>

                </form>
            </Page >

    )

}
export default NuevoProvePage;