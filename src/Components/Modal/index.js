import React from 'react';

import './styles.scss';

const Modal = ({ children, onClose = () => { } }) => {
    return (
        <div className="modal">
            <div className="modal-container">
                <form className="modal-form">
                    <button onClick={onClose} className="close" />
                    {children}
                </form>
            </div>
        </div>
    );
}

export default Modal;