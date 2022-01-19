import React from 'react';

import './DrawerToggleButton.scss';

const drawerToggleButton = ({ onClick }) => (
    <button className="toggle-button" onClick={onclick}>
        <div className="toggle-button-line"/>
        <div className="toggle-button-line"/>
        <div className="toggle-button-line"/>
        <div />
    </button>
);

export default drawerToggleButton;