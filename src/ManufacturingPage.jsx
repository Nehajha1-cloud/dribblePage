import React from "react";
import "./ManufacturingPage.css";

import Pipe from './assets/Image/Pipes.jpg';
import Gear from './assets/logo/Gear.png';
import Calander from './assets/logo/calander.png';

const ManufacturingPage = () => {
  return (
    <div className="manufacturing-page">
      <h1>
        The Future of Manufacturing <br />
        with <span className="highlight">Latest Technology</span>
      </h1>
      <p className="subheading">
        Expert tech to elevate your manufacturing. Let’s take your business further.
      </p>

      <div className="buttons">
        <button className="get-started">Get Started</button>
        <button className="try-demo">Try Demo</button>
      </div>

      <div>
      <span className="rating">
        <span className="stars">★ ★ ★ ★ ★</span>  {/* Golden stars */}
        5.0
        <br />
        <span className="light">from 80+</span>
        <a href="#">reviews</a>
      </span>
    </div>

    <div className="icon-wrapper">
  <div className="icon left">
  <div className="circle-btn">✦</div>
    <div className="circle-btn2">↗</div>
  </div>
<div className="right-icon">
<div className="icon right">
    <div className="circle-btnn">📊</div>
  </div>
  <div className="icon right1">
    <div className="circle-btn4">〰️</div>
  </div>
</div>
  </div>  

    <div className="card-row">
        <div className="card tall image-card">
          <img src={Pipe} alt="Pipes" />
        </div>

        <div className="card medium dark-card">
          <h2>100+</h2>
          <p>Our Esteemed Clients and Partners</p>
        </div>

        <div className="card short white-card">

  <div className="icon-row">
    <img src={Calander} alt="calander" className="calander" />
    <div className="dot-menu">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
  <h3>
    Total Projects 
    <span className="percent-change">
      <span className="arrow-circle">↗</span> 8%
    </span>
  </h3>
  <h2>1951+</h2>
  <p className="green">Increase of <span className="bold">126 </span>this month</p>
</div>

        <div className="card medium light-green-card">
          <h2>6+</h2>
          <p>Years of Dedicated Service</p>
        </div>

        <div className="card tall darks-card">
          <img src={Gear} alt="gear" className="small-img"/>
          <p>Achieve Optimal Efficiency and Boost Productivity</p>
        </div>
      </div>

    </div> 
  );
};

export default ManufacturingPage;