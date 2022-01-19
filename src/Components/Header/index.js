
import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

import './styles.scss';

const Header = ({ drawerClickHandler }) => {

    return (
        <header className="toolbar">
            <nav className="toolbar-navigation" >
                <DrawerToggleButton onClick={drawerClickHandler} />
                <div className="toolbar-logo"><a href="/">Logo</a></div>
                <div className="spacer" />
                <div className="toolbar-navigation-items">
                    <ul>
                        <li><a href="/">Página Inicial</a></li>
                        <li><a href="/gift-list">Lista de Presentes</a></li>
                        <li><a href="/presence">Confirmação de Presença</a></li>
                        <li><a href="/contact">Contatos</a></li>
                        <li><a href="/address">Local do Evento</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;