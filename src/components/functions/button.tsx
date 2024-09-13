import { IonButton} from "@ionic/react"
import styles from "./button.module.css"

export function Button() {
    return (
        <IonButton className={styles["button"]} type="submit"  >
            Impresora
        </IonButton>
    )
}