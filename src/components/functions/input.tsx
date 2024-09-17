import { IonInput } from "@ionic/react"
import styles from "./input.module.css"

interface Inputprops {
    label: string;
    type:  'text' | 'password' | 'email' | 'number' | undefined;
}
export function Input({ label, type }: Inputprops) {
    return (
        <IonInput
            type={type}
            label={label}
            labelPlacement="floating"
            placeholder="Enter text"
            className={styles["use-input"]} />
    )
}


