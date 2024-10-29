import { useEffect, useState } from "react";
import { Navigation } from "../../components/Navigation/Navigation";
import styles from "./Suppliers.module.css";
import { Header } from "../../components/Header/Header";
import { MainLayout } from "../../components/MainLayout/MainLayout";
// import { AddButton } from "../../components/AddButton/AddButton";
import { SupplierBoxes } from "../../components/SupplierBoxes/SupplierBoxes";
import { AddSuppliersButton } from "../../components/AddSuppliersButton/AddSuppliersButton";
import { SearchCategoryInput } from "../../components/SearchCategoryInput/SeacrhCategoryInput";
export const Suppliers = () => {

		const [ search, setSearch ] = useState(null)
        const [ suppliers, setSuppliers] = useState([])
		const [ filteredSuppliers, setFilteredSuppliers ] = useState([])

        useEffect (() => {
			fetchSuppliers();
        }, [])

		useEffect(() => {
			if(search && search.length > 2){
				const searchSuppliers = suppliers.filter((supplier, index) => {
					return supplier.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
				})
				setFilteredSuppliers(searchSuppliers)
			}else{
				setFilteredSuppliers(suppliers)
			}
		}, [search])

        const fetchSuppliers = async () => {
			try {
				const response = await fetch("http://localhost:10001/suppliers", {
					headers: {
						Authorization: `Bearer ${localStorage.getItem("token")}`,
					},
				});
				console.log("Response:", response);

				const suppliersData = await response.json();

				if (response.ok) {
					console.log("API Response for suppliers:", suppliersData);
					setSuppliers(suppliersData.data)
					setFilteredSuppliers(suppliersData.data)
				} else {
					console.log("Error - suppliers");
				}
			} catch (err) {
				console.log("Error fetching suppliers", err);
			} 
        };

        return (
			<div className={styles.suppliers}>
				<Navigation />
				<MainLayout>
					<Header title="Suppliers" />
					<div className={styles.twoBtn}>
						<SearchCategoryInput onChange={(e) => { setSearch(e.target.value) }} placeholder="Search Suppliers" title="Search Suppliers"/>
						<AddSuppliersButton title="SUPPLIERS" />
					</div>
					<SupplierBoxes suppliers={filteredSuppliers} />
				</ MainLayout>
			</div>
        );
};