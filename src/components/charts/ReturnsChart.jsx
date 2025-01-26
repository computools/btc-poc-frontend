import React from "react";
import { Line } from "react-chartjs-2";
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

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export function ReturnsChart() {
  const data = {
    labels: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"],
    datasets: [
      {
        label: "Return on Assets",
        data: [0.02, 0.03, 0.04, 0.08, 0.06, -0.01, -0.005, -0.02], // Пример данных
        borderColor: "#578bae",
        backgroundColor: "#578bae",
        tension: 0,
      },
      {
        label: "Return on Equity",
        data: [0.05, 0.07, 0.1, 0.15, 0.1, 0.02, 0, -0.03],
        borderColor: "#a84444",
        backgroundColor: "#a84444",
        tension: 0,
      },
      {
        label: "Return on Assets Benchmark",
        data: [0.07, 0.07, 0.07, 0.07, 0.07, 0.07, 0.07, 0.07],
        borderColor: "#578bae",
        borderDash: [5, 5],
        tension: 0,
      },
      {
        label: "Return on Equity Benchmark",
        data: [0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15],
        borderColor: "#a84444",
        borderDash: [5, 5],
        tension: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "bottom" },
      title: {
        display: true,
        text: "Returns (Ratio)",
        color: "#578bae",
        align: 'start',
        padding: {
          bottom: 20,
        }
      },
    },
    scales: { y: { beginAtZero: false } },
  };

  return (
    <div className="max-w-3xl mx-auto">
      <Line data={ data } options={ options }/>
    </div>
  )
};
