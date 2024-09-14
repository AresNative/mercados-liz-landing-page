import { IonItem,IonSelect, IonSelectOption } from "@ionic/react"
import styles from "./select.module.css"

export function Select() {
    return (
        <IonItem >
            <IonSelect className={styles["select"]} interface="popover" placeholder=" Select fruit">
                <IonSelectOption className={styles["select-option"]} value="apples">Apples</IonSelectOption>
                <IonSelectOption className={styles["select-option"]} value="oranges">Oranges</IonSelectOption>
                <IonSelectOption className={styles["select-option"]} value="bananas">Bananas</IonSelectOption>
            </IonSelect>
        </IonItem>

    )
}