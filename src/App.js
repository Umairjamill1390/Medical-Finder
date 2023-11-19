import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Search from './components/Search/Search';
import HospitalCard from './components/HospitalCard/HospitalCard';
import MedicareHospitals from './components/MedicareHospitals/MedicareHospitals';
import './App.css';


function App() {
    const [hospitals, setHospitals] = useState([]);
    const [zipCode, setZipCode] = useState("");
    // console.log("Hospitals data from my APP baby:", hospitals);
    return (
        <div>
            <NavBar />
            {/* Here I can add routing or conditional rendering to load specific sections */}
            <div className="container">
                
                <div className="title-section text-center mt-4 rounded-container" style={{ backgroundColor: '#e6e6fa' }}>
                    <h1>Find your hospital and medical supplies</h1>
                    <h3>Leave all the work to us. Just type your need and we will figure out the rest!</h3>
                    <div className="container">
                        <Search setHospitals={setHospitals} setZipCode={setZipCode} />
                        <div className="hospital-list">
                            {hospitals && hospitals.map((hospital, index) => (
                                <HospitalCard key={index} hospital={hospital} />
                            ))}
                        </div>
                        {/* Pass zipCode to MedicareHospitals */}
                        <MedicareHospitals zipCode={zipCode} />
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}

export default App;
