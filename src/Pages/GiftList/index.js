import './styles.css'
import React from 'react';

export default function GiftList() {
    return (
        <div className="gift-container">
            <div className="gift-content">
                <div className="scroll-container">
                    <div className="scroll-content">
                        <input id="check1" type="checkbox" className="check-input" />
                        <label htmlFor="check1">Jogo de Faca</label>
                    </div>
                    <div className="scroll-content">
                        <input id="check2" type="checkbox" className="check-input" />
                        <label htmlFor="check2">Jogo de Talheres</label>
                    </div>
                    <div className="scroll-content">
                        <input id="check3" type="checkbox" className="check-input" />
                        <label htmlFor="check3">Pano de Prato (QUANTOS QUISEREM)</label>
                    </div>
                    <div className="scroll-content">
                        <input id="check4" type="checkbox" className="check-input" />
                        <label htmlFor="check4">Jogo de Copos</label>
                    </div>
                    <div className="scroll-content">
                        <input id="check5" type="checkbox" className="check-input" />
                        <label htmlFor="check5">Lixeira de Cozinha</label>
                    </div>
                    <div className="scroll-content">
                        <input id="check6" type="checkbox" className="check-input" />
                        <label htmlFor="check6">Lixeira de Banheiro</label>
                    </div>
                    <div className="scroll-content">
                        <input id="check7" type="checkbox" className="check-input" />
                        <label htmlFor="check7">Vassoura</label>
                    </div>
                    <div className="scroll-content">
                        <input id="check8" type="checkbox" className="check-input" />
                        <label htmlFor="check8">Rôdo</label>
                    </div>
                    <div className="scroll-content">
                        <input id="check9" type="checkbox" className="check-input" />
                        <label htmlFor="check9">Pano de Chão (QUANTOS QUISEREM)</label>
                    </div>
                    <div className="scroll-content">
                        <input id="check10" type="checkbox" className="check-input" />
                        <label htmlFor="check10">Balde</label>
                    </div>
                </div>
            </div>
        </div>
    )
}