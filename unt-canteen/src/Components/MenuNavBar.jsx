
import React from 'react';
import './style.css'; // Import CSS file for Navbar component

const MenuNavbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className="nav-item"><a href="#home">Home</a></li>
        <li className="nav-item"><a href="#about">Menu</a></li>
        <li classsName="nav-item"><a href="#contact">Maps</a></li>
        <li className="nav-item"><a href="#contact">Budget Calculator</a></li>
        <li className="nav-item"><a href="#contact">Calorimeter</a></li>
        <li className="nav-item"><a href="#contact">Hours and Location</a></li>
      </ul>
    </nav>
  );
};

export default MenuNavbar;