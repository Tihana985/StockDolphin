import styles from './SupplierBoxes.module.css';
import { SupplierCardsBox } from "../SupplierCardsBox/SupplierCardsBox";

export const SupplierBoxes = () => {

    const Boxes = [

        {
            name: 'Anhoch',
            addressText: 'Address:',
            address: 'Address',
            line:"",
            phnoneNumberText: 'Phone number:',
            phoneNumber: '+38161202543',
            lineTwo:"",
            emailText: 'Email:',
            email: 'example@gmail.com',
            lineThree:"",
            icon: '/img/icone-crayon-vert 1.png',
            iconTwo: '/img/Folder 1 (items) (1).png'
        },

        {
            name: 'Setec',
            addressText: 'Address:',
            address: 'Address',
            phnoneNumberText: 'Phone number:',
            phoneNumber: '+38161202543',
            emailText: 'Email:',
            email: 'example@gmail.com',
            lineThree:"",
            icon: '/img/icone-crayon-vert 1.png',
            iconTwo: '/img/Folder 1 (items) (1).png'
        },

        {
            name: 'Neptun',
            addressText: 'Address:',
            address: 'Address',
            phnoneNumberText: 'Phone number:',
            phoneNumber: '+38161202543',
            emailText: 'Email:',
            email: 'example@gmail.com',
            icon: '/img/icone-crayon-vert 1.png',
            iconTwo: '/img/Folder 1 (items) (1).png'
        },

        {
            name: 'Magroni',
            addressText: 'Address:',
            address: 'Address',
            phnoneNumberText: 'Phone number:',
            phoneNumber: '+38161202543',
            emailText: 'Email:',
            email: 'example@gmail.com',
            icon: '/img/icone-crayon-vert 1.png',
            iconTwo: '/img/Folder 1 (items) (1).png'
        },

        {
            name: 'Amazon',
            addressText: 'Address:',
            address: 'Address',
            phnoneNumberText: 'Phone number:',
            phoneNumber: '+38161202543',
            emailText: 'Email:',
            email: 'example@gmail.com',
            icon: '/img/icone-crayon-vert 1.png',
            iconTwo: '/img/Folder 1 (items) (1).png'
        },

        {
            name: 'Apple',
            addressText: 'Address:',
            address: 'Address',
            phnoneNumberText: 'Phone number:',
            phoneNumber: '+38161202543',
            emailText: 'Email:',
            email: 'example@gmail.com',
            icon: '/img/icone-crayon-vert 1.png',
            iconTwo: '/img/Folder 1 (items) (1).png'
        },

        {
            name: 'Pope',
            addressText: 'Address:',
            address: 'Address',
            phnoneNumberText: 'Phone number:',
            phoneNumber: '+38161202543',
            emailText: 'Email:',
            email: 'example@gmail.com',
            icon: '/img/icone-crayon-vert 1.png',
            iconTwo: '/img/Folder 1 (items) (1).png'
        },


        {
            name: 'City Group',
            addressText: 'Address:',
            address: 'Address',
            phnoneNumberText: 'Phone number:',
            phoneNumber: '+38161202543',
            emailText: 'Email:',
            email: 'example@gmail.com',
            icon: '/img/icone-crayon-vert 1.png',
            iconTwo: '/img/Folder 1 (items) (1).png'
        }
    
    ]

    return (

        <div className={styles.sboxesRow}>
            {Boxes.map((item, index) => {
                return <SupplierCardsBox key={index} name={item.name} addressText={item.addressText} address={item.address} line={item.line} phnoneNumberText={item.phnoneNumberText}
                    phoneNumber={item.phoneNumber} lineTwo={item.lineTwo} emailText={item.emailText} email={item.email} lineThree={item.lineThree} icon={item.icon} iconTwo={item.iconTwo} />
            })}
        </div>
    );
};