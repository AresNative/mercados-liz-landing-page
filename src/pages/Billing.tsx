import { MainForm } from "@/components/form/main-form";
import styles from "./reclutamiento.module.css"
import Page from "@/template/page";
import { Input } from "@/components/functions/input";
import { IonButton, IonList } from "@ionic/react";
import { ResponsiveTable } from "@/components/displays/table";
import { BookText } from "lucide-react";
const Billing = () => {
    return (
        <Page titulo="Sobre Nosotros">
            <div style={{ width: "80%", margin: "auto", marginTop: "4rem", display: "flex", justifyContent: "center" }}>
                <MainForm message='Continuar'>
                    <h2 style={{ fontWeight: "600" }}>Agregar Nueva Factura</h2>
                    <div className={styles["reclutamiento-columnas"]}>
                        <Input label="Folio de orden" type="text" placheolder="" />
                        <Input label="RFC" type="text" placheolder="" />
                    </div>
                    <Input label="Uso de CFDI" type="text" placheolder="" />
                </MainForm>
            </div>

            <div style={{ width: "64%", margin: "auto", marginTop: "2rem", background: "#fff", border: "1px solid #e9e9e9e0", borderRadius: "15px", padding: "15px" }}>
                <h2 style={{ display: "flex", fontWeight: "600", width: "100%" }}>Mis facturas
                    <IonButton style={{ float: "right", width: "5rem" }} color={"danger"} shape="round" size="small" fill="clear">
                        <BookText size={20} />
                    </IonButton>
                </h2>

                <IonList>
                    <ResponsiveTable />
                </IonList>
            </div>
        </Page>
    )
}
export default Billing;