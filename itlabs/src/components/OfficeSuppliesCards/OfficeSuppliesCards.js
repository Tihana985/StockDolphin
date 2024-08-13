import styles from "./OfficeSuppliesCards.module.css";
import { OsCardsBox } from "../OsCardsBox/OsCardsBox";

export const OfficeSuppliesCards = () => {
    const Cards = [

        {
            id: 1,
            img: '/img/Recent Item 2 img (8).png',
            label: 'Mouse',
            unit: '3 Purchase records I',
            price: '€ 338.00',
            imgTwo:'/img/Folder 1 (items) (1).png' 
        },
        {
            id: 2,
            img: '/img/Recent Item 2 img (16).png',
            label: 'Keyboard',
            unit: ' 3 Purchase records I',
            price: '€ 338.00',
            imgTwo: '/img/Folder 1 (items) (1).png' 
        },
        {
            id: 3,
            img: '/img/Recent Item 2 img (8).png',
            label: 'Mouse',
            unit: '3 Purchase records I',
            price: '€ 338.00',
            imgTwo:'/img/Folder 1 (items) (1).png' 
        },
        {
            id: 4,
            img: '/img/Recent Item 2 img (16).png',
            label: 'Keyboard',
            unit: ' 3 Purchase records I',
            price: '€ 338.00',
            imgTwo: '/img/Folder 1 (items) (1).png' 
        },


    ]

    return (
        <div className={styles.cards}>
            {Cards.map((item) => {
                return <OsCardsBox key={item.id} img={item.img} label={item.label} unit={item.unit} price={item.price} imgTwo={item.imgTwo} />
            })}
        </div>
    )
}