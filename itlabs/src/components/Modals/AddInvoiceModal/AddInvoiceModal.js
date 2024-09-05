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
                            <label>Invoice Name</label>
                            <img src="/img/Sort Down.png" alt="sort down" />
                            <hr />
                            </div>
                            <div className={styles.supplier}>
                                <label>Supplier </label>
                                <hr />
                            </div>
                       
                    
                </div>
                <div className={styles.buttonCalendar}>
                    <button> <img src="/img/Calendar.png" alt="calendar" /> DD/MM/YY* </button>
                </div>
                <div className={styles.selectOrders}>Select Orders   <hr /></div>
              
                <div className={styles.twoBtn}>
                    <button className={styles.btnCancel} onClick={() =>
                        closeModal(false)}>
                        CANCEL </button>
                    <button className={styles.btnaddCategory} onClick={() => closeModal(false)}>ADD ORDER</button>
                </div>
            </div>

        </div>
    )
}
