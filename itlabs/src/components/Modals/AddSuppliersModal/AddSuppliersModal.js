import styles from './AddSuppliersModal.module.css';
import { HeaderModal } from '../../HeaderModal/HeaderModal';
import { useState } from 'react';
import { DiscardModal } from '../DisccardModal/DiscardModal';


export const AddSuppliersModal = ({ closeModal, supplierData = {}, onChange, }) => {

const [openModal, setOpenModal]=useState(false);

    return (
        <div className={styles.addItemModal}>
            <div className={styles.modalForm}>
                <header className={styles.header}>
                    <HeaderModal text="SUPPLIERS" />
                    <button onClick={() => closeModal(false)} className={styles.buttonX}><img src="/img/Multiply.png" alt="x" /></button>
                </header>
                <div className={styles.centralPart}>
                    <div className={styles.name}>
                        <input
                        placeholder='Name*'
                        type='text'
                        name='name'
                        value={supplierData.name || ''}
                        className={styles.label} 
                        onChange={onChange}
                        required />
                        <hr />
                    </div>

                    <div className={styles.rectangle}>
                        <div className={styles.insideBox}>
                            <img src="/img/Add image.png" alt="add img" className={styles.img} />
                            <label className={styles.addPhoto}>(Add Photo, 2MB Total)</label>
                        </div>
                    </div>
                </div>
                <div className={styles.twoBtn}>
                <button className={styles.btnCancel} onClick={() => {
                    setOpenModal(true);
                }}> CANCEL </button>
                {openModal && <DiscardModal closeModal={setOpenModal} />}
                <button className={styles.btnaddItem}>ADD ITEM</button>
                </div>
            </div>

        </div>
    )
} 