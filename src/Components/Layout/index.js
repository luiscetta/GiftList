import React from 'react';
import { useState } from 'react';

import { Routes } from '../../routes';
import Header from '../Header';
import Footer from '../Footer';
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../Backdrop/Backdrop';

export default function Layout() {
    const [sideDrawerOpen, setSideDrawer] = useState(false);

    const drawerToggleClickHandler = () => {
        setSideDrawer(!sideDrawerOpen);
    }

    let sideDrawer;
    let backdrop;

    if (sideDrawerOpen) {
        sideDrawer = <SideDrawer />;
        backdrop = <Backdrop />;
    }

    return (
        <>
            <Header drawerToggleClickHandler={drawerToggleClickHandler} />
            {sideDrawer}
            {backdrop}
            <Routes />
            <Footer />
        </>
    )
}