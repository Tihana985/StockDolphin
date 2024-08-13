import styles from "./BtnList.module.css";
import { Link } from "react-router-dom";

export const BtnList = () => {

    return (
      
        <div className={styles.btnList}> 
        <Link to="/inventory/inventorysecondpage"> <img src="\img\List.png" alt="addnew" /></Link>
 </div> 
    );
}; 