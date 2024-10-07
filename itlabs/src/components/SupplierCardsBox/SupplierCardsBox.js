import styles from './SupplierCardsBox.module.css';

export const SupplierCardsBox = ({name, addressText, addressInput, line, phnoneNumberText, phoneNumber, lineTwo, emailText, email, lineThree, icon, iconTwo }) => {

    return (
        <div className={styles.supplierCardsBox}>
            <label className={styles.labelName}>{name}</label>

            <div className={styles.adressElements}>
                <div className={styles.addressText}>{ addressText  }</div>
                <div className={styles.addressInput}>{ addressInput }</div>
                </div>
                <div className={styles.innerBorder}> { line }</div>

                <div className={styles.phoneElements}>
                <div className={styles.phnoneNumberText}>{ phnoneNumberText }</div>
                <div className={styles.phoneNumber}>{ phoneNumber }</div>
                </div>
                <div className={styles.innerBorderTwo}> { lineTwo }</div>

                <div className={styles.emailElements}>
                <div className={styles.emailText}>{ emailText }</div>
                <div className={styles.email}>{ email }</div>
                </div>
                <div className={styles.innerBorderThree}> { lineThree }</div>
                
                <div className={styles.iconElements}>
                <img src={icon} className={styles.icon} alt="pencil"/> 
                <img src={iconTwo} className={styles.iconTwo} alt="trash"/> 
                </div>



            </div>
            );
};
          
    