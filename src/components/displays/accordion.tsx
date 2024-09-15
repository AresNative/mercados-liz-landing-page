import { IonAccordion, IonAccordionGroup, IonItem, IonLabel } from "@ionic/react"
import styles from "./accordion.module.css"
export function Accordion() {
    return (
        <IonAccordionGroup className={styles["accordion"]} >
            <IonAccordion value="first">
                <IonItem slot="header" color="violet">
                    <IonLabel>First Accordion</IonLabel>
                </IonItem>
                <div className="ion-padding" slot="content">
                    First Content
                </div>
            </IonAccordion>
        </IonAccordionGroup>
    );
}