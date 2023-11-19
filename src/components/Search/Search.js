// src/components/Search/Search.js

import React, { useState } from 'react';
import { Form, InputGroup, FormControl } from 'react-bootstrap';
import { BiSearch } from 'react-icons/bi';
import { onSearch } from '../../Services/HospitalService/HospitalService';
import './Search.css';

function Search({ setHospitals, setZipCode }) {
    const [query, setQuery] = useState("");
    const [distance] = useState("5");
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const isValidZipCode = (zipCode) => {
        return /^\d{5}$/.test(zipCode);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isValidZipCode(query)) {
            setErrorMessage('Please enter a valid 5-digit zip code.');
            return;
        }
        // Set the zip code in App.js state
        setZipCode(query);

        try {
            setIsLoading(true);
            const hospitals = await onSearch(query, distance);
    
            // Check if the hospitals array is empty
            if (hospitals.length === 0) {
                setErrorMessage("No hospitals found in this area.");
                setHospitals([]);
            } else {
                setHospitals(hospitals);
                setErrorMessage(""); // Clear any existing error messages
            }
        } catch (error) {
            console.error("Search Error:", error);
            setErrorMessage("Error fetching hospitals. Please try again.");
        } finally {
            setIsLoading(false);
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
