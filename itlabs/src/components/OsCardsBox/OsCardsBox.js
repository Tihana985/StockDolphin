import { Link } from "react-router-dom";
import styles from "./OsCardsBox.module.css";

export const OsCardsBox = ({ view = 'grid', img, label, unit, price, imgTwo }) => {
    return (
        <div className={view === 'grid' ? styles.OsCardsBox : styles.OsCardsListBox }>
            <img src={img} alt={img} className={styles.img} />
            {label === "Mouse" ? (
                <Link to="mouse" className={styles.mouse} >
                    <div className={styles.label}> {label} </div>
                </Link>
            ) : (
                <div className={styles.label}> {label} </div>
            )}
            <div className={styles.twoParts}>
                <div className={styles.unit}> {unit} </div>
                <div className={styles.price}> {price} </div>
            </div>
            <img src={imgTwo} alt={imgTwo} className={styles.imgTwo} />
        </div>

    )
}