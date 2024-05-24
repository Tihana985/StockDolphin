import { NavLink } from "react-router-dom";
import styles from "./NavItem.module.css";

export const NavItem = ({ routeName, label, icon }) => {
    return (
        <NavLink to={routeName} className={styles.navLink}>
            { icon && <img src={"/img/icons/navigation/" + icon} alt={label} /> }
            { label && label }
        </NavLink>
    )
}