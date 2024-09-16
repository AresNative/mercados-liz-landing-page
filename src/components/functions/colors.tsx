import styles from "./input.module.css"

export function Color() {
    return (
        <input type="color" className={styles["use-color"]}></input>
    )
}