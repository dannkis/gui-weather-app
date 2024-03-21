import { useState, useEffect } from "react";

const useHistoryChart = (lat, lon, date) => {
  const KEY = "f7bb066e434848db8f5161619242103"; // Weather API key (consider using environment variables)
  const [data, setData] = useState(null); // State to store fetched data
  const [error, setError] = useState(null); // State to store error, if any
  const latLon = new String(lat + "," + lon); // Combine latitude and longitude into a string
  console.log(date); // Log the provided date for debugging

  useEffect(() => {
    // Effect hook to fetch weather history data
    const fetchData = async () => {
      try {
        // Fetch weather history data from the API
        const response = await fetch(
          `https://api.weatherapi.com/v1/history.json?key=${KEY}&q=${latLon}&dt=${date}`
        );

        // Throw an error if response is not OK
        if (!response.ok) throw new Error("Weather history fetching failed");

        // Parse response JSON
        const json = await response.json();

        // Extract and set average temperature from the response
        setData(json?.forecast.forecastday[0].day.avgtemp_c);
      } catch (err) {
        // Set error state if fetching or parsing fails
        setError(err.toString());
      }
    };

    // Call the fetchData function
    fetchData();

    // Cleanup function (not needed in this case)
    // Return data cleanup function if necessary
  }, [lat, lon, date]); // Run effect when latitude, longitude, or date changes

  console.log("JSON FILE " + data); // Log fetched JSON data for debugging
  console.log("AVERAGE TEMP " + data); // Log average temperature for debugging

  return data; // Return fetched data
};

export default useHistoryChart; // Export useHistoryChart custom hook
