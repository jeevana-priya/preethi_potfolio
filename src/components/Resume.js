// Resume.js
import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <h2>My Resume</h2>
        <p>Here's a quick look at my professional background. You can also download my full resume below.</p>
        
        <div className="resume-content">
          <div className="resume-section">
            <h3>Education</h3>
            <ul>
              <li>
                <h4>Bachelor's in Civil Engineering</h4>
                <p>XYZ University - 2025</p>
              </li>
            </ul>
          </div>
          
          <div className="resume-section">
            <h3>Experience</h3>
            <ul>
              <li>
                <h4>Intern, Construction Engineering</h4>
                <p>ABC Construction - 2024</p>
                <p>Worked on structural design and site management.</p>
              </li>
            </ul>
          </div>

          <div className="resume-section">
            <h3>Skills</h3>
            <ul>
              <li>AutoCAD</li>
              <li>Revit</li>
              <li>Structural Analysis</li>
              <li>Project Management</li>
              <li>Technical Drawing</li>
            </ul>
          </div>

          <div className="resume-section">
            <h3>Projects</h3>
            <ul>
              <li>
                <h4>Bridge Design Project</h4>
                <p>Worked on designing a pedestrian bridge using AutoCAD.</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Button to download the PDF Resume */}
        <div className="resume-download">
          <a href="/path/to/your-resume.pdf" download className="download-btn">
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
