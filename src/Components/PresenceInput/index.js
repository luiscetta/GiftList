import './styles.css';

export default function InputGroup() {
    return (
        <div className="input-container">
            <div className="input-content">
                <div className="group">
                    <h3 className="input-title">Confirme sua presença:</h3>
                    <form id="form" className="input-group">
                        <input type="text" name="name[]" className="input-name" placeholder='Digite seu nome' autoFocus required />
                        <button type="button" id="addForm">+</button>
                        <span className="toolkit">Clique no ' + ' ao lado para adicionar mais nomes caso precise!</span>
                    </form>
                    <button className="confirm-btn" type="submit">Confirmar</button>
                </div>
            </div>
        </div>
    );
}
