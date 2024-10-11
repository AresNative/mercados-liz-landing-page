import { IonInput, IonInputPasswordToggle } from "@ionic/react"
import styles from "./input.module.css"

interface Inputprops {
    label: string;
    type: 'text' | 'password' | 'email' | 'number' | undefined;
    placheolder: string;

}
export function Input({ label, type, placheolder }: Inputprops) {
    return (
        <IonInput
            type={type}
            label={label}
            labelPlacement="floating"
            placeholder={placheolder}
            className={styles["use-input"]}

          
        />

    )
}


