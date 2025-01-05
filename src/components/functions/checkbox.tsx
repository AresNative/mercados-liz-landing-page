import { IonCheckbox } from "@ionic/react";
import styles from "./checkbox.module.css"

interface checkBoxProps {
    label: string;
}
export function CheckBox({label}:checkBoxProps) {
    return (
        <IonCheckbox className={styles["checkbox"]}>
     {label}
        </IonCheckbox>
    )
}