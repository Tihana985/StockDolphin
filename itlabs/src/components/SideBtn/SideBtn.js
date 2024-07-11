import styles from "./SideBtn.module.css";
import { BtnFLink } from "../BtnFLink/BtnFLink";
import { BtnList } from "../BtnList/BtnList";


export const SideBtn = () => {

    return (
        <div className={styles.sideBtn}>
            <BtnFLink />       
            <BtnList />

        </div>
    )
}