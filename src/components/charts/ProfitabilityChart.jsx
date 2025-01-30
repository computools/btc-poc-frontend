import React from "react";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function ProfitabilityChart() {
  const data = {
    labels: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"],
    datasets: [
      {
        label: "Net Profit Margin",
        data: [0.1, 0.1, 0.15, 0.3, 0.2, -0.05, -0.03, -0.1],
        borderColor: "#578bae",
        backgroundColor: "#578bae",
        tension: 0,
      },
      {
        label: "Operating Profit Margin",
        data: [0.15, 0.17, 0.2, 0.27, 0.25, 0.1, 0.05, 0.0],
        borderColor: "#a84444",
        borderDash: [5, 5],
        backgroundColor: "#a84444",
        tension: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Profitability",
        color: "#578bae",
        align: 'start',
        padding: {
          bottom: 20,
        }
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="max-w-3xl mx-auto h-80">
      <Line data={ data } options={ options }/>
    </div>
  );
};
