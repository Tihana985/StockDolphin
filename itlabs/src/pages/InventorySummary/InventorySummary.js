import styles from "./InventorySummary.module.css";
import { Navigation } from "../../components/Navigation/Navigation";
import { Header } from "../../components/Header/Header";
import { MainLayout } from "../../components/MainLayout/MainLayout";


export const InventorySummary = () => {

    return (

        <div className={styles.inventorysummary}>
            <Navigation />
            <MainLayout>
                <Header title="Reports">
                    <div className={styles.titleTwo}>
                        <img src="\img\Expand Arrow.png" alt="arrow" className={styles.arrow} />
                        <span className={styles.text}>Inventory Summary</span>
                    </div>
                </Header>

                {/* Vtor del kopcinja */}

                <div className={styles.fourbtn}>
                    <div className={styles.leftPart}>
                        <button className={styles.btn}>
                            <img src="\img\Calendar.png" alt="calendar" />
                            <span>Date From</span>
                        </button>
                        <button className={styles.btnTwo}>
                            <img src="\img\Calendar.png" alt="calendar" />
                            <span>Date To</span>
                        </button>
                        <button className={styles.btnThree}>
                            <img src="\img\Calendar.png" alt="calendar" />
                            <span>All Categories</span>

                        </button>
                    </div>
                    <button className={styles.btnShow}> SHOW </button>

                </div>

                <div className={styles.linechart}>
                    <img src="\img\Line chart.png" className={styles.imglinechart} alt="linechart" />

                </div>

            </MainLayout>

        </div>
    );
};