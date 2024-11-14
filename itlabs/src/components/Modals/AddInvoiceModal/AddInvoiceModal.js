import styles from './AddInvoiceModal.module.css';

export const AddInvoiceModal = ({ closeModal }) => {

    return (
        <div className={styles.addImodal}>
            < div className={styles.modalForm}>
                <header className={styles.header}>
                    <label>ADD INVOICE</label>
                    <button onClick={() => closeModal(false)} className={styles.btnX}><img src="/img/Multiply.png" alt="x" /></button>
                </header>
                <div className={styles.centralPart}>
                    <div className={styles.name}>
                        <label className={styles.supplierlabel}>Invoice Name</label>
                        <hr className={styles.hr} />
                    </div>
                    <div className={styles.supplier}>
                    <div className={styles.twoParts}>
                        <label className={styles.labelTwo}>Supplier </label>
                        <img src="/img/Sort Down.png" alt="sort down" className={styles.img} />
                        </div>
                        <hr className={styles.supplierhr}/>
                    </div>
                </div>
                <div className={styles.buttonCalendar}>
                    <button className={styles.btnCalendar}> <img src="/img/Calendar.png" alt="calendar" className={styles.calendarImg}/> DD/MM/YY* </button>
                </div>
                <div className={styles.selectOrders}>Select Orders   <hr className={styles.hrselectOrders}/></div>

                <div className={styles.twoBtn}>
                    <button className={styles.cancelBtn} onClick={() =>
                        closeModal(false)}>
                        CANCEL </button>
                    <button className={styles.savechangesBtn} onClick={() => closeModal(false)}>ADD ORDER</button>
                </div>
            </div>

        </div>
    )
}
