
import React from 'react';
import '../style.css'; // Import CSS file for Navbar component

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className="nav-item"><a href="#home">Home</a></li>
        <li className="nav-item"><a href="#about">Menu</a></li>
        <li classsName="nav-item"><a href="#contact">Maps</a></li>
        <li className="nav-item"><a href="#contact">Hours And Location</a></li>
        <li className="nav-item"><a href="#contact">Recreation Activities</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;