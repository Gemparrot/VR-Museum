import React from 'react';
import './Navbar.css';

const Navbar = ({ isInfoVisible, onShowControlsClick }) => {
  return (
    <nav className="navbar">
      <div className="logo">Vr Museum</div>
      <button className="show-controls" onClick={onShowControlsClick}>
        {isInfoVisible ? 'Hide Controls' : 'Show Controls'}
      </button>
      {isInfoVisible && (
        <div id="info-panel">
          <div id="info-header">
            <h3>Controls</h3>
          </div>
          <div id="info-content">
            <p>
              <b>W/A/S/D:</b> Move around
            </p>
            <p>
              <b>Mouse:</b> Look around
            </p>
            <p>
              <b>M:</b> Show Menu
            </p>
            <p>
              <b>Enter:</b> Start exploration
            </p>
            <p>
              <b>Esc:</b> Stop exploration
            </p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;