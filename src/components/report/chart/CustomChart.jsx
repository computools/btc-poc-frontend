import { Bar } from "react-chartjs-2";

export const CustomChart = ({
  data,
  title,
  subtitle,
  colorPrimary,
  fontSizeSubtitle,
  fontSizeTick,
}) => {
  const chartData = {
    labels: data.map(({ label }) => label),
    datasets: [
      {
        label: "Values",
        data: data.map(({ value }) => value),
        backgroundColor: colorPrimary,
        borderColor: colorPrimary,
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    indexAxis: "y",
    responsive: true,
    plugins: {
      title: {
        text: title,
      },
      subtitle: {
        display: true,
        text: subtitle,
        font: { size: fontSizeSubtitle },
        color: colorPrimary,
        align: "start",
      },
      legend: { display: false },
      datalabels: { display: false },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: { display: true },
        ticks: {
          font: { size: fontSizeTick },
          color: "rgba(0, 0, 0, 1)",
        },
      },
      y: {
        grid: { display: true },
        ticks: {
          font: { size: fontSizeTick },
          color: "rgba(0, 0, 0, 1)",
        },
      },
    },
  };

  return (
    <div className="w-[350px] h-[350px]">
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};
