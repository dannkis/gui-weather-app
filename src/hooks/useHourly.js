import { useState, useEffect } from 'react';

const useHourly = (city) => {
    const API_KEY = '8e18f8f41d00cf2d384d7250ee50e3e3'; // Use environment variable
    const [dataH, setData] = useState(null);
    const [errorH, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${city}&appid=${API_KEY}&units=metric`);
                if (!response.ok) throw new Error('Weather data fetching failed');
                const json = await response.json();
                setData(json);
            } catch (err) {
                setError(err.toString());
            } 
        };
        fetchData();
    }, [city]); 
    console.log(dataH);
    return { dataH, errorH };
};
export default useHourly;

