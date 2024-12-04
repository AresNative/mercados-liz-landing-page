import Page from "@/template/page";
import "@/pages/margen-pagina.css"
import { Input } from "@/components/functions/input";
import { Select } from "@/components/functions/select";
import { Button } from "@/components/functions/button";
import '@/components/displays/textarea.css'
import styles from "./nuevosprov.module.css"
import { useState } from "react";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { PostProveedor } from "@/services/web_site_post";

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
            { texto: "Información general proveedor", tipo: "h1" },
            {
                texto: "Informacion", tipo: "text", subopciones: [
                    { texto: "Nombre", tipo: "text", props: "name" },
                    { texto: "Correo electronico", tipo: "email", props: "email" }
                ]
            },
            {
                texto: "Compañia", tipo: "text", subopciones: [
                    { texto: "Compañia", tipo: "text", props: "company" },
                    { texto: "Tipo de productos", tipo: "text", props: "type_prod" }
                ]
            },
            {
                texto: "Departamento al que va dirigido", tipo: "select", props: "department", values: [
                    { nombre: "Abarrotes Comestibles" },
                    { nombre: "Frutas y Verduras" },
                    { nombre: "Cuidado Personal" },
                    { nombre: "Carnes" },
                    { nombre: "Mercancia Generales" },
                    { nombre: "Bebidas y Locores" },
                    { nombre: "Lacteos" },
                    { nombre: "Dulceria" },
                    { nombre: "Especies y Condimentos" },
                    { nombre: "Materia Prima" }
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

    const { register, control, handleSubmit } = useForm();
    /*  const onSubmit = handleSubmit(async (data) => {
         /*  await PostProveedor(data)  }*/
    //) 
    const onSubmit = handleSubmit(async (data) => {
        try {
            await PostProveedor(data);
            handleEnviar(); // Llamar la alerta después de enviar los datos
        } catch (error) {
            Swal.fire({
                title: "Error al enviar el formulario",
                text: "Por favor, intente nuevamente.",
                icon: "error",
                confirmButtonText: "Aceptar",
            });
        }
    });

    const handleEnviar = () => {
        // Aquí puedes implementar la lógica para enviar las respuestas al servidor
        Swal.fire({
            title: "Gracias nos pondremos en contacto",
            showClass: {
                popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                       `
            },
            hideClass: {
                popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                       `
            }
        });
    }

    const respuestaActual = respuestas.find(r => r.preguntaId === preguntaActual.id)?.respuesta || ""

    return (
        <Page /* titulo="NuevoProvePage" */ >
            {/*  <img src="/uvas.png" className="img-uva" /> */}
            <form onSubmit={onSubmit} >
                <h2 className="titulos" style={{ marginTop: "6rem" }}>Si quieres ser nuestro proveedor llena el siguiente formulario </h2>
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
                                                    props={register(subdata.props)}
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
                                        <Input label={data.texto} type={data.tipo} placheolder=""

                                        />
                                    )
                                )}
                            </div>
                        );
                    })}
                    <p className="sub-titulos5">En caso de tener un catalogo con sus productos favor de agregarlo </p>
                    <input type="file" accept=".pdf,.xlsx" />
                    <div style={{ display: "flex" }}>
                        <Button label="Enviar" type={"submit"} color={"default"} /* disabled={rating === 0} */ />
                    </div>
                </div>
            </form>
        </Page >
    )
}
export default NuevoProvePage;

//Hacer que se limpie al mandar la informacion
// como en calificación