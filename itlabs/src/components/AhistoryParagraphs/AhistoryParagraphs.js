import styles from "./AhistoryParagraphs.module.css";
import { ParagraphBox } from "../ParagraphBox/ParagraphBox";

export const AhistoryParagraphs =() => {

    const ahParagraphs = [
        { text:'Admin has created item Office Pens in Office Supply  (Office Categories)',
            date:'10/10/2023',
            time:'20:30'
        },
        { text:'Admin has created item A4 Paper in Office Supply  (Office Categories)',
            date:'10/10/2023',
            time:'20:30'
        },
        { text:'Admin has deleted item Espresso in Kitchen Supply  (Kitchen Categories)',
            date:'10/10/2023',
            time:'20:30'
        },
        { text:'Admin has moved item Mouse in Office Supply  (Office Categories)',
            date:'10/10/2023',
            time:'20:30'
        },
        { text:'Admin has created item Office Pens in Office Supply  (Office Categories)',
            date:'10/10/2023',
            time:'20:30'
        },
        { text:'Admin has deleted item A4 Paper in Office Supply  (Office Categories)',
            date:'10/10/2023',
            time:'20:30'
        },
        { text:'Admin has moved item Espresso in Kitchen Supply  (Kitchen Categories)',
            date:'10/10/2023',
            time:'20:30'
        },
        { text:'Admin has created item Mouse in Office Supply  (Office Categories)',
            date:'10/10/2023',
            time:'20:30'
        },
        { text:'Admin has created item Office Pens in Office Supply  (Office Categories)',
            date:'10/10/2023',
            time:'20:30'
        },
        { text:'Admin has created item A4 Paper in Office Supply  (Office Categories)',
            date:'10/10/2023',
            time:'20:30'
        },
        { text: 'Admin has deleted item Espresso in Kitchen Supply  (Kitchen Categories)',
            date:'10/10/2023',
            time:'20:30'
        },
        { text:'Admin has moved item Mouse in Office Supply  (Office Categories)',
            date:'10/10/2023',
            time:'20:30'
        },
                   

    ]

    return(
        <div className={styles.ahparagrphs}>
            {ahParagraphs.map((item, index) => {
                return <ParagraphBox key={index} text={item.text} date={item.date} time={item.time} />
            } 
        )}

        </div>


    );
};