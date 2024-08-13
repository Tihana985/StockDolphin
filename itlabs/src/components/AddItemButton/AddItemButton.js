import { AddItemModal } from "../Modals/AddItemModal/AddItemModal";
import styles from "./AddItemButton.module.css";
import { useState } from "react";


export const AddItemButton = ({ title }) => {

    const [openModal, setOpenModal] = useState(false)

    return (
        <div className={styles.addbutton}>
            <img src="\img\Add New.png" alt="addnew" className={styles.imageaddcategory} />
            <button className={styles.title} onClick={() => {
                setOpenModal(true);
            }}
            >
                ADD {title}</button>
            {openModal && <AddItemModal closeModal = {setOpenModal}/>}
        </div>
    );
};