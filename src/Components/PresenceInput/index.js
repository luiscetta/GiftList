import { useState } from 'react';
import Input from './Input';

import './styles.css';


export default function InputGroup() {
    const [inputs, setInputs] = useState(['input1']);

    const addInput = () => {
        const input = `input${inputs.length + 1}`;
        setInputs(previous => [...previous, input]);
    };

    return (
        <div className="input-container">
            <div className="input-content">
                <div className="group">
                    <h3 className="input-title">Confirme sua presença:</h3>
                    <form className="input-group">
                        {inputs.map((input, i) => <Input key={input} label={i > 0 ? 'Digite o nome de outra pessoa' : 'Digite o seu nome'} inputName={`guest${i + 1}`} />)}
                        <div id="box" className="box"></div>
                        <button onClick={addInput} type="button" id="add1" className="add-form">+</button>
                        <span className="toolkit">Clique no <span className="btn-add-span">+</span> acima para adicionar nomes de outras pessoas!</span>
                        <button id="confirm1" className="confirm-btn" type="submit">Confirmar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
