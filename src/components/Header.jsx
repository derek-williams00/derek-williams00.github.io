import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <header>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">
            <img src="images/house.svg" alt="home" width="30" height="30" className="d-inline-block align-top" />
            Derek Williams
          </a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#connect">Connect</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
