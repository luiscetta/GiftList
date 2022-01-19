import React from 'react';
import Backdrop from '../Backdrop/Backdrop';

import './SideDrawer.scss';

const sideDrawer = props => (
    <>
        <nav className="side-drawer">
            <ul>
                <li><a href="/">Página Inical</a></li>
                <li><a href="/gift-list">Lista de Presentes</a></li>
                <li><a href="/presence">Confirmação de Presença</a></li>
                <li><a href="/contacts">Contatos</a></li>
                <li><a href="/address">Local do Evento</a></li>
            </ul>
        </nav>
        <Backdrop />
    </>
);

export default sideDrawer;