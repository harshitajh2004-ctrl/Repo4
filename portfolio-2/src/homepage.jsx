import React from 'react';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container">
      <section className="section hero">
        <h1 style={{ maxWidth: '600px' }}>
          Crafting minimal and functional digital experiences.
        </h1>
        <p style={{ maxWidth: '500px', fontSize: '1.1rem', marginBottom: '2rem' }}>
          Hi, I'm Harshita. A designer and developer focused on building clean, user-centric interfaces that solve real-world problems.
        </p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <NavLink to="/projects" className="card" style={{ padding: '0.8rem 1.5rem', background: 'var(--text-main)', color: 'var(--bg-color)', borderRadius: '4px' }}>
            View Work
          </NavLink>
          <NavLink to="/contact" className="card" style={{ padding: '0.8rem 1.5rem', borderRadius: '4px' }}>
            Get in Touch
          </NavLink>
        </div>
      </section>

      <section className="section">
        <h2>Featured Projects</h2>
        <div className="grid grid-cols-2">
          <div className="card">
            <div style={{ height: '200px', background: '#f5f5f5', marginBottom: '1rem', borderRadius: '4px' }}></div>
            <h3>Project One</h3>
            <p>A brief description of this featured project and its core impact.</p>
          </div>
          <div className="card">
            <div style={{ height: '200px', background: '#f5f5f5', marginBottom: '1rem', borderRadius: '4px' }}></div>
            <h3>Project Two</h3>
            <p>Exploring minimal design patterns in a functional application.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
