import { useState } from 'react';

import * as SheetsService from '../../../services/Sheets';
import { ErrorToast } from '../../../utils/toast';
import './styles.scss';


export default function GiftConfirmationForm({ selectedGifts }) {
    const [giftGiver, setGiftGiver] = useState(null);
    const storage = window.sessionStorage;

    const refresh = () => window.location.reload();
    const handleSubmit = async (e) => {
        e.preventDefault();
        for (let i = 0; i < selectedGifts.length; i++) {
            const gift = selectedGifts[i];
            gift.From = giftGiver;
            try {
                await SheetsService.UpdateGiftList(gift);
            } catch (err) {
                console.error(err);
                ErrorToast('Ocorreu um erro inesperado! Por favor tente novamente!');
            }
        }
        storage.setItem('giftConfirmationSuccess', true);
        refresh();
    };

    return (
        <div className="chosen-gifts">
            <span>{selectedGifts.length ? 'Presentes escolhidos:' : 'Escolha um presente primeiro!'}</span>
            <ul>
                {selectedGifts.map((gift, i) => <li key={i}>{gift.Name}</li>)}
            </ul>
            <form className="gift-confirmation-form" onSubmit={handleSubmit}>
                <label htmlFor="modalInput">Digite seu nome:</label>
                <input id="modalInput" type="text" onChange={(e) => setGiftGiver(e.target.value)} required autoComplete="off"/>
                <button type="submit">Confirmar</button>
            </form>
        </div>
    );
}