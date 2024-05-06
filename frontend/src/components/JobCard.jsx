/* eslint-disable react/prop-types */
const JobCard = ({ title, description, budget, time }) => {
  return (
    <div className="bg-white border hover:border-gray-400 rounded-lg shadow dark:bg-gray-200 mt-3">
      <div className="p-5">
        <div>
          <h1 className="text-3xl font-bold">{title}</h1>
        </div>
        <div className="m-2">
          <p className="text-2xl font-semibold">Job Description</p>
          <p>{description}</p>
        </div>
        <div className="m-2">
          <p className="text-2xl font-semibold">Budget</p>
          <p>{budget}</p>
        </div>
        <div className="m-2">
          <p className="text-2xl font-semibold">Time Duration</p>
          <p>{time}</p>
        </div>
        <Link
          to="/job-details"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
