import React from 'react';
import './IntegrationPage.css';

import researchIcon from './assets/logo/researchIcon.png';

const IntegrationPage = () => {
  return (
    <div className="integration-container">
      <section className="section-light">
        <div className="content">
          <div className="text-block">
            <h1>Empowering Top Companies with Seamless Integrations</h1>
            <p>
              Experience seamless connections with our innovative solutions,
              designed to effortlessly integrate with your existing systems,
              enhance productivity, and drive your business towards greater
              success.
            </p>
            <button className="cta-button">Work With Us</button>
          </div>
          <div className="icons-block">
            <div className="icons-circle">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="icon-placeholder">
                  <img src={researchIcon} alt='icon'></img>
                </div>
              ))}
            </div> 
          </div>
        </div>
      </section>

      <section className="section-dark">
        <h2>From Idea to Production in Days</h2>
        <p>
          Accelerate your production with our technology. Reduce downtime and
          optimize costs. Get a special offer now!
        </p>
        <button className="cta-button">Work With Us</button>
      </section>
    </div>
  );
};

export default IntegrationPage;