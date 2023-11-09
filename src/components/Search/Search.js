// src/components/Search/Search.js

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, InputGroup, FormControl, DropdownButton, Dropdown } from 'react-bootstrap';
import { onSearch } from './services/HospitalService/HospitalService'; // Import the onSearch function

function Search({ setHospitals }) {
    const [query, setQuery] = useState("");
    const [distance, setDistance] = useState("5"); // Default distance

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const hospitals = await onSearch(query, distance);
            setHospitals(hospitals); // Assuming you have a state in the parent component to store the hospitals data
        } catch (error) {
            console.error("Failed to fetch hospitals:", error);
            // Handle the error appropriately
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Enter zip code or address..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <DropdownButton
                    variant="outline-secondary"
                    title={`Distance: ${distance} miles`}
                    id="input-group-dropdown-2"
                    align="end"
                >
                    <Dropdown.Item onClick={() => setDistance("5")}>5 miles</Dropdown.Item>
                    <Dropdown.Item onClick={() => setDistance("10")}>10 miles</Dropdown.Item>
                    <Dropdown.Item onClick={() => setDistance("25")}>25 miles</Dropdown.Item>
                    <Dropdown.Item onClick={() => setDistance("50")}>50 miles</Dropdown.Item>
                </DropdownButton>
                <Button variant="primary" type="submit">Search</Button>
            </InputGroup>
        </Form>
    );
}

export default Search;
