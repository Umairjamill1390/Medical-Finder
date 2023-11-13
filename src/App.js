import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Search from './components/Search/Search';
import './App.css';


function App() {
    const [hospitals, setHospitals] = useState([]);
    const handleSearch = (query) => {
        // Here I need to add an API call to get search results
        console.log("Searching for:", query);
    };

    return (
        <div>
            <NavBar />
            {/* Here I can add routing or conditional rendering to load specific sections */}
            <div className="container">
                <div className="title-section text-center mt-4 rounded-container" style={{ backgroundColor: '#e6e6fa' }}>
                    <h1>Find your hospital and medical supplies</h1>
                    <h3>Leave all the work to us. Just type your need and we will figure out the rest!</h3>
                    <div className="container mt-5">
                        <Search setHospitals={setHospitals} />  
                    </div>
                </div>
                {/* Data coming in from the API using Zip-Code */}
                <div className="title-section text-center mt-4 rounded-container">
                    <div>
                        {hospitals.map((hospital, index) => (
                            <p key={index}>{hospital.name}</p>
                        ))}
                    </div>
                </div>
                <div className="container mt-4">
                    <p><b>Some filler data.</b></p>
                </div>

            </div>
            <Footer />
        </div>
    );
}

export default App;
