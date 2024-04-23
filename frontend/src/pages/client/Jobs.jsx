import { Link } from "react-router-dom";

const Jobs = () => {
  return (
    <div className="flex justify-between items-center p-3">
      <div className="flex items-center font-bold text-gray-600 text-3xl mt-2 ">
        <p>Jobs</p>
      </div>
      <div className="flex items-center ml-12 ">
        <Link to="/cl/create-job">
          <button className=" px-4 py-2 font-bold rounded bg-purple-600 text-gray-50">
            + CREATE JOB
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Jobs;
