import { Navigation } from '../../components/Navigation/Navigation';
import styles from './IOfficeSMouse.module.css';
import { MainLayout } from '../../components/MainLayout/MainLayout';
import { Header } from '../../components/Header/Header';
import { AddOrderButton } from '../../components/AddOrderButton/AddOrderButton';

export const IOfficeSMouse = () => {

    return(
<div className={styles.iOfficeSMousePage}>
    <Navigation />
    <MainLayout>
    <Header title="Inventory">
        
    <div className={styles.titleSecond}>
                    <div className={styles.titleTwo}>
                        <img src="\img\Expand Arrow.png" alt="arrow" className={styles.arrow} />
                        <span className={styles.text}>Office Supplies</span>
                    </div>
                    <div className={styles.titleThree}>
                        <img src="\img\Expand Arrow.png" alt="arrow" className={styles.arrowTwo} />
                        <span className={styles.textTwo}>Mouse</span>
                    </div>
                    </div>
                </Header>
                <div className={styles.mainContentLayout}>
                
                <div className={styles.upperPart}>
                <div className={styles.totalSum}>
                <div className={styles.first}>
                    <label>Total Orders:</label>
                    <span>22</span>
                    </div>
                    <div className={styles.second}>
                    <label>Total Cost:</label>
                    <span>€180.00</span>
                    </div>
                    <div className={styles.third}>
                    <label>Total Invoices</label>
                    <span>12</span>
                    </div>
                </div>
                <AddOrderButton />
</div>
</div>
        </MainLayout>
</div>
    )
}