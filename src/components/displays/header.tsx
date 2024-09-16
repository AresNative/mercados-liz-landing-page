import { IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar } from "@ionic/react";
import style from "./header.module.css"
interface HeaderProps {
    title: string;
}
export function Headers({ title }: HeaderProps) {
    return (
        <IonHeader translucent className={style["headers"]}>
            <IonToolbar>
                <IonTitle size="large">
                    <img src="/Logo.png" width={80} />
                </IonTitle>
                <IonButtons slot="end" >
                    <IonMenuButton color="liz" />
                </IonButtons>
            </IonToolbar>
        </IonHeader>
    )
}