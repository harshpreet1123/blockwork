/* eslint-disable react/prop-types */
import Modal from "react-modal";
import matic_coin from "../../src/assets/images/matic_coin.png";
import ApiService from "../services/api";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
Modal.setAppElement("#root"); // Ensure the app element is set for accessibility

const JobDetails = ({ type, isOpen, onRequestClose, jobDetails }) => {
  const { jobId, title, description, budget, time, tags, bidders, assignedTo } =
    jobDetails;
  const [biddersLength, setBiddersLength] = useState(bidders.length);
  const [jobAssigned, setJobAssigned] = useState(assignedTo);
  const [isJobAssigned, setIsJobAssigned] = useState(false);

  useEffect(() => {
    if (jobAssigned === "") {
      setIsJobAssigned(false);
    } else {
      setIsJobAssigned(true);
    }
  }, [jobAssigned]);

  const token = Cookies.get("token");

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Job Details"
      className="fixed inset-0 flex items-center justify-center z-50"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-8 max-w-2xl w-full">
        <div className="mb-4 flex justify-between items-center">
          <h1 className="text-4xl font-bold text-purple-700">{title}</h1>
          <button
            onClick={onRequestClose}
            className="text-gray-600 hover:text-gray-900"
          >
            &times;
          </button>
        </div>
        <div className="mb-4">
          <p className="text-lg font-bold text-gray-700">Job Description:</p>
          <p className="text-md text-gray-600">{description}</p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-bold text-gray-700">Budget:</p>
          <div className="flex items-center">
            <img src={matic_coin} alt="MATIC" className="w-6 h-6 mr-2" />
            <p className="text-md text-gray-600">{budget}</p>
          </div>
        </div>
        <div className="mb-4">
          <p className="text-lg font-bold text-gray-700">Time Duration:</p>
          <p className="text-md text-gray-600">{time} days</p>
        </div>
        {tags.length !== 0 && (
          <div className="mb-4">
            <p className="text-lg font-bold text-gray-700">Tags:</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-purple-100 text-purple-700 text-sm font-medium px-2.5 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
        {type !== "client" && (
          <div
            onClick={async () => {
              const response = await ApiService.placeBid(jobId, token);
              if (response) {
                setBiddersLength(biddersLength + 1);
                console.log("Done");
              }
            }}
            className="p-2 cursor-pointer bg-purple-500 hover:bg-purple-600 text-white text-bold rounded w-20"
          >
            Place Bid
          </div>
        )}
        {jobAssigned !== "" && (
          <div className="py-4 text-xl font-semibold">
            Assigned to: {jobAssigned}
          </div>
        )}
        <div className="mt-2 text-lg">Bids Placed: {biddersLength}</div>
        {type === "client" &&
          bidders.map((bidder, index) => (
            <div key={index} className="flex felx-row justify-between p-2 mb-2">
              <div>
                {index + 1}. {bidder}
              </div>
              {!isJobAssigned && (
                <div
                  onClick={async () => {
                    const response = await ApiService.assignJob(jobId, bidder);
                    if (response) {
                      console.log(response);
                      setJobAssigned(bidder);
                      setIsJobAssigned(true);
                    }
                  }}
                  className="p-2 bg-purple-500 hover:bg-purple-600 cursor-pointer rounded text-white "
                >
                  Accept Proposal
                </div>
              )}
            </div>
          ))}
      </div>
    </Modal>
  );
};

export default JobDetails;
