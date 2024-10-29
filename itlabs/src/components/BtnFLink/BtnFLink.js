import styles from "./BtnFLink.module.css";

export const BtnFLink = ({ view, setView }) => {
    return (
      <div className={styles.btnLink}>  
        <button className={view==='grid' ? styles.btnLinkActive : ''} onClick={(e) => { e.preventDefault(); setView('grid'); }}><img src="\img\Control Panel.png" alt="addnew" /></button>
      </div> 
    );
};

