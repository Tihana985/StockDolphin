import styles from "./ButtonCancel.module.css";

export const ButtonCancel = () => {

    return (
        <div className={styles.buttonCancel}>
            <button className={styles.textCancel}> Cancel </button>
        </div>
    )
}