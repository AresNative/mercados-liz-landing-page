import { IonInput, IonInputPasswordToggle } from "@ionic/react";
import styles from "./input.module.css";

interface InputProps {
    label: string;
    type: 'text' | 'password' | 'email' | 'number' | 'date' | undefined;
    placheolder: string;
    props?: any;
    defaultValue?: any;
}

export function Input({ label, type, placheolder, defaultValue, props }: InputProps) {

    return (
        <div className={styles["input-container"]}>
            <IonInput
                type={type}
                label={label}
                labelPlacement="floating"
                placeholder={placheolder}
                className={styles["use-input"]}
                value={defaultValue ?? ""}
                {...props}  // Spread de propiedades adicionales aquí
            >
                { }
                {type === "password" && (<IonInputPasswordToggle slot="end" />)}
            </IonInput>
        </div>
    );
}
