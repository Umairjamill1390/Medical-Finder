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
export const getHospitalsNearby = async ({ latitude, longitude }, distance) => {
    const overpassQuery = `
    [out:json];
    (
        node["amenity"="hospital"](around:${distance * 1609.34},${latitude},${longitude}); // distance * 1609.34 to convert from miles to meters
    );
    out center;`;

    const response = await fetch(`https://overpass-api.de/api/interpreter?data=${encodeURIComponent(overpassQuery)}`);

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data.elements.map(hospital => ({
        name: hospital.tags.name,
        latitude: hospital.lat,
        longitude: hospital.lon
    }));
};


// The onSearch function that uses the above functions
export const onSearch = async (zipCode, distance) => {
    const coordinates = await getCoordinatesFromZip(zipCode);
    const hospitals = await getHospitalsNearby(coordinates, distance);
    return hospitals;
};