import React from 'react';

import './styles.scss';

const Modal = ({ children, onClose = () => { } }) => {
    return (
        <div className="modal">
            <div className="modal-container">
                <button onClick={onClose} className="close" />
                {children}
            </div>
        </div>
    );
}

export default Modal;