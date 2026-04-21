import React from 'react';
import { NavLink } from 'react-router-dom';
import heroGraphic from './assets/hero_graphic.png';
import commerceProject from './assets/commerce_project.png';
import blogProject from './assets/blog_project.png';

const HomePage = () => {
  return (
    <div className="container">
      <section className="section hero" style={{ display: 'flex', alignItems: 'center', gap: '4rem', padding: '10vh 0', minHeight: '80vh' }}>
        <div style={{ flex: 1 }}>
          <h1 style={{ maxWidth: '600px', fontSize: '3.5rem', lineHeight: '1.1' }}>
            Crafting minimal and functional digital experiences.
          </h1>
          <p style={{ maxWidth: '500px', fontSize: '1.2rem', marginBottom: '2.5rem', color: 'var(--text-secondary)' }}>
            Hi, I'm Harshita. A designer and developer focused on building clean, user-centric interfaces that solve real-world problems.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <NavLink to="/projects" className="button-primary">
              View Work
            </NavLink>
            <NavLink to="/contact" className="button-secondary">
              Get in Touch
            </NavLink>
          </div>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <img src={heroGraphic} alt="Hero Graphic" style={{ width: '100%', maxWidth: '500px', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
        </div>
      </section>

      <section className="section">
        <h2 style={{ fontSize: '2rem', marginBottom: '3rem' }}>Featured Projects</h2>
        <div className="grid grid-cols-2">
          <div className="card project-card">
            <div className="project-image-container">
              <img src={commerceProject} alt="E-commerce Redesign" />
            </div>
            <h3>Project One</h3>
            <p>A brief description of this featured project and its core impact.</p>
          </div>
          <div className="card project-card">
            <div className="project-image-container">
              <img src={blogProject} alt="Minimalist Blog Theme" />
            </div>
            <h3>Project Two</h3>
            <p>Exploring minimal design patterns in a functional application.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
