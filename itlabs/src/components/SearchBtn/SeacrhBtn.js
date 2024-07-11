import styles from "./SeacrhBtn.module.css";

export const SearchBtn = ({title}) => {

    return(
        <div className={styles.inputsearchcontainer}>

        <img src="/img/Search.png" alt="search" className={styles.imgInput} />
        <span className={styles.text}>{ title } </span>
        </div>
    )
}