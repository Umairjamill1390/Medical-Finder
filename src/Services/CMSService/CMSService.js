// ./src/Services/CMSServices/CMSServices.js
const CMS_API_BASE_URL = 'https://data.cms.gov/provider-data/api/1/datastore/sql';


// Function to fetch data from CMS API based on a query
export const fetchDataFromCMS = async (query) => {
    const url = `${CMS_API_BASE_URL}?query=${encodeURIComponent(query)}&show_db_columns`;

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('CMS API response was not ok');
    }

    const data = await response.json();
    return data; // Adjust based on actual response format
};


// Function to get detailed hospital data based on ZIP code
export const getDetailedHospitalData = async (zipCode) => {
    const query = `[SELECT facility_id, facility_name, address, city_town, state, zip_code, county_parish, telephone_number, hospital_type, hospital_ownership, emergency_services FROM dca90d1c-047a-5377-ad18-bb78e1b24050][WHERE ZIP_Code = "${zipCode}"][LIMIT 10]`;
    return await fetchDataFromCMS(query);
};

// Add more functions as needed for other specific queries
