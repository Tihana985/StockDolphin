import { OrdersBox } from "../OrdersBox/OrdersBox";
import styles from "./OrdersSum.module.css";

export const OrdersSum =() => {


    const ordersCard = [
        {
            quantity: "1292 units",
            totalprice: "€1999",
            priceperunit: "€1.99",
            orderedat: "10/10/2023",
            supplier:"Amazon Ltd Electronics"
        },
        {
            quantity: "1292 units",
            totalprice: "€1999",
            priceperunit: "€1.99",
            orderedat: "10/10/2023",
            supplier:"Amazon Ltd Electronics"
        },
        {
            quantity: "1292 units",
            totalprice: "€1999",
            priceperunit: "€1.99",
            orderedat: "10/10/2023",
            supplier:"Amazon Ltd Electronics"
        },
        {
            quantity: "1292 units",
            totalprice: "€1999",
            priceperunit: "€1.99",
            orderedat: "10/10/2023",
            supplier:"Amazon Ltd Electronics"
        },
        {
            quantity: "1292 units",
            totalprice: "€1999",
            priceperunit: "€1.99",
            orderedat: "10/10/2023",
            supplier:"Amazon Ltd Electronics"
        },
        {
            quantity: "1292 units",
            totalprice: "€1999",
            priceperunit: "€1.99",
            orderedat: "10/10/2023",
            supplier:"Amazon Ltd Electronics"
        },
        {
            quantity: "1292 units",
            totalprice: "€1999",
            priceperunit: "€1.99",
            orderedat: "10/10/2023",
            supplier:"Amazon Ltd Electronics"
        },
        {
            quantity: "1292 units",
            totalprice: "€1999",
            priceperunit: "€1.99",
            orderedat: "10/10/2023",
            supplier:"Amazon Ltd Electronics"
        }
    ]
    return(
        <div className={styles.ordersRow}>
            {ordersCard.map ((ordersCard,index) => {
                return <OrdersBox key={index} quantity={ordersCard.quantity} totalprice={ordersCard.totalprice} priceperunit={ordersCard.priceperunit} orderedat={ordersCard.orderedat}
                supplier={ordersCard.supplier} />
            }
            )}

        </div>
    )
}