import { IonList } from "@ionic/react";
import styles from "@/components/displays/list.module.css"

interface Listprops {
    children: React.ReactNode;
}
export function List({ children }: Listprops) {
    return (
        <IonList className={styles["list-columnas"]} >
            {children}
        </IonList>
    );
};

