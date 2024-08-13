import { Navigation } from "../../components/Navigation/Navigation";
import styles from "./Suppliers.module.css";
import { Header } from "../../components/Header/Header";
import { MainLayout } from "../../components/MainLayout/MainLayout";
import { SearchBtn } from "../../components/SearchBtn/SeacrhBtn";
// import { AddButton } from "../../components/AddButton/AddButton";
import { SupplierBoxes } from "../../components/SupplierBoxes/SupplierBoxes";
import { AddSuppliersButton } from "../../components/AddSuppliersButton/AddSuppliersButton";
export const Suppliers = () => {

        return (
                <div className={styles.suppliers}>

                        <Navigation />
                        <MainLayout>
                                <Header title="Suppliers" />
                                <div className={styles.twoBtn}>
                                        <SearchBtn title="Search Supplier" />

                                        <AddSuppliersButton title="SUPPLIERS" />
                                </div>

                                <SupplierBoxes />

                        </ MainLayout>
                </div>

        );
};