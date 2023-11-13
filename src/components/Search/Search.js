// src/components/Search/Search.js

import React, { useState } from 'react';
import { Form, Button, InputGroup, FormControl, DropdownButton, Dropdown, Col } from 'react-bootstrap';
import { BiSearch } from 'react-icons/bi';
import { onSearch } from '../../Services/HospitalService/HospitalService';
import './Search.css';

function Search({ setHospitals }) {
    const [query, setQuery] = useState("");
    const [distance, setDistance] = useState("5");
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const isValidZipCode = (zipCode) => {
        return /^\d{5}$/.test(zipCode);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setHospitals([]);
    
        if (!isValidZipCode(query)) {
            setErrorMessage('Please enter a valid 5-digit zip code.');
            return;
        }
        setErrorMessage('');
    
        try {
            setIsLoading(true);
            const hospitals = await onSearch(query, distance);
            setHospitals(hospitals); 
            setIsLoading(false);
        } catch (error) {
            console.error("Failed to fetch hospitals:", error);
            setErrorMessage("Error fetching hospitals."); // Display error message
        }
    }

    return (
        <Form onSubmit={handleSubmit} className="mb-4">
            <InputGroup className="mb-3 search-input-group">
                <FormControl
                    placeholder="Enter zip code or address..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="search-input"
                />
                <InputGroup.Text>
                    <BiSearch onClick={handleSubmit} style={{ cursor: 'pointer' }} /> {/* Search icon */}
                </InputGroup.Text>
            </InputGroup>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            {isLoading && <div className="loading-indicator">Loading...</div>}
        </Form>
    );
}

export default Search;
