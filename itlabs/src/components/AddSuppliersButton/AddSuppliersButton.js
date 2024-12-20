import { AddSuppliersModal } from "../Modals/AddSuppliersModal/AddSuppliersModal";
import styles from "./AddSuppliersButton.module.css";
import { useState } from "react";


export const AddSuppliersButton = ({ title }) => {

    const [openModal, setOpenModal] = useState(false);

        const [supplierData, setSupplierData] = useState({ name: '' });
 
        const handleInputChange = (e) => {
          const { name, value } = e.target;
          setSupplierData((prevData) => ({
            ...prevData,
            [name]: value,
          }));
        };


    return (
        <div className={styles.addbutton}>
            <button className={styles.btn} onClick={() => {
                setOpenModal(true);
            }}
            > <img src="\img\Add New.png" alt="addnew" className={styles.imageaddcategory} />
                ADD {title}</button>
            {openModal && <AddSuppliersModal closeModal = {setOpenModal} 
            supplierData={supplierData}
            onChange={handleInputChange}/>}
        </div>
    );
};