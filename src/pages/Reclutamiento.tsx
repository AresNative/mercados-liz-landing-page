import Page from "@/template/page";
import "@/pages/margen-pagina.css"
import { Input } from "@/components/functions/input";
import { Select } from "@/components/functions/select";
import { Button } from "@/components/functions/button";
import { CheckBox } from "@/components/functions/checkbox";
import '@/components/displays/textarea.css'
import styles from "./reclutamiento.module.css"
import { useState } from "react";
import { useForm } from "react-hook-form";
import { PostUserPost } from "@/services/web_site_post";

interface Opcion {
    texto: string;
    tipo: 'text' | 'password' | 'email' | 'number' | "select" | 'date' | "h1" | undefined; // Tipo del input (text, email, number, etc.)
    subopciones?: { props: string, texto: string, tipo: 'text' | 'password' | 'email' | 'number' | 'date' | "select" | undefined; multiple?: boolean; values?: any[]; }[]; // Subopciones opcionales con sus tipos
    values?: any[];
    multiple?: boolean;
    props?: string;
}

interface Pregunta {
    id: number;
    texto: string;
    props?: string;
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
            {
                texto: "Nombre", tipo: "text",
                props: "nombre"
            },
            {
                texto: "Apellidos", tipo: "text", subopciones: [
                    {
                        texto: "Apellido Paterno", tipo: "text",
                        props: "apellido_paterno"
                    },
                    { texto: "Apellido Materno", tipo: "text", props: "apellido_materno" }
                ]
            },
            {
                texto: "Edad", tipo: "text", subopciones: [
                    { texto: "Edad", tipo: "number", props: "edad" },
                    { texto: "Fecha de nacimiento", tipo: "date", props: "fecha_nacimiento" }
                ]
            },
            {
                texto: "contacto", tipo: "email", subopciones: [
                    { texto: "Correo electronico", tipo: "email", props: "correo_electronico" },
                    { texto: "Numero de telefono", tipo: "number", props: "numero_telefono" }
                ]
            },
            {
                texto: "Dirección Actual", tipo: "text", subopciones: [
                    { texto: "Dirección actual", tipo: "text", props: "direccion_actual" },
                    { texto: "Desde cuando radica en la ciudad", tipo: "text", props: "fecha_radica_ciudad" }
                ]
            },

            {
                texto: "Transporte", tipo: "text", subopciones: [
                    { texto: "Medio de transporte", tipo: "email", props: "medio_transporte" },
                    { texto: "Tiempo de traslado", tipo: "number", props: "tiempo_traslado" }
                ]
            },
        ]
    },
    {
        id: 2,
        texto: "Datos Personales",
        opciones: [
            { texto: "Estado Civil", tipo: "h1" },
            { texto: "Estado civil", tipo: "text", props: "estado_civil" },
            {
                texto: "matrimonio", tipo: "text", subopciones: [
                    { texto: "En caso de ser casado o unión libre cuanto tiempo tiene ", tipo: "text", props: "tiempo_casado" },
                    { texto: "Matrimonio ¿bienes mancomunados o separados?", tipo: "text", props: "bienes_mancomunados" },
                ]
            },
            {
                texto: "Hijos", tipo: "text", subopciones: [
                    { texto: "¿Tienes hijos? ", tipo: "text", props: "tienes_hijos" },
                    { texto: "¿Planeas tener más hijos?", tipo: "text", props: "planeas_mas_hijos" },
                ]
            },
            { texto: "¿Tienes disponibilidad de horario? ", tipo: "text", props: "disponibilidad_horario" }
        ]
    },
    {
        id: 3,
        texto: "Datos Escolares",
        opciones: [
            { texto: "Información Academica", tipo: "h1" },
            {
                texto: "Escolares", tipo: "text", subopciones: [
                    { texto: "Último grado de estudios ", tipo: "text", props: "ultimo_grado_estudios" },
                    { texto: "¿Tienes certificado?", tipo: "text", props: "tienes_certificado" },
                ]
            },
            {
                texto: "Estudios", tipo: "text", subopciones: [
                    { texto: "¿Estudias actualmente?", tipo: "text", props: "estudias_actualmente" },
                    { texto: "En caso que si que días y en que horario", tipo: "text", props: "dias_horario_estudio" },
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
                    { texto: "Último lugar de trabajo ", tipo: "text", props: "ultimo_lugar_trabajo" },
                    { texto: "Puesto que desempeñaba", tipo: "text", props: "puesto_ultimo_trabajo" },
                ]
            },
            {
                texto: "tiempo", tipo: "text", subopciones: [
                    { texto: "¿Cuánto tiempo trabajo ahi?", tipo: "text", props: "tiempo_trabajo" },
                    { texto: "Salario semanal que tenia", tipo: "text", props: "salario_semanal" },
                ]
            },
            {
                texto: "Horario", tipo: "text", subopciones: [
                    { texto: "Horario", tipo: "text", props: "horario_trabajo" },
                    { texto: "Día de descanso", tipo: "text", props: "dia_descanso" },
                ]
            },
            { texto: "Motivo de salida ", tipo: "text", props: "motivo_salida" },

            { texto: "Penúltimo trabajo", tipo: "h1" },
            {
                texto: "empleo", tipo: "text", subopciones: [
                    { texto: "Penultimo lugar de trabajo ", tipo: "text", props: "penultimo_lugar_trabajo" },
                    { texto: "Puesto que desempeñaba", tipo: "text", props: "puesto_penultimo_trabajo" },
                ]
            },
            {
                texto: "tiempo", tipo: "text", subopciones: [
                    { texto: "¿Cuánto tiempo trabajo ahi?", tipo: "text", props: "tiempo_penultimo_trabajo" },
                    { texto: "Salario Semanal que tenia", tipo: "text", props: "salario_semanal_penultimo" },
                ]
            },
            {
                texto: "Horario", tipo: "text", subopciones: [
                    { texto: "Horario", tipo: "text", props: "horario_penultimo_trabajo" },
                    { texto: "Día de descanso", tipo: "text", props: "dia_descanso_penultimo" },
                ]
            },
            { texto: "Motivo de salida ", tipo: "text", props: "motivo_salida_penultimo" }
        ]
    },
    {
        id: 5,
        texto: "Vacante",
        opciones: [
            { texto: "Puesto string actual", tipo: "h1" },
            { texto: "¿Como se entero de la string? ", tipo: "text", props: "string" },
            {
                texto: "Conocidos", tipo: "text", subopciones: [
                    { texto: "¿Conoce a alguien que trabaje aqui?", tipo: "text", props: "string" },
                    { texto: "¿A quién?", tipo: "text", props: "string" },
                ]
            },
            { texto: "¿Que tipo de relacion tiene con usted parentesco ó amistad?", tipo: "text", props: "string" },
            {
                texto: "Puesto", tipo: "select", subopciones: [
                    {
                        texto: "Sucursal", tipo: "select", multiple: true, props: " string", values: [
                            { nombre: "Mayoreo" },
                            { nombre: "Valle de guadalupe" },
                            { nombre: "Testerazo" },
                            { nombre: "Valle de las palmas" }
                        ]
                    },
                    {
                        texto: "Vacantes", tipo: "select", multiple: true, props: "string", values: [
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

    const { register, handleSubmit } = useForm();

    // Almacena los datos iniciales en un estado para re-renderización
    const [allData, setAllData] = useState<{ nombre: string; valor: any }[]>([]);

    const onSubmit = handleSubmit((data) => {
        console.log("Data enviada:", data);

        // Obtén los nombres de los campos de la página actual basados en `props`
        const camposPaginaActual = preguntaActual.opciones.flatMap(opcion =>
            opcion.subopciones ? opcion.subopciones.map(subopcion => subopcion.props) : opcion.props
        ).filter(Boolean); // Filtra `undefined` en caso de que alguna opción no tenga `props`

        // Filtra `data` para incluir solo los campos correspondientes a la página actual
        const dataFiltrada = Object.entries(data)
            .filter(([key]) => camposPaginaActual.includes(key))
            .reduce((obj: any, [key, value]) => {
                // Convertir valores específicos según el tipo requerido en el JSON final
                if (key === 'edad') {
                    obj[key] = Number(value); // Convierte edad a número
                } else if (key === 'fecha_nacimiento') {
                    obj[key] = '2024-10-31T23:24:12.169Z';
                } else {
                    obj[key] = value; // Resto de campos sin cambios
                }
                return obj;
            }, {});

        // Actualiza `allData` solo con los datos de la página actual
        setAllData(prevData => ({
            ...prevData,
            ...dataFiltrada
        }));

        // Avanza a la siguiente página si es necesario
        if (paginaActual < preguntas.length - 1) {
            setPaginaActual(paginaActual + 1);
        } else {
            PostUserPost(allData).then((data: any) => {
                console.log(data);

            })
        }
    });

    const obtenerDefaultValue = (propName: any) => {
        return allData[propName] || "";
    };

    const [paginaActual, setPaginaActual] = useState(0)

    const preguntaActual = preguntas[paginaActual]
    const esUltimaPagina = paginaActual === preguntas.length - 1

    const handleAnterior = () => {
        if (paginaActual > 0) {
            setPaginaActual(paginaActual - 1)
        }
    }

    return (
        <Page>
            <img src="/uvas.png" className="img-uva5" />

            <form onSubmit={onSubmit} className="margen-pagina">
                <h2 className="titulos" style={{ marginBottom: "3rem", marginTop: "6rem", marginRight: "2rem", }}>Si estás interesado en unirte de nuestra familia, llena el siguiente formulario </h2>
                <div className={styles["reclutamiento"]} >
                    {preguntaActual.opciones.map((data: Opcion, index: number) => (
                        <div className={styles["reclutamiento-columnas"]} key={index}>
                            {data.subopciones ? (
                                <>
                                    {data.subopciones.map((subdata, subIndex) => {
                                        return subdata.tipo === "select" ? (
                                            <Select
                                                key={subIndex}
                                                multiple={subdata.multiple}
                                                values={subdata.values || []}
                                                message={subdata.texto}
                                            />
                                        ) : (
                                            <Input
                                                key={subIndex}
                                                label={subdata.texto}
                                                type={subdata.tipo}
                                                placheolder=""
                                                props={register(subdata.props ?? "")}
                                                defaultValue={obtenerDefaultValue(subdata.props || "")}
                                            />
                                        );
                                    })}
                                </>
                            ) : data.tipo === "select" ? (
                                <Select
                                    multiple={data.multiple}
                                    values={data.values || []}
                                    message={data.texto}
                                />
                            ) : data.tipo === "h1" ? (
                                <h1>{data.texto}</h1>
                            ) : (
                                <Input
                                    key={index}
                                    label={data.texto}
                                    type={data.tipo}
                                    props={register(data.props ?? "")}
                                    placheolder=""
                                    defaultValue={obtenerDefaultValue(data.props || "")}
                                />
                            )}
                        </div>
                    ))}
                    {esUltimaPagina && (<input type="file" data-multiple-caption="{count} archivos seleccionados" accept=".pdf" multiple />)}
                    {esUltimaPagina && (<CheckBox label={"Acepto los terminos y condiones de la aplicación."} />)}

                    <div style={{ display: "flex" }}>

                        <Button label={"Volver"} onClick={handleAnterior
                        } type={"button"} color={"default"} />


                        <Button label={esUltimaPagina ? "Enviar" : "Siguiente"} type={"submit"} color={"default"} />
                    </div>
                </div>

            </form>
        </Page >
    )
}
export default Reclutamiento;