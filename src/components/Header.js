
import React from 'react';
import './header.css';
import '../Images/bkg.jpg'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="animated-name">Preethi</h1>
        <p className="animated-title">Civil Engineering Student</p>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
