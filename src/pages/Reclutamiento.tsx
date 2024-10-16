import Page from "@/template/page";
import "@/pages/margen-pagina.css"
import { Input } from "@/components/functions/input";
import { Select } from "@/components/functions/select";
import { Button } from "@/components/functions/button";
import { CheckBox } from "@/components/functions/checkbox";
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
            { texto: "Información general", tipo: "h1" },
            { texto: "Nombre", tipo: "text" },
            {
                texto: "Apellidos", tipo: "text", subopciones: [
                    { texto: "Apellido Paterno", tipo: "text" },
                    { texto: "Apellido Materno", tipo: "text" }
                ]
            },
            {
                texto: "Edad", tipo: "text", subopciones: [
                    { texto: "Edad", tipo: "number" },
                    { texto: "Fecha de nacimiento", tipo: "date" }
                ]
            },
            {
                texto: "contacto", tipo: "email", subopciones: [
                    { texto: "Correo electronico", tipo: "email" },
                    { texto: "Numero de telefono", tipo: "number" }
                ]
            },
            {
                texto: "Dirección Actual", tipo: "text", subopciones: [
                    { texto: "Dirección actual", tipo: "text" },
                    { texto: "Desde cuando radica en la ciudad", tipo: "text" }
                ]
            },

            {
                texto: "Transporte", tipo: "text", subopciones: [
                    { texto: "Medio de transporte", tipo: "email" },
                    { texto: "Tiempo de traslado", tipo: "number" }
                ]
            },
        ]
    },
    {
        id: 2,
        texto: "Datos Personales",
        opciones: [
            { texto: "Estado Civil", tipo: "h1" },
            { texto: "Estado civil", tipo: "text" },
            {
                texto: "matrimonio", tipo: "text", subopciones: [
                    { texto: "En caso de ser casado o unión libre cuanto tiempo tiene ", tipo: "text" },
                    { texto: "Matrimonio ¿bienes mancomunados o separados?", tipo: "text" },
                ]
            },
            {
                texto: "Hijos", tipo: "text", subopciones: [
                    { texto: "¿Tienes hijos? ", tipo: "text" },
                    { texto: "¿Planeas tener más hijos?", tipo: "text" },
                ]
            },
            { texto: "¿Tienes disponibilidad de horario? ", tipo: "text" }
        ]
    },
    {
        id: 3,
        texto: "Datos Escolares",
        opciones: [
            { texto: "Información Academica", tipo: "h1" },
            {
                texto: "Escolares", tipo: "text", subopciones: [
                    { texto: "Último grado de estudios ", tipo: "text" },
                    { texto: "¿Tienes certificado?", tipo: "text" },
                ]
            },
            {
                texto: "Estudios", tipo: "text", subopciones: [
                    { texto: "¿Estudias actualmente?", tipo: "text" },
                    { texto: "En caso que si que días y en que horario", tipo: "text" },
                ]
            },
        ]
    },
    {
        id: 4,
        texto: "Datos Laborales ",
        opciones: [
            { texto: "Último trabajo", tipo: "h1" },
            {
                texto: "empleo", tipo: "text", subopciones: [
                    { texto: "Último lugar de trabajo ", tipo: "text" },
                    { texto: "Puesto que desempeñaba", tipo: "text" },
                ]
            },
            {
                texto: "tiempo", tipo: "text", subopciones: [
                    { texto: "¿Cuánto tiempo trabajo ahi?", tipo: "text" },
                    { texto: "Salario semanal que tenia", tipo: "text" },
                ]
            },
            {
                texto: "Horario", tipo: "text", subopciones: [
                    { texto: "Horario", tipo: "text" },
                    { texto: "Día de descanso", tipo: "text" },
                ]
            },
            { texto: "Motivo de salida ", tipo: "text" },

            { texto: "Penúltimo trabajo", tipo: "h1" },
            {
                texto: "empleo", tipo: "text", subopciones: [
                    { texto: "Penultimo lugar de trabajo ", tipo: "text" },
                    { texto: "Puesto que desempeñaba", tipo: "text" },
                ]
            },
            {
                texto: "tiempo", tipo: "text", subopciones: [
                    { texto: "¿Cuánto tiempo trabajo ahi?", tipo: "text" },
                    { texto: "Salario Semanal que tenia", tipo: "text" },
                ]
            },
            {
                texto: "Horario", tipo: "text", subopciones: [
                    { texto: "Horario", tipo: "text" },
                    { texto: "Día de descanso", tipo: "text" },
                ]
            },
            { texto: "Motivo de salida ", tipo: "text" }
        ]
    },
    {
        id: 5,
        texto: "Vacante",
        opciones: [
            { texto: "Puesto vacante actual", tipo: "h1" },
            { texto: "¿Cuenta con papeleo completo?", tipo: "text" },
            { texto: "¿Como se entero de la vacante? ", tipo: "text" },
            {
                texto: "Estudios", tipo: "text", subopciones: [
                    { texto: "¿Conoce a alguien que trabaje aqui?", tipo: "text" },
                    { texto: "¿A quién?", tipo: "text" },
                ]
            },
            { texto: "¿Que tipo de relacion tiene con usted parentesco ó amistad?", tipo: "text" },
            {
                texto: "Estudios", tipo: "select", subopciones: [
                    {
                        texto: "Sucursal", tipo: "select", multiple: true, values: [
                            { nombre: "Mayoreo" },
                            { nombre: "Valle de guadalupe" },
                            { nombre: "Testerazo" },
                            { nombre: "Valle de las palmas" }
                        ]
                    },
                    {
                        texto: "Vacantes", tipo: "select", multiple: true, values: [
                            { nombre: "Guardia" },
                            { nombre: "Cajas" },
                            { nombre: "Abarrotes" },
                            { nombre: "Cocina" }
                        ]
                    }
                ]
            },

        ]
    },
];


const Reclutamiento = () => {

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

    const handleSiguiente = () => {
        if (paginaActual < preguntas.length - 1) {
            setPaginaActual(paginaActual + 1)
        }
    }

    const handleAnterior = () => {
        if (paginaActual > 0) {
            setPaginaActual(paginaActual - 1)
        }
    }

    const handleEnviar = () => {
        console.log("Respuestas enviadas:", respuestas)
        // Aquí puedes implementar la lógica para enviar las respuestas a un servidor
        alert("¡Cuestionario enviado con éxito!")
    }

    const respuestaActual = respuestas.find(r => r.preguntaId === preguntaActual.id)?.respuesta || ""






    return (
        <Page titulo="Reclutamiento" >
            <img src="/uvas.png" className="img-uva" />

            <form className="margen-pagina">
                <p className="sub-titulos">Si estás interesado en unirte de nuestra familia, llena el siguiente formulario </p>
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

                    {esUltimaPagina && (<input type="file" data-multiple-caption="{count} archivos seleccionados" multiple />)}
                    {esUltimaPagina && (<CheckBox label={"Acepto los terminos y condiones de la aplicación."} />)}
                   
                    <div style={{ display: "flex" }}>

                        <Button label={"Volver"} onClick={handleAnterior
                        } type={"button"} color={"default"} />

                        <Button label={esUltimaPagina ? "Enviar" : "Siguiente"} onClick={handleSiguiente
                        } type={"button"} color={"default"} />
                    </div>
                </div>

            </form>
        </Page >
    )
}
export default Reclutamiento;