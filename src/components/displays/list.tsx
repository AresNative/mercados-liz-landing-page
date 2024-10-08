import { IonItem, IonList } from "@ionic/react";

interface Listprops {
    label: string;
    type: 'text' | 'number' | undefined;
    lines: "full" | "inset" | "none" | undefined;


}

export function List({ label, type, lines }: Listprops) {
    return (
        <IonList>
            {label}
            {type}
            {lines}
        </IonList>



    );
};

