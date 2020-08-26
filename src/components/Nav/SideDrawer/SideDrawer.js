import React from 'react';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import style from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Ox from '../../../hoc/Auxilary';

const sideDrawer = props => {
    let attachedStyles = [style.SideDrawer, style.Close];
    if (props.open){
        attachedStyles = [style.SideDrawer, style.Open] 
    }
    return (
        <Ox>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedStyles.join(' ')}>
                <div className={style.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavItems />
                </nav>
            </div>
        </Ox>
    );
};

export default sideDrawer;