import { AddSuppliersModal } from "../Modals/AddSuppliersModal/AddSuppliersModal";
import styles from "./AddSuppliersButton.module.css";
import { useState } from "react";


export const AddSuppliersButton = ({ title }) => {

    const [openModal, setOpenModal] = useState(false)

    return (
        <div className={styles.addbutton}>
            <img src="\img\Add New.png" alt="addnew" className={styles.imageaddcategory} />
            <button className={styles.title} onClick={() => {
                setOpenModal(true);
            }}
            >
                ADD {title}</button>
            {openModal && <AddSuppliersModal closeModal = {setOpenModal}/>}
        </div>
    );
};