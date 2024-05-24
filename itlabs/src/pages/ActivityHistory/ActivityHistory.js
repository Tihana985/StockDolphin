import styles from "./ActivityHistory.module.css";
import { Navigation } from "../../components/Navigation/Navigation";

export const ActivityHistory = () => {

    return (

        <div className={styles.acivityhistory}>
            <Navigation />
            <div className={styles.headerah}>
                <h1 className={styles.textah}><div className={styles.textrah}>Reports  <img src="\img\Expand Arrow.png" className={styles.imgarrow} alt="arrow)" /><p className={styles.textah2}>Activity History </p> </div></h1>
            </div>

            <div className={styles.buttonimg}>
                <button className={styles.imgbutton}> <img src="\img\Descending Sorting.png" className={styles.imgdessort} alt="descendingsortingimg" /></button>
            </div>

            {/* Tret del kutija admin */}
            <div className={styles.adminbox}>
                <div className={styles.firstp}><p className={styles.text1}>Admin has created item <b>Office Pens</b> in <b>Office Supply (Office Categories)</b></p> <p className={styles.text2}>10/10/2023 20:30 </p>
                </div>


                <div className={styles.secondp}><p className={styles.text3}>Admin has created item <b>A4 Paper</b> in <b>Office Supply (Office Categories)</b></p> <p className={styles.text4}>10/10/2023 20:30</p>
                </div>

                <div className={styles.thirdp}><p className={styles.text5}>Admin has deleted item Espresso in Kitchen Supply (Kitchen Categories) </p><p className={styles.text6}>10/10/2023 20:30</p>
                </div>

                <div className={styles.fourthp}><p className={styles.text7}>Admin has moved item <b>Mouse</b> in <b>Office Supply (Office Categories)</b></p><p className={styles.text8}>10/10/2023 20:30</p>
                </div>

                <div className={styles.fiftthp}><p className={styles.text9}>Admin has created item <b>Office Pens</b> in <b>Office Supply (Office Categories)</b></p><p className={styles.text10}>10/10/2023 20:30</p>
                </div>

                <div className={styles.sixthp}><p className={styles.text11}>Admin has created item <b>A4 Paper</b> in <b>Office Supply (Office Categories)</b></p><p className={styles.text12}>10/10/2023 20:30</p>
                </div>

                <div className={styles.seventhp}><p className={styles.text13}>Admin has deleted item <b>Espresso </b> in <b>Kitchen Supply (Kitchen Categories)</b></p><p className={styles.text14}>10/10/2023 20:30</p>
                </div>

                <div className={styles.eighthp}><p className={styles.text15}>Admin has moved item <b>Mouse</b> in <b>Office Supply (Office Categories)</b></p><p className={styles.text16}>10/10/2023 20:30</p>
                </div>

                <div className={styles.ninthp}><p className={styles.text17}>Admin has created item <b>Office Pens</b> in <b>Office Supply (Office Categories)</b></p><p className={styles.text18}>10/10/2023 20:30</p>
                </div>

                <div className={styles.tenthp}><p className={styles.text19}>Admin has created item <b> A4 Paper</b> in <b>Office Supply (Office Categories)</b></p><p className={styles.text20}>10/10/2023 20:30</p>
                </div>

                <div className={styles.eleventhp}><p className={styles.text21}>Admin has deleted item <b>Espresso</b> in <b>Kitchen Supply (Kitchen Categories)</b></p><p className={styles.text22}>10/10/2023 20:30</p>
                </div>

                <div className={styles.twelvep}><p className={styles.text23}>Admin has moved item <b>Mouse</b> in <b>Office Supply (Office Categories)</b></p><p className={styles.text24}>10/10/2023 20:30</p>
                </div>

            </div>

            {/* Kutija -filter */}

            <div className={styles.filterbox}>
                <div className={styles.filteractivities}><p className={styles.header}>Filter Activities</p> </div>
                <div className={styles.radiobox}>

                    <div className={styles.one}><input type="radio" name="All Activity" value="allactivities" className={styles.radio1} /></div>
                    <p className={styles.p1}> All Acitivites </p>
                    <input type="radio" name="moved" value="moved" className={styles.radio2} /><p className={styles.p2}>Moved</p>
                    <input type="radio" name="edited" value="edited" className={styles.radio3} /><p className={styles.p3}>Edited</p>
                    <input type="radio" name="deleted" value="deleted" className={styles.radio4} /><p className={styles.p4}>Deleted</p>
                    <input type="radio" name="created" value="created" className={styles.radio5} /><p className={styles.p5}>Created</p>
                    <input type="radio" name="ordered" value="ordered" className={styles.radio6} /><p className={styles.p6}>Ordered</p>

                </div>

            </div>

        </div>

    );
};