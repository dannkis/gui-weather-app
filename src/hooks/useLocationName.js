import { useState, useEffect } from 'react';

// Custom hook to fetch and return the name of a location based on its latitude and longitude.
const useLocationName = (lat, lon) => {
    const API_KEY = '8e18f8f41d00cf2d384d7250ee50e3e3'; // API key for OpenWeatherMap, should be an environment variable.
    const [locationName, setData] = useState(null); // State to store the location name.
    const [errorLN, setError] = useState(null); // State to store any errors that occur during data fetching.

    useEffect(() => {
        // Fetches data from the OpenWeatherMap Geocoding API.
        const fetchData = async () => {
            try {
                // Request to get location name based on latitude and longitude.
                const response = await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
                if (!response.ok) throw new Error('Location data fetching failed');
                const json = await response.json();
                setData(json); // Update locationName with the fetched data.
            } catch (err) {
                setError(err.toString()); // Update errorLN with any errors encountered during fetch.
            } 
        };
        fetchData();
    }, [lat, lon]); // Effect will re-run if latitude or longitude values change.

    return { locationName, errorLN }; // Expose locationName and errorLN for external use.
};

export default useLocationName;
