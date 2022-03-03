import './styles.css';

const src_maps = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.958854687013!2d-43.645511785485496!3d-22.877978285026483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bfca940d730e5%3A0x6326bb68f6b9ca1f!2sR.%20Floriano%20Manoel%20da%20Fonseca%2C%2034%20-%20Paci%C3%AAncia%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2023065-530!5e0!3m2!1spt-BR!2sbr!4v1642355298103!5m2!1spt-BR!2sbr';

export default function Address() {
    return (
        <div className="add-container">

            <div className="add-content">
                <h2 className="add-title">Local do Evento</h2>
                <div className="add-section">
                    <iframe title="maps" src={src_maps} loading="lazy" />
                    <div className="add-text">
                        <h3 className="section-title">Endereço:</h3>
                        <p className="section-paragraph">Rua Floriano Manoel da Fonseca, Nº 34, Sagrado Coração, Paciência</p>
                        <h3 className="section-title">Ponto de Referência:</h3>
                        <p className="section-paragraph">Em frente à Escola Municipal Franklin Távora</p>
                    </div>
                </div>
            </div>
        </div>
    );
}