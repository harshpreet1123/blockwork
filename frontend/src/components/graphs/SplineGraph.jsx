import { useEffect, useRef } from "react";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale
);

const SplineGraph = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");

    const data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Earnings",
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: "rgba(165, 55, 253, 1)",
          tension: 0.5, // This makes the line smooth (spline)
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Spline Chart Example",
        },
        tooltip: {
          enabled: true,
        },
      },
      scales: {
        x: {
          grid: {
            display: true,
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

    const splineChart = new Chart(ctx, {
      type: "line",
      data: data,
      options: options,
      plugins: [
        {
          id: "shadowLine",
          beforeDraw: (chart) => {
            const ctx = chart.ctx;
            ctx.save();
            ctx.shadowColor = "rgba(165, 55, 253, 0.5)";
            ctx.shadowBlur = 10;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 4;
            ctx.stroke();
            ctx.restore();
          },
        },
      ],
    });

    return () => {
      splineChart.destroy();
    };
  }, []);

  return (
    <div className="w-full h-96">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default SplineGraph;
