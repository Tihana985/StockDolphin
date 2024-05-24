import { Navigation } from "../../components/Navigation/Navigation";
import styles from "./Category.module.css";

export const Category = () => {

    return (
        <div className={styles.category}>
            <Navigation />

            <div className={styles.header}>
                <h1 className={styles.textinventoryos}>Inventory<img src="\img\Expand Arrow.png" className={styles.imgarrow} alt="arrow" /><p className={styles.textos2}>Office Supplies </p></h1>
            </div>

            <div className={styles.inputsearchcontaineros}>

                <div className={styles.searchicon}><img src="/img/Search.png" alt="search" /></div>

                <input type="text" placeholder="Search Items" className={styles.insidesearch} />
            </div>


            <div className={styles.buttonadditem}>
                <div className={styles.imageadditem}><img src="\img\Add New.png" alt="addnew" /></div>

                <button className={styles.additem}><span className={styles.text}>ADD ITEM</span></button>
            </div>

            {/* Od strana kopcinja -2 */}

            <div className={styles.controlpanel1}>
                <div className={styles.imgcontrolpanel1}><img src="\img\Control Panel.png" alt="control panel" /></div>

                <button className={styles.buttoncontrolpanel1}></button>
            </div>

            <div className={styles.list1}>
                <div className={styles.imglist1}><img src="\img\List.png" alt="list" /></div>

                <button className={styles.buttonlis1t}></button>
            </div>



        </div>

    );
};