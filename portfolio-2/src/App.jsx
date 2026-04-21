import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './homepage';
import AboutPage from './aboutpage';
import ProjectsPage from './projectspage';
import ContactCards from './contactcards';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactCards />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
