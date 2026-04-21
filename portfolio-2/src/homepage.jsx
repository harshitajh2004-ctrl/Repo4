import React from 'react';
import { NavLink } from 'react-router-dom';
import heroGraphic from './assets/hero_graphic.png';
import commerceProject from './assets/commerce_project.png';
import blogProject from './assets/blog_project.png';

const HomePage = () => {
  return (
    <div className="container">
      <section className="section hero">
        <div className="hero-content">
          <h1>
            Crafting minimal and functional digital experiences.
          </h1>
          <p>
            Hi, I'm Harshita. A designer and developer focused on building clean, user-centric interfaces that solve real-world problems.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <NavLink to="/projects" className="button-primary">
              View Work
            </NavLink>
            <NavLink to="/contact" className="button-secondary">
              Get in Touch
            </NavLink>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img src={heroGraphic} alt="Hero Graphic" />
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
