import styles from "./SearchCategoryInput.module.css";

export const SearchCategoryInput = ({ placeholder = 'Search', title }) => {

    return(
        <div className={styles.inputsearchcontainer}>

        <img src="/img/Search.png" alt="search" className={styles.imgInput} />
        <input   type="text"
         className={styles.text}
         style={{ color: 'black' }}
         placeholder={placeholder}
        aria-label={title}
       />
        </div>
    )
}