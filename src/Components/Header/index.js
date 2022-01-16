import './styles.css';

const Header = () => {
    return (
        <div className="header-container">
            <div className="header-content">
                <a className="nav-link" href="/">Página Inicial</a>
                <a className="nav-link" href="/gift-list">Lista de Presentes</a>
                <a className="nav-link" href="/presence">Confirme sua presença</a>
                <a className="nav-link" href="/contact">Contato</a>
                <a className="nav-link" href="/address">Local do Evento</a>
            </div>
        </div>
    );
}

export default Header;