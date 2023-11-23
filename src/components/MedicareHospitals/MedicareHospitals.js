// src/components/MedicareHospitals/MedicareHospitals.js

import React, { useState, useEffect } from "react";
import MedicareHospitalService from "../../Services/MedicareHospitalService/MedicareHospitalService";
import '../HospitalCard/HospitalCard.css';
import './MedicareHospitals.css'
import defaultImage from '../../Assets/hospital-default.png';

const MedicareHospitalList = ({ zipCode }) => {
    const [medicareHospitalList, setMedicareHospitals] = useState([]);
  
    useEffect(() => {
        if (zipCode) {
            MedicareHospitalService.getHospitalsByZip(zipCode)
                .then(data => {
                    setMedicareHospitals(data);
                })
                .catch(error => console.error(error));
        }
    }, [zipCode]);

    return (
        <div className="hospital-list">
            {medicareHospitalList.map((hospital, index) => (
                <div key={index} className="hospital-card">
                    <div className="background-image" style={{ backgroundImage: `url(${hospital.imageUrl || defaultImage})` }}></div>
                    <div className="card-content">
                        <h5 className="hospital-name">{hospital.name}</h5>
                        <p className="hospital-detail">
                            Address: {`${hospital.addressLine1 || ''} ${hospital.addressLine2 || ''}, ${hospital.city || ''}, ${hospital.state || ''}, ${hospital.zip ? hospital.zip.substring(0, 5) : 'N/A'}`}
                        </p>
                        <p className="hospital-detail">General Hospital: {hospital.generalHospital ? "Yes" : "No"}</p>
                        <p className="hospital-detail">Children's Hospital: {hospital.childrenHospital ? "Yes" : "No"}</p>
                        <p className="hospital-detail">Psychiatric Hospital: {hospital.psychiatricHospital ? "Yes" : "No"}</p>
                        <p className="hospital-detail">Rehabilitation Hospital: {hospital.rehabilitationHospital ? "Yes" : "No"}</p>
                    </div>
                </div>
            ))}
        </div>
    );
} 

export default MedicareHospitalList;
