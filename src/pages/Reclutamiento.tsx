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
import formReclutamiento from "@/models/form-reclutamiento.json"
import { MainForm } from "@/components/form/form2";
interface Opcion {
    texto: string;
    tipo: 'text' | 'password' | 'email' | 'number' | "select" | 'date' | "h1" | undefined; // Tipo del input (text, email, number, etc.)
    subopciones?: { props: string, texto: string, tipo: 'text' | 'password' | 'email' | 'number' | 'date' | "select" | undefined; multiple?: boolean; values?: any[]; }[]; // Subopciones opcionales con sus tipos
    values?: any[];
    multiple?: boolean;
    props?: string;
}

const preguntas: any[] = formReclutamiento;


const Reclutamiento = () => {

    const { register, reset, handleSubmit } = useForm();

    // Almacena los datos iniciales en un estado para re-renderización
    const [allData, setAllData] = useState<{ nombre: string; valor: any }[]>([]);

    const onSubmit = async (data: any) => {
        // Usa `obtenerDefaultValue` para llenar datos faltantes de `allData`
        const dataWithDefaults = Object.keys(data).reduce((acc: any, key) => {
            acc[key] = data[key] || obtenerDefaultValue(key);
            return acc;
        }, {});

        console.log("Data enviada:", dataWithDefaults);

        // Avanza a la siguiente página si es necesario
        if (paginaActual < preguntas.length - 1) {
            // Actualiza `allData` solo con los datos de la página actual
            setAllData(prevData => ({
                ...prevData,
                ...dataWithDefaults
            }));
            reset();
            setPaginaActual(paginaActual + 1);
        } else {
            // Envía `allData` al servidor
            PostUserPost(allData).then((res) => {
                console.log("Respuesta del servidor:", res);
            });
        }
    };

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
            <div  className={styles["reclutamiento" ]} >
                <div className={styles["reclutamiento-columnas"]}> 

                <MainForm
                dataForm={formReclutamiento}
                message="test"
                    />
                </div>
                {esUltimaPagina && (<input type="file" data-multiple-caption="{count} archivos seleccionados" accept=".pdf" multiple />)}
                {esUltimaPagina && (<CheckBox label={"Acepto los terminos y condiones de la aplicación."} />)}
                
                <div style={{ display: "flex" }}>

                    <Button label={"Volver"} onClick={handleAnterior
                    } type={"button"} color={"default"} />


                    <Button label={esUltimaPagina ? "Enviar" : "Siguiente"} type={"submit"} color={"default"} />
                    </div>
                
            </div>


        </Page >
    )
}
export default Reclutamiento;