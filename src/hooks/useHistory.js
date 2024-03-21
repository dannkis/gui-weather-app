import { useState, useEffect } from 'react';

// Custom hook for fetching historical weather data based on latitude and longitude.
const useHistory = (lat, lon) => {
    const API_KEY = '8e18f8f41d00cf2d384d7250ee50e3e3'; // Use environment variable for API key
    const [dataHis, setData] = useState(null);
    const [errorHis, setError] = useState(null);
    const currentEpochTime = Date.now(); // Get current time in milliseconds

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch historical weather data from OpenWeatherMap API.
                const response = await fetch(`https://history.openweathermap.org/data/2.5/history/city?lat=${lat}&lon=${lon}&type=hour&end=${currentEpochTime}&units=metric&appid=${API_KEY}`);
                if (!response.ok) throw new Error('Weather data fetching failed');
                const json = await response.json();
                setData(json); // Set fetched data
            } catch (err) {
                setError(err.toString()); // Set error on failure
            } 
        };
        fetchData();
    }, [lat, lon, currentEpochTime]); // Dependencies for useEffect

    console.log("DATA HIS", dataHis); // Debugging log for fetched data
    return { dataHis, errorHis };
};

export default useHistory;
