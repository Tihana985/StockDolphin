import styles from "./InventoryCardsSecond.module.css";
import { SCardsBox } from "../SCardsBox/ScardsBox";
import { useEffect, useState } from 'react';

export const InventoryCardsSecond = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategories();
    }, [])

    const fetchCategories = async () => {
        try {
          const response = await fetch("http://127.0.0.1:10005/inventory", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
          console.log("Response:", response);
  
          const categoriesData = await response.json();
  
          if (response.ok) {
            console.log("API Response for categories:", categoriesData);
            setCategories(categoriesData.data);
          } else {
            console.log("Error - categories");
          }
        } catch (err) {
          console.log("Error fetching categories", err);
        }
      };


    // const cardsSecond = [
    //     {
    //         iconfirst: '/img/Recent Item 2 img (24).png',
    //         iconsecond: '/img/Recent Item 2 img (9).png',
    //         iconthird: '/img/Recent Item 2 img (5).png',
    //         label: 'Office Supply',
    //         unit: ' 3 items  |',
    //         price: '€338.00',
    //         update: 'Updated At:',
    //         date: '10/10/2023',
    //         time: '20:10',
    //         icon: '/img/Folder 1 (items) (1).png'
    //     },

    //     {
    //         iconfirst: '/img/Recent Item 2 img (3).png',
    //         iconsecond: '/img/Recent Item 2 img (12).png',
    //         iconthird: '/img/Recent Item 2 img (13).png',
    //         label: 'Kitchen Supply',
    //         unit: ' 3 items  |',
    //         price: '€114.00',
    //         update: 'Updated At:',
    //         date: '10/10/2023',
    //         time: '20:10',
    //         icon: '/img/Folder 1 (items) (1).png'

    //     },

    //     {
    //         iconfirst: '/img/Recent Item 2 img (14).png',
    //         iconsecond: '/img/Recent Item 2 img (15).png',
    //         iconthird: '/img/Recent Item 2 img (15).png',
    //         label: 'Sanitary Supply',
    //         unit: ' 3 items  |',
    //         price: '€ 98.00',
    //         update: 'Updated At:',
    //         date: '10/10/2023',
    //         time: '20:10',
    //         icon: '/img/Folder 1 (items) (1).png'
    //     },

    //     {
    //         iconfirst: '/img/Recent Item 2 img (8).png',
    //         iconsecond: '/img/Recent Item 2 img (9).png',
    //         iconthird: '/img/Recent Item 2 img (5).png',
    //         label: 'Office Supply',
    //         unit: ' 3 items  |',
    //         price: '€338.00',
    //         update: 'Updated At:',
    //         date: '10/10/2023',
    //         time: '20:10',
    //         icon: '/img/Folder 1 (items) (1).png'
    //     }

    // ]

    return (

        <div className={styles.cardsRowSecond}>
            {categories.map((item, index) => {
                return <SCardsBox key={index} iconfirst={item.image} iconsecond={item.iconsecond} iconthird={item.iconthird} label={item.title} unit={item.unit} price={item.price}
                    update={item.update} date={item.date} time={item.time} icon={item.icon} />
            })}
        </div>
    )


};



