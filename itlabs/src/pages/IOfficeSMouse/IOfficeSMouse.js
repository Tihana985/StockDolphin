import { Navigation } from '../../components/Navigation/Navigation';
import styles from './IOfficeSMouse.module.css';
import { MainLayout } from '../../components/MainLayout/MainLayout';
import { Header } from '../../components/Header/Header';
import { AddOrderButton } from '../../components/AddOrderButton/AddOrderButton';
import { GenerateInvoiceBtn } from '../../components/GenerateInvoiceBtn/GenerateInvoiceBtn';
import { useState } from 'react';
import { MoveItemModal } from '../../components/Modals/MoveItemModal/MoveItemModal';


export const IOfficeSMouse = () => {

    const [openModal, setOpenModal] = useState(false);

    return (
        <div className={styles.iOfficeSMousePage}>
            <Navigation />
            <MainLayout>
                <Header title="Inventory">

                    <div className={styles.titleSecond}>
                        <div className={styles.titleTwo}>
                            <img src="\img\Expand Arrow.png" alt="arrow" className={styles.arrow} />
                            <span className={styles.text}>Office Supplies</span>
                        </div>
                        <div className={styles.titleThree}>
                            <img src="\img\Expand Arrow.png" alt="arrow" className={styles.arrowTwo} />
                            <span className={styles.textTwo}>Mouse</span>
                        </div>
                    </div>
                </Header>

                <div className={styles.mainContentLayout}>

                    <div className={styles.upPart}>
                        <div className={styles.upperPart}>


                            <div className={styles.totalOrders}>
                                <label>Total Orders: </label>
                                <span>22</span>
                            </div>

                            <div className={styles.totalCost}>
                                <label>Total Cost: </label>
                                <span>€180.00</span>
                            </div>
                            <div className={styles.totalInvoices}>
                                <label>Total Invoices: </label>
                                <span>12</span>
                            </div>

                        </div>
                        <AddOrderButton />
                    </div>
                    {/* Vtor del */}
                    <div className={styles.twoParts}>
                        <div className={styles.leftPart}>

                            <div className={styles.topicAndButton}>
                                <span>Orders</span>
                                < GenerateInvoiceBtn />
                            </div>
                            <div className={styles.sumBox}>
                                <div className={styles.labelAndButton}>
                                <div className={styles.label}>
                                    <label>Quantity </label>
                                   <label> Total Price</label>
                                   <label> Price per unit</label>
                                   <label> Ordered at</label>
                                   <label> Supplier</label>  
                                </div>
                        <button><img src="\img\Descending Sorting.png" alt="img Descending Sorting"/></button>
                            
                                </div>
                                <hr />
                            </div>
                        </div>


                        <div className={styles.rightPart}>
                            <img src="\img\Recent Item 2 img (21).png" alt="Mouse" />
                            <span> Name: Mouse</span>

                            <div className={styles.btns}>
                                <button className={styles.imgBtn} onClick={() => { setOpenModal(true); }}> <img src="\img\Add Folder (1).png" alt="add folder" /></button>
                                {openModal && <MoveItemModal closeModal={setOpenModal} />}

                                <button className={styles.btnSave}>SAVE</button>
                            </div>
                        </div>
                    </div>
                </div>

            </MainLayout>
        </div>

    )
}