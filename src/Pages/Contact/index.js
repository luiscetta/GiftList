import './styles.css';

import FilipeImg from '../../assets/filipe.jpeg';
import ThaynnaImg from '../../assets/nana.jpg';

export default function Contact() {
    return (
        <div className="contact-container">
            <div className="contact-content">
                <div className="groom">
                    <img className="groom-img" src={FilipeImg} alt="imagem do noivo" />
                    <h2 className="contact-title">NOIVO</h2>
                    <div className="contact-text">
                        <p> Para entrar em contato com o noivo e ter mais informações, basta clicar
                            <a className="whatsapp" target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=+5521982093912">AQUI</a>.
                        </p>
                    </div>
                </div>
                <hr className="hr" />
                <div className="bride">
                    <img className="bride-img" src={ThaynnaImg} alt="imagem da noiva" />
                    <h2 className="contact-title">NOIVA</h2>
                    <div className="contact-text">
                        <p> Para entrar em contato com a noiva e ter mais informações, basta clicar
                            <a className="whatsapp" target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=+5521972269935">AQUI</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}