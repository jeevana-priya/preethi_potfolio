// Skills.js
import React from 'react';
import './Skills.css'; 
import AutoCADImg from '../Images/cad-file.png';
import BIMImg from '../Images/bim.png';
import SustainabilityImg from '../Images/planet-earth.png';
import ArtImg from '../Images/palette.png';
import CommunicationImg from '../Images/conversation.png';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>My Skills</h2>
        <div className="skills-list">
          <div className="skill">
            <img src={AutoCADImg} alt="AutoCAD" className="skill-img" />
            <h3>AutoCAD</h3>
            <p>
              With hands-on experience in AutoCAD, I create accurate designs and blueprints for a variety of
              projects. This software is my go-to tool for visualizing concepts and transforming ideas into
              workable plans.
            </p>
          </div>
          <div className="skill">
            <img src={BIMImg} alt="BIM" className="skill-img" />
            <h3>Building Information Modeling (BIM)</h3>
            <p>
              I have a solid understanding of BIM and its applications in project visualization, analysis, and
              management. BIM helps me coordinate every aspect of construction and make informed decisions.
            </p>
          </div>
          <div className="skill">
            <img src={SustainabilityImg} alt="Sustainability" className="skill-img" />
            <h3>Sustainability Practices</h3>
            <p>
              Passionate about sustainable development, I am always exploring ways to incorporate green
              technologies and environmentally friendly practices in construction projects.
            </p>
          </div>
          <div className="skill">
            <img src={ArtImg} alt="Art" className="skill-img" />
            <h3>Artistic Design</h3>
            <p>
              As a passionate artist, I integrate creativity into my work. Whether through sketches, conceptual
              drawings, or visual presentations, I use art to add a unique, innovative touch to my engineering
              projects.
            </p>
          </div>
          <div className="skill">
            <img src={CommunicationImg} alt="Communication" className="skill-img" />
            <h3>Communication</h3>
            <p>
              Effective communication is key in any project. I pride myself on being able to clearly convey ideas
              and collaborate with team members, ensuring a smooth flow of information throughout the development
              and construction phases.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
