import { IonButton } from "@ionic/react";
import styles from "./main-form.module.css"
import { Send } from "lucide-react";
interface FromProps {
    children?: React.ReactNode;
    functionFrom?: string;
    message: string;
}

export function MainForm({ message, functionFrom, children }: FromProps) {
    return (
        <form className={styles["form"]}>
            {children}
            <IonButton
                color="liz"
                size="small"
                fill="outline"
                style={{
                    marginTop: "10px",
                }}
            >
                <span
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                    }}
                >
                    {message}
                    <Send style={{ fontSize: "16px" }} />
                </span>
            </IonButton>

        </form>
    )
}