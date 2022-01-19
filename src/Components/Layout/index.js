import React from 'react';
import { useState } from 'react';

import { Routes } from '../../routes';
import Header from '../Header';
import Footer from '../Footer';
import SideDrawer from '../SideDrawer/SideDrawer';


export default function Layout() {
    const [isMenuCollapsed, setIsMenuCollapsed] = useState(true);

    const drawerToggleClickHandler = () => setIsMenuCollapsed(!isMenuCollapsed);

    return (
        <>
            <Header drawerClickHandler={drawerToggleClickHandler} />
            {!isMenuCollapsed ? <SideDrawer /> : null}
            <Routes />
            <Footer />
        </>
    )
}