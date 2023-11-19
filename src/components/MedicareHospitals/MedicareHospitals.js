// src/components/MedicareHospitals/MedicareHospitals.js
import React, { useState, useEffect } from "react";
import MedicareHospitalService from "../../Services/MedicareHospitalService/MedicareHospitalService";

const MedicareHospitals = ({ zipCode }) => {
    const [medicareHospitals, setMedicareHospitals] = useState([]);
  
    useEffect(() => {
        if (zipCode) {
          MedicareHospitalService.getHospitalsByZip(zipCode)
            .then(data => {
            //   console.log("CMS DATA:", data); // Log CMS data here
              setMedicareHospitals(data);
            })
            .catch(error => console.error(error));
        }
    }, [zipCode]);

    return (
        <div>
            {medicareHospitals.map((hospital, index) => (
                <div key={index}>
                    <h2>{hospital.name}</h2>
                    <p>Address: {hospital.addressLine1 ? hospital.addressLine1 : ''} {hospital.addressLine2 ? hospital.addressLine2 : ''}, {hospital.city ? hospital.city : ''}, {hospital.state ? hospital.state : ''}, {hospital.zip ? hospital.zip.substring(0, 5) : 'N/A'}</p>
                    <p>General Hospital: {hospital.generalHospital ? "Yes" : "No"}</p>
                    <p>Children's Hospital: {hospital.childrenHospital ? "Yes" : "No"}</p>
                    <p>Psychiatric Hospital: {hospital.psychiatricHospital ? "Yes" : "No"}</p>
                    <p>Rehabilitation Hospital: {hospital.rehabilitationHospital ? "Yes" : "No"}</p>
                </div>
            ))}
        </div>
    );
};

export default MedicareHospitals;
