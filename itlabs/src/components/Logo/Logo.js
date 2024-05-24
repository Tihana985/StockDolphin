import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

export const Logo = () => {

    return (
        <Link to="/">
            <img src="\img\logo 1.png" alt="dolphinlogo" className={styles.logo} />

        </Link>
    );
};