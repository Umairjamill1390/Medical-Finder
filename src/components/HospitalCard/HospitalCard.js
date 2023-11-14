// src/components/HospitalCard/HospitalCard.js

import React from 'react';
import './HospitalCard.css';
import defaultImage from '../../Assets/hospital-default.png'; // Adjust the path as necessary

function HospitalCard({ hospital }) {
  return (
    <div className="hospital-card">
      <div className="background-image" style={{ backgroundImage: `url(${hospital.imageUrl || defaultImage})` }}></div>
      <div className="card-content">
        <h5 className="hospital-name">{hospital.name}</h5>
        <p className="hospital-distance">{hospital.distance} miles away</p>
      </div>
    </div>
  );
}

export default HospitalCard;
