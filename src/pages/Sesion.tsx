import Page from "@/template/page"
import  Styles  from "./sesion.module.css";
import { IonButton, IonLabel } from "@ionic/react";
import { BookOpenCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { GetUserInfo } from "@/services/web_site_gets";

/* const AbrirPDF = () => {
    const urlPDF = ''; // Ruta al archivo pdf
    window.open(urlPDF, '_blank'); // Abre el pdf en una nueva pestaña
}; */

const SesionPage = () => {
    useEffect(() => {
        GetUserInfo().then((info: any) => {
            setdata(info.data);
        })
    }, [])

    const [data, setdata] = useState([])
    return (
        <Page /* titulo="Sesion" */>
            <>
                {data.map((info: any, index) => (
                    <section key={index}>
                        {/* 
                             ! Object.entries es el que identifica las propiedades de un array
                        */}
                        {Object.entries(info).map(([key, value]:any, id) => (
                            <div key={id}>
                                <strong>{key}:</strong> {value}
                                {/*
                                    // ? [key] es la propiedad que se esta mostrando
                                    //** ya solo falta cambiar el formato a tabla o ajustar estilos
                                */}
                            </div>
                        ))}
                    </section>
                ))}
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




