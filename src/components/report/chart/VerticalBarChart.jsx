import { Bar } from "react-chartjs-2";

export const VerticalBarChart = ({
  data,
  title,
  subtitle,
  colorPrimary,
  fontSizeSubtitle,
  fontSizeTick,
}) => {
  const verticalChartData = {
    labels: data.map(({ label }) => label),
    datasets: [
      {
        label: "Liquid",
        data: data.map(({ liquid }) => liquid),
        backgroundColor: colorPrimary,
        borderColor: colorPrimary,
        borderWidth: 1,
        order: 1,
        zIndex: 1,
      },
      {
        label: "Current",
        data: data.map(({ current }) => current),
        backgroundColor: "rgb(189, 189, 189)",
        borderColor: "rgb(189, 189, 189)",
        borderWidth: 1,
        order: 1,
        zIndex: 1,
      },
      {
        type: "scatter",
        label: "Net Liquid",
        data: data.map(({ net_liquid }, index) => ({
          x: index,
          y: net_liquid,
        })),
        borderColor: "rgb(229, 115, 115)",
        backgroundColor: "rgb(229, 115, 115)",
        borderWidth: 2,
        pointBackgroundColor: "rgb(229, 115, 115)",
        pointBorderColor: "rgb(229, 115, 115)",
        pointRadius: 5,
        pointStyle: "triangle",
        order: 2,
        zIndex: 3,
      },
    ],
  };

  const verticalChartOptions = {
    indexAxis: "x",
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: title,
        color: colorPrimary,
        align: "start",
      },
      subtitle: {
        display: true,
        text: subtitle,
        font: {
          size: fontSizeSubtitle,
        },
        color: colorPrimary,
        align: "start",
      },
      legend: {
        display: true,
        position: "bottom",
      },
      datalabels: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
        },
        ticks: {
          font: {
            size: fontSizeTick,
          },
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: true,
        },
        ticks: {
          font: {
            size: fontSizeTick,
          },
        },
      },
    },
  };

  return (
    <div className="w-[350px] h-[350px] bg-white p-4">
      <Bar data={verticalChartData} options={verticalChartOptions} />
    </div>
  );
};
