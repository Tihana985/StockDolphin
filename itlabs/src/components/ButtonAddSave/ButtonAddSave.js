import styles from "./ButtonAddSave.module.css";

export const ButtonAddSave = ({text}) => {

    return (
        <div className={styles.buttonAddSave}>
            <span className={styles.text}> { text } </span>
        </div>
    )
}