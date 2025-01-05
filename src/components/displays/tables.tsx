import styles from "@/components/displays/tables.module.css";
import { IonIcon } from "@ionic/react";

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
                            <IonIcon icon="./file-user.svg" size="large" />
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


