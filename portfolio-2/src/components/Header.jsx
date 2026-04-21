import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <NavLink to="/" className="logo" style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--text-main)' }}>
            HARSHITA
          </NavLink>
          <div className="nav-links">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
