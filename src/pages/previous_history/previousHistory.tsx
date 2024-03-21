import React from "react";
import { Line } from "react-chartjs-2";
import useCurrentLocation from "../../hooks/useCurrentLocation.js";
import useLocationName from "../../hooks/useLocationName.js";
import GetDate from "../../components/GetDate.js";
import GetData from "./GetData.js";
import useHistoryChart from "../../hooks/useHistoryChart.js";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

/**
 * Previous History Component
 * Renders a chart displaying previous history data for the last 7 days
 */
export default function PreviousHistory() {
  // Get labels for the last 7 days
  const labels = [
    GetDate(6),
    GetDate(5),
    GetDate(4),
    GetDate(3),
    GetDate(2),
    GetDate(1),
    GetDate(0),
  ];

  // Get historical data for the last 7 days
  const labelsTestData = [
    GetData(6),
    GetData(5),
    GetData(4),
    GetData(3),
    GetData(2),
    GetData(1),
    GetData(0),
  ];

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Last 7 Days History",
      },
    },
  };

  // Chart data
  const data = {
    labels,
    datasets: [
      {
        label: "Average Temperature (°C)",
        data: labelsTestData,
        borderColor: "#8de969",
        backgroundColor: "#8de969",
      },
    ],
  };

  // Get current location and name
  const { location, errorL } = useCurrentLocation();
  const { locationName, errorLN } = useLocationName(
    location?.latitude,
    location?.longitude
  );

  // Extract city name from location data
  const cityName = locationName?.[0]?.name;

  return (
    <>
      {/* Display city name */}
      <div className="row text-center">
        <div className="col-sm-12">
          <h1>{cityName}</h1>
        </div>
      </div>
      {/* Display line chart */}
      <div className="row justify-content-center">
        <div className="col col-sm-8">
          <Line options={options} data={data} />
        </div>
      </div>
    </>
  );
}
