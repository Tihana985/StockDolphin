import { Navigation } from "../../components/Navigation/Navigation";
import styles from "./Dashboard.module.css";
import { Header } from "../../components/Header/Header";
import { useState, useEffect } from "react";
import { MainLayout } from "../../components/MainLayout/MainLayout";
import { InventorySummary } from "../../components/sections/InventorySummary/InventorySummary";
import { RecentActivity } from "../../components/sections/RecentActivity/RecentActivity";
import { RecentOrders } from "../../components/sections/RecentOrders/RecentOrders";


export const Dashboard = () => {

    const [username, setUsername] = useState("");

    useEffect(() => {
        const storedUsername = localStorage.getItem("username");
        setUsername(storedUsername);
    }, []);


    return (
        <div className={styles.dashboard}>

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
                    <RecentOrders />

                </div>
            </MainLayout>

        </div>
    );
};

