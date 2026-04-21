import React from 'react';

const AboutPage = () => {
  return (
    <div className="container">
      <section className="section">
        <h1>About Me</h1>
        <div className="grid grid-cols-2">
          <div>
            <p>
              I am a passionate designer and developer with a keen eye for detail and a love for minimalism. My journey in the digital space started with a simple curiosity about how things work, which quickly evolved into a career dedicated to crafting seamless user experiences.
            </p>
            <p>
              I believe that design should be invisible—it should guide the user intuitively without being obtrusive. This philosophy drives every project I undertake, from complex web applications to simple landing pages.
            </p>
            <h2 style={{ marginTop: '2rem' }}>Experience</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1rem' }}>
              <div>
                <h4 style={{ fontWeight: 600 }}>Senior Designer @ Studio X</h4>
                <p style={{ fontSize: '0.9rem' }}>2022 - Present</p>
                <p>Leading the design direction for various high-profile projects.</p>
              </div>
              <div>
                <h4 style={{ fontWeight: 600 }}>Junior Developer @ Tech Corp</h4>
                <p style={{ fontSize: '0.9rem' }}>2020 - 2022</p>
                <p>Developed responsive web interfaces using modern frameworks.</p>
              </div>
            </div>
          </div>
          <div>
            <h2 style={{ marginTop: '0' }}>Skills</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
              {['React', 'JavaScript', 'CSS/SCSS', 'HTML5', 'Figma', 'UI/UX Design', 'Git', 'Vite', 'Node.js'].map((skill) => (
                <span key={skill} style={{ padding: '0.4rem 1rem', border: '1px solid var(--border-color)', borderRadius: '20px', fontSize: '0.85rem' }}>
                  {skill}
                </span>
              ))}
            </div>
            
            <h2 style={{ marginTop: '3rem' }}>Philosophy</h2>
            <p>
              "Consistency is the key to a great user experience. By reducing noise and focusing on the core message, we create products that resonate."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
