import React from 'react';
import { useState } from 'react';

import { ReactComponent as EyeOpen } from '../../assets/eyeOpen.svg';
import { ReactComponent as EyeClose } from '../../assets/eyeClose.svg';
import GiftListItems from '../../Components/GiftListItems';

import './styles.css'


export default function GiftList() {
    const [blur, setBlur] = useState(true);

    const togglePix = () => setBlur(!blur);

    return (
        <div className="gift-container">
            <GiftListItems />
            <div className="donates-container">
                <h2 className="donates-title">Presentear em Dinheiro</h2>
                <div className="donates-content">
                    <p className="donates-p1">Caso prefiram nos abençoar com algum valor em dinheiro:</p>
                    <div className="donates-keys">
                        <p className="pix-paragraph">PIX: <span className={` 'show' ${blur ? 'pix' : 'show'} `}>21982093912</span></p>
                        <button className="show-hidden-btn" type="button" onClick={togglePix}>
                            {blur
                                ?
                                <EyeOpen className="eye-open" />
                                :
                                <EyeClose className="eye-close" />
                            }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}