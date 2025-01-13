import { IonSearchbar } from "@ionic/react"
import styles from "./search.module.css"

export function Search() {
    return (
        <IonSearchbar className={styles["search"]}
          ></IonSearchbar>
    )
}