import styles from "./BtnList.module.css";

export const BtnList = ({ view, setView }) => {
    return (
        <div className={styles.btnList}> 
            <button className={view==='list' ? styles.btnListActive : ''} onClick={(e) => { e.preventDefault(); setView('list'); }}> <img src="\img\List.png" alt="addnew" /></button>
        </div> 
    );
}; 