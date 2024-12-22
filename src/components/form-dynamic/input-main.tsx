import { IonInput } from "@ionic/react";
import styles from "@/components/functions/input.module.css";
import { useEffect } from "react";

interface InputProps {
    cuestion: {
        name: string;
        placeholder: string;
        require: boolean;
        valueDefined?: string;
        props: any;
        type: string; // Tipo de entrada (e.g., text, number, date, etc.)
        min?: number; // Nuevo campo para definir un valor mínimo
    };
    register: (name: string, options: { required: string | boolean }) => any;
    setValue: (name: string, value: string) => void;
    setError: (name: string, error: {}) => void;
    errors: Record<string, { message?: string }>;
}

export function InputDynamic(props: InputProps) {
    const { cuestion } = props;

    const handleInputChange = (event: CustomEvent) => {
        let value = event.detail.value || "";
        // Validar el mínimo si el tipo es number
        if (cuestion.type === "number") {
            const numericValue = parseFloat(value);
            if (!isNaN(numericValue) && numericValue < (cuestion.min || 0)) {
                value = String(cuestion.min); // Reemplazar con el valor mínimo permitido
            }
        }
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
                type={cuestion.type || "text"} // Asignar dinámicamente el tipo
                label={cuestion.placeholder}
                onIonInput={handleInputChange} // Controlar el cambio de entrada
                labelPlacement="floating"
                className={styles["use-input"]}
                {...props.register(cuestion.name, {
                    required: cuestion.require ? "The field is required." : false,
                })}
            />
            {props.errors[cuestion.name]?.message && (
                <div>
                    <span>{props.errors[cuestion.name].message}</span>
                </div>
            )}
        </div>
    );
}


