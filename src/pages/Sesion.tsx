import Page from "@/template/page"
import  Styles  from "./sesion.module.css";
import { IonButton, IonLabel } from "@ionic/react";
import { BookOpenCheck } from "lucide-react";

const AbrirPDF = () => {
    const urlPDF = ''; // Ruta al archivo pdf
    window.open(urlPDF, '_blank'); // Abre el pdf en una nueva pestaña
};

const SesionPage = () => {

    return (
        <Page /* titulo="Sesion" */>
            <>
                <div className={Styles["container"] }>
                    <div className={Styles["content"]}> AAAAAAAA</div>
                    <img src="/uvas.png"  />
                </div>

             {/* Pueba boton oferta  */ }
                <div style={{ display: "flex", justifyContent: "center", margin: "1rem" }}>
                    <IonButton shape="round" fill="clear" onClick={AbrirPDF}>
                        <IonLabel style={{ color: "purple", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <h1 style={{ color: "purple", fontFamily: "'Lobster', cursive", fontSize: "3rem", margin: 0 }}>
                                Nuestras Ofertas
                            </h1>
                            <BookOpenCheck color="purple" size={80} />
                        </IonLabel>
                    </IonButton>
                </div>



            </>
        </Page>
    )
}
export default SesionPage;

        /* inicio de sesion pagina principal */
        //Multiple Select Controlled
        //Custom Cells --table
        //Multiple Row Selection
        //Use Case Example

        /* Formulario */
        //invalid -check obligatorio
        // Disabled para limitar datos


        /*Login modificar*/
        //Select Required  // Solicitar area para registro de usuario
        //modal cambiar efecto Custom Backdrop-- () 
        //With Form -tabs- cambiar la forma de usuario(Listo)-- Hacer los campos obligatorios




