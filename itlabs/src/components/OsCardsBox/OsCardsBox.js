import styles from "./OsCardsBox.module.css";

export const OsCardsBox = ({ img, label, unit, price, imgTwo }) => {
    return (
        <div className={styles.OsCardsBox}>
            <img src={img} alt={img} className={styles.img} />
            <div className={styles.label}> {label} </div>
            <div className={styles.twoParts}>
            
            <div className={styles.unit}> {unit} </div>
            <div className={styles.price}> {price} </div>
            </div>
            <img src={imgTwo} alt={imgTwo} className={styles.imgTwo} />
        </div>

    )
}