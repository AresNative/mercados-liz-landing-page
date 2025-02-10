import Page from "@/template/page";
import "@/pages/margen-pagina.css";
import { Input } from "@/components/functions/input";
import { Select } from "@/components/functions/select";
import { Button } from "@/components/functions/button";
import styles from "@/pages/PageVistas/valoracionempleados.module.css";
import { useState } from "react";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { Star } from "lucide-react";
import { IonTextarea } from "@ionic/react";

interface Opcion {
    texto: string;
    tipo: "text" | "password" | "email" | "number" | "select" | "date" | "h1" | "tel" | undefined;
    subopciones?: {
        props?: any;
        texto: string;
        tipo: "text" | "password" | "email" | "number" | "date" | "select" | "tel" | undefined;
        multiple?: boolean;
        values?: any[];
    }[];
    values?: any[];
    multiple?: boolean;
    props?: any;
}

interface Pregunta {
    id: number;
    texto: string;
    opciones: Opcion[];
}

interface Estrellas {
    values: number[];
    rating: number;
}

const preguntas: Pregunta[] = [
    {
        id: 1,
        texto: "Datos Generales",
        opciones: [
            { texto: "Evaluación personal", tipo: "h1" },
            {
                texto: "Información",
                tipo: "text",
                subopciones: [
                    { texto: "Evaluación personal", tipo: "text", props: "mm" },
                    { texto: "Departamento/Área", tipo: "text", props: "mm" },
                ],
            },
            {
                texto: "Datos Fecha",
                tipo: "text",
                subopciones: [
                    { texto: "Fecha de Evaluación", tipo: "date", props: "mm" },
                    { texto: "Nombre de quien evalúa ", tipo: "text", props: "mm" },
                ],
            },
        ],
    },
];

const ValoracionEmpleadosPage = () => {
    const calif: Estrellas = {
        values: [1, 2, 3, 4, 5],
        rating: 2
    };
    const [paginaActual, setPaginaActual] = useState(0);
    const [ratingProductividad, setRatingProductividad] = useState(0);
    const [hoverProductividad, setHoverProductividad] = useState(0);
    const [ratingCalidad, setRatingCalidad] = useState(0);
    const [hoverCalidad, setHoverCalidad] = useState(0);
    const { register, handleSubmit, setValue, reset } = useForm();

    const preguntaActual = preguntas[paginaActual];

    const handleRatingProductividad = (value: number) => {
        setRatingProductividad(value);
        setValue("productividad", value);
    };

    const handleRatingCalidad = (value: number) => {
        setRatingCalidad(value);
        setValue("calidad", value);
    };

    const onSubmit = handleSubmit(async (data) => {
        try {
            Swal.fire({
                title: "Evaluación Enviada", // response.message
                icon: "success",
                confirmButtonText: "Aceptar",
            });

            // Limpiar los campos del formulario
            reset();
        } catch (error) {
            Swal.fire({
                title: "Error al enviar Evaluación",
                text: "Por favor, intente nuevamente.",
                icon: "error",
                confirmButtonText: "Aceptar",
            });
        }
    });

    return (
        <Page>
            <form onSubmit={onSubmit}>
                <h2 className="titulos" style={{ marginTop: "6rem" }}>
                    Evaluación de personal Mercado Liz
                </h2>
                <div className={styles["reclutamiento"]}>
                    {preguntaActual.opciones.map((data: Opcion, index: number) => (
                        <div className={styles["reclutamiento-columnas"]} key={index}>
                            {data.subopciones ? (
                                data.subopciones.map((subdata, subIndex) =>
                                    subdata.tipo === "select" ? (
                                        <Select
                                            key={subIndex}
                                            multiple={subdata.multiple}
                                            values={subdata.values || []}
                                            message={subdata.texto}
                                            onChange={(value: any) => setValue(subdata.props, value)}
                                            props={{ ...register(subdata.props) }}
                                        />
                                    ) : (
                                        <Input
                                            key={subIndex}
                                            label={subdata.texto}
                                            type={subdata.tipo}
                                            props={register(subdata.props)}
                                            placheolder={""}
                                        />
                                    )
                                )
                            ) : data.tipo === "select" ? (
                                <Select
                                    multiple={data.multiple}
                                    values={data.values || []}
                                    message={data.texto}
                                    onChange={(value: any) => setValue(data.props, value)}
                                    props={{ ...register(data.props) }}
                                />
                            ) : data.tipo === "h1" ? (
                                <h1 key={index}>{data.texto}</h1>
                            ) : (
                                <Input
                                    key={index}
                                    label={data.texto}
                                    type={data.tipo}
                                    props={register(data.props)}
                                    placheolder={""}
                                />
                            )}
                        </div>

                    ))}

                    {/* Sección de calificación con estrellas: Productividad */}
                    <div className={styles["reclutamiento-columnas2"]} style={{ display: "flex", alignItems: "center" }}>
                        <div style={{ display: "flex", alignItems: "center", marginTop: "1rem" }}>
                            <label>Productividad: </label>
                            <div style={{ display: "flex" }}>
                                {calif.values.map((star) => (
                                    <Star
                                        key={star}
                                        className={
                                            star <= (hoverProductividad || ratingProductividad)
                                                ? styles.estrella2
                                                : styles.estrellas
                                        }
                                        onMouseEnter={() => setHoverProductividad(star)}
                                        onMouseLeave={() => setHoverProductividad(0)}
                                        onClick={() => handleRatingProductividad(star)}
                                        size={35}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Sección de calificación con estrellas: Calidad */}
                        <div style={{ display: "flex", alignItems: "center", marginTop: "1rem" }}>
                            <label>Calidad de trabajo: </label>
                            <div style={{ display: "flex" }}>
                                {calif.values.map((star) => (
                                    <Star
                                        key={star}
                                        className={
                                            star <= (hoverCalidad || ratingCalidad)
                                                ? styles.estrella2
                                                : styles.estrellas
                                        }
                                        onMouseEnter={() => setHoverCalidad(star)}
                                        onMouseLeave={() => setHoverCalidad(0)}
                                        onClick={() => handleRatingCalidad(star)}
                                        size={35}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div>
                        <IonTextarea
                            style={{ display: "flex", alignItems: "center", marginTop: "1rem" }}
                            className={styles["textarea2"]}
                            placeholder="Comentarios sobre el desempeño del empleado"
                        />
                    </div>
                    <div style={{ display: "flex", alignContent: "center" }}>
                        <Button label="Enviar" type="submit" color="default" />
                    </div>
                </div>
            </form>
        </Page>
    );
};

export default ValoracionEmpleadosPage;
