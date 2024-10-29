import styles from "./SideBtn.module.css";
import { BtnFLink } from "../BtnFLink/BtnFLink";
import { BtnList } from "../BtnList/BtnList";


export const SideBtn = ({ view, setView }) => {

    return (
        <div className={styles.sideBtn}>
            <BtnFLink view={view} setView={setView} />       
            <BtnList view={view} setView={setView} />
        </div>
    )
}