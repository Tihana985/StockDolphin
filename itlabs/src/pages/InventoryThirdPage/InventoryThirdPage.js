import { Header } from "../../components/Header/Header";
import { MainLayout } from "../../components/MainLayout/MainLayout";
import { Navigation } from "../../components/Navigation/Navigation";
import styles from "./InventoryThirdPage.module.css";
import { SearchCategoryInput } from "../../components/SearchCategoryInput/SeacrhCategoryInput";
import { AddButton } from "../../components/AddButton/AddButton";
import { SideBtn } from "../../components/SideBtn/SideBtn";
import { EditButton } from "../../components/EditButton/EditButton";
import { InventoryCardsThird } from "../../components/InventoryCardsThird/InventoryCardsThird";


export const InventoryThirdPage = () => {

    return (
        <div className={styles.inventoryThirdPage}>
            <Navigation />

            <MainLayout >
            <Header title="Inventory">
                <div className={styles.titleTwo}>
                    <img src="\img\Expand Arrow.png" alt="arrow" className={styles.arrow} />
                    <span className={styles.text}>Office Supplies</span>
                </div>
            </Header>

            <div className={styles.twoBtn}>
                <SearchCategoryInput placeholder="Search Category" title="Search Category" />
                <AddButton title="CATEGORY" />
            </div>

            <div className={styles.twoParts}>
            <div className={styles.leftPart}>
                <InventoryCardsThird />
            </div>
            
            
            <div className={styles.rightPart}>
                <SideBtn />
            </div>
            </div>
            <div className={styles.editBtn}><EditButton /> </div>
            </MainLayout>
        </div>
    )
};