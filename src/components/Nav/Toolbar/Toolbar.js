import React from 'react';
import style from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';

const toolbar = props => (
    <header className={style.Toolbar}>
        <div 
            className={style.DrawerToggle}
            onClick={props.click}>
                <div></div>
                <div></div>
                <div></div>
        </div>
        <div className={style.Logo}>
                <Logo />
        </div>
        <nav className={style.DesktopOnly}>
            <NavItems />
        </nav>
    </header>
);

export default toolbar;