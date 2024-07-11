import { Link } from "react-router-dom";
import { Navigation } from "../../components/Navigation/Navigation";
import styles from "./Reports.module.css";
import { Header } from "../../components/Header/Header";
import { MainLayout } from "../../components/MainLayout/MainLayout";



export const Reports = () => {

    return (

        <div className={styles.reports}>
            <Navigation />
            <MainLayout>

                <Header title="Reports" />


                {/* Vtor del */}


                <div className={styles.imgTitle}>

                    <img src="\img\Time Machine.png" alt="timemachine" className={styles.imgAc} />


                    <Link to="activityhistory" className={styles.textah}>Activity History</Link>

                </div>
                <p className={styles.seacrhac}>Activity history helps keep track of the things you do with your items, categories, tags, etc., such as creating, editing or deleting </p>


                {/* Tret del */}

                    <div className={styles.imgTitleTwo}>
                        <img src="\img\Product (1).png" alt="product1img" />
                   
                    <Link to="inventorysummary" className={styles.textis}>Inventory Summary </Link>
                    </div>
                    <p className={styles.seacrhis}>Inventory Summary provides detailed visualizations about the total cost of the categories over a period of time.</p>
              
            </MainLayout>

        </div>



    );
};