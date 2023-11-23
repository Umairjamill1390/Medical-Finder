// src/Utils/Utils.js

// Haversine Formula
export function calculateDistance(lat1, lon1, lat2, lon2) {
    const earthRadiusMiles = 3959;
    const deltaLatitude = degreesToRadians(lat2 - lat1);
    const deltaLongitude = degreesToRadians(lon2 - lon1);
    const a = 
        Math.sin(deltaLatitude / 2) * Math.sin(deltaLatitude / 2) +
        Math.cos(degreesToRadians(lat1)) * Math.cos(degreesToRadians(lat2)) * 
        Math.sin(deltaLongitude / 2) * Math.sin(deltaLongitude / 2);
    const circumference = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return earthRadiusMiles * circumference;
}

function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}
