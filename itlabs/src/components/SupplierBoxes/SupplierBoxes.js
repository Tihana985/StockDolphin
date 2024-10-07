import styles from './SupplierBoxes.module.css';
import { SupplierCardsBox } from "../SupplierCardsBox/SupplierCardsBox";
import { useEffect, useState } from 'react';

export const SupplierBoxes = () => {
    const [ suppliers, setSuppliers] =useState([]);

    useEffect (() => {
        fetchSuppliers();
    }, [])

    const fetchSuppliers = async () => {
        try {
          const response = await fetch("http://localhost:10001/suppliers", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            
          });
          console.log("Response:", response);
  
          const suppliersData = await response.json();
  
          if (response.ok) {
            console.log("API Response for suppliers:", suppliersData);
            setSuppliers(suppliersData.data);
          } else {
            console.log("Error - suppliers");
          }
        } catch (err) {
          console.log("Error fetching suppliers", err);
        }
        
      };



    // const Boxes = [

    //     {
    //         name: 'Anhoch',
    //         addressText: 'Address:',
    //         address: 'Address',
    //         line:"",
    //         phnoneNumberText: 'Phone number:',
    //         phoneNumber: '+38161202543',
    //         lineTwo:"",
    //         emailText: 'Email:',
    //         email: 'example@gmail.com',
    //         lineThree:"",
    //         icon: '/img/icone-crayon-vert 1.png',
    //         iconTwo: ' '
    //     },

    //     {
    //         name: 'Setec',
    //         addressText: 'Address:',
    //         address: 'Address',
    //         phnoneNumberText: 'Phone number:',
    //         phoneNumber: '+38161202543',
    //         emailText: 'Email:',
    //         email: 'example@gmail.com',
    //         lineThree:"",
    //         icon: '/img/icone-crayon-vert 1.png',
    //         iconTwo: '/img/Folder 1 (items) (1).png'
    //     },

    //     {
    //         name: 'Neptun',
    //         addressText: 'Address:',
    //         address: 'Address',
    //         phnoneNumberText: 'Phone number:',
    //         phoneNumber: '+38161202543',
    //         emailText: 'Email:',
    //         email: 'example@gmail.com',
    //         icon: '/img/icone-crayon-vert 1.png',
    //         iconTwo: '/img/Folder 1 (items) (1).png'
    //     },

    //     {
    //         name: 'Magroni',
    //         addressText: 'Address:',
    //         address: 'Address',
    //         phnoneNumberText: 'Phone number:',
    //         phoneNumber: '+38161202543',
    //         emailText: 'Email:',
    //         email: 'example@gmail.com',
    //         icon: '/img/icone-crayon-vert 1.png',
    //         iconTwo: '/img/Folder 1 (items) (1).png'
    //     },

    //     {
    //         name: 'Amazon',
    //         addressText: 'Address:',
    //         address: 'Address',
    //         phnoneNumberText: 'Phone number:',
    //         phoneNumber: '+38161202543',
    //         emailText: 'Email:',
    //         email: 'example@gmail.com',
    //         icon: '/img/icone-crayon-vert 1.png',
    //         iconTwo: '/img/Folder 1 (items) (1).png'
    //     },

    //     {
    //         name: 'Apple',
    //         addressText: 'Address:',
    //         address: 'Address',
    //         phnoneNumberText: 'Phone number:',
    //         phoneNumber: '+38161202543',
    //         emailText: 'Email:',
    //         email: 'example@gmail.com',
    //         icon: '/img/icone-crayon-vert 1.png',
    //         iconTwo: '/img/Folder 1 (items) (1).png'
    //     },

    //     {
    //         name: 'Pope',
    //         addressText: 'Address:',
    //         address: 'Address',
    //         phnoneNumberText: 'Phone number:',
    //         phoneNumber: '+38161202543',
    //         emailText: 'Email:',
    //         email: 'example@gmail.com',
    //         icon: '/img/icone-crayon-vert 1.png',
    //         iconTwo: '/img/Folder 1 (items) (1).png'
    //     },


    //     {
    //         name: 'City Group',
    //         addressText: 'Address:',
    //         address: 'Address',
    //         phnoneNumberText: 'Phone number:',
    //         phoneNumber: '+38161202543',
    //         emailText: 'Email:',
    //         email: 'example@gmail.com',
    //         icon: '/img/icone-crayon-vert 1.png',
    //         iconTwo: '/img/Folder 1 (items) (1).png'
    //     }
    
    // ]

    return (

        <div className={styles.sboxesRow}>
            {suppliers.map((item) => {
                return <SupplierCardsBox key={item.id} name={item.name} addressText={item.addressText} addressInput={item.addressInput} line={item.line} phnoneNumberText={item.phnoneNumberText}
                    phoneNumber={item.phoneNumber} lineTwo={item.lineTwo} emailText={item.emailText} email={item.email} lineThree={item.lineThree} icon={item.icon} iconTwo={item.iconTwo} />
            })}
        </div>
    );
};