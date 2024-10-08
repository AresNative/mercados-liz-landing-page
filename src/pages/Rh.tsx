import { Button } from "@/components/functions/button";
import { Input } from "@/components/functions/input";
import { Select } from "@/components/functions/select";
import Page from "@/template/page";
import Tabla from "@/components/displays/tables";
import { List } from "@/components/displays/list";
import { IonTextarea } from "@ionic/react";
import styles from "@/components/displays/tables.module.css";


const columns = [
    {
        key: "name",
        label: "NAME",
    },
    {
        key: "role",
        label: "ROLE",
    },
    {
        key: "status",
        label: "STATUS",
    },
];
const rows = [
    {
        key: "1",
        name: "Tony Reichert",
        role: "CEO",
        status: "Active",
    },]


const RHPage = () => {
    function RecursosH() {
        
    }
    return (
        <Page titulo="RecursosHumanos">
            <h1 className="titulos"> Recursos humanos</h1>
            <div className={styles["divbu"]}>
                <Button type="button" color="default" label=" Agregar Vacante" onClick={{}} />
                <Button type="button" color="default" label=" Postulaciones" onClick={{  }} />
            </div>
            
            <form className={styles["form"]}>
                <Input label="Puesto" type="text" placheolder="Ingrese tipo de puesto" />
                <Input label="Horario" type="number" placheolder="Ingresa el Horario" />

                <Select values={
                    [
                        {
                            name: "Mayoreo"//
                        }, {
                            name: "Valle de guadalupe"//
                        }, {
                            name: "Valle de las palmas"//
                        }, {
                            name: "Testerazo"//
                        }
                    ]
                }
                    message='Selecciona Sucursal'
                />
                < div>
                    <Input label="Requisito 1" type="text" placheolder="Ingrese tipo de puesto" />
                    <Input label="Requisito 2" type="text" placheolder="Ingrese tipo de puesto" />
                </div>
                <IonTextarea className="textarea2 " placeholder="Mas información sobre el puesto solicitado"> </IonTextarea>
                <Button type="button" color="default" label="Publicar Vacante" onClick={{}} />
            </form>
           
            
            <Tabla/>

           

        </Page>
    )
}
export default RHPage;

        /*
         <Button type="submit" color="default" label="Agregar Vacante"/>
           <Button type="submit" color="default" label="Postulaciones" /> 
        */