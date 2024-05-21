/* eslint-disable react/prop-types */
import { useState } from "react";
import matic_coin from "../../src/assets/images/matic_coin.png";
import JobDetails from "../pages/JobDetails";

const JobCard = ({
  type,
  jobId,
  title,
  description,
  budget,
  time,
  tags,
  bidders,
  assignedTo,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const jobDetails = {
    jobId,
    title,
    description,
    budget,
    time,
    tags,
    bidders,
    assignedTo,
  };

  return (
    <>
      <div className="bg-white border hover:border-purple-300 hover:bg-purple-50 rounded-lg shadow mt-3">
        <div className="p-5">
          <div>
            <h1 className="text-2xl font-bold">{title}</h1>
          </div>
          <div className="m-2">
            
            <p className="text-sm truncate">{description}</p>
          </div>
          <div className="m-2">
            <p className="text-md font-semibold">Budget</p>
            <div className="flex flex-row justify-start items-center">
              <img src={matic_coin} alt="MATIC" className="w-6 h-6 mr-1" />
              <p>{budget}</p>
            </div>
          </div>
          <div className="m-2">
            <p className="text-md font-semibold">Tags</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-purple-100 text-purple-700 text-sm font-medium mr-2 px-2.5 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="m-2">
              <p className="text-md font-semibold">Time Duration</p>
              <p>{time} days</p>
            </div>
            {type == "client" ? (
              <button
                onClick={openModal}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-purple-600 rounded-lg hover:bg-purple-500 focus:ring-4 focus:outline-none focus:ring-purple-300 "
              >
                View Details
              </button>
            ) : type == "assigned" ? (
              <button
                onClick={() => {}}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-purple-600 rounded-lg hover:bg-purple-500 focus:ring-4 focus:outline-none focus:ring-purple-300 "
              >
                Submit
              </button>
            ) : (
              <button
                onClick={openModal}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-purple-600 rounded-lg hover:bg-purple-500 focus:ring-4 focus:outline-none focus:ring-purple-300 "
              >
                Apply
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
              </button>
            )}
          </div>
        </div>
      </div>

      <JobDetails
        type={type}
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        jobDetails={jobDetails}
      />
    </>
  );
};

export default JobCard;
