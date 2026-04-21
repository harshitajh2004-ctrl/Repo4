import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <NavLink to="/" className="logo" style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--text-main)', letterSpacing: '0.1em' }}>
          HARSHITA
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
