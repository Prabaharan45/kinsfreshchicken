import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        {/* Small logo image */}
        <img src="/logo.png" alt="Kin's Fresh Chicken" />
        <span className="brand-name">Kin's Fresh Chicken</span>
      </div>

      {/* Hamburger menu for mobile */}
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>

      {/* Navigation links */}
      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/menu" onClick={() => setMenuOpen(false)}>
            Menu
          </Link>
        </li>
        <li>
          <Link to="/deals" onClick={() => setMenuOpen(false)}>
            Great Deals
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
