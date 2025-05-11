import React, { useState } from 'react';
import './Header.css'; 

import prodmast from './assets/logo/podmast.png';

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">

    <button className="hamburger" onClick={toggleMenu}>
      {menuOpen ? '✕' : '☰'}
    </button>
    <div className="logo">
      <img src={prodmast} alt="Logo" />
      <span>Prodcast</span>
    </div>


      <nav className={`nav-links ${menuOpen ? 'show' : ''}`}>
        <ul>
          <li><a href="#">Home</a></li>
          <li className='list'><a href="#">About</a></li>
          <li className='list'><a href="#">Service</a></li>
          <li className='list'><a href="#">Contact</a></li>
        </ul>
      </nav>
      <div  className="signup">
        <button>Sign Up</button>
      </div>

    </header>
  );
}

export default Header;
