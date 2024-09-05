import styles from "./MoveModalBox.module.css";

export const MoveModalBox =( {img, label}) => {

    return(
        <div className={styles.moveMoodalBox}>

<img src={img} className={styles.imgFolder} alt="img folder" />
<div className={styles.label}> {label}</div> 
        </div>
    )
}