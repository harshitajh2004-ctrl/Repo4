import React from 'react';

const ProjectsPage = () => {
  const projects = [
    { id: 1, title: 'E-commerce Redesign', category: 'Web Development', description: 'A complete overhaul of a large-scale e-commerce platform focusing on performance and user flow.' },
    { id: 2, title: 'Minimalist Blog Theme', category: 'UI Design', description: 'A clean, typography-focused blog theme for writers who value simplicity and readability.' },
    { id: 3, title: 'Weather Application', category: 'React App', description: 'A real-time weather app with dynamic backgrounds based on local conditions.' },
    { id: 4, title: 'Portfolio Template', category: 'Frontend', description: 'A sleek portfolio template designed for creative professionals.' },
    { id: 5, title: 'Task Manager', category: 'Productivity', description: 'A distraction-free task management tool with focus-timer integration.' },
    { id: 6, title: 'Agency Website', category: 'Corporate', description: 'A professional landing page for a digital creative agency.' },
  ];

  return (
    <div className="container">
      <section className="section">
        <h1>Projects</h1>
        <p style={{ maxWidth: '600px', marginBottom: '3rem' }}>
          A curated selection of my recent work, spanning from UI/UX design to full-stack development.
        </p>

        <div className="grid grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="card">
              <div style={{ height: '180px', background: '#f9f9f9', marginBottom: '1.5rem', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ccc', fontSize: '0.8rem' }}>
                PROJECT PREVIEW
              </div>
              <p style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--accent-color)', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>
                {project.category}
              </p>
              <h3 style={{ marginBottom: '0.5rem' }}>{project.title}</h3>
              <p style={{ fontSize: '0.9rem' }}>{project.description}</p>
              <a href="#" style={{ fontSize: '0.85rem', fontWeight: 500, display: 'inline-block', marginTop: '1rem', borderBottom: '1px solid currentColor' }}>
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
