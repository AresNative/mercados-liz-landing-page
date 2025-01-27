import { Button } from "@/components/functions/button";
import Page from "@/template/page";
import styles from "@/components/displays/tables.module.css";
import { useState } from "react";
import { BadgeDollarSign, Forklift } from "lucide-react"; // Asegúrate de que este ícono existe
import InfprovPage from "../vistaUser/provnuevo";
import PromocionesPage from "../ofertas/oferta";

const ComprasVentasPage = () => {
    const [activeSection, setActiveSection] = useState<"Valoracion" | "Promociones" | "NuevosProvs">("Valoracion");

    const handleSectionChange = (section: "Valoracion" | "Promociones" | "NuevosProvs") => {
        setActiveSection(section);
    };

    return (
        <Page>
            <h2 className="titulos" style={{ marginBottom: "1rem", marginTop: "6rem" }}>Compras y Ventas  </h2>
            <div style={{ marginBottom: "1rem" }}>

                {/* Botones para alternar vistas */}
                <div className={styles["divbu"]} style={{ marginBottom: "0.5rem", marginTop: "0.5rem" }}>
                    <div>
                        <Button
                            type="button"
                            color={activeSection === "NuevosProvs" ? "dark" : "default"}
                            label={
                                <>
                                    <Forklift /> {"Nuevos Provs."}
                                </>
                            }
                            onClick={() => handleSectionChange("NuevosProvs")}
                        />
                        <Button
                            type="button"
                            color={activeSection === "Promociones" ? "dark" : "default"}
                            label={
                                <>
                                    <BadgeDollarSign /> {"Promociones"}
                                </>
                            }
                            onClick={() => handleSectionChange("Promociones")}
                        />
                    </div>
                </div>

                {/* Renderizado condicional */}
                {activeSection === "NuevosProvs" && (
                    <InfprovPage />
                )}
                {activeSection === "Promociones" && (
                    <PromocionesPage />
                )}
            </div>
        </Page>
    );
};

export default ComprasVentasPage;