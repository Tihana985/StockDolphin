import styles from "./OrdersBox.module.css";

export const OrdersBox =({ quantity, totalprice, priceperunit, orderedat, supplier}) =>{

    return(
        <div className={styles.ordersBox}>
            <div className={styles.quantity}> {quantity}</div>
            <div className={styles.totalprice}> {totalprice}</div>
            <div className={styles.priceperunit}> {priceperunit}</div>
            <div className={styles.orderedat}> {orderedat}</div>
            <div className={styles.supplier}> {supplier}</div>

        </div>
    );
};