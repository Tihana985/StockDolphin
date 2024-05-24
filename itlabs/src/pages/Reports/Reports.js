import { Link } from "react-router-dom";
import { Navigation } from "../../components/Navigation/Navigation";
import styles from "./Reports.module.css";
import { Header } from "../../components/Header/Header";



export const Reports = () => {

    return (
    
            <div className={styles.reports}>
                <Navigation />

                <div className={styles.headerreports}>
                    <Header title="Reports" />
                </div>

                {/* Vtor del */}

                <div className={styles.acitivityhistorybox}>


                    <div className={styles.acitivityhistoryboximg}>
                        <img src="\img\Time Machine.png" alt="timemachine" /> 
                        </div>
                    
                    <Link to="activityhistory" className={styles.textah}>Activity History</Link> 
               
                   
                    <p className={styles.seacrhac}>Activity history helps keep track of the things you do with your items, categories, tags, etc., such as creating, editing or deleting </p> 
                    </div>
                
                {/* Tret del */}

                < div className={styles.inventorysummarybox}>


                    <div className={styles.inventorysummaryboximg}>
                        <img src="\img\Product (1).png" alt="product1img" />
                    </div>
                   <Link to="inventorysummary" className={styles.textis}>Inventory Summary </Link>
 
                   <p className={styles.seacrhis}>Inventory Summary provides detailed visualizations about the total cost of the categories over a period of time.</p>
                </div>


</div>
          
    

    );
};