import { useEffect, useState } from "react";
import ApiService from "../../services/api";
import Loading from "../../components/Loading";
import JobCard from "../../components/JobCard";

const Home = () => {
  const [jobsList, setJobsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getJobs = async () => {
      try {
        const response = await ApiService.getJobs();
        setJobsList(response);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    getJobs();
  }, []);

  return (
    <div style={{ maxHeight: "calc(100vh - 100px)", overflowY: "auto" }}>
      <p className="text-xl">Avalible Jobs</p>
      {isLoading ? (
        <Loading />
      ) : jobsList.length === 0 ? (
        <p className="h-screen flex justify-center items-center">Nothing to Show</p>
      ) : (
        jobsList.map((job, index) => (
          <JobCard
            key={index}
            title={job.title}
            description={job.description}
            time={job.time}
            budget={job.budget}
          />
        ))
      )}
    </div>
  );
};

export default Home;
