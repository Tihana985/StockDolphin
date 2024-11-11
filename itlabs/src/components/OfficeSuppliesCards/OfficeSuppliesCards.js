import styles from "./OfficeSuppliesCards.module.css";
import { OsCardsBox } from "../OsCardsBox/OsCardsBox";

export const OfficeSuppliesCards = ({ view = 'grid' }) => {
    const Cards = [

        {
            id: 1,
            img: '/img/Recent Item 2 img (8).png',
            label: 'Mouse',
            unit: '3 Purchase records I',
            price: '€ 338.00',
            update: 'Updated At:',
            timeandDate:'10/10/2023 20:10',
            imgTwo:'/img/Folder 1 (items) (1).png' 
        },
        {
            id: 2,
            img: '/img/Recent Item 2 img (16).png',
            label: 'Keyboard',
            unit: ' 3 Purchase records I',
            price: '€ 338.00',
            update: 'Updated At:',
            timeandDate:'10/10/2023 20:10',
            imgTwo: '/img/Folder 1 (items) (1).png' 
        },
        {
            id: 3,
            img: '/img/Recent Item 2 img (8).png',
            label: 'Mouse',
            unit: '3 Purchase records I',
            price: '€ 338.00',
            update: 'Updated At:',
            timeandDate:'10/10/2023 20:10',
            imgTwo:'/img/Folder 1 (items) (1).png' 
        },
        {
            id: 4,
            img: '/img/Recent Item 2 img (16).png',
            label: 'Keyboard',
            unit: ' 3 Purchase records I',
            price: '€ 338.00',
            update: 'Updated At:',
            timeandDate:'10/10/2023 20:10',
            imgTwo: '/img/Folder 1 (items) (1).png' 

        },


    ]

    return (
        <div className={view === 'grid' ? styles.cards : styles.listCards}>
            {Cards.map((item) => {
                return <OsCardsBox view={view} key={item.id} img={item.img} label={item.label} unit={item.unit} price={item.price} update={item.update} timeandDate={item.timeandDate} imgTwo={item.imgTwo} />
            })}
        </div>
    )
}