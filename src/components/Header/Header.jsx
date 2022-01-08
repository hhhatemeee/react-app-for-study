import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

const Header = (props) => {
    return (
        <header className={s.header}>
            <NavLink to='/' ><img src="https://i.pinimg.com/originals/72/6b/04/726b042f3486765bf19d62787959f501.png" alt="" /> </NavLink>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                    : <NavLink to='/login'>Login</NavLink>}

            </div>
        </header >
    )
}

export default Header
