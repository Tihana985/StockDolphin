import { Navigation } from "../../components/Navigation/Navigation";
import styles from "./InventoryOfficeSuppliesFirst.module.css";
import { Header } from "../../components/Header/Header";
import { MainLayout } from "../../components/MainLayout/MainLayout";
import { SearchBtn } from "../../components/SearchBtn/SeacrhBtn";
import { AddButton } from "../../components/AddButton/AddButton";
import { SideBtn } from "../../components/SideBtn/SideBtn";
import { OfficeSuppliesCards } from "../../components/OfficeSuppliesCards/OfficeSuppliesCards";


export const InventoryOfficeSuppliesFirst = () => {

    return (
        <div className={styles.inventoryOfficeSuppliesFirst}>
            <Navigation />
            <MainLayout>
                <Header title="Inventory">
                    <div className={styles.titleTwo}>
                        <img src="\img\Expand Arrow.png" alt="arrow" className={styles.arrow} />
                        <span className={styles.text}>Office Supplies</span>
                    </div>
                </Header>

                <div className={styles.twoBtn}>
                    <SearchBtn title="Search Category" />

                    <AddButton title="ITEM" className={styles.addItem} />
                </div>

                <div className={styles.twoParts}> 

                <div className={styles.cardsPart}>
                    <OfficeSuppliesCards />
                </div>

                <div className={styles.rightPart}>
                    <SideBtn />
                </div>
                </div>
            </MainLayout>

        </div>

    )
}