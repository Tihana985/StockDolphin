import styles from "./Header.module.css";

export const Header = ({ title, children }) => {
    return (
        <div className={styles.header}>
            <h1 className={styles.titleheader}> {title} </h1>
            { children }
        </div>
    )

}