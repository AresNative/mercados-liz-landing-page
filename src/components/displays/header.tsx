import { IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar } from "@ionic/react";
import style from "./header.module.css"

interface HeaderProps {
    title: string;
}

export function Headers({ title }: HeaderProps) {
    return (
        <IonHeader className={style["headers"]}>
            <IonToolbar color="liz">
                <IonTitle size="large" className={style["titulos"]}>
                    Liz
                </IonTitle>
                <IonButtons slot="end" className={style["centerButton"]}>
                    <IonMenuButton color="light" />
                </IonButtons>
            </IonToolbar>
        </IonHeader>
    )
}
