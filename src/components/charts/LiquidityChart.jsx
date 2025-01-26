import { Line } from "react-chartjs-2";

export function LiquidityChart() {
  const data = {
    labels: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"],
    datasets: [
      {
        label: "Current Ratio",
        data: [1.1, 1.05, 1.0, 0.95, 1.0, 1.05, 1.1, 1.2],
        borderColor: "#578bae",
        backgroundColor: "#578bae",
        tension: 0,
      },
      {
        label: "Quick Ratio",
        data: [0.9, 0.85, 0.8, 0.75, 0.8, 0.85, 0.9, 1.0],
        borderColor: "#a84444",
        backgroundColor: "#a84444",
        tension: 0,
      },
      {
        label: "Current Ratio Benchmark",
        data: [1.7, 1.7, 1.7, 1.7, 1.7, 1.7, 1.7, 1.7],
        borderColor: "#578bae",
        borderDash: [5, 5],
        tension: 0,
      },
      {
        label: "Quick Ratio Benchmark",
        data: [1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3],
        borderColor: "#a84444",
        borderDash: [5, 5],
        tension: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "bottom", },
      title: {
        display: true,
        text: "Liquidity (Ratio)",
        color: "#578bae",
        align: 'start',
        padding: {
          bottom: 20,
        }
      },
    },
    scales: { y: { beginAtZero: true } },
  };

  return (
    <div className="max-w-3xl mx-auto">
      <Line data={ data } options={ options }/>
    </div>
  )
};
