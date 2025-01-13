import { IonSelect, IonSelectOption } from "@ionic/react";
import styles from "./select.module.css";

interface SelectProps {
    values: any[];
    color?: string;
    message: string;
    onChange?: (value: any) => void;
    multiple?: boolean;
    props?: any;
    defaultValue?: any;
}

export function Select({ values, message, onChange, multiple, props, defaultValue }: SelectProps) {
    return (
        <IonSelect
            className={styles["select"]}
            interface="popover"
            placeholder={message}
            onIonChange={(e: any) => {
                if (onChange) {
                    onChange(e.detail.value); // Pasamos el valor seleccionado al manejador
                }
            }}
            multiple={multiple}
            value={defaultValue}
            {...props}
           
        >
            {values.length > 0 &&
                values.map((data: any, index: number) => {
                    const optionValue = data.name || data.nombre || Object.values(data)[0];
                    return (
                        <IonSelectOption
                            className={styles["select-option"]}
                            key={index}
                            value={optionValue}
                        >
                            {optionValue}
                        </IonSelectOption>
                    );
                })}
        </IonSelect>
    );
}


