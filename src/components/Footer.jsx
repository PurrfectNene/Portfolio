import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <p className="rights-footer">© All rights reserved | 2024 | Find me on 
          <a
            href="https://github.com/PurrfectNene"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "black" }}
          >
            <i className="bi bi-github" />
          </a>
       and 
          <a
            href="https://www.linkedin.com/in/irene-patania/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "DodgerBlue" }}
          >
            <i className="bi bi-linkedin"></i>
          </a>
       </p>


      {/* <div className="icons-footer">
        <span id="github">
          <a
            href="https://github.com/PurrfectNene"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "black" }}
          >
            <i className="bi bi-github" />
          </a>
        </span>
        <span id="linkedin">
          <a
            href="https://www.linkedin.com/in/irene-patania/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "DodgerBlue" }}
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </span>
      </div> */}
    </div>
  );
}

export default Footer;
