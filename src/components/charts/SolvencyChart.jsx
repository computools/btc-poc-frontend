import { Line } from "react-chartjs-2";

export function SolvencyChart() {
  const data = {
    labels: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"],
    datasets: [
      {
        label: "Debt to Equity",
        data: [0.5, 0.55, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1],
        borderColor: "#578bae",
        backgroundColor: "#578bae",
        tension: 0,
      },
      {
        label: "Debt to Assets",
        data: [0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65],
        borderColor: "#3d6f36",
        backgroundColor: "#3d6f36",
        tension: 0,
      },
      {
        label: "Debt Coverage (RHS)",
        data: [0.4, 0.5, 0.6, 0.7, 0.5, 0.3, 0.2, 0.1],
        borderColor: "#a84444",
        backgroundColor: "#a84444",
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
        text: "Solvency (Ratio)",
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
    <div className="max-w-3xl mx-auto h-80">
      <Line data={ data } options={ options }/>
    </div>
  )
};
