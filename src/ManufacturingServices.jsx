import React from 'react';
import './ManufacturingServices.css';

import { services } from './index.ts';

import statsImage from './assets/Image/state.png';





export default function ManufacturingServices() {
  return (
    <div>
      <div className="services-section">
      <div className="services-header">
        <h2>Efficient and Integrated<br />Manufacturing Services</h2>
        <p>Simplify operations with our efficient, quality-focused services.</p>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.icon} alt={`${service.title} icon`} className="service-icon" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      </div>

      <div className="key-benefits-section">
      <div className="key-benefits-container">
        <div className="benefits-image">
          <img src={statsImage} alt="Key Benefits Chart" />
        </div>
        <div className="benefits-content">
          <h2>Key Benefits of Our System for Your Business Efficiency</h2>
          <p className="intro-text">
            Our systems boost productivity, cut costs, and drive business growth.
          </p>
          <ul className="benefits-list">
            <li>
              <span className="check-icon">✔</span>
              <div>
                <strong>Boosting Quality with Tech</strong>
                <p>With advanced technology, we help you achieve top product quality. Discover how we can enhance your standards.</p>
              </div>
            </li>
            <li>
              <span className="check-icon">✔</span>
              <div>
                <strong>Optimization Production Process</strong>
                <p>Boost factory efficiency and productivity with our innovative solutions. See how the latest technology can maximize your output.</p>
              </div>
            </li>
            <li>
              <span className="check-icon">✔</span>
              <div>
                <strong>AI-Driven Production</strong>
                <p >Leverage the power of AI to transform your manufacturing processes, achieving faster and more effective results.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

<services />
 </div>
  );
}