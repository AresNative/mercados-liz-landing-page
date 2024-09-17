import { IonButton } from "@ionic/react"
import styles from "./button.module.css"

interface buttonAction {
    onClick?: any;
    label: string;
    type: "submit" | "button";
    color: "default" | "dark" | "light"
}

export const Button: React.FC<buttonAction> = ({ onClick: any, type, color, label }) => {
    return (
        <IonButton className={`${styles["use-button"]} ${styles[color]}`} type={type}>
            {label}
        </IonButton>

    )
}