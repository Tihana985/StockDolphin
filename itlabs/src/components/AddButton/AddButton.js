import { AddCategoryModal } from "../Modals/AddCategoryModal/AddCategoryModal";
import styles from "./AddButton.module.css";
import { useState } from "react";


export const AddButton = ({ title }) => {

    const [openModal, setOpenModal] = useState(false);

    return (
        <div className={styles.addbutton}>
            <img src="\img\Add New.png" alt="addnew" className={styles.imageaddcategory} />
            <button className={styles.title} onClick={() => {
                setOpenModal(true);
            }}
            >
                ADD {title}</button>
            {openModal && <AddCategoryModal closeModal={setOpenModal} />}
        </div>
    );
};