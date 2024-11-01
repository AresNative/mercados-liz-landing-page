import { IonSelect, IonSelectOption } from "@ionic/react";
import styles from "./select.module.css";

interface SelectProps {
    values: any[];
    color?: string;
    message: string;
    onChange?: any;
    multiple?: boolean;
    props?: any;
    defaultValue?: any
}

export function Select({ values, message, onChange, multiple, props, defaultValue }: SelectProps) {
    return (
        <IonSelect
            className={styles["select"]}
            interface="popover"
            placeholder={message}
            onIonChange={(e: any) => onChange(`${e.detail.value}`)}
            multiple={multiple}
            value={defaultValue}
            {...props}
        >
            {values.length &&
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
