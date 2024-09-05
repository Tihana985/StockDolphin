

import { MoveItemBox } from '../../MoveItemBox/MoveItemBox';
import styles from './MoveItemModal.module.css';

export const MoveItemModal = ({ closeModal }) => {

    return (
        <div className={styles.moveItemModal}>

            <div className={styles.modalForm}>

                <div className={styles.header}>
                    <span>Move Item</span>
                    <button className={styles.buttonX} onClick={() => closeModal(false)}><img src="/img/Multiply.png" alt="x" /></button>
                </div>
                <MoveItemBox />
                <button className={styles.btnMove} onClick={() => closeModal(false)}>Move Item</button>
            </div>
        </div>

    )
}