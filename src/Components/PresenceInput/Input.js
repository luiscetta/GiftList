import './styles.css';

export default function Input({ label, inputName, required, onChange }) {
    return (
        <>
            <label className="label" htmlFor="name">{label}</label>
            <div className="section">
                <input 
                    type="text" 
                    className="input-name" 
                    name={inputName}
                    autoFocus 
                    required={required} 
                    autoComplete='off' 
                    onChange={onChange} 
                />
            </div>
        </>
    );
}