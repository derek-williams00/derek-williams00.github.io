import React from 'react';

const NavBar = () => {
  return (
    <header>
      <nav>
        <a href="#home" className="nav-brand">Derek Williams</a>
        <ul className="nav-links">
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#journey">Journey</a></li>
          <li><a href="#resume">Resume</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;