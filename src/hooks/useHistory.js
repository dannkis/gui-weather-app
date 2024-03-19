import { useState, useEffect } from 'react';

const useHistory = (city) => {
    const API_KEY = '8e18f8f41d00cf2d384d7250ee50e3e3'; // Use environment variable
    const [dataHis, setData] = useState(null);
    const [errorHis, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://history.openweathermap.org/data/2.5/history/city?q=${city}&units=metric&appid=${API_KEY}`);
                if (!response.ok) throw new Error('Weather data fetching failed');
                const json = await response.json();
                setData(json);
            } catch (err) {
                setError(err.toString());
            } 
        };
        fetchData();
    }, [city]); 
    console.log(dataHis);
    return { dataHis, errorHis };
};
export default useHistory;

