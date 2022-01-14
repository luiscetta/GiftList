import './styles.css';
import addForm from '../../utils/AddForm';

export default function InputGroup() {
    return (
        <div className="input-container">
            <div className="input-content">
                <div className="group">
                    <h3 className="input-title">Confirme sua presença:</h3>

                    <form id="form1" className="input-group">
                        <div className="label-content">
                            <label className="label" htmlFor="name">Digite o seu nome:</label>
                        </div>
                        <div className="section">
                            <input type="text" id="name" name="name" className="input-name" autoFocus required />
                            <button onClick={addForm()} type="button" id="add1" className="add-form">+</button>
                        </div>

                        <div id="box" className="box"></div>
                        <span className="toolkit">Clique no ' + ' ao lado para adicionar mais nomes caso precise!</span>
                    </form>
                    <button id="confirm1" className="confirm-btn" type="submit" form="form1">Confirmar</button>
                </div>
            </div>
        </div>
    );
}


