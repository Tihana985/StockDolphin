import styles from "./BtnFLink.module.css";
import { Link } from "react-router-dom";

export const BtnFLink = () => {

    return (
      
      <div className={styles.btnLink}>  
        <Link to="inventorysecondpage" >  <img src="\img\Control Panel.png" alt="addnew" /> </Link>
 </div> 
    );
};

