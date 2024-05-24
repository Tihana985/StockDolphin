import { Logo } from "../Logo/Logo";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

import { NavItem } from "./NavItem";

const menuItems = [
    {
        label: 'Dashboard',
        routeName: '/',
        icon: 'Dashboard Layout.png'
    },
    {
        label: 'Inventory',
        routeName: '/inventory',
        icon: 'ProductIcon.png'
    },
    {
        label: 'Reports',
        routeName: '/reports',
        icon: 'Combo Chart.png'
    },
    {
        label: 'Suppliers',
        routeName: '/suppliers',
        icon: null
    }
]

export const Navigation = () => {

    return (
        <nav className={styles.nav}>

            <div>
                <Logo />
                <ul>
                    { menuItems.map((menuItem, index) => {
                        return <li><NavItem key={index} label={menuItem.label} routeName={menuItem.routeName} icon={menuItem.icon} /></li>
                    }) }
                </ul>
            </div>

            <div>
                <NavItem label="Sign Out" routeName="/signout" icon="Shutdown.png" />
            </div>

        </nav>
    );
};