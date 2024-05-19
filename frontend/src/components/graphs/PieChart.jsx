import { useEffect, useRef } from "react";
import { Chart, PieController, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(PieController, ArcElement, Tooltip, Legend);

const PieChart = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Get the canvas element
    const ctx = canvasRef.current.getContext("2d");

    // Create the chart
    const myChart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["React", "Flutter", "Python"],
        datasets: [
          {
            data: [3, 4, 2],
            backgroundColor: [
              "rgba(255, 99, 132, 0.7)",
              "rgba(54, 162, 235, 0.7)",
              "rgba(255, 206, 86, 0.7)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        aspectRatio: 1,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              fontColor: "black",
              fontSize: 14,
              padding: 16,
            },
          },
        },
      },
    });

    // Cleanup function to destroy the chart instance when the component unmounts
    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    // <div className="h-80 w-80 font-sora leading-normal tracking-normal">
    //   <canvas ref={canvasRef}></canvas>
    // </div>

    <div className="max-w-sm w-full bg-white rounded-lg shadow  p-4 md:p-6">
      <div className="flex justify-between items-start w-full">
        <div className="flex-col items-center">
          <div className="flex items-center mb-1">
            <h5 className="text-xl font-bold leading-none text-gray-900  me-1">
              Jobs Breakup
            </h5>
            <svg
              data-popover-target="chart-info"
              data-popover-placement="bottom"
              className="w-3.5 h-3.5 text-gray-500  hover:text-gray-900  cursor-pointer ms-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm0 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm1-5.034V12a1 1 0 0 1-2 0v-1.418a1 1 0 0 1 1.038-.999 1.436 1.436 0 0 0 1.488-1.441 1.501 1.501 0 1 0-3-.116.986.986 0 0 1-1.037.961 1 1 0 0 1-.96-1.037A3.5 3.5 0 1 1 11 11.466Z" />
            </svg>
            <div
              data-popover
              id="chart-info"
              role="tooltip"
              className="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72   "
            >
              <div className="p-3 space-y-2">
                <h3 className="font-semibold text-gray-900 ">
                  Activity growth - Incremental
                </h3>
                <p>
                  Report helps navigate cumulative growth of community
                  activities. Ideally, the chart should have a growing trend, as
                  stagnating chart signifies a significant decrease of community
                  activity.
                </p>
                <h3 className="font-semibold text-gray-900 ">Calculation</h3>
                <p>
                  For each date bucket, the all-time volume of activities is
                  calculated. This means that activities in period n contain all
                  activities up to period n, plus the activities generated by
                  your community in period.
                </p>
                <a
                  href="#"
                  className="flex items-center font-medium text-purple-600   hover:text-purple-700 hover:underline"
                >
                  Read more{" "}
                  <svg
                    className="w-2 h-2 ms-1.5 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                </a>
              </div>
              <div data-popper-arrow></div>
            </div>
          </div>

          <div
            id="dateRangeDropdown"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-80 lg:w-96 "
          ></div>
        </div>
        <div className="flex justify-end items-center">
          <button
            id="widgetDropdownButton"
            data-dropdown-toggle="widgetDropdown"
            data-dropdown-placement="bottom"
            type="button"
            className="inline-flex items-center justify-center text-gray-500 w-8 h-8  hover:bg-gray-100  focus:outline-none focus:ring-4 focus:ring-gray-200  rounded-lg text-sm"
          >
            <svg
              className="w-3.5 h-3.5 text-gray-800 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 3"
            >
              <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
            </svg>
            <span className="sr-only">Open dropdown</span>
          </button>
          <div
            id="widgetDropdown"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "
          >
            <ul
              className="py-2 text-sm text-gray-700 "
              aria-labelledby="widgetDropdownButton"
            >
              <li>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 hover:bg-gray-100  "
                >
                  <svg
                    className="w-3 h-3 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 21 21"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7.418 17.861 1 20l2.139-6.418m4.279 4.279 10.7-10.7a3.027 3.027 0 0 0-2.14-5.165c-.802 0-1.571.319-2.139.886l-10.7 10.7m4.279 4.279-4.279-4.279m2.139 2.14 7.844-7.844m-1.426-2.853 4.279 4.279"
                    />
                  </svg>
                  Edit widget
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 hover:bg-gray-100  "
                >
                  <svg
                    className="w-3 h-3 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                    <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                  </svg>
                  Download data
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 hover:bg-gray-100  "
                >
                  <svg
                    className="w-3 h-3 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m5.953 7.467 6.094-2.612m.096 8.114L5.857 9.676m.305-1.192a2.581 2.581 0 1 1-5.162 0 2.581 2.581 0 0 1 5.162 0ZM17 3.84a2.581 2.581 0 1 1-5.162 0 2.581 2.581 0 0 1 5.162 0Zm0 10.322a2.581 2.581 0 1 1-5.162 0 2.581 2.581 0 0 1 5.162 0Z"
                    />
                  </svg>
                  Add to repository
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 hover:bg-gray-100  "
                >
                  <svg
                    className="w-3 h-3 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 20"
                  >
                    <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z" />
                  </svg>
                  Delete widget
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <div className="py-6" id="pie-chart"></div> */}
      <div className="h-80 w-80 font-sora leading-normal tracking-normal">
        <canvas ref={canvasRef}></canvas>
      </div>

      <div className="grid grid-cols-1 items-center border-gray-200 border-t  justify-between">
        <div className="flex justify-between items-center pt-5">
          <a
            href="#"
            className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-purple-600 hover:text-purple-700   hover:bg-gray-100    px-3 py-2"
          >
            Detailed Analysis
            <svg
              className="w-2.5 h-2.5 ms-1.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
