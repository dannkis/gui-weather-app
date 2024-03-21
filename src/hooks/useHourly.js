import { useState, useEffect } from 'react';

// Custom hook to fetch hourly weather data for given latitude and longitude.
const useHourly = (lat, lon) => {
    const API_KEY = '8e18f8f41d00cf2d384d7250ee50e3e3'; // Ideally, use an environment variable for the API key.
    const [dataH, setData] = useState(null);
    const [errorH, setError] = useState(null);

    useEffect(() => {
        // Asynchronous function to fetch data from the weather API.
        const fetchData = async () => {
            try {
                // Attempt to fetch hourly weather data.
                const response = await fetch(`https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
                if (!response.ok) throw new Error('Weather data fetching failed');
                const json = await response.json();
                setData(json); // Update state with fetched data.
            } catch (err) {
                setError(err.toString()); // Update state with any error that occurs during fetching.
            } 
        };
        fetchData();
    }, [lat, lon]); // Dependencies for useEffect, re-fetch if lat or lon changes.
    console.log(dataH); // Log the fetched data for debugging.
    
    return { dataH, errorH }; // Return the fetched data and any error state.
};
export default useHourly;
