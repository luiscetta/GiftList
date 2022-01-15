export default function Input({ label, inputName }) {
    return (
        <>
            <label className="label" htmlFor="name">{label}</label>
            <div className="section">
                <input type="text" name={inputName} className="input-name" autoFocus required autoComplete='off' />
            </div>
        </>
    );
}