import { IonButton } from "@ionic/react";
import styles from "./button.module.css";

interface buttonAction {
    onClick?: any;
    label: string | React.ReactNode;
    type?: "button" | "submit" | "reset";
    color: "default" | "dark" | "light" ;
    disabled?: boolean; // Ensure `disabled` is defined here
}

export const Button: React.FC<buttonAction> = ({ onClick, type, color, label, disabled }) => {
    return (
        <IonButton
          
            onClick={onClick}
            className={`${styles["use-button"]} ${styles[color]}`}
            type={type}
            disabled={disabled} // Pass `disabled` here
        >
            {label}
        </IonButton>
    );
};
