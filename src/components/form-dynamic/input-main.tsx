import { IonInput } from "@ionic/react";
import styles from "@/components/functions/input.module.css";
import { useEffect } from "react";

interface InputProps {
    cuestion: {
        name: string;
        placeholder: string;
        require: boolean;
        valueDefined?: string;
        props: any
    };
    register: (name: string, options: { required: string | boolean }) => any;
    setValue: (name: string, value: string) => void;
    setError: (name: string, error: {}) => void;
    errors: Record<string, { message?: string }>;
}

export function InputDynamic(props: InputProps) {
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
                type="text"
                label={cuestion.placeholder}
                onChange={handleInputChange}
                labelPlacement="floating"
                className={styles["use-input"]}
                {...props.register(cuestion.props, {
                    required: cuestion.require ? "The field is required." : false,
                })}  // Spread de propiedades adicionales aquí
            >
                { }
                {/*  {type === "password" && (<IonInputPasswordToggle slot="end" />)} */}
            </IonInput>
            {props.errors[cuestion.name]?.message && (
                <div>
                    <span>{props.errors[cuestion.name].message}</span>
                </div>
            )}
        </div>
    );
}
