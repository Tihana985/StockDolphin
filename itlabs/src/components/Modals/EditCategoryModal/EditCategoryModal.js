import styles from "./EditCategoryModal.module.css";
import { HeaderModal } from "../../HeaderModal/HeaderModal";

export const EditCategoryModal = ({ closeModal}) => {

    return(
        <div className={styles.editModal}>
        <div className={styles.modalForm}>
        <header className={styles.header}>
            <HeaderModal text="EDIT CATEGORY" />
            <button onClick={() => closeModal(false)} className={styles.buttonX} ><img src="/img/Multiply.png" alt="x" className={styles.imgX}/></button> 
        </header>
        <div className={styles.centralPart}>
            <div className={styles.name}>
                <label className={styles.label}>Computer </label>
                <hr />
            </div>

            <div className={styles.rectangle}>
                    <img src="/img/Rectangle 50.png" alt="add img" className={styles.img} />
            </div>
        </div>
        <div className={styles.twoBtn}>
        <button onClick={() => closeModal(false)} className={styles.cancelBtn}>CANCEL</button>
        <button onClick={() => closeModal(false)} className={styles.savechangesBtn}>SAVE CHANGES</button>
        </div>
    </div>   
        </div>
    )
}
