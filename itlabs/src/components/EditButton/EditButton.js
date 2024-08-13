import styles from "./EditButton.module.css";
import { EditCategoryModal } from "../Modals/EditCategoryModal/EditCategoryModal";
import { useState } from "react";



export const EditButton = () => {

  const [ openModal, setOpenModal] = useState (false) ;

    return (
        <div className={styles.editButton}>
            <img src="/img/Edit.png" alt="pencil" />
            <button className={styles.title} onClick={() => {
                setOpenModal(true); 
            }}
            > 
            Edit Category</button>
            {openModal && <EditCategoryModal closeModal={setOpenModal} />}
        </div>
    )
}