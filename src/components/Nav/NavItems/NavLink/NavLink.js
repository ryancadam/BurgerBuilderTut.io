import React from 'react';
import style from './NavLink.module.css';

const navLink = props => (
        <li className={style.NavLink}>
            <a 
                href={props.link}
                className={props.active ? style.active : null}>{props.children}</a>
        </li>
);

export default navLink;