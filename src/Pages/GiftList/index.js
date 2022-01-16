import './styles.css'
import ListItems from '../../Context/List';
import React from 'react';

export default function GiftList() {
    return (
        <div className="gift-container">
            <ListItems/>
            <div className="donates-container">
                <h2 className="donates-title">Donates</h2>
                <div className="donates-content">
                    <p className="donates-p1">Caso queiram doar alguma quantia em dinheiro através:</p>
                    <div className="donates-keys">
                        <p>PIX: 21982093912</p>
                    </div>
                </div>
            </div>
        </div>
    )
}