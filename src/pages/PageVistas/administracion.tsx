import { Button } from "@/components/functions/button";
import Page from "@/template/page";
import styles from "@/components/displays/tables.module.css";
import { useState } from "react";
import PostulacionesRHPage from "../vistaUser/postulacionesrh";
import { Users, Star, Forklift } from "lucide-react"; // Asegúrate de que este ícono existe
import InfValoracionPage from "../vistaUser/valoracion";
import InfprovPage from "../vistaUser/provnuevo";

const AdministracionPage = () => {
    const [activeSection, setActiveSection] = useState<"Valoracion" | "Postulaciones" | "NuevosProvs">("Valoracion");

    const handleSectionChange = (section: "Valoracion" | "Postulaciones" | "NuevosProvs") => {
        setActiveSection(section);
    };

    return (
        <Page>
            <h2 className="titulos" style={{ marginBottom: "1rem", marginTop: "6rem" }}>Administración General</h2>
            <div style={{ marginBottom: "1rem" }}>
                {/* Botones para alternar vistas */}
                <div className={styles["divbu"]} style={{ marginBottom: "0.5rem", marginTop: "0.5rem" }}>
                    <div >
                        <Button
                            type="button"
                            color={activeSection === "Valoracion" ? "dark" : "default"}
                            label={
                                <>
                                    <Star style={{ margin: "3px" }} /> {"Valoracion"}
                                </>
                            }
                            onClick={() => handleSectionChange("Valoracion")}
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
                        <Button
                            type="button"
                            color={activeSection === "NuevosProvs" ? "dark" : "default"}
                            label={
                                <>
                                    <Forklift style={{ margin: "3px" }} /> {"Nuevos  Provs."}
                                </>
                            }
                            onClick={() => handleSectionChange("NuevosProvs")}
                        />
                    </div>
                </div>

                {/* Renderizado condicional */}
                {activeSection === "Valoracion" && (
                    <InfValoracionPage />
                )}
                {activeSection === "Postulaciones" && (
                    <PostulacionesRHPage />
                )}
                {activeSection === "NuevosProvs" && (
                    <InfprovPage />

                )}
            </div>
        </Page>
    );
};

export default AdministracionPage;

/*   <form className={styles["form"]}>
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
                  </form> */