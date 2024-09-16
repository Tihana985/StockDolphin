import styles from "./TCardsBox.module.css";

export const TCardsBox = ({ icon, label, unit, price, update, date, time, iconsecond }) => {

    return (
        <div className={styles.tcardsBox}>
            <div className={styles.firstPart}>
            <img src={icon} alt="mouse" className={styles.icon} />
            </div>
            <div className={styles.secondPart}>
                <div className={styles.label}>{label}</div>
                <div className={styles.unitPrice}>
                <div className={styles.unit}> {unit} </div>
                <div className={styles.price}> {price} </div>
                </div>
            </div>
            <div className={styles.thirdPart}>
                <div className={styles.update}> {update} </div>
                <div className={styles.dateTime}>
                    <div className={styles.date}> {date} </div>
                    <div className={styles.time}> {time} </div>
                </div>
                <img src={iconsecond} className={styles.iconsecond} alt="icontrash" />
            </div>
        </div>
    )
}