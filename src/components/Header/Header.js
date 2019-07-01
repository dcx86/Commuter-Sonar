import React from 'react';
import logo from '../../assets/images/radar.svg';
import './Header.css';

function Header() {
  return (
    <header className="Header">
      <img src={logo} className="Header__logo" alt="logo" />
      <div className="Header__name">
        <h1>C O M M U T E R <span className="Header__name--red">S</span> O N A R</h1>
      </div>
    </header>
  );
}

export default Header;