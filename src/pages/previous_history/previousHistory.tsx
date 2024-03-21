import React, { useState } from "react";
import GetData from "./GetData.js";
import GetDate from "../../components/GetDate.js";
import useHistoryChart from "../../hooks/useHistoryChart.js";
import useLocationName from "../../hooks/useLocationName.js";

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
import { Line } from "react-chartjs-2";
import useCurrentLocation from "../../hooks/useCurrentLocation.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function PreviousHistory() {
  const labels = [
    GetDate(6),
    GetDate(5),
    GetDate(4),
    GetDate(3),
    GetDate(2),
    GetDate(1),
    GetDate(0),
  ];
  const labelsTestData = [
    GetData(6),
    GetData(5),
    GetData(4),
    GetData(3),
    GetData(2),
    GetData(1),
    GetData(0),
  ];

  console.log();
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Last 7 Days History",
      },
    },
  };

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

  const { location, errorL } = useCurrentLocation();
  const { locationName, errorLN } = useLocationName(
    location?.latitude,
    location?.longitude
  );

  const cityName = locationName?.[0]?.name;

  return (
    <>
      <div className="row text-center">
        <div className="col-sm-12">
          <h1>{cityName}</h1>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col col-sm-8">
          <Line options={options} data={data} />
        </div>
      </div>
    </>
  );
}
