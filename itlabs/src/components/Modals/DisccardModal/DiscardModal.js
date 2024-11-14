import styles from "./DiscardModal.module.css";


export const DiscardModal = ({closeModal}) => {

    return (
        <div className={styles.discardModal}>
            <div className={styles.form}>
                <span className={styles.span}>Discard unsaved changes?</span>
                <div className={styles.twoBtn}>
                    <button className={styles.cancelButton} onClick={()=>closeModal(false)}>Cancel</button>
                    <button className={styles.discardButton} onClick={()=>closeModal(false)}>Discard</button>
                </div>
            </div>
        </div>
    )
}