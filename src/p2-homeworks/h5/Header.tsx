import React from 'react'
import {PATH} from "./Pages";
import s from './Header.module.css'
import {NavLink} from 'react-router-dom';

function Header() {

    return (
            <div className={s.nav}>
                <NavLink to={PATH.PRE_JUNIOR} className={s.link}>PRE-JUNIOR</NavLink>
                <NavLink to={PATH.JUNIOR} className={s.link}>JUNIOR</NavLink>
                <NavLink to={PATH.JUNIOR_PlUS} className={s.link}>JUNIOR-PLUS</NavLink>
                <div className={s.menuButton}/>
            </div>
    )
}

export default Header
