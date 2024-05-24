import styles from "./index.module.css";

export const SummaryBox = ({ label, number, icon, color }) => {

    return (
        <div className={styles.summaryBox}>
            <div style={{ backgroundColor: color }} className={styles.iconBox}>
                <img src={icon} />
            </div>
            <div className={styles.summaryNumber}>{ number }</div>
            <div>{ label }</div>
        </div>
    );
};