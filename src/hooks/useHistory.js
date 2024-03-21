import { useState, useEffect } from 'react';

const useHistory = (lat, lon) => {
    const API_KEY = '8e18f8f41d00cf2d384d7250ee50e3e3'; // Use environment variable
    const [dataHis, setData] = useState(null);
    const [errorHis, setError] = useState(null);
    const currentEpochTime = Date.now();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://history.openweathermap.org/data/2.5/history/city?lat=${lat}&lon=${lon}&type=hour&end=${currentEpochTime}&units=metric&appid=${API_KEY}`);
                if (!response.ok) throw new Error('Weather data fetching failed');
                const json = await response.json();
                setData(json);
            } catch (err) {
                setError(err.toString());
            } 
        };
        fetchData();
    }, [lat, lon, currentEpochTime]); 
    console.log("DATA HIS", dataHis);
    return { dataHis, errorHis };
};
export default useHistory;

