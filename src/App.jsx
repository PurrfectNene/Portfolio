import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'; // Ensure this file is correctly linked
import Introduction from './pages/Introduction';
import ProjectCards from './pages/ProjectCards';
import ContactForm from './pages/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Sidebar Navigation */}
        <div className="sidenav">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact-me">Contact me</Link>
        </div>

        {/* Main content and Footer container */}
        <div className="main-footer-container">
          {/* Main Content */}
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Introduction />} />
              <Route path="/projects" element={<ProjectCards />} />
              <Route path="/contact-me" element={<ContactForm />} />
              {/* <Route path="*" element={<NotFound />} /> 404 Page */}
            </Routes>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;


