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
            <MainForm
                dataForm={formReclutamiento}
                message="test"
            />
            <form onSubmit={handleSubmit(onSubmit)} className="margen-pagina">
                <h2 className="titulos" style={{ marginBottom: "3rem", marginTop: "6rem", marginRight: "2rem", }}>Si estás interesado en unirte de nuestra familia, llena el siguiente formulario </h2>
                <div className={styles["reclutamiento"]} >


                    {/* {preguntaActual.opciones.map((data: Opcion, index: any) => {
                        return (
                            <div className={styles["reclutamiento-columnas"]} key={index}>

                                {data.subopciones ? (
                                    // Si hay subopciones, mostrar los inputs o selects dentro de subopciones
                                    <>
                                        {data.subopciones.map((subdata, subIndex) => {

                                            return subdata.tipo === "select" ? (
                                                <Select
                                                    key={subIndex}
                                                    multiple={subdata.multiple}
                                                    values={subdata.values || []} // Usamos las opciones de select en las subopciones
                                                    message={subdata.texto}
                                                    props={register(subdata.props)}
                                                    defaultValue={obtenerDefaultValue(subdata.props || "")}
                                                />
                                            ) : (
                                                <Input
                                                    key={subIndex}
                                                    label={subdata.texto}
                                                    type={subdata.tipo}
                                                    placheolder=""
                                                    props={register(subdata.props)}
                                                    defaultValue={obtenerDefaultValue(subdata.props || "")}
                                                />
                                            );
                                        })}
                                    </>
                                ) : (
                                    // Verificar si el tipo es "select" en las opciones principales
                                    data.tipo === "select" ? (
                                        <Select
                                            key={index}
                                            multiple={data.multiple}
                                            values={data.values || []}  // Usamos las opciones del select desde data.values
                                            message={data.texto}        // Usamos el texto como mensaje o label
                                            props={register(data.props ?? "")}
                                            defaultValue={obtenerDefaultValue(data.props || "")}
                                        />
                                    ) : data.tipo === "h1" ? (
                                        <h1>{data.texto}</h1>
                                    ) : (
                                        // Si no es "select", renderizar Input normal
                                        (() => {

                                            return (
                                                <Input
                                                    key={index}
                                                    label={data.texto}
                                                    type={data.tipo}
                                                    props={register(data.props ?? "")}
                                                    placheolder=""
                                                    defaultValue={obtenerDefaultValue(data.props || "")}
                                                />
                                            );
                                        })()
                                    )
                                )}
                            </div>
                        );
                    })} */}

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