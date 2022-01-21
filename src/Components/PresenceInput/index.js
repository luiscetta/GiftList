import { useState } from 'react';

import Input from './Input';
import * as SheetsService from '../../services/Sheets';
import './styles.css';
import { ErrorToast } from '../../utils/toast';


export default function InputGroup() {
    const [inputs, setInputs] = useState(['input1']);
    const [guests, setGuests] = useState({ names: {} });
    const storage = window.sessionStorage;

    const addInput = () => {
        const input = `input${inputs.length + 1}`;
        setInputs(previous => [...previous, input]);
    };

    const refresh = () => window.location.reload();
    
    const handleChange = (e) => {
        const names = guests.names;
        names[e.target.name] = e.target.value;
        setGuests({ names });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const guestsData = Object.values(guests.names).map(guest => ({ Name: guest }));
        try {
            await SheetsService.AddToPresenceList(guestsData);
            storage.setItem('presenceConfirmationSuccess', true);
            refresh();
        } catch (err) {
            ErrorToast('Ocorreu um erro inesperado! Tente novamente!');
        }
    };

    return (
        <div className="input-container">
            <div className="input-content">
                <div className="group">
                    <h3 className="input-title">Confirme sua presença:</h3>
                    <form className="input-group" onSubmit={handleSubmit}>
                        <div id="box" className="box">
                            {inputs.map((input, i) => (
                                <Input
                                    key={input}
                                    inputName={`guest${i + 1}`}
                                    label={i > 0 ? 'Digite outro nome' : 'Digite o seu nome'}
                                    required={i > 0 ? false : true}
                                    onChange={handleChange}
                                />
                            ))}
                        </div>
                        <button onClick={addInput} type="button" id="add1" className="add-form">+</button>
                        <span className="toolkit">Clique no <span className="btn-add-span">+</span> acima para adicionar mais nomes!</span>
                        <button id="confirm1" className="confirm-btn" type="submit">Confirmar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
