import styles from './ICardsBox.module.css';
import { Link } from 'react-router-dom';

export const ICardsBox = ({iconfirst, iconsecond, iconthird, label, unit, price, update, date, time, icon}) => {
    return(
        <div className={styles.icardsBox}>
            <div className={styles.threeImages}>
        <img src={iconfirst} className={styles.iconfirst} alt="iconfirst" />
        <div className={styles.twoIcons}>
        <img src={iconsecond} className={styles.iconsecond} alt="iconsecond"/>
        <img src={iconthird} className={styles.iconthird} alt="iconthird"/>
        </div>
        </div>
        <div className={styles.secondPart}>
           
           {label === "Office Supply" ? (
            <Link to="inventoryofficesupliesfirstpage" className={styles.link} >
                <div className={styles.label}> {label}</div> 
         </Link>
           ) : (
            <div className={styles.label}> {label}</div> 
           )}
         </div>
        <div className={styles.unitPrice}>
        <div className={styles.unit}> {unit} </div>
        <div className={styles.price}> {price} </div>
        </div>
       
        <div className={styles.thirdPart}>
        <div className={styles.update}> {update} </div>
         
        <div className={styles.dateTime}>
        <div className={styles.date}> {date} </div>
        <div className={styles.time}> {time} </div> 
        </div>

        <img src={icon} className={styles.icon} alt="icontrash"/> 
        </div>
        </div>
        
    )
}

