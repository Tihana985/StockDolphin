import styles from "./AddOrderModal.module.css";
import { HeaderModal } from "../../HeaderModal/HeaderModal";


export const AddOrderModal = ({ closeModal }) => {


    return (
        <div className={styles.addOrderModal}>
            < div className={styles.modalForm}>
                <header className={styles.header}>
                    <HeaderModal text=" ADD ORDER" />
                    <button onClick={() => closeModal(false)} className={styles.buttonX}><img src="/img/Multiply.png" alt="x" /></button>
                </header>
                <div className={styles.centralPart}>
                    <div className={styles.supplier}>
                        <label>Supplier *</label>
                        <hr />
                        <div className={styles.quantity}>
                            <label>Quantity *</label>
                            <hr />
                            <div className={styles.tprice}>
                                <label>Total Price *</label>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.buttonCalendar}>
                    <button> <img src="/img/Calendar.png" alt="calendar" /> DD/MM/YY* </button>
                </div>



                <div className={styles.twoBtn}>
                    <button className={styles.btnCancel} onClick={() =>
                        closeModal(false)}>
                        CANCEL </button>
                    {/* {openModal && <DiscardModal closeModal={setOpenModal} />} */}
                    <button className={styles.btnaddCategory} onClick={() => closeModal(false)}>ADD ORDER</button>
                </div>
            </div>
        </div>
    )
}