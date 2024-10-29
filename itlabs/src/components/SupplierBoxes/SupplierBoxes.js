import styles from './SupplierBoxes.module.css'
import { SupplierCardsBox } from "../SupplierCardsBox/SupplierCardsBox"

export const SupplierBoxes = ({ suppliers }) => {
    return (
        <div className={styles.sboxesRow}>
            {suppliers.map((item) => {
                return <SupplierCardsBox key={item.id} name={item.name} addressText={item.addressText} addressInput={item.addressInput} line={item.line} phnoneNumberText={item.phnoneNumberText}
                    phoneNumber={item.phoneNumber} lineTwo={item.lineTwo} emailText={item.emailText} email={item.email} lineThree={item.lineThree} icon={item.icon} iconTwo={item.iconTwo} />
            })}
        </div>
    );
};