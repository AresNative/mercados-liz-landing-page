import Page from "@/template/page";
import "@/pages/margen-pagina.css"
import { Input } from "@/components/functions/input";
import { Select } from "@/components/functions/select";
import { Button } from "@/components/functions/button";
import { CheckBox } from "@/components/functions/checkbox";
import '@/components/displays/textarea.css'
import styles from "./reclutamiento.module.css"

const Reclutamiento = () => {

    return (
        <Page titulo="Reclutamiento" >
            <img src="/uvas.png" className="img-uva" />
            <form className="margen-pagina">
                <p className="sub-titulos">Si estas interesado en unirte de nuestra familia, llena el siguiente formulario </p>

                <div className={styles["reclutamiento"]} >
                    <Input label="Nombre(s) " type="text" placheolder="" />
                    <div className={styles["reclutamiento-columnas"]}>
                        <Input label="Apellido Paterno" type="text" placheolder="" />
                        <Input label="Apellido Materno" type="text" placheolder="" />
                    </div>
                    <Input label="Correo Electronico" type="email" placheolder="" />
                    <Input label="Años de experiencia" type="number" placheolder="" />
                    <Select values={[
                        {
                            puesto: "MATRIZ"
                        }, {
                            puesto: "VALLE DE GUADALUPE"
                        }, {
                            puesto: "VALLE DE LAS PALMAS"
                        }, {
                            puesto: "TESTERAZO"
                        }
                    ]} message='' />
                    {/*Areas disponibles para solicitar empleo  */}
                    <input type="file" />
                    {/*Seleccionar archivo*/}
                    <textarea className="textarea" placeholder="Cuéntanos Sobre ti" defaultValue={''} />
                    <CheckBox label="Acepto los terminos y condiciones al envio de mis datos." />
                    <Button type="submit" color="default" label="Enviar datos" />{/*Enviar informacion*/}
                </div>
            </form>
        </Page >
    )
}
export default Reclutamiento;