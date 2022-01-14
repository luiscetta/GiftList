import './styles.css';

export default function Contact() {
    return (
        <div className="contact-container">
            <div className="contact-content">
                <div className="groom">
                    <img className="groom-img" src="https://scontent.fsdu7-1.fna.fbcdn.net/v/t39.30808-6/226077186_4107925902623869_1025168955876522019_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFVdnhZaWdIUxgytx1Vaaal8ealbQInD-Hx5qVtAicP4anvEU3_FH51oWW_hxUeRaX56oELCZbwjvT5kUeQS9ty&_nc_ohc=f6CmnOWq0bsAX-X5Qr2&_nc_zt=23&_nc_ht=scontent.fsdu7-1.fna&oh=00_AT8vw1c1IEGU2ICG1fDyhWUBkv0Kc53JJD2GDnmeHZNl8g&oe=61E6D98D" alt="imagem do noivo" />
                    <h2 className="contact-title">NOIVO</h2>
                    <div className="contact-text">
                        <p> Para entrar em contato com o noivo e ter mais informações, basta clicar
                            <a className="whatsapp" target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=+5521982093912">AQUI</a>.
                        </p>
                    </div>
                </div>
                <hr className="hr" />
                <div className="bride">
                    <img className="bride-img" src="https://scontent.fsdu6-1.fna.fbcdn.net/v/t39.30808-6/271634306_4747684498640511_3058250890089780435_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFKLLwz6SscKcNEVJRO0Ax0GEn1esPGXC4YSfV6w8ZcLlcaJZv8JV53j6T8nXi9BBxvmx0SCBhGfVWKIoJ4c4Rb&_nc_ohc=HhlouWs5t14AX_KeweA&_nc_zt=23&_nc_ht=scontent.fsdu6-1.fna&oh=00_AT_6nIDSUmvqTUaslCMfbOboanxJ17HrIGgyvNszuU6KfA&oe=61E6E0C0" alt="imagem da noiva" />
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