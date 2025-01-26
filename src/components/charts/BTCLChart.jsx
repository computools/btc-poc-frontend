import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export function BTCLChart() {
  const data = {
    labels: ["ROA", "Liquidity", "Cost Effectiveness"],
    datasets: [
      {
        label: "BTCL",
        data: [0.07, 2.57, 26.45],
        backgroundColor: ["#578bae", "#3d6f36", "#a84444"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "bottom" },
      title: {
        display: true,
        text: "BTCL And Its Comparator in Telecom Sector",
        color: "#578bae",
        align: 'start',
        padding: {
          bottom: 20,
        }
      },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="max-w-3xl mx-auto">
      <Bar data={ data } options={ options }/>
    </div>
  )
};

