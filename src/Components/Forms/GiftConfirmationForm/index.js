import './styles.scss';


export default function GiftConfirmationForm({ gifts }) {
    return (
        <div className="chosen-gifts">
            <span>{gifts.length ? 'Presentes escolhidos:' : 'Escolha um presente primeiro!'}</span>
            <ul>
                {gifts.map((gift, i) => <li key={i}>{gift}</li>)}
            </ul>
            <form className="gift-confirmation-form">
                <label htmlFor="modalInput">Digite seu nome:</label>
                <input id="modalInput" type="text" />
                <button type="submit">Confirmar</button>
            </form>
        </div>
    );
}