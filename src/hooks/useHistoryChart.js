import { useState, useEffect } from "react";

const useHistoryChart = (lat, lon, date) => {
  const KEY = "f7bb066e434848db8f5161619242103"; // Use environment variable
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const latLon = new String(lat + "," + lon);
  console.log(date);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/history.json?key=${KEY}&q=${latLon}&dt=${date}`
        );
        if (!response.ok) throw new Error("Weather history fetching failed");
        const json = await response.json();
        setData(json?.forecast.forecastday[0].day.avgtemp_c);
      } catch (err) {
        setError(err.toString());
      }
    };
    fetchData();
  }, [lat, lon, date]);
  console.log("JSON FILE " + data);
  console.log("AVERAGE TEMP " + data);
  return data;
};

export default useHistoryChart;
