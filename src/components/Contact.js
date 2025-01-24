
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <p>If you want to collaborate or just say hi, feel free to reach out!</p>
        <div className="contact-info">
          <h3>Ways to Connect:</h3>
          <ul>
            <li><a href="mailto:your-email@example.com">Email Me</a></li>
            <li><a href="https://linkedin.com/in/preethi-688bb4263" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            {/* Add other social links here */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
