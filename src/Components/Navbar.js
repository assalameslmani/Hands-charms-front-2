import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <div className="burger-menu" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? 'open' : ''}`} />
        <div className={`bar ${menuOpen ? 'open' : ''}`} />
        <div className={`bar ${menuOpen ? 'open' : ''}`} />
      </div>

      <ul className={`headerul ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>HOME</Link></li>
        <li><Link to="/About" onClick={toggleMenu}>ABOUT</Link></li>
        <li><Link to="/Shop" onClick={toggleMenu}>SHOP</Link></li>
        <li><Link to="/Contact" onClick={toggleMenu}>CONTACT</Link></li>
      </ul>

      <button className="login-btn"><Link to="/Login" className="login-btn" onClick={toggleMenu}>LOGIN</Link></button>
    </div>
  );
};

export default Navbar;
