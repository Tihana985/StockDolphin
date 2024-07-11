import styles from './ParagraphBox.module.css';

export const ParagraphBox = ({ text, date, time}) => {


    return(

       
        <div className={styles.paragraphBox}>
        <div className={styles.text}> {text}</div>
        <div className={styles.dateTime}>
        <div className={styles.date}> {date} </div>
        <div className={styles.time}> {time} </div>
        </div>
        </div>
    
    )
        
    }
