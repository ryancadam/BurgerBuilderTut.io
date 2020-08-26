import React from 'react';
import burgerLogo from '../../assets/images/burgerlogo.png';
import style from './Logo.module.css';

const logo = props => (
    <div className={style.Logo}>
        <img src={burgerLogo} alt="MyBurger" />
    </div>
);

export default logo;