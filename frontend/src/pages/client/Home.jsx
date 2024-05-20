/* eslint-disable react/prop-types */
import { ConnectWallet } from "@thirdweb-dev/react";
import no_jobs from "../../assets/images/no_jobs.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ApiService from "../../services/api";
import Cookies from "js-cookie";
import Loading from "../../components/Loading";
import JobCard from "../../components/JobCard";
const Home = () => {
  const [jobsList, setJobsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState({});
  const token = Cookies.get("token");
  const userType = Cookies.get("userType");
  useEffect(() => {
    const fetchUserData = async (token) => {
      if (token) {
        console.log("token:" + token);
        const response = await ApiService.getProfleDetails(token, userType);

        if (response.data) {
          setUserData(response.data);
        }
      }
    };

    fetchUserData(token);

    const getJobs = async (userId) => {
      try {
        const response = await ApiService.getJobs();
        const filteredList = response.filter(
          (item) => item && item.author == userId
        );
        setJobsList(filteredList);
        if (filteredList.length > 0) {
          console.log("Job Exsits");
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    getJobs(userData.user_id);
  }, [token, userType, userData.user_id]);
  return (
    <div className="p-4 ">
      {/* Search bar and Connect Wallet */}
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <ConnectWallet />
      </div>
      {!isLoading ? (
        jobsList.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-screen w-full">
            <img src={no_jobs} />
            <p className="text-xl p-4">
              Seems like you currently have no active job
            </p>
            <Link to="/cl/create-job">
              <button className="px-8 py-4 bg-purple-500 rounded-xl text-white hover:bg-purple-600 hover:border-2 hover:border-purple-900">
                Create A Job
              </button>
            </Link>
          </div>
        ) : (
          jobsList.map((job, index) => (
            <JobCard
              type="client"
              key={index}
              jobId={job._id}
              title={job.title}
              description={job.description}
              time={job.time}
              budget={job.budget}
              tags={job.tags}
              bidders={job.bidders}
            />
          ))
        )
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Home;
