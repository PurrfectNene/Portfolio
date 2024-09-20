import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Introduction from "./pages/Introduction";
import ProjectCards from "./pages/ProjectCards";
import ContactForm from "./pages/ContactForm";
import Footer from "./components/Footer";
import "bootstrap-icons/font/bootstrap-icons.css";
import Sidenav from "./components/Sidenav";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="sidenav-container">
          <Sidenav />
        </div>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Introduction />} />
            <Route path="/projects" element={<ProjectCards />} />
            <Route path="/contact-me" element={<ContactForm />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
        <div className="main-footer-container">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
