import { SummaryBox } from "./SummaryBox";
import styles from "./index.module.css";

export const InventorySummary = () => {

    const cardsItems = [
        {
            label: 'Categories',
            number: '13',
            icon: '/img/Folder.png',
            color: '#FFE4AA'
        },
        {
            label: 'Items',
            number: '123',
            icon: '/img/Folder.png',
            color: '#C8E6EE'
        },
        {
            label: 'Total Orders',
            number: '378',
            icon: '/img/Folder.png',
            color: '#E5CAFF'
        },
        {
            label: 'Total Cost',
            number: '$1350',
            icon: '/img/Folder.png',
            color: '#FFD5C0'
        },
    ]

    return (
        <div className={styles.inventorySection}>
            <h3>Inventory Summary</h3>
            <div className={styles.summaryRow}>
                {cardsItems.map((item, index) => {
                    return <SummaryBox key={index} label={item.label} number={item.number} icon={item.icon} color={item.color} />
                })}
            </div>
        </div>
    );

};