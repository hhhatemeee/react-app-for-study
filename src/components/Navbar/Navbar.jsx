import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'
import Sidebar from './Sidebar/Sidebar'

const Navbar = (props) => {
    console.log(props)
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile/21709" style={({ isActive }) => ({ color: isActive ? 'gold' : 'white' })}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" style={({ isActive }) => ({ color: isActive ? 'gold' : 'white' })}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" style={({ isActive }) => ({ color: isActive ? 'gold' : 'white' })}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="" style={({ isActive }) => ({ color: isActive ? 'gold' : 'white' })}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="" style={({ isActive }) => ({ color: isActive ? 'gold' : 'white' })}>Settings</NavLink>
            </div>
            <Sidebar sidebarData={props.sidebar.sidebarData} />
        </nav>
    )
}

export default Navbar
