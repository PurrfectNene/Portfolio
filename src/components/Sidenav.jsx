import { Link } from "react-router-dom";
import "./Sidenav.css";

function Sidenav() {
  return (
    <div className="sidenav">
     
        <div className="avatar-container">
        
          <div>
            <img className="avatar" src="public/Images/Avatar.png" />
          </div>

          <div className="icons-sidenav">
            <a
              href="https://github.com/PurrfectNene"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "black" }}
            >
              <i className="bi bi-github" />
            </a>
            <a
              href="https://www.linkedin.com/in/irene-patania/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "DodgerBlue" }}
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact-me">Contact me</Link>
      </div>
    </div>
  );
}

export default Sidenav;
