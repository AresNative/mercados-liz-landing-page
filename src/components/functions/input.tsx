import { IonInput, IonInputPasswordToggle } from "@ionic/react"
import styles from "./input.module.css"

interface Inputprops {
    label: string;
    type: 'text' | 'password' | 'email' | 'number' | 'date' | 'time' | 'tel' | undefined;
    placheolder: string;
    props?: any;
    defaultValue?: any;
}
export function Input({ label, type, placheolder, props, defaultValue }: Inputprops) {
    return (
        <IonInput
            type={type}
            label={label}
            labelPlacement="floating"
            placeholder={placheolder}
            className={styles["use-input"]}
            value={defaultValue}
            {...props}

        >
            {type === "password" && (<IonInputPasswordToggle slot="end" color="dark" />)}
        </IonInput>
    )
}

