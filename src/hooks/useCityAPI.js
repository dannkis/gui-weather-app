import { useState, useEffect } from "react";
import useAPI from "./useAPI";

const useCityAPI = (city) => {
  const API_KEY = "8e18f8f41d00cf2d384d7250ee50e3e3"; // Use environment variable
  const [dataC, setDataC] = useState(null);
  const [errorC, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`
        );
        if (!response.ok) throw new Error("Weather data fetching failed");
        const json = await response.json();
        setDataC(json);
      } catch (err) {
        setError(err.toString());
      }
    };
    fetchData();
  }, [city]);

  console.log(dataC);
  return dataC;
};

export default useCityAPI;
