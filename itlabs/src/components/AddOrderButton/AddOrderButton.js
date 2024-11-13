import { AddOrderModal } from "../Modals/AddOrderModal/AddOrderModal";
import styles from "./AddOrderButton.module.css";
import { useState } from "react";

export const AddOrderButton = () => {

    const [openModal, setOpenModal] = useState(false);

    return (
        <div className={styles.addOrderButton}>

            <button className={styles.button} onClick={() => {
                setOpenModal(true);
            }}
            >  <img src="\img\Add New.png" alt="addnew" className={styles.imageaddcategory} />
                ADD ORDER </button>
            {openModal && <AddOrderModal closeModal={setOpenModal} />}
        </div>
    )
}