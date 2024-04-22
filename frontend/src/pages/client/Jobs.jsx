import { Link } from "react-router-dom";

const Jobs = () => {
  return (
    <div className="" >
      <div className="flex justify-end pt-2 ">
      <p className=" font-semibold text-3xl text-gray-600 mx-10">Jobs</p>
      </div>
      <div className="flex justify-end">
      <Link to="/cl/home/CreateJob">
      <button className=" px-4 py-2 font-bold rounded bg-purple-600 text-gray-50">
        + CREATE JOB
      </button>
      </Link>
      </div>
    </div>
  );
};

export default Jobs;
