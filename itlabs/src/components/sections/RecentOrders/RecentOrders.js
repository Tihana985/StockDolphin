import styles from "./RecentOrders.module.css";
import { RecentOrdersBox } from "./RecentOrdersBox";
import { Pagination } from '../../Pagination/Pagination';
import { useState } from "react";

export const RecentOrders = () => {

// Paginacija dodavam 


const [currentPage, setCurrentPage] = useState(1);



    const recentordresItems = [
        {
            icon: '/img/Recent Item 2 img (20).png',
            label: 'Office Mouse',
            unit: '7 Unit  |',
            price: '€133.00'
        },

        {
            icon: '/img/Recent Item 2 img (22).png',
            label: 'A4 Paper',
            unit: '917 Unit |',
            price: '€9 17.00'
             
        },

        {
            icon: '/img/Recent Item 2 img (19).png',
            label: 'Espresso',
            unit: '3 Unit |',
            price: '€ 22.00'
        },

        {
            icon: '/img/Recent Item 2 img (20).png',
            label: 'Office Pens',
            unit: '66 Unit |',
            price: '€ 17.00'
        },

    ]

    return (
        <div className={styles.recentordersSection}>
            <h3>Recent Orders</h3>
            <div className={styles.recentordersRow}>
                {recentordresItems.map((item, index) => {
                    return <RecentOrdersBox key={index} icon={item.icon} label={item.label} unit={item.unit} price={item.price} />
                }) }
                <button className={styles.buttonArrow}> <img src="/img/Expand Arrow.png" alt="arrow" /></button>
            </div>
            {/* <button className={styles.buttonpagination}>. . .</button> */}
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />

        </div>
    );
};