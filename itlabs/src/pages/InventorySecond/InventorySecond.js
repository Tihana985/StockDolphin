import { Navigation } from "../../components/Navigation/Navigation";
import styles from "./InventorySecond.module.css";
import { Header } from "../../components/Header/Header";
import { AddButton } from "../../components/AddButton/AddButton";
import { MainLayout } from "../../components/MainLayout/MainLayout";
import { SideBtn } from "../../components/SideBtn/SideBtn";
import { InventoryCardsSecond } from "../../components/InventoryCardsSecond/InventoryCardsSecond";
import { SearchCategoryInput } from "../../components/SearchCategoryInput/SeacrhCategoryInput";

export const InventorySecond = () => {
    return (
        <div className={styles.inventorysecond}>
            <Navigation />

            <MainLayout>

                <Header title="Inventory" />


                <div className={styles.twoBtn}>
                    <SearchCategoryInput placeholder="Search Category" title="Search Category"/>
                    <AddButton title="CATEGORY" />
                 
                </div>

                {/* Vtor del  */}

                <div className={styles.secondPart}>

                    <div className={styles.leftPart}>

                        <div className={styles.fourparagraphs}>
                            <div className={styles.catgoriesnumber}>
                                <span>Categories:</span><span>4</span>
                            </div>

                            <div className={styles.itemsnumber}>
                                <span>Items:</span><span>11</span>
                            </div>


                            <div className={styles.ordersnumber}>
                                <span>Total Orders:</span><span>25</span>
                            </div>

                            <div className={styles.totalcostnumber}>
                                <span>Total Cost: </span><span> €1.250k</span>
                            </div>
                        </div>

                        <div className={styles.inventoryPart}>
                            <InventoryCardsSecond />
                        </div>

                    </div>

                    <div className={styles.rightPart}>
                        <SideBtn />
                    </div>
                </div>
            </MainLayout>
        </div>

    );
};