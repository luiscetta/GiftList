import React from 'react';

import './MenuToggleButton.scss';


export default function MenuToggleButton({ onClick }) {
    return (
        <button className="toggle-button" onClick={onClick}>
            <div className="toggle-button-line"/>
            <div className="toggle-button-line"/>
            <div className="toggle-button-line"/>
            <div />
        </button>
    );
}
