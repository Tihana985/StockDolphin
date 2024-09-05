import styles from "./MoveItemBox.module.css";
import { MoveModalBox } from "../MoveModalBox/MoveModalBox";

export const MoveItemBox = () => {

    const box = [
        {
            img:'/img/Folder (1).png',
            label: 'Office Supplies'
        },

        {
            img:'/img/Folder (1).png',
            label: 'Kitchen Supplies'
        },
        {
            img:'/img/Folder (1).png',
            label: 'Sanitary Supplies'
        },
        {
            img:'/img/Folder (1).png',
            label: 'Hardware Supplies'
        }
    ]


    return(
        <div className={styles.moveItemBox}>
        {box.map((box, index) =>{
            return<MoveModalBox key={index} img={box.img} label={box.label} />
        })}
        </div>
    )
}