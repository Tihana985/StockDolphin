import { AddItemModal } from "../Modals/AddItemModal/AddItemModal";
import styles from "./AddItemButton.module.css";
import { useState } from "react";


export const AddItemButton = ({ title }) => {

    const [openModal, setOpenModal] = useState(false)

    return (
        <div className={styles.addbutton}>
            <button className={styles.addItemButton} onClick={() => { setOpenModal(true); }}>
                <img src="\img\Add New.png" alt="addnew" className={styles.imageaddcategory} />
                ADD {title}</button>
            {openModal && <AddItemModal closeModal = {setOpenModal}/>}
        </div>
    );
};