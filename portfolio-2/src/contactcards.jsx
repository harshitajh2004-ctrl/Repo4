import React from 'react';
import { FaInstagram, FaGithub, FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const ContactCards = () => {
  const contacts = [
    { id: 1, name: 'Instagram', icon: <FaInstagram size={32} />, link: 'https://instagram.com', color: '#E1306C' },
    { id: 2, name: 'GitHub', icon: <FaGithub size={32} />, link: 'https://github.com', color: '#333' },
    { id: 3, name: 'Facebook', icon: <FaFacebook size={32} />, link: 'https://facebook.com', color: '#1877F2' },
    { id: 4, name: 'Twitter', icon: <FaTwitter size={32} />, link: 'https://twitter.com', color: '#1DA1F2' },
    { id: 5, name: 'LinkedIn', icon: <FaLinkedin size={32} />, link: 'https://linkedin.com', color: '#0077b5' },
    { id: 6, name: 'Email', icon: <FaEnvelope size={32} />, link: 'mailto:harshita@example.com', color: '#EA4335' },
  ];

  return (
    <div className="container">
      <section className="section">
        <h1>Connect with Me</h1>
        <p style={{ maxWidth: '600px', marginBottom: '3rem' }}>
          Feel free to reach out through any of these platforms. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>

        <div className="grid grid-cols-3">
          {contacts.map((contact) => (
            <a key={contact.id} href={contact.link} target="_blank" rel="noopener noreferrer" className="card contact-card">
              <div style={{ color: contact.color, marginBottom: '0.5rem' }}>
                {contact.icon}
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>{contact.name}</h3>
              <p style={{ fontSize: '0.8rem', margin: 0 }}>View Profile</p>
            </a>
          ))}
        </div>
      </section>

      <section className="section" style={{ borderTop: '1px solid var(--border-color)', marginTop: '2rem' }}>
        <h2>Send a Message</h2>
        <form style={{ maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <input type="text" placeholder="Your Name" style={{ flex: 1, padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '4px', outline: 'none' }} />
            <input type="email" placeholder="Your Email" style={{ flex: 1, padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '4px', outline: 'none' }} />
          </div>
          <textarea placeholder="Your Message" rows="5" style={{ padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '4px', outline: 'none', resize: 'vertical' }}></textarea>
          <button type="submit" className="card" style={{ padding: '1rem 2rem', background: 'var(--text-main)', color: 'var(--bg-color)', borderRadius: '4px', width: 'fit-content', cursor: 'pointer', fontWeight: 600 }}>
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactCards;
