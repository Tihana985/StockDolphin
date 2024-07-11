import styles from "./AddButton.module.css";

export const AddButton = ({ title }) => {

    return (
        <div className={styles.addbutton}>
            <img src="\img\Add New.png" alt="addnew" className={styles.imageaddcategory} />
            <span className={styles.text}>ADD { title } </span>
        </div>

    );
};