import { AddCategoryModal } from "../Modals/AddCategoryModal/AddCategoryModal";
import styles from "./AddButton.module.css";
import { useState } from "react";


export const AddButton = ({ title }) => {

    const [openModal, setOpenModal] = useState(false);

    return (
        <div className={styles.addbutton}> 
            <button className={styles.btn} onClick={() => {
                setOpenModal(true);
            }}
            > <img src="\img\Add New.png" alt="addnew" className={styles.imageaddcategory} />
                ADD {title}</button>
            {openModal && <AddCategoryModal closeModal={setOpenModal} />}
        </div>
    );
};