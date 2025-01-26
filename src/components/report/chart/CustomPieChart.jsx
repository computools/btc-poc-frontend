import { Pie } from "react-chartjs-2";

export const CustomPieChart = ({
  data,
  title,
  colorPrimary,
}) => {
  const pieChartData = {
    labels: data.map(({ label }) => label),
    datasets: [
      {
        label: "(Percent of total financial and non-financial assets)",
        data: data.map(({ value }) => value),
        backgroundColor: [
          "rgb(220, 237, 200)",
          "rgb(191, 54, 12)",
          "rgb(84, 110, 122)",
          "rgb(56, 142, 60)",
          "rgb(255, 235, 59)",
          "rgb(66, 66, 66)",
          "rgb(239, 154, 154)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const PieChartOptions = (title) => ({
    responsive: true,
    aspectRatio: 1.5,
    plugins: {
      title: {
        display: true,
        text: title,
        color: colorPrimary,
        align: "start",
      },
      legend: {
        display: true,
        position: "left",
      },
      datalabels: {
        display: true,
        color: "black",
        font: {
          size: 12,
          weight: "bold",
        },
        formatter: (value) => `${value}%`,
        anchor: "end",
        align: "start",
        offset: 10,
      },
    },
  });

  return (
    <div className="w-[400] h-[350px]">
      <Pie data={pieChartData} options={PieChartOptions(title)} />
    </div>
  );
};
