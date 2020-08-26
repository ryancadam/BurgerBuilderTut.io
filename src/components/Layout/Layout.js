import React, { Component } from 'react';
import Ox from '../../hoc/Auxilary';
import classes from './Layout.module.css';
import Toolbar from '../Nav/Toolbar/Toolbar';
import SideDrawer from '../Nav/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false})
    }
    openDrawerHandler = () => {
        this.setState({showSideDrawer: true})
    }

    render () {
        return (
            <Ox>
                <Toolbar click={this.openDrawerHandler}/>
                <SideDrawer 
                    closed={this.sideDrawerCloseHandler}
                    open={this.state.showSideDrawer}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Ox>
        )
    }
};

export default Layout;