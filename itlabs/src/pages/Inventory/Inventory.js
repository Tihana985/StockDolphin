import { Link } from "react-router-dom";
import { Navigation } from "../../components/Navigation/Navigation";
import styles from "./Inventory.module.css";
import React, { useState } from 'react';
import { Modal } from "../../components/Modal/Modal";
import { Header } from "../../components/Header/Header";
import { MainLayout } from "../../components/MainLayout/MainLayout";
import { SearchBtn } from "../../components/SearchBtn/SeacrhBtn";
import { AddButton } from "../../components/AddButton/AddButton";
import { SideBtn } from "../../components/SideBtn/SideBtn";
import { InventoryCards } from "../../components/InventoryCards/InventoryCards";




export const Inventory = () => {


    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        console.log('Search term:', searchTerm);
    };



    return (
        <div className={styles.inventory}>
            <Navigation />

            <MainLayout>
                <Header title="Inventory" />
                <div className={styles.twoBtn}>
                    <SearchBtn title="Search Category" />

                    <AddButton title="CATEGORY" />
                </div>

                {/* Vtor del  */}
                {/* Da proveram tuka kopcinjata vo ovoj div da gi naredam ili podolu posebno - da otvoram za kopcinjata posebni componenti */}
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
                            <InventoryCards />
                        </div>

                    </div>

                    <div className={styles.rightPart}>
                        <SideBtn />
                    </div>

                </div>

            </MainLayout >
        </div>
    );
};

