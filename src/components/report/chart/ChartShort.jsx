import { Bar } from "react-chartjs-2";

export const ChartShort = ({ data }) => {
  const chartData = {
    labels: data.map(({ label }) => label),
    datasets: [
      {
        label: "Values",
        data: data.map(({ value }) => value),
        backgroundColor: "#578bae",
        borderColor: "#578bae",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    indexAxis: "x",
    responsive: true,
    plugins: {
      title: { display: false },
      subtitle: { display: false },
      legend: { display: false },
      datalabels: { display: false },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: { display: false },
        ticks: { display: false },
        border: {
          display: false,
        },
      },
      y: {
        grid: { display: false },
        ticks: { display: false },
        border: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="w-[150px] h-[80px] border-0">
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};
