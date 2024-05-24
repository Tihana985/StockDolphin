import { Navigation } from "../../components/Navigation/Navigation";
import styles from "./Dashboard.module.css";
import { Header } from "../../components/Header/Header";
import { useState, useEffect } from "react";
import { MainLayout } from "../../components/MainLayout/MainLayout";
import { InventorySummary } from "../../components/sections/InventorySummary/InventorySummary";
import { RecentActivity } from "../../components/sections/RecentActivity/RecentActivity";


export const Dashboard = () => {

    const [username, setUsername] = useState("");

    useEffect(() => {
        const storedUsername = localStorage.getItem("username");
        setUsername(storedUsername);
    }, []);


    return (
        <div className={styles.Dashboard}>

            <Navigation />

            <MainLayout>
                <Header title="Dashboard">
                    <div className={styles.userpart}>
                        Welcome back {username}!
                        <img src="\img\User.png" alt="user" />
                    </div>
                </Header>

                <div className={styles.mainContentLayout}>

                    {/* Prv del */}
                    <InventorySummary />

                    {/* Vtor del - Recent activity */}
                    <RecentActivity />
                    
                    {/* Tret del - Recent Orders */}
                    <div className={styles.orders}>
                        <div className={styles.h2orders}>
                            <h2>Recent Orders</h2>
                        </div>
                        <div className={styles.boxorders}>
                            <div className={styles.insidebox}>

                                <div className={styles.firstcardbox}>
                                    <div className={styles.recentitems2img}>
                                        <img src="\img\Recent item 2 img.png" alt="recentitems2" /></div>
                                    <div className={styles.heading1}>
                                        <p>Office Mouse</p>
                                    </div>
                                    <div className={styles.heading2}>
                                        <p>7 Unit | € 133.00</p>
                                    </div>
                                </div>

                                <div className={styles.secondcardbox}>
                                    <div className={styles.recentitemssecondimg}>
                                        <img src="\img\Recent item 2 img (7).png" alt="recentitems2(7)" /></div>
                                    <div className={styles.p1}>
                                        <p>A4 Paper</p>
                                    </div>
                                    <div className={styles.p2}>
                                        <p>917 Unit | € 28.00</p>
                                    </div>
                                </div>

                                <div className={styles.thirdcardbox}>
                                    <div className={styles.recentitems3img}>
                                        <img src="\img\Recent item 2 img (3).png" alt="recentitems2(3)" /></div>
                                    <div className={styles.p3}>
                                        <p>Espresso</p>
                                    </div>
                                    <div className={styles.p4}>
                                        <p>3 Unit | € 22.00</p>
                                    </div>
                                </div>

                                <div className={styles.fourthcardbox}>
                                    <div className={styles.recentitems4img}>
                                        <img src="\img\Recent item 2 img (5).png" alt="recentitems2(4)" /></div>
                                    <div className={styles.p5}>
                                        <p>Office Pens</p>
                                    </div>
                                    <div className={styles.p6}>
                                        <p>66 Unit | € 17.00</p>
                                    </div>
                                </div>

                                {/* Strelka */}

                                <div className={styles.arrow}>
                                    <img src="\img\Expand Arrow.png" alt="arrow)" />
                                </div>


                                <div className={styles.pagination}>
                                    <p><b>...</b></p>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </MainLayout>

        </div>
    );
};

