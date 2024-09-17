import styles from "./InventoryCardsThird.module.css";
import { TCardsBox } from "../TCardsBox/TCardsBox";

export const InventoryCardsThird = () =>{

    const cardsThird = [

        {
            icon: '/img/Recent Item 2 img (17).png',
            label: 'Mouse',
            unit: ' 3 Purchase Records |',
            price: '€338.00',
            update: 'Updated At:',
            date: '10/10/2023',
            time: '20:10',
            iconsecond: '/img/Folder 1 (items) (1).png'
        },
        {
            icon: '/img/Recent Item 2 img (16).png',
            label: 'Keyboard',
            unit: ' 3 Purchase Records |',
            price: ' € 114.00',
            update: 'Updated At:',
            date: '10/10/2023',
            time: '20:10',
            iconsecond: '/img/Folder 1 (items) (1).png'
        },
        {
            icon: '/img/Recent Item 2 img (25).png',
            label: 'Headphones',
            unit: ' 3 Purchase Records |',
            price: '€ 98.00',
            update: 'Updated At:',
            date: '10/10/2023',
            time: '20:10',
            iconsecond: '/img/Folder 1 (items) (1).png'
        },
        {
            icon: '/img/Recent Item 2 img (17).png',
            label: 'Mouse',
            unit: ' 3 Purchase Records |',
            price: ' € 338.00',
            update: 'Updated At:',
            date: '10/10/2023',
            time: '20:10',
            iconsecond: '/img/Folder 1 (items) (1).png'
        },
    ]
    return(
        <div className={styles.inventoryCardsThird}>
            {cardsThird.map((item, index) => {
                return <TCardsBox key={index} icon={item.icon} label={item.label} unit={item.unit} price={item.price}
                update={item.update} date={item.date} time={item.time} iconsecond={item.iconsecond} />
            })}

        </div>
    )
}