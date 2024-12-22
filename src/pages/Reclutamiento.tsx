import Page from "@/template/page";
import "@/pages/margen-pagina.css";
import { Button } from "@/components/functions/button";
import "@/components/displays/textarea.css";
import styles from "./reclutamiento.module.css";
import { useState } from "react";
import { MainForm } from "@/components/form/form2";
import formReclutamiento from "@/models/form-reclutamiento.json";
import Carga from "./carga";
import { useRef } from "react";

interface CargaProps {
    isOpen: boolean;
    onClose?: () => void;
}
interface MainFormRef {
    submitForm: () => Promise<void>;
}
const Reclutamiento = () => {
    const [paginaActual, setPaginaActual] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const elementosPorPagina = 6;
    const elementosFiltrados = formReclutamiento;
    const totalPaginas = Math.ceil(elementosFiltrados.length / elementosPorPagina);
    const elementosPaginaActual = elementosFiltrados.slice(
        paginaActual * elementosPorPagina,
        (paginaActual + 1) * elementosPorPagina
    );

    const formRef = useRef<MainFormRef>(null); // Declara el tipo de ref

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

    const handleEnviar = async () => {
        if (formRef.current) {
            try {
                setIsLoading(true);
                await formRef.current.submitForm(); // Llama a `submitForm` desde el ref
                console.log("Formulario enviado con éxito");
            } catch (error) {
                console.error("Error al enviar el formulario:", error);
            } finally {
                setIsLoading(false);
            }
        }
    };

    return (
        <Page>
            <h2 className="titulos" style={{ marginBottom: "3rem", marginTop: "6rem", marginRight: "2rem" }}>Si estás interesado en unirte de nuestra familia, llena el siguiente formulario</h2>
            <div className="margen-pagina">
                <img src="/uvas.png" className="img-uva5" />
                <div className={styles["reclutamiento"]}> 
                    <div>
                        <div>
                        <MainForm
                            ref={formRef} // Pasa el ref al componente MainForm
                            dataForm={elementosPaginaActual}
                            message_button="Enviar"
                            functionForm={undefined} />
                        </div>
                    </div>
               
                {esUltimaPagina && (
                    <>
                        <input type="file" accept=".pdf" multiple />
                        <label>
                            <input type="checkbox" /> Acepto los términos y condiciones de la aplicación.
                        </label>
                    </>
                )}
                    <div className={styles["boton"]} style={{ display: "flex" }}>
                    <Button
                        label={"Volver"}
                        onClick={handleAnterior}
                        type={"button"}
                        disabled={paginaActual === 0} color={"default"}    />
                    <Button
                        label={esUltimaPagina ? "Enviar" : "Siguiente"}
                        onClick={esUltimaPagina ? handleEnviar : handleSiguiente}
                        type={"button"} color={"default"}                    />
                </div>
            </div>
            </div>
            {/* Componente de carga */}
            <Carga isOpen={isLoading} />

        </Page>
    );
};

export default Reclutamiento;