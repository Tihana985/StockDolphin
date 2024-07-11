import styles from "./Recentactivity.module.css";

export const RecentActivity = () => {

    // const activityItems = [
    //     'Admin has created item <b>Office Pens</b> in <b>Office Supply (Office Category)</b>',
    //     'Admin has created item <b>A4 Paper</b> in <b>Office Supply (Office Category)</b>',
    //     'Admin has deleted item Espresso in Kitchen Supply (Kitchen Category)',
    //     'Admin has moved item <b>Mouse</b> in <b>Office Supply (Office Category)'
    // ]

    // return (
    //     <div className={styles.recentacitivitySection }>
    //         <h3>Recent Activity</h3> 
    //         <div className={styles.recentacitivityRow }>
    //             { activityItems.map((item, index) => {
    //                 return <div key={index} dangerouslySetInnerHTML={{ __html: item }} /> //dangerously za da moze da gi renderira HTML tagovi vnatre vo text, bez da se stavaat tagovi za bold
    //             }) }
    //         </div>
    //     </div>
    // ) Ova ne mi e jasno kako stringot so css da se sredi, i kako da se targetira vo posebni paragrafi?

    return (
        <div className={styles.recentacitivitySection }>
            <h3>Recent Activity</h3> 
            <div className={styles.recentacitivityRow }>
<span> Admin has created item <b>Office Pens</b> in <b>Office Supply (Office Category)</b></span>
<span> Admin has created item <b>A4 Paper</b> in <b>Office Supply (Office Category)</b>,</span>
<span> Admin has deleted item <b>Espresso</b> in <b>Kitchen Supply (Kitchen Category)</b></span>
<span> Admin has moved item <b>Mouse</b> in <b>Office Supply (Office Category)</b></span>

            </div>
        </div>
    )
    
}