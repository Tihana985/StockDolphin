import { Logo } from "../Logo/Logo";
import { useNavigate } from "react-router-dom"
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

    const navigate = useNavigate()

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
                <button onClick={() => {
                    localStorage.removeItem('token')
                    localStorage.removeItem('username')
                    localStorage.removeItem('isSubmit')
                    navigate("/")
                }}>Sign Out</button>
            </div>

        </nav>
    );
};