import React from 'react';
import '../style/Header.css';

function Header() {
  return (
    <div className="header--box">
      <img className="header--logo" src="../images/logo.png" alt="logo" />
      <p className="header--name">my travel journal.</p>
    </div>
  );
}

export default Header;