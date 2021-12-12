import React from 'react'
import SidebarItem from './SidebarItem/SidebarItem'
import s from './Sidebar.module.css'
const Sidebar = (props) => {
    console.log(props.sidebarData)
    return (
        <div className={s.sidebarList}>
            <div className={s.sidebarTitle}>
                <h3>Лучшие друзья</h3>
            </div>
            <div className={s.sidebarItemList}>
                {props.sidebarData.map(el => {
                    return <SidebarItem key={el.id} name={el.name} />
                })}
            </div>

        </div>
    )
}

export default Sidebar
