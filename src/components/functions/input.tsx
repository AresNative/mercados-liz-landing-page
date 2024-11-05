import { IonInput, IonInputPasswordToggle } from "@ionic/react";
import styles from "./input.module.css";
import { useEffect } from "react";

interface InputProps {
    label: string;
    type: 'text' | 'password' | 'email' | 'number' | 'date' | undefined;
    placheolder: string;
    props?: any;
    defaultValue?: any;
}

export function Input({ label, type, placheolder, defaultValue, props }: InputProps) {
    const { cuestion } = props;

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        props.setError(cuestion.name, {});
        props.setValue(cuestion.name, value);
    };

    useEffect(() => {
        if (cuestion.valueDefined) {
            props.setValue(cuestion.name, cuestion.valueDefined);
        }
    }, [cuestion.valueDefined, props, cuestion.name]);
    return (
        <div className={styles["input-container"]}>
            <IonInput
                type={type}
                label={label}
                onChange={handleInputChange}
                labelPlacement="floating"
                placeholder={placheolder}
                className={styles["use-input"]}
                value={defaultValue ?? ""}
                {...props.register(cuestion.props, {
                    required: cuestion.require ? "The field is required." : false,
                })}  // Spread de propiedades adicionales aquí
            >
                { }
                {type === "password" && (<IonInputPasswordToggle slot="end" />)}
            </IonInput>

        </div>
    );
}
