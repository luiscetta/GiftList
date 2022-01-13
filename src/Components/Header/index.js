import './styles.css';

const Header = () => {
    return (
        <div className="header-container">
            <div className="header-content">
                <a className="nav-link" href="/">Home</a>
                <a className="nav-link" href="/GiftList">Lista de Presentes</a>
                <a className="nav-link" href="/Presence">Confirme sua presença</a>
                <a className="nav-link" href="/Contact">Contato</a>
                <a className="nav-link" href="/Address">Local do Evento</a>
            </div>
        </div>
    );
}

export default Header;