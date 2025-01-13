import { Button } from "@/components/functions/button";
import { Input } from "@/components/functions/input";
import { Select } from "@/components/functions/select";
import Page from "@/template/page";
import { IonTextarea } from "@ionic/react";
import styles from "@/components/displays/tables.module.css";
import { useState } from "react";
import PostulacionesRHPage from "../vistaUser/postulacionesrh";
import { UserPlus, Users} from "lucide-react"; // Asegúrate de que este ícono existe

const RHPage = () => {
    const [activeSection, setActiveSection] = useState<"Agregar" | "Postulaciones" | "NuevaSeccion">("Agregar");

    const handleSectionChange = (section: "Agregar" | "Postulaciones" | "NuevaSeccion") => {
        setActiveSection(section);
    };

    return (
        <Page>
            <h1 className="titulos" style={{ marginBottom: "1rem", marginTop: "6rem" }}>Recursos Humanos</h1>
            <div>
                {/* Botones para alternar vistas */}
                <div className={styles["divbu"]} style={{ marginBottom: "1rem", marginTop: "2rem" }}>
                    <Button
                        type="button"
                        color={activeSection === "Agregar" ? "dark" : "default"}
                        label={
                            <>
                                <UserPlus style={{ margin: "3px" }} /> {"Agregar Vacante"}
                            </>
                        }
                        onClick={() => handleSectionChange("Agregar")}
                    />
                    <Button
                        type="button"
                        color={activeSection === "Postulaciones" ? "dark" : "default"}
                        label={
                            <>
                                <Users style={{ margin: "3px" }} /> {"Postulaciones"}
                            </>
                        }
                        onClick={() => handleSectionChange("Postulaciones")}
                    />

                </div>

                {/* Renderizado condicional */}
                {activeSection === "Agregar" && (
                    <form className={styles["form"]}>
                        <h2 className="subtitulos" style={{ marginBottom: "1rem", marginRight: "2rem", marginLeft: "2rem" }}>
                            Agregar Nueva Postulación
                        </h2>
                        <Input label="Puesto" type="text" placheolder="Ingrese tipo de puesto" />
                        <Input label="Horario entrada" type="time" placheolder="Ingresa el Horario" />
                        <Input label="Horario salida" type="time" placheolder="Ingresa el Horario" />
                        <Select
                            values={[
                                { name: "Mayoreo" },
                                { name: "Valle de guadalupe" },
                                { name: "Valle de las palmas" },
                                { name: "Testerazo" },
                            ]}
                            message="Selecciona Sucursal"
                        />
                        <div>
                            <Input label="Requisito 1" type="text" placheolder="Ingrese el primer requisito" />
                            <Input label="Requisito 2" type="text" placheolder="Ingrese el segundo requisito" />
                        </div>
                        <IonTextarea className="textarea2" placeholder="Más información sobre el puesto solicitado" />
                        <Button type="button" color="default" label="Publicar Vacante" onClick={() => { }} />
                    </form>
                )}
                {activeSection === "Postulaciones" && (
                    <PostulacionesRHPage />
                )}

            </div>
        </Page>
    );
};

export default RHPage;

