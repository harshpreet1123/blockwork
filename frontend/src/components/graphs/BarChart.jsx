import { useEffect, useRef } from "react";
import {
  Chart,
  BarController,
  BarElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";

Chart.register(
  BarController,
  BarElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale
);

const BarChart = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");

    const data = {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
        {
          label: "Bids Placed",
          data: [5, 9, 8, 6, 7],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
        },
        title: {
          display: true,
          text: "Bar Chart",
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
          display: true,
          title: {
            display: false,
            text: "Month",
          },
        },
        y: {
          grid: {
            display: false,
          },
          display: true,
          title: {
            display: false,
            text: "Value",
          },
        },
      },
    };

    const barChart = new Chart(ctx, {
      type: "bar",
      data: data,
      options: options,
    });

    return () => {
      barChart.destroy();
    };
  }, []);

  return (
    <div className="w-1/2 h-108 p-4 border-b-2 rounded ">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default BarChart;
