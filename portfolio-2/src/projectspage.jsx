import React from 'react';
import commerceProject from './assets/commerce_project.png';
import blogProject from './assets/blog_project.png';
import weatherProject from './assets/weather_project.png';
import portfolioTemplate from './assets/portfolio_template.png';

const ProjectsPage = () => {
  const projects = [
    { id: 1, title: 'E-commerce Redesign', category: 'Web Development', description: 'A complete overhaul of a large-scale e-commerce platform focusing on performance and user flow.', image: commerceProject },
    { id: 2, title: 'Minimalist Blog Theme', category: 'UI Design', description: 'A clean, typography-focused blog theme for writers who value simplicity and readability.', image: blogProject },
    { id: 3, title: 'Weather Application', category: 'React App', description: 'A real-time weather app with dynamic backgrounds based on local conditions.', image: weatherProject },
    { id: 4, title: 'Portfolio Template', category: 'Frontend', description: 'A sleek portfolio template designed for creative professionals.', image: portfolioTemplate },
    { id: 5, title: 'Task Manager', category: 'Productivity', description: 'A distraction-free task management tool with focus-timer integration.', image: commerceProject },
    { id: 6, title: 'Agency Website', category: 'Corporate', description: 'A professional landing page for a digital creative agency.', image: blogProject },
  ];

  return (
    <div className="container">
      <section className="section">
        <h1 className="projects-title">Projects</h1>
        <p className="projects-intro">
          A curated selection of my recent work, spanning from UI/UX design to full-stack development.
        </p>

        <div className="grid grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="card project-card">
              <div className="project-image-container">
                <img src={project.image} alt={project.title} />
              </div>
              <p className="project-category">
                {project.category}
              </p>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a href="#" className="view-project-link">
                View Project <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
