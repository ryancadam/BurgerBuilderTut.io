import React from 'react';
import style from './NavItems.module.css';
import NavLink from './NavLink/NavLink';

const navItems = () => (
    <ul className={style.NavItems}>
        <NavLink link="/" active>Build Your Burger</NavLink>
        <NavLink link="/">CheckOut</NavLink>
    </ul>
);

export default navItems;