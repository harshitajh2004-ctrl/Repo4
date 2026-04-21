import React from 'react';

const Footer = () => {
  return (
    <footer className="premium-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2 className="logo">HARSHITA</h2>
            <p>Crafting minimal and functional digital experiences that solve real-world problems.</p>
          </div>
          <div className="footer-links-group">
            <h3>Quick Links</h3>
            <div className="footer-nav">
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/projects">Projects</a>
              <a href="/contact">Contact</a>
            </div>
          </div>
          <div className="footer-socials">
            <h3>Socials</h3>
            <div className="social-icons">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg><use href="/icons.svg#github-icon"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg><use href="/icons.svg#x-icon"/></svg>
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                <svg><use href="/icons.svg#discord-icon"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Harshita. Designed for Excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
