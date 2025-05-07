import React from 'react';
import './pricingPlans.css';

function PricingPlans() {
  return (
    <section className="pricing-section">
      <h2 className="pricing-heading">Tailored Plans for Your Manufacturing Scale</h2>
      <p className="pricing-subheading">Flexible pricing for any business size.</p>

      <div className="pricing-cards">
        <div className="pricing-card">
          <h3>Starter</h3>
          <p className="card-desc">This package offers the basic features you need to get started.</p>
          <div className="price">$39 <span>/ month</span></div>
          <button className="btn-outline">Get Started</button>
          <ul className="features">
            <li>Production up to 10,000 units per month</li>
            <li>24/7 technical support</li>
            <li>Access the production dashboard</li>
            <li>Initial setup guide</li>
          </ul>
        </div>

        <div className="pricing-card">
          <h3>Enterprise</h3>
          <p className="card-desc">This package provides full access to all premium features.</p>
          <div className="price">$99 <span>/ month</span></div>
          <button className="btn-outline">Get Started</button>
          <ul className="features">
            <li>Unlimited production units</li>
            <li>Dedicated account manager</li>
            <li>Tailored manufacturing solutions</li>
            <li>Predictive production optimization</li>
          </ul>
        </div>
      </div>

      <div className="professional-card">
        <h3>Professional</h3>
        <p>
  Designed for greater flexibility, this solution offers<br/>
  advanced tools for custom tailoring to your needs.
</p>
        <button className="btn-filled">Get Started</button>
        </div>
    </section>
  );
}

export default PricingPlans;