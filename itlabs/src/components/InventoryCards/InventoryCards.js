import styles from './InventoryCards.module.css';
import { ICardsBox } from '../ICardsBox/ICardsBox';



export const InventoryCards = () => {


    const inventoryCardsFirts = [
        {
            id: 1,
            iconfirst: '/img/Recent Item 2 img (24).png',
            iconsecond: '/img/Recent Item 2 img (9).png',
            iconthird: '/img/Recent Item 2 img (5).png',
            label: 'Office Supply',
            unit: ' 3 items  |',
            price: '€338.00',
            update: 'Updated At:',
            date: '10/10/2023',
            time: '20:10',
            icon: '/img/Folder 1 (items) (1).png' 
        },

        {
            id: 2,
            iconfirst: '/img/Recent Item 2 img (3).png',
            iconsecond: '/img/Recent Item 2 img (12).png',
            iconthird: '/img/Recent Item 2 img (13).png',
            label: 'Kitchen Supply',
            unit: ' 3 items  |',
            price: '€114.00',
            update: 'Updated At:',
            date: '10/10/2023',
            time: '20:10',
            icon: '/img/Folder 1 (items) (1).png' 
             
        },

        {
            id: 3,
            iconfirst: '/img/Recent Item 2 img (14).png',
            iconsecond: '/img/Recent Item 2 img (15).png',
            iconthird: '/img/Recent Item 2 img (15).png',
            label: 'Sanitary Supply',
            unit: ' 3 items  |',
            price: '€ 98.00',
            update: 'Updated At:',
            date: '10/10/2023',
            time: '20:10', 
            icon: '/img/Folder 1 (items) (1).png' 
        },

        {
            id: 4,
            iconfirst: '/img/Recent Item 2 img (8).png',
            iconsecond: '/img/Recent Item 2 img (9).png',
            iconthird: '/img/Recent Item 2 img (5).png',
            label: 'Office Supply',
            unit: ' 3 items  |',
            price: '€338.00',
            update: 'Updated At:',
            date: '10/10/2023',
            time: '20:10',
            icon: '/img/Folder 1 (items) (1).png' 
        }

    ]

    return (
       
            <div className={styles.icardsRow}>
                {inventoryCardsFirts.map((item) => {
                    return <ICardsBox key={item.id} iconfirst={item.iconfirst} iconsecond={item.iconsecond} iconthird={item.iconthird} label={item.label} unit={item.unit} price={item.price}  
                    update={item.update} date={item.date} time={item.time} icon={item.icon} />
                }) }
              </div>
            
     
    );
};