import { Button } from "@/components/functions/button";
import { Input } from "@/components/functions/input";
import { Select } from "@/components/functions/select";
import Page from "@/template/page";
import { IonTextarea } from "@ionic/react";
import styles from "@/components/displays/tables.module.css";
import { useState } from "react";
import PostulacionesRHPage from "../vistaUser/postulacionesrh";
import { UserPen, UserPlus, Users } from "lucide-react";
import ValoracionPersonalTable from "../vistaUser/ValoracionPersonalTable";

const RHPage = () => {
    const [activeSection, setActiveSection] = useState<"Agregar" | "Postulaciones" | "Personal">("Agregar");

    const handleSectionChange = (section: "Agregar" | "Postulaciones" | "Personal") => {
        setActiveSection(section);
    };

    return (
        <Page>
            <h1 className="titulos" style={{ marginBottom: "1rem", marginTop: "6rem" }}>Recursos Humanos</h1>
            <div>
                {/* Botones para alternar vistas */}
                <div className={styles["divbu"]} style={{ marginBottom: "1rem", marginTop: "2rem" }}>
                    <div>
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
                                    <Users /> {"Postulaciones"}
                                </>
                            }
                            onClick={() => handleSectionChange("Postulaciones")}
                        />
                        <Button
                            type="button"
                            color={activeSection === "Personal" ? "dark" : "default"}
                            label={
                                <>
                                    <UserPen style={{ margin: "3px" }} /> {"Personal"}
                                </>
                            }
                            onClick={() => handleSectionChange("Personal")}
                        />
                    </div>
                </div>

                {/* Renderizado condicional */}
                {activeSection === "Agregar" && (
                    <form className={styles["form"]}>
                        <h2 className="subtitulos" style={{ marginBottom: "1rem", marginRight: "2rem", marginLeft: "2rem" }}>
                            Agregar Nueva Postulación
                        </h2>
                        <div className={styles["reclutamiento-columnas2"]}>
                            <Input label="Puesto" type="text" placheolder="Ingrese tipo de puesto" />
                            <Select
                                values={[
                                    { name: "Mayoreo" },
                                    { name: "Valle de guadalupe" },
                                    { name: "Valle de las palmas" },
                                    { name: "Testerazo" },
                                ]}
                                message="Seleccionar Sucursal"
                            />
                        </div>

                        <div className={styles["reclutamiento-columnas2"]}>
                            <Input label="Horario entrada" type="time" placheolder="Ingresa el Horario" />
                            <Input label="Horario salida" type="time" placheolder="Ingresa el Horario" />
                        </div>

                        <div className={styles["reclutamiento-columnas2"]}>
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
                {activeSection === "Personal" && (
                    <ValoracionPersonalTable />
                )}

            </div>
        </Page>
    );
};

export default RHPage;

