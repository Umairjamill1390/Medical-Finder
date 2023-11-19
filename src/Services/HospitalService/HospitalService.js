// ./src/Services/HospitalService/HospitalService.js
import { calculateDistance } from '../../Utils/Utils';

// Function to get coordinates from the Nominatim API based on the zip code
export const getCoordinatesFromZip = async (zipCode) => {
    const url = `https://nominatim.openstreetmap.org/search?format=json&postalcode=${zipCode}&country=USA`;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'User-Agent': 'HealthiCompass/1.0 (healthicompass@gmail.com)',
        }
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data = await response.json();
    if (data.length === 0) {
        throw new Error('No coordinates found for this zip code');
    }

    return {
        latitude: data[0].lat,
        longitude: data[0].lon
    };
};


// Function to get hospitals from the Overpass API based on coordinates
export const getHospitalsNearby = async (userCoordinates, searchRadius) => {
    const { latitude: userLatitude, longitude: userLongitude } = userCoordinates;
    const overpassQuery = `
    [out:json]; 
    (
        node["amenity"="hospital"](around:${searchRadius * 1609.34},${userLatitude},${userLongitude});
    );
    out center;`;

    const response = await fetch(`https://overpass-api.de/api/interpreter?data=${encodeURIComponent(overpassQuery)}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data.elements.map(hospitalNode => ({
        name: hospitalNode.tags.name,
        latitude: hospitalNode.lat,
        longitude: hospitalNode.lon,
        distance: calculateDistance(userLatitude, userLongitude, hospitalNode.lat, hospitalNode.lon).toFixed(2)
    }));
};

// export const getHospitalDetails = async (hospitalName) => {
//     // Construct the URL for the Hospital Compare API with the hospital name
//     const url = `https://hospital-compare-api.com/details?name=${encodeURIComponent(hospitalName)}`;
//     // Replace with the actual endpoint and parameters

//     const response = await fetch(url);
//     if (!response.ok) {
//         throw new Error('Network response was not ok');
//     }

//     const data = await response.json();
//     return data; // Modify based on the actual response structure
// };

// The onSearch function that uses the above functions
export const onSearch = async (zipCode, distance) => {
    const userCoordinates = await getCoordinatesFromZip(zipCode);
    const hospitals = await getHospitalsNearby(userCoordinates, distance);
    // console.log("Hospitals From from API:", hospitals); // Log the data here
    return hospitals || [];

    // const detailedHospitals = await Promise.all(
    //     hospitals.map(async (hospital) => {
    //         try {
    //             const details = await getHospitalDetails(hospital.name);
    //             return { ...hospital, ...details }; // Combine basic and detailed data
    //         } catch (error) {
    //             console.error('Error fetching details for hospital:', hospital.name);
    //             return hospital; // Return basic data if detailed data can't be fetched
    //         }
    //     })
    // );

    // return detailedHospitals;
};