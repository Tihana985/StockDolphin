import styles from "./InventorySummary.module.css";
import { Navigation } from "../../components/Navigation/Navigation";
import { Header } from "../../components/Header/Header";

export const InventorySummary = () => {

    return (


        <div className={styles.inventorysummary}>
            <Navigation />
            
            <div className={styles.headeris}>
                <Header title="Reports" />

                <img src="\img\Expand Arrow.png" className={styles.imgarrow} alt="arrow)" /><p className={styles.textis2}>Inventory Summary </p>
            </div>


            <div className={styles.fourbtn}>

                <div className={styles.firstbtn}>
                    <button className={styles.dateform}><img src="\img\Calendar.png" className={styles.calendar} alt="calendar" /> <p className={styles.p1}>Date Form</p></button>
                </div>

                <div className={styles.secondtbtn}>
                    <button className={styles.dateto}><img src="\img\Calendar.png" className={styles.calendar2} alt="calendar" /> <p className={styles.p2}>Date To</p></button>
                </div>

                <div className={styles.thirdbtn}>
                    <button className={styles.allcategories}><img src="\img\Calendar.png" className={styles.calendar3} alt="calendar" /> <p className={styles.p3}>All Categories</p></button>
                </div>

                <div className={styles.fourthbtn}>
                    <button className={styles.show}>SHOW</button>
                </div>

            </div>

            <div className={styles.linechart}>
                <img src="\img\Line chart.png" className={styles.imglinechart} alt="linechart" />



            </div>



        </div>
    );
};