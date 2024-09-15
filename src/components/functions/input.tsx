import { IonInput } from "@ionic/react"
import styles from "./input.module.css"
export function Input() {
    return (
        <IonInput label="Floating label" labelPlacement="floating" placeholder="Enter text" className={styles["use-input"]} />
    )
}


