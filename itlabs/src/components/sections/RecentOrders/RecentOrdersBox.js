import styles from "./RecentOrdersBox.module.css";

export const RecentOrdersBox = ({icon, label, unit, price}) => {

    return(
        <div className={styles.ordersBox}>
            <img src={icon} className={styles.iconBox}/>
            <div className={styles.label}> { label } </div>
            <div className={styles.oneRow}>
            <div className={styles.unit}> {unit} </div>
            <div className={styles.price}> {price} </div>
            </div>
    </div>
    )
}