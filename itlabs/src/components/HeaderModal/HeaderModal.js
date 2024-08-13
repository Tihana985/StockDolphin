import styles from "./HeaderModal.module.css";

export const HeaderModal = ({ text }) => {

    return (
        <div className={styles.headermodal}>
            <span className={styles.text}> { text } </span>
            {/* <button className={styles.buttonX}><img src="/img/Multiply.png" alt="x" /></button> */}
        </div>
    )
}