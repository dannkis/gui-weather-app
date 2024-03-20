import { useState, useEffect } from 'react';

const useAPI = (lat, lon) => {
    const API_KEY = '8e18f8f41d00cf2d384d7250ee50e3e3'; // Use environment variable
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
                if (!response.ok) throw new Error('Weather data fetching failed');
                const json = await response.json();
                setData(json);
            } catch (err) {
                setError(err.toString());
            } 
        };
        fetchData();
    }, [lat, lon]); 
    console.log(data);
    return data;
};

export default useAPI;
