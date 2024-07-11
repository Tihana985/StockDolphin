import styles from "./ActivityHistory.module.css";
import { Navigation } from "../../components/Navigation/Navigation";
import { MainLayout } from "../../components/MainLayout/MainLayout";
import { Header } from "../../components/Header/Header";
import { AhistoryParagraphs } from "../../components/AhistoryParagraphs/AhistoryParagraphs";

export const ActivityHistory = () => {

    return (

        <div className={styles.acivityhistory}>
            <Navigation />
            <MainLayout>
                <Header title="Reports">
                    <div className={styles.titleTwo}>
                        <img src="\img\Expand Arrow.png" alt="arrow" className={styles.arrow} />
                        <span className={styles.text}>Activity History</span>
                    </div>
                </Header>

                <div className={styles.mainDiv}>
                    <div className={styles.twoParts}>
                        <div className={styles.leftPart}>
                            <div className={styles.button}> <img src="\img\Descending Sorting.png" alt="button" /></div>
                            <AhistoryParagraphs className={styles.paragrephs} />
                        </div>
                    </div>

                    <div className={styles.filterBox}>
                        <div className={styles.filterBoxinside}>
                            <h3>Filter Activities</h3>
                            <div className={styles.filterBoxinsideBody}>

                                <input type="radio" name="all Activity" value="1" className={styles.radio1}/>All Acitivity<br />
                                <input type="radio" name="all Activity" value="2" className={styles.radio2}/>Moved<br />
                                <input type="radio" name="all Activity" value="3" className={styles.radio3}/>Edited<br />
                                <input type="radio" name="all Activity" value="4" className={styles.radio4}/>Deleted<br />
                                <input type="radio" name="all Activity" value="5" className={styles.radio5}/>Created<br />
                                <input type="radio" name="all Activity" value="6" className={styles.radio6}/>Odrered<br />
                            </div>
                        </div>
                    </div>
                </div>

            </MainLayout>

        </div>

    );
};