import styles from "./index.module.css";

export const RecentActivity = () => {

    const activityItems = [
        'Admin has created item <b>Office Pens</b> in <b>Office Supply (Office Category)</b>',
        'Admin has created item <b>A4 Paper</b> in <b>Office Supply (Office Category)</b>',
        'Admin has deleted item Espresso in Kitchen Supply (Kitchen Category)',
        'Admin has moved item <b>Mouse</b> in <b>Office Supply (Office Category)'
    ]

    return (
        <div>
            <h3>Recent Activity</h3>
            <div>
                { activityItems.map((item, index) => {
                    return <div key={index} dangerouslySetInnerHTML={{ __html: item }} /> //dangerously za da moze da gi renderira HTML tagovi vnatre vo text
                }) }
            </div>
        </div>
    )
}