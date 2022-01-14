import './styles.css';
import addForm from '../../utils/AddForm';

export default function InputGroup() {
    return (
        <div className="input-container">
            <div className="input-content">
                <div className="group">
                    <h3 className="input-title">Confirme sua presença:</h3>

                    <form id="form1" className="input-group">
                        <label className="label" htmlFor="name">Digite o seu nome</label>
                        <div className="section">
                            <input type="text" id="name" name="name" className="input-name" autoFocus required autoComplete='off' />
                        </div>
                        <div id="box" className="box"></div>
                        <button onClick={addForm()} type="button" id="add1" className="add-form">+</button>
                        <span className="toolkit">Clique no <span className="btn-add-span">+</span> acima para adicionar nomes de outras pessoas!</span>
                    </form>

                    <button id="confirm1" className="confirm-btn" type="submit" form="form1">Confirmar</button>
                </div>
            </div>
        </div>
    );
}


