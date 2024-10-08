import styles from "@/components/displays/tables.module.css";
import {  IonIcon } from "@ionic/react";
import { Tooltip } from "@nextui-org/react";

export default function Tabla() {
    return (
        <div className={styles["form"]}>
            <table className="responsive-table">
                <thead >
                    <tr>
                        <th>Puesto</th>
                        <th>Candidatos</th>
                        <th>Archivos</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Guardia</td>
                        <td>Fulanito1</td>
                        <td className={styles["icontabla"]}>
                                <IonIcon icon="./file-user.svg" size="large"    />
                        </td>
                    </tr>
                    <tr>
                        <td>Guardia</td>
                        <td>Fulanito2</td>
                        <td className={styles["icontabla"]}>
                        <IonIcon icon="./file-user.svg" size="large" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );



}

{/* <Page titulo="RecursosHumanos">
    <h1 className="titulos"> Recursos humanos</h1>
    <div className={styles["divbu"]}>
        <Button type="button" color="default" label=" Agregar Vacante" onClick={{}} />
        <Button type="button" color="default" label=" Postulaciones" onClick={{}} />
    </div>

    <Tabla ></Tabla>

</Page> */}


/*   <th></th>
<th></th> */

