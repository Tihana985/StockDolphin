import { HeaderModal } from "../../HeaderModal/HeaderModal";
import { DiscardModal } from "../DisccardModal/DiscardModal";
import styles from "./AddCategoryModal.module.css";
import { useState } from "react";

export const AddCategoryModal = ({ closeModal }) => {

    const [openModal, setOpenModal] =useState(false);

    return (

        <div className={styles.addcategoryModal}>

            <div className={styles.modalForm}>
                <header className={styles.header}>
                    <HeaderModal text="CATEGORY" />
                    <button onClick={() => closeModal(false)} className={styles.buttonX}><img src="/img/Multiply.png" alt="x" /></button>
                </header>
                <div className={styles.centralPart}>
                    <div className={styles.name}>
                        <label className={styles.label}>Name *</label>
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
                    <button className={styles.btnaddCategory}>ADD CATEGORY</button>
                </div>
            </div>
        </div>
    )
};
