import React from 'react';
import { useState } from 'react';
import { ReactComponent as EyeOpen } from '../../assets/eyeOpen.svg';
import { ReactComponent as EyeClose } from '../../assets/eyeClose.svg';

import './styles.css'
import ListItems from '../../Components/List';


export default function GiftList() {
    const [blur, setBlur] = useState(true);

    function togglePix() {
        setBlur(!blur);
    }

    return (
        <div className="gift-container">
            <ListItems />
            <div className="donates-container">
                <h2 className="donates-title">Presentear em Dinheiro</h2>
                <div className="donates-content">
                    <p className="donates-p1">Caso prefiram nos abençoar com algum valor em dinheiro:</p>
                    <div className="donates-keys">
                        <p className="pix-paragraph">PIX: <span className={` 'show' ${blur ? 'pix' : 'show'} `}>21982093912</span></p>
                        <button className="show-hidden-btn" type="button" onClick={togglePix}>
                            {blur
                                ?
                                <EyeClose className="eye-open" />
                                :
                                <EyeOpen className="eye-close" />
                            }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}