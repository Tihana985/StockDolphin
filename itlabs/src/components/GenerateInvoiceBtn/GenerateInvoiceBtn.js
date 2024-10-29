import { AddInvoiceModal } from '../Modals/AddInvoiceModal/AddInvoiceModal';
import styles from './GenerateInvoiceBtn.module.css';
import { useState } from 'react';


export const GenerateInvoiceBtn =() => {
    
    const [ openModal, setOpenModal] =useState(false);

    return(

        <div className={styles.gnrtIBtn}>
            <button className={styles.generateInvoiceButton} onClick={() =>{ setOpenModal(true);
            }}> Generate Invoice</button>
            {openModal && <AddInvoiceModal closeModal={setOpenModal} />}
        </div>
    )
}