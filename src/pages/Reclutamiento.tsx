import Page from "@/template/page";
import "@/pages/margen-pagina.css";
import { Button } from "@/components/functions/button";
import '@/components/displays/textarea.css';
import styles from "./reclutamiento.module.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MainForm } from "@/components/form/form2";
import formReclutamiento from "@/models/form-reclutamiento.json";

const Reclutamiento = () => {
    const { register, reset, handleSubmit } = useForm();
    const [paginaActual, setPaginaActual] = useState(0);

    // Número de elementos por página (incluye preguntas y títulos)
    const elementosPorPagina = 6;

    // Filtra para obtener todos los elementos (preguntas y H1)
    const elementosFiltrados = formReclutamiento;

    // Calcula cuántas páginas hay
    const totalPaginas = Math.ceil(elementosFiltrados.length / elementosPorPagina);

    // Obtiene los elementos de la página actual
    const elementosPaginaActual = elementosFiltrados.slice(
        paginaActual * elementosPorPagina,
        (paginaActual + 1) * elementosPorPagina
    );

    const handleSiguiente = () => {
        if (paginaActual < totalPaginas - 1) {
            setPaginaActual(paginaActual + 1);
        }
    };

    const handleAnterior = () => {
        if (paginaActual > 0) {
            setPaginaActual(paginaActual - 1);
        }
    };

    const esUltimaPagina = paginaActual === totalPaginas - 1;

    const onSubmit = async (data: any) => {
        console.log("Data enviada:", data);
        if (esUltimaPagina) {
            // Aquí puedes enviar los datos al servidor o realizar otra acción
            console.log("Formulario completo:", data);
        } else {
            handleSiguiente();
        }
    };

    return (
        <Page>
            <h2 className="titulos" style={{ marginBottom: "3rem", marginTop: "6rem", marginRight: "2rem" }}>
                Si estás interesado en unirte de nuestra familia, llena el siguiente formulario
            </h2>
            <div className="margen-pagina">
                <img src="/uvas.png" className="img-uva5" />
                <div className={styles["reclutamiento"]}>
                    <div>
                        <div>
                            {/* Renderiza los elementos de la página actual */}
                            {elementosPaginaActual.map((field, index) => {
                                // Renderizar H1 como título
                                if (field.type === "H1") {
                                    return <h1 key={index}>{field.name}</h1>; // Muestra el H1 como título
                                }

                                // Renderizar solo preguntas
                                return (
                                    <MainForm
                                        key={field.id} // Usar id como key
                                        dataForm={[field]} // Pasar solo el campo actual
                                        message_button="Enviar"
                                        className={styles["reclutamiento-columnas"]}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    {esUltimaPagina && (
                        <>
                            <input type="file" data-multiple-caption="{count} archivos seleccionados" accept=".pdf" multiple />
                            <label>
                                <input type="checkbox" />Acepto los términos y condiciones de la aplicación.
                            </label>
                        </>
                    )}
                    <div style={{ display: "flex" }}>
                        <Button label={"Volver"} onClick={handleAnterior} type={"button"} color={"default"} disabled={paginaActual === 0} />
                        <Button label={esUltimaPagina ? "Enviar" : "Siguiente"} type={"button"} color={"default"} onClick={handleSubmit(onSubmit)} />
                    </div>
                </div>
            </div>
        </Page>
    );
};

export default Reclutamiento;