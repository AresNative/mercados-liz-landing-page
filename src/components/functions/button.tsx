import { IonButton } from "@ionic/react"
import styles from "./button.module.css"

interface buttonAction {
    onClick?: any;
    type: "submit" | "button";
    color: "default" | "dark" | "light"
}

export const Button: React.FC<buttonAction> = ({ onClick: any, type, color }) => {
    return (
        <IonButton className={`${styles["use-button"]} ${styles[color]}`} type={type}>
            button
        </IonButton>
    )
}