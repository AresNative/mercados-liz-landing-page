import { IonItem, IonList } from "@ionic/react";
import styles from "@/components/displays/list.module.css"

interface Listprops {
    /* label: string;
    type: 'text' | 'number' | undefined;
    lines: "full" | "inset" | "none" | undefined; */
    children: React.ReactNode;

}

export function List({ children }: Listprops) {
    return (
        <IonList className={styles["list-columnas"]}>
           {children}
        </IonList>



    );
};

