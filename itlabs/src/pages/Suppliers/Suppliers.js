import { Navigation } from "../../components/Navigation/Navigation";
import styles from "./Suppliers.module.css";
import { Header } from "../../components/Header/Header";
import { MainLayout } from "../../components/MainLayout/MainLayout";
// import { AddButton } from "../../components/AddButton/AddButton";
import { SupplierBoxes } from "../../components/SupplierBoxes/SupplierBoxes";
import { AddSuppliersButton } from "../../components/AddSuppliersButton/AddSuppliersButton";
import { SearchCategoryInput } from "../../components/SearchCategoryInput/SeacrhCategoryInput";
export const Suppliers = () => {

        return (
                <div className={styles.suppliers}>

                        <Navigation />
                        <MainLayout>
                                <Header title="Suppliers" />
                                <div className={styles.twoBtn}>
                                       <SearchCategoryInput placeholder="Search Suppliers" title="Search Suppliers"/>

                                        <AddSuppliersButton title="SUPPLIERS" />
                                </div>

                                <SupplierBoxes />

                        </ MainLayout>
                </div>

        );
};