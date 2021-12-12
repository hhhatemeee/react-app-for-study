import React from 'react'
import s from './SidebarItem.module.css'

const SidebarItem = (props) => {
    return (
        <div className={s.item}>
            <div className={s.itemImg}>
                <img src="https://1645492.ssl.1c-bitrix-cdn.ru/upload/resize_cache/iblock/7f3/579_579_1/7f300c1a9056e2a295ef9e20805b01d1.jpeg?152997736321155" alt="" />
            </div>
            <div className={s.itemName}>
                {props.name}
            </div>
        </div>
    )
}

export default SidebarItem
