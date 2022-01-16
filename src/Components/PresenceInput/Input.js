import './styles.css';

export default function Input({ label, inputName, required }) {
    return (
        <>
            <label className="label" htmlFor="name">{label}</label>
            <div className="section">
                <input type="text" name={inputName} className="input-name" autoFocus required={required} autoComplete='off' />
            </div>
        </>
    );
}