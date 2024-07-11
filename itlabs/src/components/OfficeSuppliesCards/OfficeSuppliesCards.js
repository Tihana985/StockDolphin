import styles from "./OfficeSuppliesCards.module.css";
import { OsCardsBox } from "../OsCardsBox/OsCardsBox";

export const OfficeSuppliesCards = () => {
    const Cards = [

        {
            img: '/img/Recent Item 2 img (8).png',
            label: 'Mouse',
            unit: '3 Purchase records I',
            price: '€ 338.00',
            imgTwo:'/img/Folder 1 (items) (1).png' 
        },
        {
            img: '/img/Recent Item 2 img (16).png',
            label: 'Keyboard',
            unit: ' 3 Purchase records I',
            price: '€ 338.00',
            imgTwo: '/img/Folder 1 (items) (1).png' 
        },
        {
            img: '/img/Recent Item 2 img (8).png',
            label: 'Mouse',
            unit: '3 Purchase records I',
            price: '€ 338.00',
            imgTwo:'/img/Folder 1 (items) (1).png' 
        },
        {
            img: '/img/Recent Item 2 img (16).png',
            label: 'Keyboard',
            unit: ' 3 Purchase records I',
            price: '€ 338.00',
            imgTwo: '/img/Folder 1 (items) (1).png' 
        },


    ]

    return (
        <div className={styles.cards}>
            {Cards.map((item, index) => {
                return <OsCardsBox key={index} img={item.img} label={item.label} unit={item.unit} price={item.price} imgTwo={item.imgTwo} />
            })}
        </div>
    )
}