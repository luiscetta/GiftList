import React from 'react';

import Backdrop from '../Backdrop';
import './SideMenu.scss';


export default function SideMenu({ closeHandler }) {
    return (
        <>
            <nav className="side-menu">
                <button onClick={closeHandler} className="close" />
                <ul>
                    <li><a href="/">Página Inicial</a></li>
                    <li><a href="/gift-list">Lista de Presentes</a></li>
                    <li><a href="/presence">Confirmação de Presença</a></li>
                    <li><a href="/contacts">Contatos</a></li>
                    <li><a href="/address">Local do Evento</a></li>
                </ul>
            </nav>
            <Backdrop onClick={closeHandler} />
        </>
    );
}
