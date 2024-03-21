import React, { useEffect, useState } from "react";
import useHistory from "../../hooks/useHistory"; // Importing custom hook for historical weather data
import useCurrentLocation from "../../hooks/useCurrentLocation"; // Importing custom hook for current location
import useHistoryChart from "../../hooks/useHistoryChart"; // Importing custom hook for historical chart data
import GetDate from "../../components/GetDate"; // Importing utility function to get date

/**
 * Custom hook to fetch historical weather data for a specific day
 * @param {number} dayDelta - Number of days in the past (0 for today, 1 for yesterday, and so on)
 * @returns {object} - Historical weather data for the specified day, or 0 if data is not available
 */
function GetData(dayDelta) {
  // Fetch current user location
  const { location, errorL } = useCurrentLocation();
  // Fetch historical weather chart data based on location and specified day
  const dataHis = useHistoryChart(
    location?.latitude,
    location?.longitude,
    GetDate(dayDelta)
  );
  console.log("USE NEW API DATA: ", dataHis);
  // Return historical weather data or 0 if not available
  return dataHis == null ? 0 : dataHis;
}

export default GetData;
