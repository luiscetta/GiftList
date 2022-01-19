export default function Gift({ gift, onCheck }) {
    return (
        <div className="scroll-content">
            <input onClick={onCheck} type="checkbox" className="check-input" />
            <label htmlFor="check1">{gift.Description ? `${gift.Name} ${gift.Description}` : gift.Name}</label>
        </div>
    )
}