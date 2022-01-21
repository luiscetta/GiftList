import React from 'react';
import { useState } from 'react';

import { Routes } from '../../routes';
import Header from '../Header';
import Footer from '../Footer';
import SideMenu from '../SideMenu';


export default function Layout() {
    const [isMenuCollapsed, setIsMenuCollapsed] = useState(true);

    const menuToggleHandler = () => setIsMenuCollapsed(!isMenuCollapsed);

    return (
        <>
            <Header menuToggleHandler={menuToggleHandler} />
            {!isMenuCollapsed ? <SideMenu closeHandler={menuToggleHandler} /> : null}
            <Routes />
            <Footer />
        </>
    )
}