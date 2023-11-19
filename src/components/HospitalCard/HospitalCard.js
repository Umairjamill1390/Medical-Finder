// src/components/HospitalCard/HospitalCard.js

import React from 'react';
import './HospitalCard.css';
import defaultImage from '../../Assets/hospital-default.png';

function HospitalCard({ hospital }) {
  const openInGoogleMaps = () => {
    const query = hospital.name; // Replace with coordinates if available
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="hospital-card" onClick={openInGoogleMaps} style={{ backgroundImage: `url(${hospital.imageUrl || defaultImage})` }}>
      <div className="background-image"></div>
      <div className="card-content">
        <h5 className="hospital-name">{hospital.name}</h5>
        <p className="hospital-distance">{hospital.distance} miles away</p>
      </div>
    </div>
  );
}

export default HospitalCard;
